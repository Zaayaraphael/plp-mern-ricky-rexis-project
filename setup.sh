#!/bin/bash

# Shepower Nexus Hub - Setup Script
# This script automates the initial setup process

echo "🚀 Shepower Nexus Hub - Setup Script"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Install server dependencies
echo "📦 Installing server dependencies..."
cd server
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install server dependencies"
    exit 1
fi
echo "✅ Server dependencies installed"
echo ""

# Install client dependencies
echo "📦 Installing client dependencies..."
cd ../client
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install client dependencies"
    exit 1
fi
echo "✅ Client dependencies installed"
echo ""

# Check if .env exists
cd ../server
if [ ! -f .env ]; then
    echo "⚠️  No .env file found. Creating from .env.example..."
    cp .env.example .env
    echo "✅ Created .env file"
    echo ""
    echo "⚠️  IMPORTANT: Edit server/.env and set your MongoDB connection string!"
    echo ""
else
    echo "✅ .env file already exists"
    echo ""
fi

# Ask if user wants to seed the database
echo "🌱 Do you want to seed the database now? (y/n)"
read -r response
if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
    echo "🌱 Seeding database..."
    node seed.js
    if [ $? -eq 0 ]; then
        echo "✅ Database seeded successfully!"
        echo ""
        echo "📧 Admin credentials:"
        echo "   Email: admin@werp.local"
        echo "   Password: Admin123!"
    else
        echo "❌ Database seeding failed. Check your MongoDB connection."
        echo "   You can run 'node seed.js' manually later."
    fi
else
    echo "⏭️  Skipping database seeding"
    echo "   Run 'cd server && node seed.js' when ready"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎯 Next steps:"
echo "   1. Edit server/.env with your MongoDB connection string (if not done)"
echo "   2. Start backend:  cd server && npm run dev"
echo "   3. Start frontend: cd client && npm run dev"
echo "   4. Open http://localhost:5173"
echo ""
echo "📚 See QUICKSTART.md for detailed instructions"
echo ""
