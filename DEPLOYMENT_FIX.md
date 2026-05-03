# DEPLOYMENT FIX GUIDE

## Problem
Build error: "Couldn't find any `pages` or `app` directory"

## Root Cause
When uploading to Vercel, the files were likely nested inside a parent folder 
(e.g., ganga-studio-website/ganga-studio-website/app instead of ganga-studio-website/app)

## Solution - Choose ONE method:

### METHOD 1: Fix File Structure (Recommended)

When you extract the zip, ensure the structure is FLAT:

CORRECT:
```
ganga-studio-website/
  ├── app/
  ├── public/
  ├── components/
  ├── package.json
  └── ...
```

WRONG (nested):
```
ganga-studio-website/
  └── ganga-studio-website/  ← DON'T DO THIS
      ├── app/
      ├── public/
      └── ...
```

### METHOD 2: Deploy via GitHub (Easiest)

1. Extract the zip file
2. Make sure app/ is at the ROOT level
3. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ganga-studio.git
   git push -u origin main
   ```
4. Go to vercel.com → Import GitHub repo → Deploy

### METHOD 3: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (run from the folder containing app/)
cd ganga-studio-website
vercel --prod
```

### METHOD 4: Drag & Drop on Vercel

1. Go to https://vercel.com/new
2. Drag the ENTIRE project folder (the one containing app/ directly)
3. NOT the parent folder if it's nested

## Important Notes

1. The app/ directory MUST be at the project root
2. Don't rename "app" to anything else
3. package.json must be at the same level as app/
4. If using drag-and-drop, zip the CONTENTS of the folder, not the folder itself

## What Changed in This Fix

- Added `experimental: { appDir: true }` to next.config.js
- Added `images: { unoptimized: true }` for static builds
- Ensured flat zip structure (no nested parent folder)
- Added `trailingSlash: true` for better routing

## After Successful Deploy

1. Add your real images to /public/images/
2. Remove `unoptimized: true` from next.config.js for better image optimization
3. Update contact info in /app/lib/constants.ts
4. Add your actual WhatsApp number
5. Connect custom domain (gangastudiojobat.com)
