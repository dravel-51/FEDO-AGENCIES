# 🚀 Quick Deployment Checklist for cPanel

## Before Deployment
- [ ] Run `npm install` locally
- [ ] Run `npm run build` successfully
- [ ] Test with `npm run start` locally
- [ ] Verify all pages load at http://localhost:3000

## Files to Upload
- [ ] All source files (src/, public/, etc.)
- [ ] .next/ directory (build output)
- [ ] package.json and package-lock.json
- [ ] server.js (updated version)
- [ ] Configuration files (next.config.js, tailwind.config.js, etc.)

## On cPanel Server
- [ ] Upload files to `/public_html/fedoagencies/`
- [ ] Run `npm ci --production` in terminal
- [ ] Run `npm run build:production`
- [ ] Verify .next/ directory exists
- [ ] Configure Node.js app in cPanel
- [ ] Set environment variables (NODE_ENV=production, PORT=3000, HOSTNAME=0.0.0.0)
- [ ] Start the application
- [ ] Test the live website

## Verification
- [ ] Website loads without errors
- [ ] All pages are accessible
- [ ] Images display correctly
- [ ] No console errors in browser
- [ ] Mobile responsiveness works

## If Issues Occur
1. Check cPanel Node.js app logs
2. Verify all dependencies are installed
3. Ensure .next/ directory exists and has content
4. Check file permissions (755 for directories, 644 for files)
5. Restart the Node.js application in cPanel