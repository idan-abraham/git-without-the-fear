# Drill 4 — The giant branch (and the way out) 🐘

**The trap:** You start a branch on Monday. You keep working on it. Two weeks
later it has a redesign, three bug fixes, a copy change, and a half-finished
experiment — all tangled together. Now nobody wants to review it, you can't merge
part of it, and you're a little afraid of your own branch.

**The lesson:** One branch = **one thing**. Small branches merge fast and get
reviewed happily. Giant branches rot. In this drill you'll build the monster on
purpose, feel why it's stuck, then learn the way out.

---

## Part A — Build the monster (so you feel it)

```bash
git checkout main
git checkout -b everything-branch
```
Pile three unrelated changes onto the one branch, like two weeks of drift:
```bash
echo "New homepage headline" > drills/change-copy.txt
git add drills/change-copy.txt && git commit -m "Change homepage copy"

echo "Fix: button was the wrong color" > drills/change-bugfix.txt
git add drills/change-bugfix.txt && git commit -m "Fix button color"

echo "Experiment: maybe a dark mode??" > drills/change-experiment.txt
git add drills/change-experiment.txt && git commit -m "WIP dark mode experiment"
```
Look at what you've built:
```bash
git log --oneline
```
Three totally unrelated things in one branch. Now imagine asking a teammate:
*"can you review this?"* The copy fix is ready to ship. The experiment is not.
But they're welded together — you can't merge one without the other. **That's the
trap.** A reviewer has to swallow all of it or none of it.

---

## Part B — The way out

You don't have to redo the work. You just have to **separate** it. The move:
open a small branch for the piece that's ready, and let the rest wait.

**1. Start a fresh, small branch from `main` for the one ready thing.**
```bash
git checkout main
git checkout -b ready-copy-fix
```

**2. Bring over just that one change.** The clean way is to copy the single commit
across with `cherry-pick`. Find its ID from the log you printed:
```bash
git log everything-branch --oneline      # copy the id next to "Change homepage copy"
git cherry-pick <that-id>
```
Now `ready-copy-fix` contains **only** the copy change — one commit, one purpose.
```bash
git log --oneline        # just the copy fix, sitting on top of main
```

**3. That branch is reviewable *today*.** Push it and open a PR (see the
[main README](../README.md)). Meanwhile `everything-branch` keeps the messy
experiment out of everyone's way until it's actually ready.

---

## What just happened (the whole point)

- A branch that carries **one** change is easy to review and safe to merge.
- A branch that carries **everything** blocks itself — the unfinished parts hold
  the finished parts hostage.
- You're never truly stuck: you can always cut a small branch and `cherry-pick`
  the ready commit onto it. The giant branch is a starting point, not a life sentence.

> ✅ **The habit that prevents all of this:** before you start a new *thing*, start
> a new *branch* from an up-to-date `main`. Push and open a PR when that one thing
> is done. Then start fresh for the next thing. Small and often beats big and scary.

## Clean up (optional)
```bash
git checkout main
git branch -D everything-branch ready-copy-fix
```
