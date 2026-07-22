# Drill 1 — A branch is not a folder 🗂️❌

**The confusion:** "When I make a branch, where does the folder go? And when I
switch branches, why did my files change / disappear?"

**The truth:** A branch does **not** create a new folder. You stay in the *same*
folder the whole time. Git just swaps what's *inside* the files to match whichever
branch you're standing on. One project folder → many parallel versions.

You're going to prove this to yourself in 5 minutes.

---

## Do this

**1. Make sure you know where you are.**
```bash
pwd          # prints your one and only project folder
ls           # the files you can see right now
```
Remember this. It will **never change** during this drill.

**2. Create a branch and make a note in it.**
```bash
git checkout -b timeline-a
echo "I am on TIMELINE A" > drills/scratch.txt
git add drills/scratch.txt
git commit -m "Timeline A note"
cat drills/scratch.txt      # -> I am on TIMELINE A
```

**3. Go back to main and start a *different* timeline.**
```bash
git checkout main
git checkout -b timeline-b
echo "I am on TIMELINE B" > drills/scratch.txt
git add drills/scratch.txt
git commit -m "Timeline B note"
cat drills/scratch.txt      # -> I am on TIMELINE B
```

**4. Now the magic. Jump between branches and watch the same file change.**
```bash
git checkout timeline-a
cat drills/scratch.txt      # -> I am on TIMELINE A
pwd                         # -> SAME folder as step 1

git checkout timeline-b
cat drills/scratch.txt      # -> I am on TIMELINE B
pwd                         # -> STILL the same folder
```

---

## What just happened (the whole point)

- You never left your folder. `pwd` was identical every time.
- No new folder appeared. There is **one** `drills/scratch.txt` on disk.
- Switching a branch **rewrote that file in place** to match the branch.
- Nothing was lost — Timeline A's version is safe on `timeline-a`, waiting.

A branch is a **parallel timeline of the same folder**, not a place on disk.
"Switch branch" = "load a different save-line of my project."

## Clean up (optional)
```bash
git checkout main
git branch -D timeline-a timeline-b
```
(That deletes only the two practice branches. Your real work is untouched.)

> 💡 **In VS Code / Cursor:** the branch name lives in the bottom-left corner.
> Click it to switch. Watch the editor — the file contents change, the file tree
> doesn't sprout a new folder.
