# Install React Icons

## You need to install react-icons package

### Option 1: Using npm (Recommended)
Open a **Command Prompt** (not PowerShell) and run:
```cmd
npm install react-icons
```

### Option 2: Using PowerShell with Bypass
If you must use PowerShell, run this first:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install react-icons
```

### Option 3: Manual Installation
1. Open Command Prompt as Administrator
2. Navigate to your project:
   ```cmd
   cd C:\Users\shilp\snooker-website
   ```
3. Run:
   ```cmd
   npm install react-icons
   ```

## After Installation

Once react-icons is installed:
1. Restart your dev server (Ctrl+C, then `npm run dev`)
2. Refresh your browser

## What Changed

### 1. Hero Section CTA Button
- Changed from white button to **blue button** (primary-600)
- Changed glow effect from amber to blue
- Button now matches the primary color scheme

### 2. Footer Social Media Icons
- Replaced emoji icons with **React Icons**
- Added hover scale effect
- Professional icon appearance
- Icons: Facebook, Twitter, Instagram, YouTube, LinkedIn

## Verify Installation

After installing, check if it worked:
```cmd
npm list react-icons
```

Should show: `react-icons@5.x.x`
