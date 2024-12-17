#!/usr/bin/env sh

set -e
pnpm run build
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:andrey31453/four-horses.git main:gh-pages
cd -
