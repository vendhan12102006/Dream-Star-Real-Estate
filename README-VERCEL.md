# Dream Star Real Estate & Developers - Vercel Deployment Guide

## 🚀 Step 1: Push Code to GitHub
1. Open [https://github.com/new](https://github.com/new)
2. Create repository: `dream-star-realestate`
3. Click **"uploading an existing file"**
4. Drag & drop all files from this project folder:
   `C:\Users\Acer\.gemini\antigravity\scratch\real-estate-project`
5. Click **"Commit changes"**

---

## ⚡ Step 2: Deploy to Vercel (Takes 15 Seconds!)
1. Open [https://vercel.com/new](https://vercel.com/new)
2. Click **"Import"** next to your `dream-star-realestate` GitHub repository.
3. In **Build and Output Settings**, Vercel will automatically detect `vercel.json` and set the output directory to `public`.
4. Click **"Deploy"**!
5. Within 15-20 seconds, your site is LIVE at:
   `https://dream-star-realestate.vercel.app` (or custom name)

---

## 🔐 Step 3: Enable Google Sign-In on Vercel URL
Because Google Firebase checks authorized domains:
1. Go to [Firebase Console](https://console.firebase.google.com/project/dream-star-realestate)
2. Left menu -> **Authentication** -> **Settings** tab.
3. Under **Authorized domains**, click **"Add domain"**.
4. Enter your Vercel domain (e.g. `dream-star-realestate.vercel.app` or `*.vercel.app`).
5. Click **Done**!

---

## 🛡️ Step 4: Paste Firestore Security Rules
1. Go to Firebase Console -> **Firestore Database** -> **Rules** tab.
2. Copy and paste the contents of `firestore.rules`.
3. Click **"Publish"**.
