#!/usr/bin/env bash

for PACKAGE in $(find ./services -name package.json | grep -v node_modules); do
   pushd $(dirname $PACKAGE)
   echo "Installing dependencies for $(pwd)"
   npm install || exit 1
   popd
done
