import fs, { globSync } from "node:fs";
import os from "node:os";
import path from "node:path";

import * as core from "@actions/core";
import { exec } from "@actions/exec";
import * as tc from "@actions/tool-cache";

// renovate: datasource=github-releases depName=qjfoidnh/BaiduPCS-Go
const BAIDU_PCS_GO_VERSION = "v4.0.1";

export async function run(): Promise<void> {
  try {
    // Inputs from workflow
    const bduss = core.getInput("bduss", { required: true });
    const stoken = core.getInput("stoken", { required: true });
    const targetPatterns = core.getInput("target", { required: true });
    const remoteDirectory = core.getInput("remote-dir", { required: true });
    const uploadPolicy = core.getInput("upload-policy") || "skip";

    // Determine download URL based on OS platform/arch
    const platform = os.platform();
    const arch = os.arch();
    const downloadUrl = getDownloadUrl(platform, arch, BAIDU_PCS_GO_VERSION);

    // Download and extract the archive, reusing the runner's tool cache when present
    let toolDirectory = tc.find("BaiduPCS-Go", BAIDU_PCS_GO_VERSION);
    if (toolDirectory) {
      core.info(`Found BaiduPCS-Go in tool cache: ${toolDirectory}`);
    } else {
      core.info(`Downloading BaiduPCS-Go from: ${downloadUrl}`);
      const zipPath = await tc.downloadTool(downloadUrl);
      const extractDirectory = await tc.extractZip(zipPath);
      toolDirectory = await tc.cacheDir(
        extractDirectory,
        "BaiduPCS-Go",
        BAIDU_PCS_GO_VERSION,
      );
      core.info(`BaiduPCS-Go is cached at: ${toolDirectory}`);
    }

    // Locate the executable
    const exePattern =
      platform === "win32" ? "**/BaiduPCS-Go.exe" : "**/BaiduPCS-Go";
    const exePaths = globSync(exePattern, { cwd: toolDirectory });
    if (exePaths.length === 0) {
      throw new Error(`Executable not found in path: ${toolDirectory}`);
    }
    const exePath = path.join(toolDirectory, exePaths[0]);
    fs.chmodSync(exePath, fs.constants.S_IRWXU);

    // Log in to Baidu Netdisk
    core.info("Logging in to Baidu Netdisk");
    await exec(exePath, ["login", `-bduss=${bduss}`, `-stoken=${stoken}`]);

    // Find files matching the target patterns
    const patterns = targetPatterns.split(";").map((p) => p.trim());
    core.info(`Finding files to upload with pattern: ${patterns}`);
    const files = globSync(patterns, { withFileTypes: true }).filter((dirent) =>
      dirent.isFile(),
    );
    if (files.length === 0) {
      throw new Error(`No files matched pattern: ${patterns}`);
    }

    // Upload files
    const filePaths = files.map((dirent) =>
      path.join(dirent.parentPath, dirent.name),
    );
    core.info(`Uploading files: ${filePaths.join(" ")}`);
    await exec(exePath, [
      "upload",
      "--policy",
      uploadPolicy,
      ...filePaths,
      remoteDirectory,
    ]);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

function getDownloadUrl(
  platform: NodeJS.Platform,
  arch: NodeJS.Architecture,
  version: string,
): string {
  let assetName: string | undefined;
  // https://github.com/nodejs/node/blob/main/BUILDING.md#supported-platforms
  // https://github.com/qjfoidnh/BaiduPCS-Go/releases
  switch (platform) {
    case "win32": {
      if (arch === "x64") {
        assetName = `BaiduPCS-Go-${version}-windows-x64.zip`;
      } else if (arch === "arm64") {
        assetName = `BaiduPCS-Go-${version}-windows-arm.zip`;
      }
      break;
    }
    case "darwin": {
      if (arch === "arm64") {
        assetName = `BaiduPCS-Go-${version}-darwin-osx-arm64.zip`;
      } else if (arch === "x64") {
        assetName = `BaiduPCS-Go-${version}-darwin-osx-amd64.zip`;
      }
      break;
    }
    case "linux": {
      switch (arch) {
        case "x64": {
          assetName = `BaiduPCS-Go-${version}-linux-amd64.zip`;
          break;
        }
        case "arm64": {
          assetName = `BaiduPCS-Go-${version}-linux-arm64.zip`;
          break;
        }
        case "arm": {
          assetName = `BaiduPCS-Go-${version}-linux-arm.zip`;
          break;
        }
      }
      break;
    }
    case "freebsd": {
      if (arch === "x64") {
        assetName = `BaiduPCS-Go-${version}-freebsd-amd64.zip`;
      }
      break;
    }
  }

  if (assetName === undefined) {
    throw new Error(
      `Unsupported platform and architecture: ${platform} ${arch}`,
    );
  }

  return `https://github.com/qjfoidnh/BaiduPCS-Go/releases/download/${version}/${assetName}`;
}
