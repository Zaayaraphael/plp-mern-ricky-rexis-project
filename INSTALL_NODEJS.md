# Install Node.js - Step by Step Guide

## You Need Node.js First!

The error `npm is not recognized` means Node.js is not installed on your computer.

## 🪟 Windows Installation (Recommended)

### Option 1: Official Installer (Easiest)

1. **Download Node.js:**
   - Go to: https://nodejs.org/
   - Download the **LTS version** (Long Term Support) - currently v20.x or v18.x
   - Choose the **Windows Installer (.msi)** for your system (64-bit recommended)

2. **Run the Installer:**
   - Double-click the downloaded `.msi` file
   - Click "Next" through the installation wizard
   - **Important:** Make sure "Add to PATH" is checked ✅
   - Click "Install"
   - Wait for installation to complete
   - Click "Finish"

3. **Verify Installation:**
   - Close and reopen your terminal/PowerShell
   - Run these commands:
   ```bash
   node --version
   npm --version
   ```
   - You should see version numbers (e.g., v20.10.0 and 10.2.3)

### Option 2: Using Chocolatey (If you have it)

```bash
choco install nodejs-lts
```

### Option 3: Using Winget (Windows 11)

```bash
winget install OpenJS.NodeJS.LTS
```

## 🍎 macOS Installation

### Option 1: Official Installer
1. Go to: https://nodejs.org/
2. Download the macOS Installer (.pkg)
3. Run the installer
4. Verify: `node --version` and `npm --version`

### Option 2: Using Homebrew (Recommended)
```bash
brew install node
```

## 🐧 Linux Installation

### Ubuntu/Debian:
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Fedora:
```bash
sudo dnf install nodejs
```

### Using NVM (Node Version Manager) - All Linux:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
```

## ✅ After Installation

1. **Close and reopen your terminal** (important!)

2. **Verify installation:**
   ```bash
   node --version
   npm --version
   ```

3. **You should see:**
   ```
   v20.10.0  (or similar)
   10.2.3    (or similar)
   ```

## 🚀 Then Continue with Project Setup

Once Node.js is installed, run:

```bash
# Navigate to server folder
cd server
npm install

# Navigate to client folder
cd ../client
npm install

# Continue with the rest of the setup...
```

## 🔧 Troubleshooting

### "npm is still not recognized" after installation

**Solution 1: Restart your computer**
- Sometimes Windows needs a full restart to update PATH

**Solution 2: Manually add to PATH**
1. Search for "Environment Variables" in Windows
2. Click "Environment Variables"
3. Under "System variables", find "Path"
4. Click "Edit"
5. Add these paths (adjust version number):
   - `C:\Program Files\nodejs\`
   - `C:\Users\YOUR_USERNAME\AppData\Roaming\npm`
6. Click OK and restart terminal

**Solution 3: Use Node.js Command Prompt**
- Search for "Node.js command prompt" in Start menu
- Use that terminal instead

### Which version should I install?

- **LTS (Long Term Support)** - Recommended for most users
- Currently: v20.x or v18.x
- Avoid "Current" version unless you need bleeding-edge features

### Do I need admin rights?

- Yes, for system-wide installation
- Alternative: Use NVM (Node Version Manager) for user-level installation

## 📦 What Gets Installed

When you install Node.js, you get:
- ✅ **node** - JavaScript runtime
- ✅ **npm** - Package manager
- ✅ **npx** - Package runner

## 🎯 Quick Test

After installation, test with this simple command:

```bash
node -e "console.log('Node.js is working!')"
```

You should see: `Node.js is working!`

## 📚 Next Steps

After Node.js is installed:

1. ✅ Verify: `node --version` and `npm --version`
2. 📦 Install project dependencies: `npm install`
3. 🚀 Follow QUICKSTART.md to run the project

## 🆘 Still Having Issues?

### Check if Node.js is actually installed:
```bash
where node
where npm
```

This will show you where Node.js is installed.

### Try running with full path:
```bash
"C:\Program Files\nodejs\npm.exe" --version
```

### Reinstall Node.js:
1. Uninstall Node.js from Control Panel
2. Delete these folders if they exist:
   - `C:\Program Files\nodejs`
   - `C:\Users\YOUR_USERNAME\AppData\Roaming\npm`
3. Restart computer
4. Install Node.js again

## 🔗 Useful Links

- Official Node.js: https://nodejs.org/
- Node.js Documentation: https://nodejs.org/docs/
- npm Documentation: https://docs.npmjs.com/
- NVM for Windows: https://github.com/coreybutler/nvm-windows

---

**Once Node.js is installed, come back to QUICKSTART.md to continue!**
