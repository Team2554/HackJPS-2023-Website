#!/bin/bash

# Script to deploy the build directory to gh-pages branch

# Exit on error
set -e

# Print commands for debugging
set -x

# Function to display error message and exit
error_exit() {
  echo "Error: $1" >&2
  exit 1
}

# Store current branch name
CURRENT_BRANCH=$(git symbolic-ref --short HEAD) || error_exit "Failed to get current branch name"
echo "Current branch: $CURRENT_BRANCH"

# Make sure working directory is clean
if ! git diff-index --quiet HEAD --; then
  error_exit "Working directory is not clean. Please commit or stash your changes first."
fi

# Build the project
echo "Building the project..."
npm run build || error_exit "Build failed"

# Create a temporary directory for the build
TEMP_DIR=$(mktemp -d) || error_exit "Failed to create temporary directory"
echo "Created temporary directory: $TEMP_DIR"

# Cleanup function to remove temp directory on exit
cleanup() {
  echo "Cleaning up..."
  rm -rf "$TEMP_DIR"
  git checkout "$CURRENT_BRANCH" || echo "Warning: Failed to return to $CURRENT_BRANCH branch"
}

# Register cleanup function to be called on script exit
trap cleanup EXIT

# Copy build files to temp directory
echo "Copying build files to temporary directory..."
cp -r build/* "$TEMP_DIR/" || error_exit "Failed to copy build files"

# Check if gh-pages branch exists
if git show-ref --verify --quiet refs/heads/gh-pages; then
  echo "gh-pages branch exists, checking it out..."
  git checkout gh-pages || error_exit "Failed to checkout gh-pages branch"
else
  echo "Creating gh-pages branch..."
  git checkout --orphan gh-pages || error_exit "Failed to create gh-pages branch"
  git rm -rf . || echo "No files to remove from new branch"
fi

# Remove all files from the branch
echo "Clearing gh-pages branch..."
find . -mindepth 1 -maxdepth 1 -not -name ".git" -exec rm -rf {} \; || error_exit "Failed to clear files"

# Copy the build files to the root directory
echo "Copying build files to gh-pages branch..."
cp -r "$TEMP_DIR"/* . || error_exit "Failed to copy build files to gh-pages"

# Add all files to git
echo "Adding files to git..."
git add . || error_exit "Failed to add files to git"

# Create commit with timestamp
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")
echo "Committing changes..."
git commit -m "Deploy: $TIMESTAMP" || error_exit "Failed to commit changes"

# Push to GitHub
echo "Pushing to GitHub..."
git push origin gh-pages || error_exit "Failed to push to GitHub"

# Return to original branch
echo "Returning to original branch..."
git checkout "$CURRENT_BRANCH" || error_exit "Failed to return to $CURRENT_BRANCH branch"

echo "Successfully deployed to gh-pages branch!"
echo "Now configure GitHub Pages to serve from the gh-pages branch in your repository settings."

