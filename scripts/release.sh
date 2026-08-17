#!/usr/bin/env bash

set -ex

PACKAGE_VERSION=$(pnpm pkg get version | tr -d '"')
RELEASE_TAG=v$PACKAGE_VERSION

# Tag specific version
git tag $RELEASE_TAG
git push origin $RELEASE_TAG

# Tag v1
git tag -f v1
git push -f origin v1
