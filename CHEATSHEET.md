# 📋 Git Cheat Sheet — the 90% you'll actually use

Think of Git as **save points for your work** — and GitHub as the **shared cloud** where those save points live.

## The everyday loop
```bash
git clone <url>            # copy a repo to your laptop (once)
git checkout -b my-branch  # start your own line of work
# ... edit files ...
git status                 # what have I changed?
git add <file>             # stage a file for the next snapshot
git add .                  # stage everything I changed
git commit -m "message"    # save a snapshot (with a note about what/why)
git push -u origin my-branch   # send my branch up to GitHub
```
Then open a **Pull Request** on GitHub to propose your change.

> 💡 `git switch -c my-branch` is the modern equivalent of `git checkout -b my-branch`, and
> `git switch main` of `git checkout main`. Both styles work — use whichever your AI or muscle memory reaches for.

## Looking around
```bash
git status        # current state — your best friend, run it often
git log --oneline # history of snapshots
git diff          # exactly what changed, line by line
```

## Getting other people's changes
```bash
git checkout main     # switch to the main branch
git pull              # download the latest from GitHub
```

## Merging & conflicts
```bash
git merge <branch>    # bring another branch's changes into yours
git merge --abort     # changed your mind — undo the merge, safely
```
If Git says `CONFLICT`, two people changed the same line. Open the file, delete the
`<<<<<<<` / `=======` / `>>>>>>>` markers, keep the text you want, then `git add` + `git commit`. That's the whole thing.

## "Help, I messed up"
```bash
git checkout -- <file>   # throw away changes to a file (before commit)
git restore <file>       # same thing, newer Git
git reset --soft HEAD~1  # undo the last commit but keep the changes
```
Golden rule: **your commits are snapshots — it's very hard to truly lose work.**
When in doubt, `git status` and ask a mentor.

## Words people say, in plain English
| Term | Means |
|---|---|
| **repo** | a project folder that Git is tracking |
| **clone** | download a copy of a repo |
| **commit** | a saved snapshot + a message |
| **branch** | your own parallel copy to work on safely |
| **push** | upload your commits to GitHub |
| **pull** | download others' commits |
| **PR (pull request)** | "here's my change — please review & merge it" |
| **merge** | combine a branch's changes into another |
| **conflict** | two people changed the same line; a human decides |
