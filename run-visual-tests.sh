#!/usr/bin/env bash
set -e

echo "Running Playwright tests in Docker..."

# Run Playwright tests in Docker following official best practices:
# --init: prevent zombie processes
# --ipc=host: prevent browser memory issues
# --rm: clean up container after run
docker run --rm --init --ipc=host \
  -v "$(pwd)":/work \
  -w /work \
  mcr.microsoft.com/playwright:v1.61.1-noble \
  npx playwright test "$@"
