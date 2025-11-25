#!/bin/bash

# Quick script to push project to GitHub
# Usage: ./push-to-github.sh

echo "🚀 Shepower Nexus Hub - GitHub Push Script"
echo "=========================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if already initialized
if [ -d .git ]; then
    echo "✅ Git repository already initialized"
else
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git initialized"
fi

echo ""
echo "📋 Current status:"
git status --short

echo ""
echo "📝 Staging all files..."
git add .

echo ""
echo "💾 Creating commit..."
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Initial commit: Shepower Nexus Hub MVP"
fi

git commit -m "$commit_msg"

echo ""
echo "🔗 GitHub Repository Setup"
echo "=========================="
echo ""
echo "Have you created a GitHub repository yet? (y/n)"
read -r created_repo

if [[ ! "$created_repo" =~ ^([yY][eE][sS]|[yY])$ ]]; then
    echo ""
    echo "Please create a GitHub repository first:"
    echo "1. Go to https://github.com/new"
    echo "2. Create a new repository (don't initialize with README)"
    echo "3. Come back and run this script again"
    exit 0
fi

echo ""
echo "Enter your GitHub repository URL:"
echo "Example: https://github.com/username/repo-name.git"
read -r repo_url

if [ -z "$repo_url" ]; then
    echo "❌ No URL provided. Exiting."
    exit 1
fi

# Check if remote already exists
if git remote | grep -q "origin"; then
    echo "⚠️  Remote 'origin' already exists. Updating..."
    git remote set-url origin "$repo_url"
else
    echo "🔗 Adding remote origin..."
    git remote add origin "$repo_url"
fi

echo ""
echo "🚀 Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🎉 Your repository is now live at:"
    echo "${repo_url%.git}"
    echo ""
    echo "Next steps:"
    echo "1. Add repository description on GitHub"
    echo "2. Add topics: mern, react, nodejs, mongodb, women-empowerment"
    echo "3. Share your project!"
else
    echo ""
    echo "❌ Push failed. Common issues:"
    echo "1. Check your GitHub credentials"
    echo "2. Verify repository URL is correct"
    echo "3. Ensure you have push access to the repository"
    echo ""
    echo "See GIT_SETUP.md for detailed troubleshooting"
fi
