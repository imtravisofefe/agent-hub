#\!/bin/bash
set -e

cd /root/agent-hub

echo "Pulling latest..."
git pull origin main --ff-only

echo "Installing deps (if changed)..."
npm ci --prefer-offline 2>/dev/null || npm install

echo "Building..."
npm run build

echo "Restarting service..."
systemctl restart agent-hub

echo "Done — $(date -Iseconds)"
