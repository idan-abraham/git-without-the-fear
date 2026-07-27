# 🧪 Scenario Drills — feel the problem, then fix it

The main [README](../README.md) walks you through the happy path:
`clone → branch → edit → commit → push → PR`.

These drills are different. Each one **recreates a real problem** people hit with
Git — the exact confusions we heard from teams — and then walks you out of it.
You'll trigger the scary thing on purpose, in a safe repo, so it never surprises
you for the first time on real work.

> Every drill is **doable alone** — you don't need a partner. Where a drill needs
> "another person," you'll play both roles with a second branch. Works great for
> self-paced learners too.

## The drills

| # | Drill | The problem it recreates | Time |
|---|---|---|---|
| 1 | [A branch is not a folder](drill-1-branch-not-a-folder.md) | "Where did my files go when I switched branch?!" | 5 min |
| 2 | [Staging: choose what goes in](drill-2-staging.md) | "I don't get `add` vs `commit` — I just want to save." | 5 min |
| 3 | [The pull conflict](drill-3-pull-conflict.md) | "I ran `git pull` and everything exploded." | 8 min |
| 4 | [The giant branch (and the way out)](drill-4-giant-branch.md) | "One branch, two weeks, everything in it. Nobody will review this." | 8 min |
| 5 | [A PR is a conversation](drill-5-pr-conversation.md) | "I left a comment but ignored that I'm on a branch." | 8 min (needs GitHub) |
| 6 | [Do it for real](drill-6-real-work.md) | "Fine in the sandbox — but can I do this on an actual Wix repo?" | 30 min (Creator Kit + Creators repo) |

> **Drills 1–5** run in this safe sandbox repo. **Drill 6 is the graduation** — the
> same loop on a *real* Wix repo with Creator Kit doing the Git for you. Do it last.

## Before you start
Do these from **your own clone** of this repo, on **your own branch** — never
straight on `main`. If you haven't cloned yet, see the [main README](../README.md).

Stuck at any point? `git status` is your best friend. Run it often — it almost
always tells you what to do next.
