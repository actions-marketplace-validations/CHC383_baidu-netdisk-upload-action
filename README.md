# Baidu Netdisk Upload Action

A cross-platform (Linux/macOS/Windows) reusable GitHub Action that uses
[qjfoidnh/BaiduPCS-Go](https://github.com/qjfoidnh/BaiduPCS-Go) to upload
files to Baidu Netdisk.

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
