import fs, { Dirent, globSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { Readable } from "node:stream";
import { finished } from "node:stream/promises";

import * as core from "@actions/core";
import { exec } from "@actions/exec";
import AdmZip from "adm-zip";

// https://github.com/qjfoidnh/BaiduPCS-Go/releases
const BAIDU_PCS_GO_VERSION = "4.0.0";

export async function run(): Promise<void> {
  try {
    // Inputs from workflow
    const bduss = core.getInput("bduss", { required: true });
    const stoken = core.getInput("stoken", { required: true });
    const targetPattern = core.getInput("target", { required: true });
    const remoteDirectory = core.getInput("remote-dir", { required: true });

    // Determine download URL based on OS platform/arch
    const platform = os.platform();
    const arch = os.arch();
    const { assetName, downloadUrl } = getAssetNameAndDownloadUrl(
      platform,
      arch,
      BAIDU_PCS_GO_VERSION,
    );

    // Download the specified ZIP archive
    const zipPath = path.join(process.cwd(), assetName);
    core.info(`Downloading BaiduPCS-Go from: ${downloadUrl}`);
    await downloadFile(downloadUrl, zipPath);

    // Extract the archive
    const extractDirectory = path.join(process.cwd(), "baidupcs");
    fs.mkdirSync(extractDirectory);
    core.info("Extracting archive");
    const zipFile = new AdmZip(zipPath);
    zipFile.extractAllTo(extractDirectory, true);

    // Locate the executable
    const exePath = path.join(
      extractDirectory,
      path.basename(assetName, ".zip"),
      platform === "win32" ? "BaiduPCS-Go.exe" : "BaiduPCS-Go",
    );
    fs.chmodSync(exePath, fs.constants.S_IRWXU);

    // Log in to Baidu Cloud Disk
    core.info("Logging in to Baidu Cloud Disk");
    await exec(exePath, ["login", `-bduss=${bduss}`, `-stoken=${stoken}`]);

    // Find files matching the target pattern
    const files = globSync(targetPattern, {
      withFileTypes: true,
      exclude: (fileName: Dirent) => !fileName.isFile(),
    });
    if (files.length === 0) {
      throw new Error(`No files matched pattern: ${targetPattern}`);
    }

    // Upload files
    const filePaths = files
      .map((dirent) => path.join(dirent.parentPath, dirent.name))
      .join(" ");
    core.info(`Uploading files: ${filePaths}`);
    await exec(exePath, ["upload", filePaths, remoteDirectory]);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

function getAssetNameAndDownloadUrl(
  platform: NodeJS.Platform,
  arch: NodeJS.Architecture,
  version: string,
): {
  assetName: string;
  downloadUrl: string;
} {
  let assetName: string | undefined;
  // https://github.com/nodejs/node/blob/main/BUILDING.md#supported-platforms
  // https://github.com/qjfoidnh/BaiduPCS-Go/releases
  switch (platform) {
    case "win32": {
      if (arch === "x64") {
        assetName = `BaiduPCS-Go-v${version}-windows-x64.zip`;
      } else if (arch === "arm64") {
        assetName = `BaiduPCS-Go-v${version}-windows-arm.zip`;
      }
      break;
    }
    case "darwin": {
      if (arch === "arm64") {
        assetName = `BaiduPCS-Go-v${version}-darwin-osx-arm64.zip`;
      } else if (arch === "x64") {
        assetName = `BaiduPCS-Go-v${version}-darwin-osx-amd64.zip`;
      }
      break;
    }
    case "linux": {
      switch (arch) {
        case "x64": {
          assetName = `BaiduPCS-Go-v${version}-linux-amd64.zip`;
          break;
        }
        case "arm64": {
          assetName = `BaiduPCS-Go-v${version}-linux-arm64.zip`;
          break;
        }
        case "arm": {
          assetName = `BaiduPCS-Go-v${version}-linux-arm.zip`;
          break;
        }
      }
      break;
    }
    case "freebsd": {
      if (arch === "x64") {
        assetName = `BaiduPCS-Go-v${version}-freebsd-amd64.zip`;
      }
      break;
    }
  }

  if (assetName === undefined) {
    throw new Error(
      `Unsupported platform and architecture: ${platform} ${arch}`,
    );
  }

  const downloadUrl = `https://github.com/qjfoidnh/BaiduPCS-Go/releases/download/v${version}/${assetName}`;
  return { assetName, downloadUrl };
}

async function downloadFile(url: string, destination: string) {
  const response = await fetch(url);
  if (!response.ok || !response.body) {
    throw new Error(`Failed to download file: ${response.statusText}`);
  }
  const fileStream = fs.createWriteStream(destination);
  Readable.fromWeb(response.body).pipe(fileStream);
  await finished(fileStream);
  core.info(`Download BaiduPCS-Go complete: ${destination}`);
}
