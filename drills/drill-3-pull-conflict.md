# Drill 3 — The pull conflict 💥

**The fear:** "I ran `git pull` to get up to date and the terminal filled with
`CONFLICT` and weird `<<<<<<<` symbols. I broke it."

**The truth:** You didn't break anything. While you were working, someone else
changed the **same line** you changed. Git downloaded their version, saw it can't
guess who's right, and stopped to ask *you*. That's all a conflict is: a polite
question. You're going to trigger one on purpose — **by yourself** — and resolve it.

We'll play both people: "you" on a branch, and "the teammate" on `main`.

---

## Do this

**1. On your branch, edit a line.**
```bash
git checkout main
git checkout -b pull-drill
```
Open `drills/pull-target.md` (create it if it's missing) and make its one line say:
```bash
echo "The best snack is: pizza" > drills/pull-target.md
git add drills/pull-target.md
git commit -m "Snack = pizza"
```

**2. Now play the teammate: change the SAME line on main.**
```bash
git checkout main
echo "The best snack is: sushi" > drills/pull-target.md
git add drills/pull-target.md
git commit -m "Snack = sushi"
```
Now `main` and your branch disagree about the same line. This is exactly what
happens in real life when a teammate merges while you're still working.

**3. Back on your branch, pull main in — and hit the conflict.**
```bash
git checkout pull-drill
git merge main
```
Git stops and says something like:
```
CONFLICT (content): Merge conflict in drills/pull-target.md
Automatic merge failed; fix conflicts and then commit the result.
```
Don't panic. Run your best friend:
```bash
git status
```
It literally tells you: *"Unmerged paths … fix conflicts and run git commit."*

**4. Open the file and look at the question Git is asking.**
```
<<<<<<< HEAD
The best snack is: pizza
=======
The best snack is: sushi
>>>>>>> main
```
- Everything between `<<<<<<< HEAD` and `=======` is **your** version.
- Everything between `=======` and `>>>>>>> main` is **their** version.
- Git is asking: *which do you want — or a mix?*

**5. Resolve it.** Delete the three marker lines (`<<<<<<<`, `=======`, `>>>>>>>`)
and leave the text you want. For example, keep both:
```
The best snack is: pizza AND sushi
```
Save the file, then:
```bash
git add drills/pull-target.md
git commit -m "Resolve snack conflict: keep both"
```
Done. The conflict is gone. Confirm:
```bash
git status        # -> nothing to commit, working tree clean
cat drills/pull-target.md
```

---

## What just happened (the whole point)

- A conflict is **not** an error or a broken repo. It's a pause where Git needs a
  human decision it can't make safely on its own.
- The fix is always the same three moves: **open the file → delete the markers →
  keep the text you want → `add` + `commit`.**
- `git status` walks you through every step. When in doubt, run it.

> 🧯 **Escape hatch:** decided you'd rather not deal with it right now?
> `git merge --abort` puts everything back exactly as it was before the merge.
> Nothing is lost. Breathe, then try again.

> 💡 **In VS Code / Cursor:** conflicted files get an "Accept Current / Accept
> Incoming / Accept Both" button bar right above the conflict. Same three choices,
> just clickable.

## Clean up (optional)
```bash
git checkout main
git branch -D pull-drill
```
