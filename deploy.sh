#!/usr/bin/env sh

set -e
npm run build
cd dist
git push -f git@github.com:andrey31453/four-horses.git main:gh-pages
cd -
