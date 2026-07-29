#!/usr/bin/env bash
# Instala la suite de skills de guiones para redes sociales en ~/.claude/skills
# para poder usarlas desde cualquier proyecto.
#
# Uso:
#   bash .claude/skills/install-global.sh          # no sobrescribe skills existentes
#   bash .claude/skills/install-global.sh --force  # sobrescribe si ya existen

set -euo pipefail

SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_DIR="${HOME}/.claude/skills"
FORCE=0

if [[ "${1:-}" == "--force" ]]; then
  FORCE=1
fi

mkdir -p "$TARGET_DIR"

installed=0
skipped=0

for skill_path in "$SOURCE_DIR"/*/; do
  skill_name="$(basename "$skill_path")"
  dest="$TARGET_DIR/$skill_name"

  if [[ -e "$dest" && "$FORCE" -ne 1 ]]; then
    echo "omitida  $skill_name (ya existe en $TARGET_DIR — usa --force para sobrescribir)"
    skipped=$((skipped + 1))
    continue
  fi

  rm -rf "$dest"
  cp -r "$skill_path" "$dest"
  echo "instalada $skill_name"
  installed=$((installed + 1))
done

echo
echo "Listo: $installed instalada(s), $skipped omitida(s) en $TARGET_DIR"
