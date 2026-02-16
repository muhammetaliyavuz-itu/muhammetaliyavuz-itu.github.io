# Naval Architecture Portfolio Website

Modern, dark-themed portfolio website for Muhammet Ali Yavuz - Naval Architecture & Ocean Engineering.

## 🚀 Features

- **Dark Theme** - Professional dark color scheme optimized for technical content
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Subtle animations and transitions throughout
- **CFD Project Showcase** - Dedicated section for computational fluid dynamics projects
- **Interactive Elements** - Custom cursor, parallax effects, and hover animations
- **Performance Optimized** - Fast loading, lightweight code

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Dark theme styles
├── js/
│   └── script.js          # Interactive features
├── images/
│   ├── projects/          # Project screenshots (CFD visualizations)
│   │   ├── suboff-streamlines.jpg
│   │   ├── kcs-wave.jpg
│   │   └── offshore-pressure.jpg
│   ├── hero/              # Hero section images
│   └── background/        # Background images
├── assets/
│   ├── fonts/             # Custom fonts (if any)
│   └── icons/             # Custom icons
└── docs/
    └── CV_Muhammet_Ali_Yavuz.pdf  # Your CV PDF
```

## 🎨 Adding Your CFD Images

### From Your Resume Appendix:

1. **DARPA SUBOFF Streamlines** (Figure A5)
   - Save as: `images/projects/suboff-streamlines.jpg`
   - Recommended size: 1200x800px

2. **KCS Wave Pattern** (Figure A3)
   - Save as: `images/projects/kcs-wave.jpg`
   - Recommended size: 1200x800px

3. **Offshore Platform Pressure** (Figure A1)
   - Save as: `images/projects/offshore-pressure.jpg`
   - Recommended size: 1200x800px

### Image Optimization Tips:

- Export at 72-96 DPI (web resolution)
- Use JPG for photos/renders
- Compress images (use tools like TinyPNG or ImageOptim)
- Keep file sizes under 500KB for fast loading

## 📝 Customization Guide

### 1. Update Contact Information
In `index.html`, search for:
- Email: `yavuzmu21@itu.edu.tr`
- Phone: `+90 551 092 9667`
- LinkedIn: `in/yavuzitu`
- GitHub: `muhammetaliyavuz-itu`

### 2. Add Your CV
Place your PDF CV in `docs/CV_Muhammet_Ali_Yavuz.pdf`

### 3. Customize Colors
In `css/style.css`, modify CSS variables:
```css
:root {
    --accent-cyan: #06b6d4;      /* Primary accent color */
    --accent-orange: #f97316;     /* Secondary accent */
    --accent-blue: #3b82f6;       /* Third accent */
}
```

### 4. Update Project Details
Edit the project cards in `index.html` to match your actual data.

## 🌐 Deployment to GitHub Pages

### Method 1: Direct Upload
```bash
# Clone your GitHub Pages repo
git clone https://github.com/muhammetaliyavuz-itu/muhammetaliyavuz-itu.github.io.git

# Copy all files from portfolio folder
cp -r portfolio/* muhammetaliyavuz-itu.github.io/

# Commit and push
cd muhammetaliyavuz-itu.github.io
git add .
git commit -m "Update portfolio with dark theme"
git push origin main
```

### Method 2: Using VSCode
1. Open the portfolio folder in VSCode
2. Install "GitHub Pull Requests and Issues" extension
3. Initialize Git: `git init`
4. Add remote: `git remote add origin https://github.com/muhammetaliyavuz-itu/muhammetaliyavuz-itu.github.io.git`
5. Stage all files: `git add .`
6. Commit: `git commit -m "Initial commit - Dark theme portfolio"`
7. Push: `git push -u origin main`

### Method 3: GitHub Desktop
1. Open GitHub Desktop
2. File → Add Local Repository → Select portfolio folder
3. Commit changes
4. Publish to GitHub

## 🔧 Local Development

### Simple Method (No Server Needed)
Just open `index.html` in your browser!

### With Live Server (Recommended)
1. Install VSCode extension "Live Server"
2. Right-click `index.html`
3. Click "Open with Live Server"
4. Site opens at `http://localhost:5500`

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 🎯 Font Information

Using Google Fonts:
- **Syne** - Headings (modern, bold)
- **IBM Plex Mono** - Body text (technical, readable)
- **Space Mono** - Alternative monospace

No downloads needed - loaded from Google Fonts CDN.

## 📊 Performance Checklist

Before deploying:
- [ ] Compress all images
- [ ] Add your actual CFD visualizations
- [ ] Update CV PDF
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify contact information

## 🐛 Common Issues

**Images not showing:**
- Check file paths match exactly (case-sensitive!)
- Verify images are in correct folders
- Check file extensions (.jpg, .png)

**Fonts not loading:**
- Check internet connection (fonts load from Google)
- Verify Google Fonts link in `<head>`

**Animations not working:**
- Check JavaScript file is linked correctly
- Open browser console (F12) to see errors

## 📄 License

Personal portfolio website - all rights reserved.

## 🤝 Credits

Designed and developed by Muhammet Ali Yavuz
Built with HTML, CSS, and JavaScript

---

**Last Updated:** February 2025

**Live Site:** https://muhammetaliyavuz-itu.github.io

For questions or issues, contact: yavuzmu21@itu.edu.tr
