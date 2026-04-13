# Hello Chicago - iOS App Setup Guide

This guide will walk you through converting your Hello Chicago PWA into a native iOS app for the App Store.

## ✅ What's Already Done

I've set up the following for you:

1. **Installed Capacitor** - iOS app framework
2. **Created `capacitor.config.ts`** - App configuration
3. **Updated `manifest.json`** - Optimized for iOS
4. **Added npm scripts** - Simplified build commands

## 🔧 Prerequisites

Before you can build the iOS app, you need:

### 1. **Upgrade Node.js to v22+**
   - **Current version**: v21.7.3
   - **Required**: v22.0.0 or higher

   **How to upgrade (using nvm - recommended):**
   ```bash
   # Install nvm if you don't have it
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

   # Install Node 22
   nvm install 22
   nvm use 22
   nvm alias default 22

   # Verify
   node --version  # Should show v22.x.x
   ```

### 2. **macOS with Xcode**
   - You must be on a Mac to build iOS apps
   - Install Xcode from the Mac App Store (it's free)
   - After installing, open Xcode once to accept the license agreement
   - Install Xcode Command Line Tools:
     ```bash
     xcode-select --install
     ```

### 3. **Apple Developer Account**
   - Sign up at https://developer.apple.com
   - Cost: $99/year
   - Needed to submit apps to the App Store

### 4. **CocoaPods** (iOS dependency manager)
   ```bash
   sudo gem install cocoapods
   ```

## 🚀 Building Your iOS App

### Step 1: Add iOS Platform
Once you've upgraded to Node 22+, run:
```bash
npm run cap:add:ios
```

This creates an `ios/` folder with your Xcode project.

### Step 2: Sync Your Web Code
Whenever you make changes to your web app, sync them to iOS:
```bash
npm run cap:sync:ios
```

Or use the full build command:
```bash
npm run cap:build:ios
```

This will:
1. Build your Next.js app
2. Sync the build to iOS
3. Open Xcode automatically

### Step 3: Configure in Xcode

When Xcode opens:

1. **Select your development team:**
   - Click on the project name in the left sidebar
   - Go to "Signing & Capabilities"
   - Select your Apple Developer team from the dropdown

2. **Update the bundle identifier (if needed):**
   - Currently set to: `co.hellochicago.app`
   - Change this if you want a different ID

3. **Configure app icons:**
   - Click on "AppIcon" in Assets.xcassets
   - The icons from `/public/app/` are already configured
   - Make sure you have icons in all required sizes (see below)

4. **Configure launch screen:**
   - Edit `LaunchScreen.storyboard` if you want a custom splash screen
   - Default uses your purple theme color

### Step 4: Test on Simulator
1. In Xcode, select a simulator from the device dropdown (top center)
2. Click the Play button (▶️) or press Cmd+R
3. The app will build and launch in the iOS Simulator

### Step 5: Test on Real Device
1. Connect your iPhone via USB
2. Select your device from the dropdown in Xcode
3. Click the Play button
4. First time: You may need to trust the developer certificate on your iPhone
   - Go to Settings > General > VPN & Device Management
   - Trust your developer certificate

### Step 6: Submit to App Store

**Important: Complete these in App Store Connect first:**

1. **Create app listing:**
   - Go to https://appstoreconnect.apple.com
   - Click "My Apps" → "+" → "New App"
   - Fill in app name, primary language, bundle ID, SKU

2. **Prepare metadata:**
   - App name: "Hello Chicago"
   - Subtitle: "Chicago Happy Hour Deals"
   - Description (280 chars max for subtitle)
   - Full description
   - Keywords: happy hour, chicago, bars, drinks, deals, specials
   - Support URL: https://www.hellochicago.co
   - Marketing URL (optional): https://www.hellochicago.co
   - Privacy policy URL (you'll need to create this)

3. **Screenshots required:**
   - iPhone 6.7" display (iPhone 14 Pro Max size)
   - Recommended: 3-5 screenshots showing key features
   - Already have: `/public/app/screenshot1.png` and `screenshot2.png`
   - May need to create more at the right size (1290 x 2796 pixels)

4. **App icons:**
   - 1024x1024px icon (no transparency, no rounded corners)
   - Create this from your existing icon

**Then build for release:**

1. In Xcode, select "Any iOS Device (arm64)" from the device dropdown
2. Product → Archive (or Cmd+B, then Product → Archive)
3. When archiving completes, click "Distribute App"
4. Select "App Store Connect"
5. Follow the wizard (sign in, upload)
6. Once uploaded, go to App Store Connect
7. Select your build and submit for review

**Review process:**
- Usually takes 1-3 days
- Apple will review for functionality, content, and compliance
- They may ask questions or request changes

## 🎨 Icon Requirements

You need icons in these sizes for iOS:

- **App Icon (required):**
  - 1024x1024px (for App Store)
  - 180x180px (iPhone @3x)
  - 120x120px (iPhone @2x)
  - 167x167px (iPad Pro)
  - 152x152px (iPad @2x)
  - 76x76px (iPad)

Your current icons:
- ✅ `/public/app/hellochicago.png` (512x512) - need to upscale to 1024x1024
- ✅ `/public/app/hellochicago-192.png` (192x192)

**Tool to generate all sizes:** Use https://appicon.co or https://www.figma.com

## 📱 How the App Works

**Hybrid Approach:**
Your app is configured to load the live website (https://www.hellochicago.co) inside a native container. This means:

✅ **Pros:**
- All features work (API routes, database, dynamic content)
- Data is always fresh
- No need to rebuild app for content updates
- Smaller app size

⚠️ **Cons:**
- Requires internet connection
- Slightly slower initial load vs fully native

**Want it to work offline?**
You can switch to a fully bundled approach, but you'll need to:
1. Convert to static export (lose API routes)
2. Use a headless CMS or external API
3. Implement offline caching strategies

Let me know if you want help with that.

## 🔧 Customization Options

### Change App Name
Edit `ios/App/App/Info.plist`:
```xml
<key>CFBundleDisplayName</key>
<string>Hello Chicago</string>
```

### Change Theme Colors
Edit `capacitor.config.ts`:
```typescript
plugins: {
  SplashScreen: {
    backgroundColor: "#7c3aed", // Your purple theme
  }
}
```

### Add Push Notifications (Future)
```bash
npm install @capacitor/push-notifications
npm run cap:sync:ios
```

Then configure in Xcode and add code to handle notifications.

## 📝 Useful Commands

```bash
# Add iOS platform (first time only)
npm run cap:add:ios

# Sync web changes to iOS
npm run cap:sync:ios

# Open Xcode
npm run cap:open:ios

# Full build pipeline
npm run cap:build:ios

# Update Capacitor
npm install @capacitor/core@latest @capacitor/ios@latest @capacitor/cli@latest
npm run cap:sync:ios
```

## 🐛 Troubleshooting

### "Pod install failed"
```bash
cd ios/App
pod repo update
pod install
```

### "No development team selected"
- Open Xcode
- Select project → Signing & Capabilities
- Select your team from dropdown

### "App icon missing"
- Generate all required sizes using appicon.co
- Replace icons in `ios/App/App/Assets.xcassets/AppIcon.appiconset/`

### "Stuck on white screen"
- Check that your website is accessible
- Check `capacitor.config.ts` has correct URL
- Open Safari Web Inspector to debug
- In Simulator: Safari → Develop → Simulator → Your App

### App rejected by Apple
Common reasons:
- Missing privacy policy
- Crashes or bugs
- App too similar to website (rare for utility apps)
- Missing required metadata

## 📞 Next Steps

1. **Upgrade Node to v22+** (required)
2. **Run `npm run cap:add:ios`** to create the iOS project
3. **Open in Xcode** with `npm run cap:open:ios`
4. **Test on Simulator**
5. **Create App Store listing** in App Store Connect
6. **Generate required screenshots and icons**
7. **Submit for review**

## 🎉 Privacy Policy & Terms

You'll need these for App Store submission:

**Privacy Policy URL (required):**
Create a page at `https://www.hellochicago.co/privacy` explaining:
- What data you collect (location, search queries, etc.)
- How you use it
- Whether you share it
- How users can delete their data

**Terms of Service (recommended):**
Create a page at `https://www.hellochicago.co/terms`

Need help creating these? Let me know!

---

**Questions?** Just ask! I can help with any step of this process.
