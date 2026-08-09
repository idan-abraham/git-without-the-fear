#!/usr/bin/env bash
#
# invite-collaborators.sh — add GitHub users as push-access collaborators to the
# "Git Without the Fear" workshop repo, so 30–40 participants can push their branches.
# (The conflict drill needs everyone on the SAME repo — see drills/drill-6-real-work.md.)
#
# Usage:
#   ./scripts/invite-collaborators.sh alice bob carol
#   ./scripts/invite-collaborators.sh -f scripts/usernames.txt
#
# The -f file has one GitHub username per line; blank lines and #-comments are ignored.
#
# Requires: the GitHub CLI `gh`, authenticated as someone with ADMIN on the repo.
# Invited users must ACCEPT the emailed invite before they can push — run this a day ahead.
#
# Env overrides:  REPO=owner/name   PERM=pull|triage|push|maintain|admin
#
set -euo pipefail

REPO="${REPO:-idan-abraham/git-without-the-fear}"
PERM="${PERM:-push}"

# --- collect usernames --------------------------------------------------------
users=()
if [[ "${1:-}" == "-f" ]]; then
  file="${2:?usage: $0 -f <file>}"
  [[ -f "$file" ]] || { echo "No such file: $file" >&2; exit 1; }
  while IFS= read -r raw; do
    name="${raw%%#*}"                # strip trailing #comment
    name="${name//[[:space:]]/}"     # strip all whitespace
    [[ -n "$name" ]] && users+=("$name")
  done < "$file"
else
  users=("$@")
fi

if [[ ${#users[@]} -eq 0 ]]; then
  echo "Usage: $0 user1 user2 ...   |   $0 -f usernames.txt" >&2
  exit 1
fi
command -v gh >/dev/null || { echo "gh (GitHub CLI) not found — install it and 'gh auth login'." >&2; exit 1; }

echo "Repo: $REPO    Permission: $PERM    Users: ${#users[@]}"
echo

ok=0; fail=0; failed=()
for u in "${users[@]}"; do
  if gh api -X PUT "repos/$REPO/collaborators/$u" -f permission="$PERM" >/dev/null 2>&1; then
    echo "  ✓ $u"
    ok=$((ok + 1))
  else
    echo "  ✗ $u   (invalid username, or you lack admin on the repo)"
    fail=$((fail + 1)); failed+=("$u")
  fi
done

echo
echo "Done: $ok invited/updated, $fail failed."
[[ $fail -gt 0 ]] && echo "Recheck these: ${failed[*]}"
echo "↳ Invited users must accept the emailed invite before they can push."
