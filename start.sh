#!/bin/bash

# DC20 Character Cards - Development Startup Script

echo "🎲 DC20 Character Cards - Starting Development Environment"
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ and try again."
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Please run this script from the character-cards-app directory."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies. Please check your Node.js installation and try again."
        exit 1
    fi
    echo "✅ Dependencies installed successfully!"
else
    echo "📦 Dependencies already installed."
fi

# Run linting check
echo "🔍 Running linting check..."
npm run lint --silent
if [ $? -eq 0 ]; then
    echo "✅ Linting passed!"
else
    echo "⚠️  Linting issues found (this won't prevent startup)"
fi

# Run tests
echo "🧪 Running tests..."
npm run test --silent
if [ $? -eq 0 ]; then
    echo "✅ All tests passed!"
else
    echo "⚠️  Some tests failed (this won't prevent startup)"
fi

echo ""
echo "🚀 Starting development server..."
echo "   - Application will open at: http://localhost:3000"
echo "   - Press Ctrl+C to stop the server"
echo ""
echo "🎯 Features available:"
echo "   - Toggle card categories with the buttons"
echo "   - Click individual cards to hide/show them"
echo "   - Use 'Print Cards' button for print-friendly output"
echo ""

# Start the development server
npm run dev
