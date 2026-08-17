# Changelog

## [1.6.0](https://github.com/CHC383/baidu-netdisk-upload-action/compare/v1.5.0...v1.6.0) (2026-06-13)


### 🎉 Features

* **download:** use @actions/tool-cache to manage the BaiduPCS-Go binary ([e28f899](https://github.com/CHC383/baidu-netdisk-upload-action/commit/e28f8992dfb4582967c83bcabaca0045981c89c3))


### 🔧 Maintenance / Chores

* **hook:** update git hook to update dist automatically ([500626d](https://github.com/CHC383/baidu-netdisk-upload-action/commit/500626d0038663aa0fbfeb3c2907de81c2bcfb85))
* **lint:** remove obsolete lint-stage config ([56137d1](https://github.com/CHC383/baidu-netdisk-upload-action/commit/56137d1b0b4da79ed47154b018767ee0d01493ee))
* **renovate:** make BAIDU_PCS_GO_VERSION Renovate upgradable ([0b8a3dc](https://github.com/CHC383/baidu-netdisk-upload-action/commit/0b8a3dcdb5f3230dc3b326d5de6474c009d7f9de))


### 👷 Continuous Integration

* **release-please:** exclude package name from tag ([8bccfbd](https://github.com/CHC383/baidu-netdisk-upload-action/commit/8bccfbd0d6115ae5bf46be4f2a444ccdc0db03e9))
* **release-please:** only tag major version ([fc8686b](https://github.com/CHC383/baidu-netdisk-upload-action/commit/fc8686bbeba9fe7e9858619d536699129dcd7c7a))
* **release-please:** tag major.minor.patch instead of major.minor ([8d66ac0](https://github.com/CHC383/baidu-netdisk-upload-action/commit/8d66ac0920007ad3c42a280ef52f882c0e9f4850))
* **release-please:** update workflow ([f7dc8d3](https://github.com/CHC383/baidu-netdisk-upload-action/commit/f7dc8d38e0effa0a7d581b6cc3f41f84cdac7001))
* **workflow:** add a workflow to update dist on Renovate's PR ([e80e1a5](https://github.com/CHC383/baidu-netdisk-upload-action/commit/e80e1a551f332feb714ed541dd63144e46ea949c))
* **workflow:** fix test verification for tool cache and allow manual runs ([1f5069a](https://github.com/CHC383/baidu-netdisk-upload-action/commit/1f5069a49b9b6fc72573bce512eec9bc22066c1b))
* **workflow:** fix typo and update step name ([3b01361](https://github.com/CHC383/baidu-netdisk-upload-action/commit/3b01361b1ddd8ba74e341fae10fd94d52c6e901a))
* **workflow:** skip duplicate main runs and test merges to main ([3195bda](https://github.com/CHC383/baidu-netdisk-upload-action/commit/3195bda919bab89cf3fec1c0e74abfba0af74ccc))


### 🔨 Build System

* **deps:** update dependency @biomejs/biome to v2.5.0 ([6cc7e7d](https://github.com/CHC383/baidu-netdisk-upload-action/commit/6cc7e7db3a87362aaad7455fd70ad3305178a989))
* **deps:** update dependency @types/node to ^24.13.0 ([#86](https://github.com/CHC383/baidu-netdisk-upload-action/issues/86)) ([d9cdf1f](https://github.com/CHC383/baidu-netdisk-upload-action/commit/d9cdf1fd7a981749c9f333327ae9e7f65a14c196))
* **deps:** update dependency @types/node to ^24.13.1 ([#88](https://github.com/CHC383/baidu-netdisk-upload-action/issues/88)) ([93a0e0b](https://github.com/CHC383/baidu-netdisk-upload-action/commit/93a0e0bd5fabf400b8dc59a1b4f08fcc05e0535d))
* **deps:** update dependency @types/node to ^24.13.2 ([#89](https://github.com/CHC383/baidu-netdisk-upload-action/issues/89)) ([d44d81c](https://github.com/CHC383/baidu-netdisk-upload-action/commit/d44d81c3a7d0fe7194dd0226a24bbbf68f637af6))
* **deps:** update dependency tsdown to ^0.22.2 ([fffa9ff](https://github.com/CHC383/baidu-netdisk-upload-action/commit/fffa9ffc26b8f78197f35b1679e56b90400d6746))
* **deps:** update pnpm to v11.5.2 ([#87](https://github.com/CHC383/baidu-netdisk-upload-action/issues/87)) ([e5e73d0](https://github.com/CHC383/baidu-netdisk-upload-action/commit/e5e73d0b293a1d97e24692a744b49c0492bd212a))
* **deps:** update pnpm to v11.5.3 ([#90](https://github.com/CHC383/baidu-netdisk-upload-action/issues/90)) ([61e1a7c](https://github.com/CHC383/baidu-netdisk-upload-action/commit/61e1a7c9712a8ea1f5b074fcd6a711371fb0b27b))
* **deps:** update pnpm to v11.6.0 ([ea3ebb5](https://github.com/CHC383/baidu-netdisk-upload-action/commit/ea3ebb5b70ec7453d326d8fdb165df33cf57e39e))

## [1.5.0](https://github.com/CHC383/baidu-netdisk-upload-action/compare/baidu-netdisk-upload-action-v1.4.0...baidu-netdisk-upload-action-v1.5.0) (2026-06-05)


### 🎉 Features

* **pattern:** support multiple targets/patterns ([eb84d18](https://github.com/CHC383/baidu-netdisk-upload-action/commit/eb84d18292b75e29b862bec635e928dc9f2807a6))


### 🔧 Maintenance / Chores

* bootstrap releases for path: . ([39abaac](https://github.com/CHC383/baidu-netdisk-upload-action/commit/39abaac1481d13e96486f9166fb37f736fe8bb97))
* **renovate:** set npm minimum release age to align with pnpm's default ([b367df5](https://github.com/CHC383/baidu-netdisk-upload-action/commit/b367df5ac600c41250823d707bc424e5a59cf5ee))
* **typescript:** update ts config ([8c36d6e](https://github.com/CHC383/baidu-netdisk-upload-action/commit/8c36d6e984770d031f792330ad31f1ed368341e4))


### 👷 Continuous Integration

* **release-please:** add changelog-sections and move bootstrap-sha ([f50d791](https://github.com/CHC383/baidu-netdisk-upload-action/commit/f50d7910a6d70ac79157e9eea9643ab5bcc4ead2))
* **release:** add release-please workflow ([19f7685](https://github.com/CHC383/baidu-netdisk-upload-action/commit/19f768594edd1dee545c7e04a666b32bcc520861))
* **release:** add version tagging to release-please workflow ([6bb939a](https://github.com/CHC383/baidu-netdisk-upload-action/commit/6bb939aefd32868f91aeb6953d6b63b6641d3b40))


### 🔨 Build System

* **deps:** lock file maintenance ([3e7220c](https://github.com/CHC383/baidu-netdisk-upload-action/commit/3e7220c5e4b22a562730f72b90a69f83ca96960a))
* **deps:** lock file maintenance ([fb9b9cc](https://github.com/CHC383/baidu-netdisk-upload-action/commit/fb9b9cc64b2bd70c2e0692e832f13169ab8f0813))
* **deps:** update dependency @actions/core to ^3.0.1 ([32a6704](https://github.com/CHC383/baidu-netdisk-upload-action/commit/32a6704a4a0dc4d5ea65cadf4a6f9f136b137b8b))
* **deps:** update dependency @biomejs/biome to v2.4.11 ([#40](https://github.com/CHC383/baidu-netdisk-upload-action/issues/40)) ([5bf2467](https://github.com/CHC383/baidu-netdisk-upload-action/commit/5bf2467b027de6f039f42b4f748f706c5b03f635))
* **deps:** update dependency @biomejs/biome to v2.4.12 ([#43](https://github.com/CHC383/baidu-netdisk-upload-action/issues/43)) ([192335d](https://github.com/CHC383/baidu-netdisk-upload-action/commit/192335dc6ed3dc9730e8522453d1be50b69dc4fb))
* **deps:** update dependency @biomejs/biome to v2.4.13 ([#52](https://github.com/CHC383/baidu-netdisk-upload-action/issues/52)) ([9787596](https://github.com/CHC383/baidu-netdisk-upload-action/commit/97875967fa9555b1d67c425520f7231ffbc0e1b4))
* **deps:** update dependency @biomejs/biome to v2.4.14 ([#56](https://github.com/CHC383/baidu-netdisk-upload-action/issues/56)) ([c74a708](https://github.com/CHC383/baidu-netdisk-upload-action/commit/c74a7085c3ef4497525be483fa351a37e28576ef))
* **deps:** update dependency @biomejs/biome to v2.4.15 ([#64](https://github.com/CHC383/baidu-netdisk-upload-action/issues/64)) ([aa1b07b](https://github.com/CHC383/baidu-netdisk-upload-action/commit/aa1b07b0834b11abd97bd1da25cb7bae870139f6))
* **deps:** update dependency @biomejs/biome to v2.4.16 ([da76f75](https://github.com/CHC383/baidu-netdisk-upload-action/commit/da76f75161bee2a33beccf98b291746799686c12))
* **deps:** update dependency @types/node to ^24.12.2 ([#38](https://github.com/CHC383/baidu-netdisk-upload-action/issues/38)) ([f601299](https://github.com/CHC383/baidu-netdisk-upload-action/commit/f6012999f73cf806fbf5c965652d9a112176ce18))
* **deps:** update dependency @types/node to ^24.12.3 ([#62](https://github.com/CHC383/baidu-netdisk-upload-action/issues/62)) ([dc99ed9](https://github.com/CHC383/baidu-netdisk-upload-action/commit/dc99ed9015e18b2339d518101e5661c1b7346253))
* **deps:** update dependency @types/node to ^24.12.4 ([#65](https://github.com/CHC383/baidu-netdisk-upload-action/issues/65)) ([fbb9514](https://github.com/CHC383/baidu-netdisk-upload-action/commit/fbb95140c6716fbabcfb49b4e05ad41bcccc5245))
* **deps:** update dependency lefthook to ^2.1.5 ([#39](https://github.com/CHC383/baidu-netdisk-upload-action/issues/39)) ([c52ec13](https://github.com/CHC383/baidu-netdisk-upload-action/commit/c52ec134aebb7f97fc5b45fb35e2cca9d2f0ae91))
* **deps:** update dependency lefthook to ^2.1.6 ([#44](https://github.com/CHC383/baidu-netdisk-upload-action/issues/44)) ([12a575e](https://github.com/CHC383/baidu-netdisk-upload-action/commit/12a575e1762f7ed9b2dd4354b5fee6726c20549e))
* **deps:** update dependency lefthook to ^2.1.8 ([7bef235](https://github.com/CHC383/baidu-netdisk-upload-action/commit/7bef2353a25de10d13a4b04dfc3becd2ac93e176))
* **deps:** update dependency lefthook to ^2.1.9 ([#77](https://github.com/CHC383/baidu-netdisk-upload-action/issues/77)) ([aab1d04](https://github.com/CHC383/baidu-netdisk-upload-action/commit/aab1d04e6b788d062053f65c72ed084ca9422008))
* **deps:** update dependency tsdown to ^0.21.10 ([38f7767](https://github.com/CHC383/baidu-netdisk-upload-action/commit/38f7767af9c3cd9c60d62f0602cd0429410282c8))
* **deps:** update dependency tsdown to ^0.21.8 ([a3aa1db](https://github.com/CHC383/baidu-netdisk-upload-action/commit/a3aa1dbc95a662d6949e46d6b866750e3b3e4fc4))
* **deps:** update dependency tsdown to ^0.21.9 ([d18c11c](https://github.com/CHC383/baidu-netdisk-upload-action/commit/d18c11c55d44632e7b76814c467ec02260b39cf6))
* **deps:** update dependency tsdown to ^0.22.0 ([f8215fd](https://github.com/CHC383/baidu-netdisk-upload-action/commit/f8215fdb9669d3ce59d801daa33ed220bae34567))
* **deps:** update dependency tsdown to ^0.22.1 ([ffca3c8](https://github.com/CHC383/baidu-netdisk-upload-action/commit/ffca3c801da516797197f4a82d3b18a2dc213d93))
* **deps:** update dependency typescript to ^6.0.3 ([#47](https://github.com/CHC383/baidu-netdisk-upload-action/issues/47)) ([f12e06c](https://github.com/CHC383/baidu-netdisk-upload-action/commit/f12e06cd1c741ee0fd3de7fd391e8da0b2464d2a))
* **deps:** update node.js to v24.15.0 ([#45](https://github.com/CHC383/baidu-netdisk-upload-action/issues/45)) ([d2e82dc](https://github.com/CHC383/baidu-netdisk-upload-action/commit/d2e82dc47c50e3fb0cba958bb3c97f942ce0e501))
* **deps:** update node.js to v24.16.0 ([dba9cc7](https://github.com/CHC383/baidu-netdisk-upload-action/commit/dba9cc718f04589843cc65d21436d003b90e82d0))
* **deps:** update pnpm to v10.33.1 ([62e9f07](https://github.com/CHC383/baidu-netdisk-upload-action/commit/62e9f074944fe3677852628c507af18af9335410))
* **deps:** update pnpm to v10.33.2 ([#51](https://github.com/CHC383/baidu-netdisk-upload-action/issues/51)) ([25e0a58](https://github.com/CHC383/baidu-netdisk-upload-action/commit/25e0a5825dc4863d0a394e030c9317c7fa427340))
* **deps:** update pnpm to v11 ([f9d4788](https://github.com/CHC383/baidu-netdisk-upload-action/commit/f9d4788bb9cdd6c6fc12c2664f45fcb4f43423fe))
* **deps:** update pnpm to v11.0.1 ([#53](https://github.com/CHC383/baidu-netdisk-upload-action/issues/53)) ([e943d40](https://github.com/CHC383/baidu-netdisk-upload-action/commit/e943d40e0a78b22434dcd3722850fb9976486c97))
* **deps:** update pnpm to v11.0.3 ([#54](https://github.com/CHC383/baidu-netdisk-upload-action/issues/54)) ([ffd9cdd](https://github.com/CHC383/baidu-netdisk-upload-action/commit/ffd9cdd298b9be8c1628acd840782831f43e5c2d))
* **deps:** update pnpm to v11.0.4 ([#57](https://github.com/CHC383/baidu-netdisk-upload-action/issues/57)) ([188b3c3](https://github.com/CHC383/baidu-netdisk-upload-action/commit/188b3c32bc3f131f603bca6ca09a50f9732677d4))
* **deps:** update pnpm to v11.0.6 ([46988f5](https://github.com/CHC383/baidu-netdisk-upload-action/commit/46988f5d23e50cb809ae189b8c5a4fdc91bfc8cb))
* **deps:** update pnpm to v11.0.7 ([#59](https://github.com/CHC383/baidu-netdisk-upload-action/issues/59)) ([ca42244](https://github.com/CHC383/baidu-netdisk-upload-action/commit/ca4224413f0a26a5abef94ff5061ea63db89a00a))
* **deps:** update pnpm to v11.0.8 ([#60](https://github.com/CHC383/baidu-netdisk-upload-action/issues/60)) ([a600665](https://github.com/CHC383/baidu-netdisk-upload-action/commit/a600665e7bf12e343a18eff3eb8d06a2b8c110c6))
* **deps:** update pnpm to v11.0.9 ([#63](https://github.com/CHC383/baidu-netdisk-upload-action/issues/63)) ([e72ee56](https://github.com/CHC383/baidu-netdisk-upload-action/commit/e72ee56f5118414c5a4f745d10ea87fdb7270295))
* **deps:** update pnpm to v11.1.0 ([#66](https://github.com/CHC383/baidu-netdisk-upload-action/issues/66)) ([2647047](https://github.com/CHC383/baidu-netdisk-upload-action/commit/2647047e9e19d045acf276f908ddaaeaa13eb4d1))
* **deps:** update pnpm to v11.1.1 ([#67](https://github.com/CHC383/baidu-netdisk-upload-action/issues/67)) ([af40a8c](https://github.com/CHC383/baidu-netdisk-upload-action/commit/af40a8cca463bd30f5d5b75bd0e58db518a7dc4d))
* **deps:** update pnpm to v11.1.2 ([#68](https://github.com/CHC383/baidu-netdisk-upload-action/issues/68)) ([93d0be0](https://github.com/CHC383/baidu-netdisk-upload-action/commit/93d0be0134c28d2c4a4d35af71e14275a36888be))
* **deps:** update pnpm to v11.1.3 ([#69](https://github.com/CHC383/baidu-netdisk-upload-action/issues/69)) ([cfe1aff](https://github.com/CHC383/baidu-netdisk-upload-action/commit/cfe1aff7d5fd05ea969da73d35252c74e1e626d3))
* **deps:** update pnpm to v11.2.2 ([#72](https://github.com/CHC383/baidu-netdisk-upload-action/issues/72)) ([06fac01](https://github.com/CHC383/baidu-netdisk-upload-action/commit/06fac01002fb90410fab9f8a414c052377dac07a))
* **deps:** update pnpm to v11.3.0 ([#73](https://github.com/CHC383/baidu-netdisk-upload-action/issues/73)) ([d8ef7be](https://github.com/CHC383/baidu-netdisk-upload-action/commit/d8ef7be47710ab950373690c30a0f3d12c9f3ac7))
* **deps:** update pnpm to v11.4.0 ([#75](https://github.com/CHC383/baidu-netdisk-upload-action/issues/75)) ([bd454b4](https://github.com/CHC383/baidu-netdisk-upload-action/commit/bd454b4b19799ac2fade794a00c8ed9cf9a16db8))
* **deps:** update pnpm to v11.5.0 ([#78](https://github.com/CHC383/baidu-netdisk-upload-action/issues/78)) ([8a71081](https://github.com/CHC383/baidu-netdisk-upload-action/commit/8a7108160fbc40568477afdc8d78a1cd4272937f))
* **deps:** update pnpm to v11.5.1 ([#80](https://github.com/CHC383/baidu-netdisk-upload-action/issues/80)) ([4ceb4c4](https://github.com/CHC383/baidu-netdisk-upload-action/commit/4ceb4c4b4c5a9d474dbdf9a13ef3a1c16de9e0cf))
* **deps:** update pnpm/action-setup action to v6 ([1e8a6ee](https://github.com/CHC383/baidu-netdisk-upload-action/commit/1e8a6ee12bcff315e3573b0884c9237d418009b1))
* **tsdown:** update tsdown config to bundle all dependencies used in the code instead of using a specific list ([f42e5c8](https://github.com/CHC383/baidu-netdisk-upload-action/commit/f42e5c857e6e25d49edaeac38ff5006084209e19))
