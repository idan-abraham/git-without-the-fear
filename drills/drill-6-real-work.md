# Drill 6 — Do it for real 🚀 (a real PR, by hand)

**The graduation.** Every earlier drill was practice in a safe sandbox. This one runs
the *exact same loop* — branch, commit, push, PR, resolve a conflict — on a **real
GitHub repo, by hand**. Nothing here is simulated. At the end you'll have a **live Pull
Request with your name on it**, and you'll have resolved a **real merge conflict**.

We run it on the **workshop repo** you already cloned for Drills 1–5
(`git-without-the-fear`) — a safe, shared training repo, never a production one. You work
in your own folder so 20 people can go at once without colliding.

> **The one idea:** this is the same six moves from the emulator, now with real stakes.
> The emulator taught you the gears; here you turn them on an actual repo. At Wix, tooling
> like **Creator Kit** (`/ck-new`, `/ck-utility-pr`, `/ck-utility-sync`) runs these exact
> git steps for you — you're about to do them by hand, so you'll *recognise* what that
> tooling is doing instead of trusting it blindly.

> **Prerequisites (~5 min, see [SETUP.md](../SETUP.md)):** `git` installed, a GitHub
> account, this repo cloned, and collaborator access (send the facilitator your GitHub
> username) — or use the **Fork** fallback from the main README. `gh` (GitHub CLI) is
> handy but optional; you can always open the PR in the browser.

---

## Do this

### 1. Get current — clean slate
```
git checkout main
git pull
```
`main` is one shared line of work, not a folder of your stuff. Start clean, every time —
it's the single most-skipped step and the #1 cause of painful conflicts later.
*(↳ Level 1 — a branch is not a folder.)*

### 2. Start your piece — one branch, one thing
Give yourself a branch named for you and one small topic:
```
git switch -c dana-first-pr
```
*(`git checkout -b dana-first-pr` does the same thing.)* Then make **your own** folder so
nobody collides:
```
workshop/dana-first-pr/
```
One branch = one piece of work — not two weeks of everything piled together.
*(↳ Level 4 — one branch, one thing.)*

### 3. Build something real — commit as you go
**Need a topic?** Pick a Wix AI feature from **[git-without-fear.com/ideas](https://git-without-fear.com/ideas)**
and write a quick one-pager on it (what it does · who it's for · the key AI prompt or flow).
Drop it in your folder:
```
echo "# Dana — AI checkout optimizer (one-pager)" > workshop/dana-first-pr/idea.md
git add workshop/dana-first-pr/idea.md
git commit -m "Add AI checkout optimizer one-pager"
```
`git add` curates exactly what goes into the snapshot; `git status` and
`git log --oneline` tell you the truth at any point. *(↳ Level 2 — staging.)*

### 4. Draft PR early — back it up now
Don't wait until you're "done":
```
git push -u origin dana-first-pr
gh pr create --draft --fill
```
No `gh`? `git push` prints a link — open it and click **Create draft pull request**. The
moment the PR exists, your work lives on GitHub, not just your laptop, and you have a link
to share. *(↳ Level 4 — the way out.)*

### 5. Keep going — push more to the *same* PR
Add or change something, then:
```
git add .
git commit -m "Refine notes"
git push
```
Reload the PR in the browser: the new commit is **already there**. No second PR, no lost
work — the PR updates itself.

### 6. The conversation — a PR is a comment thread
Pair up. Open a neighbour's PR → **Files changed** → hover a line → leave a comment. When a
comment lands on yours, answer it **with another commit** (`git commit` → `git push`) — the
ask, your fix, and the resolution stay attached to the change forever. You already do this
in Docs and Figma; GitHub is the same reflex on the real thing. *(↳ Level 5 — a PR is a
conversation.)*

---

## 🔥 The conflict finale (Level 3, for real) — do it

The scariest emulator level was the pull conflict. Here it's real, on the live repo — you'll
hit a genuine conflict on purpose and resolve it yourself.

**1. Sign the shared line.** On your branch, open [`conflict-zone/guestbook.md`](../conflict-zone/guestbook.md)
and change the single line
```
- 🕶️ The instructor was here first.
```
to your own name (e.g. `- 🕶️ Dana was here`). Then `git add` → `git commit` → `git push` to your PR.

**2. Wait for the go-ahead.** Your facilitator changes that *same* line on `main`. Now `main`
and your branch disagree on the **exact same line** — the conflict, set up on purpose.

**3. Pull it in and resolve.**
```
git merge main
```
Git stops with `CONFLICT (content): Merge conflict in conflict-zone/guestbook.md`. Don't
panic — run `git status`, open the file, and you'll see the question:
```
<<<<<<< HEAD
- 🕶️ Dana was here
=======
- 🕶️ <facilitator's line>
>>>>>>> main
```
Delete the three marker lines, keep the text you want (keeping both is easiest), then:
```
git add conflict-zone/guestbook.md
git commit -m "Resolve guestbook conflict: keep both"
git push
```
That's the whole monster: two people edited the same line, and Git asked a human to
choose. *(↳ Level 3.)*

> 🧯 **Escape hatch:** `git merge --abort` puts everything back exactly as before the
> merge. Nothing is lost. Breathe, then try again.
>
> 🧑‍💻 **Solo / self-paced?** Play both roles: make a `roster-a` branch, edit the line,
> merge its PR to `main`. Then on a `roster-b` branch edit the *same* line and
> `git merge main` — you'll get the identical conflict with only yourself involved.

---

## What just happened (the whole point)

- The daily loop is exactly the emulator loop: **get current → branch → build → draft PR →
  push more → resolve → merge.** Same six moves, real stakes.
- You did every git step **by hand** — so when Wix tooling like **Creator Kit** does
  `add` / `commit` / `push` / `branch` and conflict-resolution for you (`/ck-new`,
  `/ck-utility-pr`, `/ck-utility-sync`), you'll recognise the gears instead of fearing them.
- A **draft PR from commit one** means your work is backed up and shareable the whole
  time — never trapped on one laptop.
- A PR is a **conversation bolted to the actual change.** You're already fluent in that.

## Clean up (optional)
Once your PR is reviewed and merged, GitHub offers **"Delete branch"** — click it. Then get
current again for whatever's next:
```
git checkout main
git pull
```
