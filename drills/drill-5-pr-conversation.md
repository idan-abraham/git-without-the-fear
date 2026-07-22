# Drill 5 — A PR is a conversation 💬

**The confusion:** "I left a comment on GitHub, but I didn't really get that my
comment lives *on a branch's changes*. I think in conversations — I don't think in
branches."

**Good news:** A Pull Request **is** a conversation — you're already fluent in it.
It's a comment thread (like Docs, Figma, or Slides) that happens to be attached to
the actual change instead of floating next to it. This drill makes that click.

> This is the one drill that uses **GitHub in the browser** (the others were all
> local). You'll need push access or a fork — see the [main README](../README.md).

---

## Do this

**1. Make a small change on a branch and push it.**
```bash
git checkout main
git checkout -b pr-convo-drill
echo "- 🗣️ [your name] joined the conversation" >> drills/wall.md
git add drills/wall.md
git commit -m "Add my line to the wall"
git push -u origin pr-convo-drill
```

**2. Open the Pull Request.** Click the link the terminal printed, or go to the
repo on GitHub and hit **"Compare & pull request."** Give it a title, create it.

**3. Now *be the reviewer* on your own PR.** Open the **Files changed** tab.
Hover over your new line — a blue **`+`** appears. Click it and leave a comment
like *"Can you add an emoji at the end?"* Click **Start a review → Submit review →
Request changes.**

Notice **where** that comment lives: pinned to the *exact line you changed*. Not in
a Slack DM, not in an email that gets buried — right on the change itself. Anyone
opening this PR in a year will see the discussion next to the code it's about.

**4. Reply to the conversation the Git way — with a commit.**
```bash
echo "- 🗣️ [your name] joined the conversation 🎉" > /tmp/line   # your edit
# (simplest: just open drills/wall.md, add the emoji to your line, save)
git add drills/wall.md
git commit -m "Address review: add emoji"
git push
```
Flip back to the PR in your browser. **Without opening a new PR**, your new commit
is already there. The conversation and the change moved forward *together*, in one
place.

**5. Resolve and merge.** Mark the review comment **Resolved**, then click the
green **Merge pull request**. Your branch folds into `main`. The whole thread —
the ask, your fix, the resolution — stays attached to history forever.

---

## What just happened (the whole point)

- A PR bundles **a branch's changes** + **the conversation about them** into one
  place. The two are inseparable — that's the feature, not a technicality.
- "Being on a branch" isn't bureaucracy getting in the way of the conversation.
  The branch is *what the conversation is about*.
- You reply to feedback by **pushing another commit to the same branch** — the PR
  updates itself. No new PR, no lost context.
- You already do this in Docs and Figma. GitHub is the same reflex, attached to the
  real thing instead of a copy of it.

## Clean up (optional)
After merging, GitHub offers a **"Delete branch"** button — click it. Locally:
```bash
git checkout main
git pull
git branch -D pr-convo-drill
```
(Deleting the branch after merge is good hygiene — see [Drill 4](drill-4-giant-branch.md).)
