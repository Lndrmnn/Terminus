#!/usr/bin/env bash
# Terminus Launcher for Linux / macOS
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
echo "Abriendo Terminus..."
if command -v xdg-open > /dev/null; then
    xdg-open "$DIR/index.html"
elif command -v open > /dev/null; then
    open "$DIR/index.html"
else
    python3 -m http.server 8000 --directory "$DIR"
fi
