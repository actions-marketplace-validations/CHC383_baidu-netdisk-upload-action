import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { Readable } from "node:stream";
import { finished } from "node:stream/promises";

import * as core from "@actions/core";
import { exec } from "@actions/exec";
import { glob } from "glob";
import { Extract } from "unzipper";

export async function run(): Promise<void> {
  try {
    // Fixed BaiduPCS-Go version (latest release asset naming)
    const baiduPcsGoVersion = "3.9.6";

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
      baiduPcsGoVersion,
    );

    // Download the specified ZIP archive
    const zipPath = path.join(process.cwd(), assetName);
    core.info(`Downloading BaiduPCS-Go from: ${downloadUrl}`);
    await downloadFile(downloadUrl, zipPath);

    // Extract the archive using unzipper
    const extractDirectory = path.join(process.cwd(), "baidupcs");
    fs.mkdirSync(extractDirectory, { recursive: true });
    core.info("Extracting archive using unzipper");
    await fs
      .createReadStream(zipPath)
      .pipe(Extract({ path: extractDirectory }))
      .promise();

    // Locate the executable recursively in extractDir
    const exePattern =
      platform === "win32" ? "**/BaiduPCS-Go.exe" : "**/BaiduPCS-Go";
    const executables = glob
      .sync(exePattern, {
        cwd: extractDirectory,
        absolute: true,
        nocase: true,
      })
      .filter((p) => {
        try {
          return fs.statSync(p).isFile();
        } catch {
          return false;
        }
      });
    if (executables.length === 0) {
      throw new Error(`Executable not found in path: ${extractDirectory}`);
    }
    const exePath = executables[0];
    fs.chmodSync(exePath, 0o755);

    // Log in to Baidu Cloud Disk
    core.info("Logging in to Baidu Cloud Disk");
    await exec(exePath, ["login", `-bduss=${bduss}`, `-stoken=${stoken}`]);

    // Find files matching the target pattern
    const matches = glob.sync(targetPattern, { nodir: true });
    if (matches.length === 0)
      throw new Error(`No files matched pattern: ${targetPattern}`);

    // Upload each matched file
    for (const filePath of matches) {
      core.info(`Uploading file: ${filePath}`);
      await exec(exePath, ["upload", filePath, remoteDirectory]);
    }
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
  let assetName;
  if (platform === "win32") {
    if (arch === "x64") {
      assetName = `BaiduPCS-Go-v${version}-windows-x64.zip`;
    } else if (arch === "arm64") {
      assetName = `BaiduPCS-Go-v${version}-windows-arm.zip`;
    } else {
      assetName = `BaiduPCS-Go-v${version}-windows-x86.zip`;
    }
  } else if (platform === "darwin") {
    assetName =
      arch === "arm64"
        ? `BaiduPCS-Go-v${version}-darwin-osx-arm64.zip`
        : `BaiduPCS-Go-v${version}-darwin-osx-amd64.zip`;
  } else if (arch === "arm64") {
    assetName = `BaiduPCS-Go-v${version}-linux-arm64.zip`;
  } else if (arch === "arm") {
    assetName = `BaiduPCS-Go-v${version}-linux-arm.zip`;
  } else {
    assetName = `BaiduPCS-Go-v${version}-linux-amd64.zip`;
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
