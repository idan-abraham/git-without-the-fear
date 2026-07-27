# Drill 6 — Do it for real 🚀 (Creator Kit + the Creators repo)

**The graduation.** Every earlier drill was practice in a safe sandbox. This one
runs the *exact same loop* — branch, commit, push, PR, resolve a conflict — except
now it's **Creator Kit building a real artifact in a real Wix repo**. Nothing here
is simulated. At the end you'll have a live Pull Request in
[`wix-private/creators`](https://github.com/wix-private/creators) with your name on it.

**The one mindset shift:** you barely touch Git commands here. You tell Claude what
you want and run `/ck-*` commands — Creator Kit does the `add` / `commit` / `push` /
`branch` under the hood. The emulator taught you the gears so this feels like
*recognising* what's happening, not *memorising* it.

> **Prerequisites (one-time, assumed done):** Creator Kit installed, the `creators`
> repo cloned, `git`/`gh` signed in, and push access to `wix-private/creators`. If
> any of that isn't true, sort it in **#creator-kit** before the session — don't
> stall the room on setup.

---

## Do this

### 1. Get current — clean slate

In your `creators` clone, run:
```
/ck-utility-master
```
This switches you to `master`, pulls the latest, and updates Creator Kit. This is
**Drill 1 for real**: `master` is one line of work, not a folder of your stuff. You
start clean, every time. *(Make it a daily habit — it's the single most-skipped step
and the #1 cause of painful conflicts later.)*

### 2. Start your piece — one branch, one thing

Make **your own** feature folder inside the payments domain so 20 people can work at
once without colliding:
```
projects/general/git-workshop/<yourname>-<short-topic>/
```
e.g. `projects/general/git-workshop/dana-express-checkout-scan/`. Open that folder, then:
```
/ck-new
```
Answer the short intent conversation (pick **a single task/skill**, not a whole
feature). Creator Kit creates your branch and the project structure. This is
**Drill 4's "one branch, one thing"**: your folder is your one piece of work — not
two weeks of everything piled together.

### 3. Build something real — one focused skill (~15 min)

Run **one** skill and let it produce a real artifact:
```
/ck-research-competitors
```
> Prefer a different 25-minute task? `/ck-product-spec`, `/ck-data-query`, or
> `/ck-ux-content` all work the same way. Pick one — resist starting three.

When it finishes you'll have a real file under `artifacts/`. Behind the scenes
Creator Kit already staged and committed it — that's **Drill 2 (staging)** happening
for you. Peek if you're curious: `git status` and `git log --oneline` still tell the
truth, exactly like in the sandbox.

### 4. Draft PR early — back it up in the cloud *now*

Don't wait until you're "done":
```
/ck-utility-pr
```
This opens a **draft Pull Request**. The moment it exists, your work lives on GitHub,
not just your laptop — and there's a link you can share. This is the deck's
*"open a draft PR early"* habit and **Drill 4's way out** rolled into one: you're
never more than a commit away from a backup, and the branch stays small and reviewable.

### 5. Keep going — push more commits to the *same* PR

Run a second skill or refine the first, then let Creator Kit push again. Reload your
PR in the browser: the new commit is **already there**. No second PR, no lost work —
the PR updates itself. This is the loop Etay described: keep pushing the next commits
to the same PR so your state is always on GitHub, never only local.

### 6. The conversation — a PR is a comment thread

Pair up. Open a neighbour's PR → **Files changed** → hover a line → leave a comment
(*"nice — can you add one competitor for X?"*). On your own PR, when a comment lands:
```
/ck-utility-address-comments
```
It reads each comment and helps you respond — usually with **another commit to the
same branch**. This is **Drill 5 for real**: the ask, your fix, and the resolution
all stay attached to the change, forever. You already do this in Docs and Figma;
GitHub is the same reflex attached to the real thing.

---

## 🔥 The conflict finale (Drill 3, for real) — optional but do it

The scariest sandbox drill was the pull conflict. Here's the same thing on a live
repo, resolved by the one command Etay swears by.

**Facilitator setup (once):** on `master`, create `projects/general/git-workshop/_workshop-roster.md`
with a single shared line near the top:
```
**Last person to join:** (nobody yet)
```
Push that to `master` **before** the session.

**Everyone, on your own branch:** open the roster, change that shared line to your own
name, add a row to the table, and let Creator Kit commit + push it to your PR.

**Facilitator, once everyone has branched:** change that same `Last person to join:`
line on `master` to anything and push it. `master` and every open branch now disagree
on the *same line* — a real divergence, on purpose.

**Everyone, now run:**
```
/ck-utility-sync
```
It pulls `master` into your branch, hits the conflict on that line, and **walks you
through it** — keep yours, take theirs, or combine. No panic, no `git` surgery. That's
the whole point: the conflict you dreaded is now a guided two-minute step.

> **Solo / self-paced?** Play both roles: make branch `roster-a`, edit the line, merge
> its PR. Then on branch `roster-b` edit the *same* line and `/ck-utility-sync` — you'll
> get the identical conflict with only yourself involved.

---

## What just happened (the whole point)

- The daily loop is exactly the sandbox loop: **get current → branch → build →
  draft PR → push more → resolve → merge.** Same six moves, real stakes.
- Creator Kit runs the Git for you. You mostly say what you want and run `/ck-*`
  commands — including resolving merge conflicts. Knowing the gears (from the drills)
  is what lets you *trust* that, not fear it.
- A draft PR from commit one means your work is backed up and shareable the whole
  time — never trapped on one laptop.
- A PR is a conversation bolted to the actual change. You're already fluent in that.

## Clean up (optional)
Once your PR is reviewed and merged, GitHub offers **"Delete branch"** — click it.
Then get current again for whatever's next:
```
/ck-utility-master
```
