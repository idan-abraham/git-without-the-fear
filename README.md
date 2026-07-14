# 🕶️ Git Without the Fear — Workshop Drill

Welcome! This is the playground repo for the **Git Without the Fear** workshop.

By the end of the drill you will have done — *with your own hands* — the exact
loop developers do every day:

> **clone → branch → edit → commit → push → open a Pull Request**

No prior experience needed. If you get stuck, raise your hand — a mentor will come over.

---

## Before you start (2 minutes)

1. Make sure Git is installed and you have a GitHub account — see [SETUP.md](SETUP.md).
2. Tell the instructor your GitHub username so you get **collaborator access** to this repo.
   *(No access yet? No problem — see "Plan B: Fork" at the bottom.)*

Keep the [CHEATSHEET.md](CHEATSHEET.md) open in another tab. You'll use ~6 commands total.

---

## The Drill — follow the steps

### Step 1 — Clone the repo (copy it to your laptop)
```bash
git clone https://github.com/idan-abraham/git-without-the-fear.git
cd git-without-the-fear
```

### Step 2 — Create your own branch
Use your name so it's unique (lowercase, dashes instead of spaces):
```bash
git checkout -b add-jane-doe
```

### Step 3 — Make your file
Copy the template into the `exercises/` folder and rename it to your name:
```bash
cp exercises/_TEMPLATE.md exercises/jane-doe.md
```
Now open `exercises/jane-doe.md` in any editor and fill it in. Make it yours.

### Step 4 — Commit (save a snapshot with a message)
```bash
git add exercises/jane-doe.md
git commit -m "Add Jane Doe's intro"
```

### Step 5 — Push (send your branch to GitHub)
```bash
git push -u origin add-jane-doe
```

### Step 6 — Open a Pull Request
The terminal will print a link — click it. Or go to the repo on GitHub and hit
the green **"Compare & pull request"** button. Add a title, click
**"Create pull request"**. 🎉

**That's the whole job.** You just did what developers do all day.

---

## 🔥 Bonus round — survive a merge conflict
Everyone edits the *same* line in [`conflict-zone/guestbook.md`](conflict-zone/guestbook.md).
When two people change the same line, Git asks a human to decide. We'll walk through
resolving one together — it's far less scary than it looks. Instructions are in that file.

---

## Plan B: Fork (if you don't have collaborator access)
1. Click **Fork** (top-right of this repo) → creates your own copy.
2. Do Steps 1–5 above using **your fork's** URL.
3. Open the PR back to `idan-abraham/git-without-the-fear`.

---

## Cheat sheet, super short
| I want to… | Command |
|---|---|
| Copy the repo down | `git clone <url>` |
| Start my own line of work | `git checkout -b my-branch` |
| See what changed | `git status` |
| Stage a file | `git add <file>` |
| Save a snapshot | `git commit -m "message"` |
| Send it to GitHub | `git push -u origin my-branch` |

Full version → [CHEATSHEET.md](CHEATSHEET.md)
