# 🔥 The Conflict Zone — Guestbook

**Bonus exercise.** Everyone signs the *same line* below. When two people push a
change to the same line, Git can't decide who wins — so it asks *you*. That's a
**merge conflict**, and it's the thing everyone fears most and understands least.

## How to trigger and resolve one (we'll do this together)
1. On your branch, change the single **SIGN HERE** line below (`- 🕶️ The instructor was here first.`)
   to your own name. Everyone edits the *same* line — that's exactly what creates the conflict.
2. Commit and push, open your PR.
3. If someone merged before you touched the same line, GitHub will say
   *"This branch has conflicts that must be resolved."*
4. Click **Resolve conflicts**. You'll see:
   ```
   <<<<<<< your branch
   Alex was here!
   =======
   Sam was here!
   >>>>>>> main
   ```
   Just delete the `<<<<`, `====`, `>>>>` markers and keep the text you want
   (usually: keep both lines). Click **Mark as resolved** → **Commit merge**. Done.

That's the whole monster. It's just two people editing the same line, and Git
politely asking a human to sort it out.

---

## Guestbook — SIGN HERE (everyone changes the SAME line below to their own name)

- 🕶️ The instructor moved this line — now go resolve the conflict! 🔥
