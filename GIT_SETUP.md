# Git Setup Guide - Push to GitHub

## Step 1: Initialize Git Repository

```bash
# Initialize git in your project root
git init

# Check git status
git status
```

## Step 2: Create .gitignore (Already Done!)

Your `.gitignore` file is already created and will exclude:
- node_modules/
- .env files
- build outputs
- IDE files

## Step 3: Stage All Files

```bash
# Add all files to staging
git add .

# Verify what will be committed
git status
```

## Step 4: Create Initial Commit

```bash
# Commit with a message
git commit -m "Initial commit: Shepower Nexus Hub MVP - MERN women empowerment portal"
```

## Step 5: Create GitHub Repository

1. Go to https://github.com
2. Click the "+" icon (top right) → "New repository"
3. Repository name: `shepower-nexus-hub` (or your preferred name)
4. Description: "Women Empowerment Resource Portal - MERN Stack"
5. Choose: **Public** or **Private**
6. **DO NOT** initialize with README (we already have one)
7. Click "Create repository"

## Step 6: Connect to GitHub

After creating the repo, GitHub will show you commands. Use these:

```bash
# Add GitHub as remote origin (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Verify remote was added
git remote -v
```

## Step 7: Push to GitHub

```bash
# Push to main branch
git branch -M main
git push -u origin main
```

## Complete Command Sequence

Here's the full sequence to copy/paste:

```bash
# 1. Initialize and commit
git init
git add .
git commit -m "Initial commit: Shepower Nexus Hub MVP"

# 2. Add remote (REPLACE with your GitHub URL)
git remote add origin https://github.com/YOUR_USERNAME/shepower-nexus-hub.git

# 3. Push to GitHub
git branch -M main
git push -u origin main
```

## Troubleshooting

### Authentication Required

If GitHub asks for credentials:

**Option 1: Personal Access Token (Recommended)**
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. Use token as password when prompted

**Option 2: SSH Key**
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: Settings → SSH and GPG keys → New SSH key

# Change remote to SSH
git remote set-url origin git@github.com:YOUR_USERNAME/REPO_NAME.git
```

### Already Initialized Error

If you get "already exists" error:
```bash
# Remove existing git
rm -rf .git

# Start over from Step 1
```

### Large Files Warning

If you get warnings about large files:
```bash
# Check file sizes
git ls-files | xargs ls -lh

# If node_modules was accidentally added
git rm -r --cached node_modules
git commit -m "Remove node_modules"
```

## After Pushing

Your repository will be live at:
```
https://github.com/YOUR_USERNAME/REPO_NAME
```

### Add Repository Description

On GitHub:
1. Go to your repository
2. Click "About" (gear icon)
3. Add description: "Women Empowerment Resource Portal - MERN Stack MVP with authentication, learning modules, and progress tracking"
4. Add topics: `mern`, `react`, `nodejs`, `mongodb`, `women-empowerment`, `education`

### Create a Nice README Badge

Add this to the top of your README.md:

```markdown
# Shepower Nexus Hub

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
```

## Future Updates

When you make changes:

```bash
# Check what changed
git status

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Add mentor matching feature"

# Push to GitHub
git push
```

## Branching Strategy (Optional)

For feature development:

```bash
# Create feature branch
git checkout -b feature/mentor-matching

# Make changes, commit
git add .
git commit -m "Implement mentor matching"

# Push feature branch
git push -u origin feature/mentor-matching

# Create Pull Request on GitHub
# After merge, switch back to main
git checkout main
git pull
```

## Important Notes

✅ **DO commit:**
- All source code
- Documentation files
- Configuration files (.env.example)
- Package.json files

❌ **DON'T commit:**
- node_modules/ (already in .gitignore)
- .env files with secrets (already in .gitignore)
- Build outputs (dist/, build/)
- IDE files (.vscode/, .idea/)

## Quick Reference

```bash
# Check status
git status

# Stage all changes
git add .

# Commit
git commit -m "Your message"

# Push
git push

# Pull latest
git pull

# View commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1
```

---

Need help? Check:
- [GitHub Docs](https://docs.github.com)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
