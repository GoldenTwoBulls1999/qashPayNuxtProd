#!/bin/bash
set -euo pipefail
trap 'echo "❌ Error on line $LINENO"; exit 1' ERR

git pull

rm -rf node_modules
rm -rf .output

npm install

env NODE_OPTIONS=--max-old-space-size=8192 npm run build 

cp -r node_modules/geoip-country/data/ .output/server/node_modules/geoip-country/data/

sudo systemctl restart pm2-ubuntu.service

echo "Deployment complete"