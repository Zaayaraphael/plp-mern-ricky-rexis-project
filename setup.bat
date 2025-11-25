@echo off
REM Shepower Nexus Hub - Setup Script for Windows
REM This script automates the initial setup process

echo.
echo ========================================
echo Shepower Nexus Hub - Setup Script
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed. Please install Node.js 18+ first.
    exit /b 1
)

echo [OK] Node.js is installed
node --version
echo.

REM Install server dependencies
echo [STEP] Installing server dependencies...
cd server
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install server dependencies
    exit /b 1
)
echo [OK] Server dependencies installed
echo.

REM Install client dependencies
echo [STEP] Installing client dependencies...
cd ..\client
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install client dependencies
    exit /b 1
)
echo [OK] Client dependencies installed
echo.

REM Check if .env exists
cd ..\server
if not exist .env (
    echo [WARN] No .env file found. Creating from .env.example...
    copy .env.example .env
    echo [OK] Created .env file
    echo.
    echo [IMPORTANT] Edit server\.env and set your MongoDB connection string!
    echo.
) else (
    echo [OK] .env file already exists
    echo.
)

REM Ask if user wants to seed the database
set /p seed="Do you want to seed the database now? (y/n): "
if /i "%seed%"=="y" (
    echo [STEP] Seeding database...
    node seed.js
    if %ERRORLEVEL% EQU 0 (
        echo [OK] Database seeded successfully!
        echo.
        echo Admin credentials:
        echo    Email: admin@werp.local
        echo    Password: Admin123!
    ) else (
        echo [ERROR] Database seeding failed. Check your MongoDB connection.
        echo    You can run 'node seed.js' manually later.
    )
) else (
    echo [SKIP] Skipping database seeding
    echo    Run 'cd server && node seed.js' when ready
)

echo.
echo [OK] Setup complete!
echo.
echo Next steps:
echo    1. Edit server\.env with your MongoDB connection string (if not done)
echo    2. Start backend:  cd server && npm run dev
echo    3. Start frontend: cd client && npm run dev
echo    4. Open http://localhost:5173
echo.
echo See QUICKSTART.md for detailed instructions
echo.

cd ..
pause
