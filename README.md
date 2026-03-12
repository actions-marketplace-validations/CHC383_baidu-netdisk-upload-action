# Baidu Netdisk Upload Action

A cross-platform (Linux/macOS/Windows) reusable GitHub Action that uses
[qjfoidnh/BaiduPCS-Go](https://github.com/qjfoidnh/BaiduPCS-Go) to upload
files to Baidu Netdisk.

## About this Fork

This repository started as a fork of
[openblockcc/baidu-netdisk-upload-action](https://github.com/openblockcc/baidu-netdisk-upload-action).  
It has since been modernized with several structural improvements, including:

- TypeScript migration
- Dependency updates
- Support for the latest Node.js LTS runtime
- Reduced dependency footprint
- Codebase refactoring and modernization

## Usage Example

```yaml
steps:
  - name: Upload artifacts to Baidu Netdisk
    uses: CHC383/baidu-netdisk-upload-action@v1
    with:
      # See README of qjfoidnh/BaiduPCS-Go for login credentials
      bduss: ${{ secrets.BDUSS }}
      stoken: ${{ secrets.STOKEN }}
      target: "./build/**/*.zip" # Supports glob patterns
      remote-dir: "/Apps/Release/"
      upload-policy: "skip" # Optional: skip (default), overwrite, rsync
```

## Supported platforms

These are limited by
[Node supported platforms](https://github.com/nodejs/node/blob/main/BUILDING.md#supported-platforms)
and [BaiduPCS-Go prebuilt binaries](https://github.com/qjfoidnh/BaiduPCS-Go/releases).

| Platform | Architectures   |
| -------- | --------------- |
| Linux    | x64, arm64, arm |
| Windows  | x64, arm64      |
| macOS    | x64, arm64      |
| FreeBSD  | x64             |
