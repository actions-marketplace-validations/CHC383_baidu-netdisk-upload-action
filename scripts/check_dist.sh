#!/usr/bin/env sh

# In TypeScript actions, `dist/` is a special directory. When you reference
# an action with the `uses:` property, `dist/index.js` is the code that will be
# run. For this project, the `dist/index.js` file is transpiled from other
# source files. This script ensures the `dist/` directory contains the
# expected transpiled code.

pnpm package

if [ ! -d dist/ ]; then
  echo "Expected dist/ directory does not exist.  See status below:"
  ls -la ./
  exit 1
fi

if [ "$(git diff --ignore-space-at-eol --text dist/ | wc -l)" -gt "0" ]; then
  echo "Detected uncommitted changes after build. See status below:"
  git diff --ignore-space-at-eol --text dist/
  exit 1
fi
