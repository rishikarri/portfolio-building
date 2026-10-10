#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  # shellcheck source=/dev/null
  . "$NVM_DIR/nvm.sh"
fi

if type nvm >/dev/null 2>&1; then
  nvm use 16 >/dev/null 2>&1 || nvm install 16
fi

NODE_MAJOR="$(node -p "process.versions.node.split('.')[0]")"
if [ "$NODE_MAJOR" -ge 17 ]; then
  echo ""
  echo "This portfolio uses react-scripts 3 / webpack 4 and needs Node 16."
  echo "Run: nvm install 16 && nvm use 16 && npm start"
  echo ""
  exit 1
fi

exec "$ROOT/node_modules/.bin/react-scripts" "$@"
