@echo off
REM Quick script to push project to GitHub
REM Usage: push-to-github.bat

echo.
echo ========================================
echo Shepower Nexus Hub - GitHub Push Script
echo ========================================
echo.

REM Check if git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Git is not installed. Please install Git first.
    echo Download from: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Check if already initialized
if exist .git (
    echo [OK] Git repository already initialized
) else (
    echo [STEP] Initializing Git repository...
    git init
    echo [OK] Git initialized
)

echo.
echo [STEP] Current status:
git status --short

echo.
echo [STEP] Staging all files...
git add .

echo.
echo [STEP] Creating commit...
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Initial commit: Shepower Nexus Hub MVP

git commit -m "%commit_msg%"

echo.
echo ========================================
echo GitHub Repository Setup
echo ========================================
echo.
set /p created_repo="Have you created a GitHub repository yet? (y/n): "

if /i not "%created_repo%"=="y" (
    echo.
    echo Please create a GitHub repository first:
    echo 1. Go to https://github.com/new
    echo 2. Create a new repository (don't initialize with README^)
    echo 3. Come back and run this script again
    pause
    exit /b 0
)

echo.
echo Enter your GitHub repository URL:
echo Example: https://github.com/username/repo-name.git
set /p repo_url=URL: 

if "%repo_url%"=="" (
    echo [ERROR] No URL provided. Exiting.
    pause
    exit /b 1
)

REM Check if remote already exists
git remote | findstr "origin" >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [WARN] Remote 'origin' already exists. Updating...
    git remote set-url origin "%repo_url%"
) else (
    echo [STEP] Adding remote origin...
    git remote add origin "%repo_url%"
)

echo.
echo [STEP] Pushing to GitHub...
git branch -M main
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo [SUCCESS] Successfully pushed to GitHub!
    echo.
    echo Your repository is now live!
    echo.
    echo Next steps:
    echo 1. Add repository description on GitHub
    echo 2. Add topics: mern, react, nodejs, mongodb, women-empowerment
    echo 3. Share your project!
) else (
    echo.
    echo [ERROR] Push failed. Common issues:
    echo 1. Check your GitHub credentials
    echo 2. Verify repository URL is correct
    echo 3. Ensure you have push access to the repository
    echo.
    echo See GIT_SETUP.md for detailed troubleshooting
)

echo.
pause
