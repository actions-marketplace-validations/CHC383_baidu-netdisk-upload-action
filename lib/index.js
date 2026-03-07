"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("@actions/core"));
const exec_1 = __importDefault(require("@actions/exec"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
const unzipper_1 = __importDefault(require("unzipper"));
const glob_1 = __importDefault(require("glob"));
(async () => {
    try {
        // Fixed BaiduPCS-Go version (latest release asset naming)
        const VERSION = "3.9.6";
        // Inputs from workflow
        const bduss = core_1.default.getInput("bduss", { required: true });
        const stoken = core_1.default.getInput("stoken", { required: true });
        const targetPattern = core_1.default.getInput("target", { required: true });
        const remoteDir = core_1.default.getInput("remote-dir", { required: true });
        // Determine download URL based on OS platform/arch
        const platform = os_1.default.platform();
        const arch = os_1.default.arch();
        let assetName;
        if (platform === "win32") {
            if (arch === "x64")
                assetName = `BaiduPCS-Go-v${VERSION}-windows-x64.zip`;
            else if (arch === "arm64")
                assetName = `BaiduPCS-Go-v${VERSION}-windows-arm.zip`;
            else
                assetName = `BaiduPCS-Go-v${VERSION}-windows-x86.zip`;
        }
        else if (platform === "darwin") {
            if (arch === "arm64")
                assetName = `BaiduPCS-Go-v${VERSION}-darwin-osx-arm64.zip`;
            else
                assetName = `BaiduPCS-Go-v${VERSION}-darwin-osx-amd64.zip`;
        }
        else if (arch === "arm64")
            assetName = `BaiduPCS-Go-v${VERSION}-linux-arm64.zip`;
        else if (arch === "arm")
            assetName = `BaiduPCS-Go-v${VERSION}-linux-arm.zip`;
        else
            assetName = `BaiduPCS-Go-v${VERSION}-linux-amd64.zip`;
        const downloadUrl = `https://github.com/qjfoidnh/BaiduPCS-Go/releases/download/v${VERSION}/${assetName}`;
        // Download the specified ZIP archive
        const zipPath = path_1.default.join(process.cwd(), assetName);
        core_1.default.info(`Downloading BaiduPCS-Go from: ${downloadUrl}`);
        await exec_1.default.exec("curl", ["-L", "-o", zipPath, downloadUrl]);
        // Extract the archive using unzipper
        const extractDir = path_1.default.join(process.cwd(), "baidupcs");
        fs_1.default.mkdirSync(extractDir, { recursive: true });
        core_1.default.info("Extracting archive using unzipper");
        await fs_1.default
            .createReadStream(zipPath)
            .pipe(unzipper_1.default.Extract({ path: extractDir }))
            .promise();
        // Locate the executable recursively in extractDir
        const exePattern = platform === "win32" ? "**/BaiduPCS-Go.exe" : "**/BaiduPCS-Go";
        const executables = glob_1.default
            .sync(exePattern, {
            cwd: extractDir,
            absolute: true,
            nocase: true,
        })
            .filter((p) => {
            try {
                return fs_1.default.statSync(p).isFile();
            }
            catch {
                return false;
            }
        });
        if (executables.length === 0) {
            throw new Error(`Executable not found in path: ${extractDir}`);
        }
        const exePath = executables[0];
        fs_1.default.chmodSync(exePath, 0o755);
        // Log in to Baidu Cloud Disk
        core_1.default.info("Logging in to Baidu Cloud Disk");
        await exec_1.default.exec(exePath, [
            "login",
            `-bduss=${bduss}`,
            `-stoken=${stoken}`,
        ]);
        // Find files matching the target pattern
        const matches = glob_1.default.sync(targetPattern, { nodir: true });
        if (matches.length === 0)
            throw new Error(`No files matched pattern: ${targetPattern}`);
        // Upload each matched file
        for (const filePath of matches) {
            core_1.default.info(`Uploading file: ${filePath}`);
            await exec_1.default.exec(exePath, ["upload", filePath, remoteDir]);
        }
    }
    catch (error) {
        core_1.default.setFailed(error.message);
    }
})();
