#!/usr/bin/env bash
# Run from the project root:  bash scripts/rename-images.sh
# Turns "Bedroom 1.jpeg" into "bedroom-1.jpeg" (lowercase, no spaces) so image URLs are safe everywhere.
set -euo pipefail
dir="public/images"
find "$dir" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.webp' \) -print0 |
while IFS= read -r -d '' f; do
  d=$(dirname "$f"); b=$(basename "$f")
  n=$(printf '%s' "$b" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
  if [ "$b" != "$n" ]; then mv -n "$f" "$d/$n"; echo "$b -> $n"; fi
done
