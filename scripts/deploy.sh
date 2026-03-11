#!/bin/bash
set -e

cd /root/agent-hub

echo "Pulling latest..."
git pull origin main --ff-only

echo "Installing deps..."
rm -rf .next
npm install --prefer-offline

echo "Building..."
npm run build

echo "Restarting service..."
systemctl restart agent-hub

echo "Done — $(date -Iseconds)"
