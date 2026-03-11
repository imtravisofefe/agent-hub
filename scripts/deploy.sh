#!/bin/bash
set -e

cd /root/agent-hub

echo "Pulling latest..."
git pull origin main --ff-only

echo "Installing deps..."
rm -rf .next
NODE_ENV=development npm install

echo "Building..."
NODE_ENV=production npm run build

echo "Restarting service..."
systemctl restart agent-hub

echo "Done — $(date -Iseconds)"
