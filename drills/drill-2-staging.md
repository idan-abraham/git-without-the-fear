# Drill 2 — Staging: choose what goes into a commit 🎛️

**The confusion:** "Why are there two steps — `add` then `commit`? I just want to
save. And when an editor or an agent changes a bunch of files for me, how do I
save *only* the part I actually want?"

**The truth:** A commit is a snapshot you're proud to put your name on. **Staging**
(`git add`) is you choosing *exactly* what goes into that snapshot — not
necessarily everything you touched. It's the difference between "I changed some
stuff" and "here is one clean, deliberate save point."

---

## Do this

**1. Start clean on your own branch.**
```bash
git checkout main
git checkout -b staging-drill
```

**2. Change *two* unrelated things.**
```bash
echo "A real change I want to keep" > drills/keep-me.txt
echo "TODO: half-finished, not ready" > drills/not-ready.txt
git status
```
`git status` shows **both** files as changed. Right now, *nothing* is staged —
Git hasn't been told what belongs in the next snapshot.

**3. Stage only the file you're proud of.**
```bash
git add drills/keep-me.txt
git status
```
Read the output carefully:
- `keep-me.txt` → **Changes to be committed** (staged — it's going in) ✅
- `not-ready.txt` → **Changes not staged** (left out — still just sitting there) 🕗

**4. Commit — and confirm only the staged file went in.**
```bash
git commit -m "Add the change I actually finished"
git status
```
The commit contains **only** `keep-me.txt`. Your half-finished `not-ready.txt` is
still in your folder, untouched, waiting for when it's ready. You saved the good
part without dragging the messy part along.

---

## What just happened (the whole point)

- `git add` = **"this belongs in my next snapshot."** You're curating, not dumping.
- `git commit` = **"take the snapshot of everything I staged, with this note."**
- Two steps exist so you can make **clean, single-purpose commits** even when your
  folder is a work-in-progress mess.
- Shortcut when you *do* want everything: `git add .` stages all changes at once.

> 💡 **When an agent or editor changed 8 files for you:** run `git status` first,
> then `git add` only the files that belong to *this* change. Review before you
> save — the same way you'd read a diff before approving it.

> 💡 **In VS Code / Cursor:** the Source Control panel lists changed files with a
> `+` next to each. Clicking `+` is `git add` for that file. The staged files move
> up into "Staged Changes." Commit only stages what's up there.

## Clean up (optional)
```bash
rm drills/not-ready.txt
git checkout main
git branch -D staging-drill
```
