# cPanel Deployment Guide for FEDO AGENCIES Next.js App

## 🚨 Issues Fixed

The following critical issues have been resolved:

1. **ES Module Import Error**: Converted server.js from ES6 imports to CommonJS requires
2. **Missing Build Files**: Added proper build process and error handling
3. **cPanel Configuration**: Added cPanel-specific environment variables and configuration
4. **Production Scripts**: Added deployment-specific npm scripts

## 📋 Pre-Deployment Checklist

### 1. Local Preparation

Before deploying to cPanel, ensure these steps are completed locally:

```bash
# 1. Install dependencies
npm install

# 2. Build the application
npm run build

# 3. Test production build locally
npm run start

# 4. Verify all pages load correctly
# Visit: http://localhost:3000
```

### 2. Files to Upload to cPanel

Upload the following files and folders to your cPanel hosting:

```
📁 Your cPanel Directory (/home/angffpot/public_html/fedoagencies/)
├── 📁 .next/                    # Generated build files (REQUIRED)
├── 📁 public/                   # Static assets
├── 📁 src/                      # Source code
├── 📁 node_modules/             # Dependencies (install on server)
├── 📄 server.js                 # Fixed server file
├── 📄 package.json              # Updated with deployment scripts
├── 📄 package-lock.json         # Lock file
├── 📄 next.config.js            # Next.js configuration
├── 📄 tailwind.config.js        # Tailwind configuration
├── 📄 postcss.config.js         # PostCSS configuration
├── 📄 tsconfig.json             # TypeScript configuration
└── 📄 .cpanel.yml               # cPanel deployment configuration
```

## 🚀 Deployment Steps

### Step 1: Upload Files

1. **Compress your project** (excluding node_modules):
   ```bash
   # Create a zip file excluding node_modules
   zip -r fedo-agencies.zip . -x "node_modules/*" ".git/*" ".trae/*"
   ```

2. **Upload to cPanel**:
   - Go to cPanel File Manager
   - Navigate to `/public_html/fedoagencies/`
   - Upload and extract the zip file

### Step 2: Install Dependencies

1. **Access Terminal in cPanel**:
   - Go to cPanel → Terminal
   - Navigate to your app directory:
     ```bash
     cd public_html/fedoagencies
     ```

2. **Install Node.js dependencies**:
   ```bash
   # Install production dependencies
   npm ci --production
   
   # Or if npm ci fails, use:
   npm install --production
   ```

### Step 3: Build the Application

```bash
# Build for production
npm run build:production

# Verify .next directory was created
ls -la .next/
```

### Step 4: Configure Node.js App in cPanel

1. **Go to cPanel → Node.js Apps**
2. **Create New App**:
   - **Node.js Version**: Select latest available (preferably 18.x or higher)
   - **Application Mode**: Production
   - **Application Root**: `/public_html/fedoagencies`
   - **Application URL**: Your domain or subdomain
   - **Application Startup File**: `server.js`

3. **Environment Variables** (Add these in cPanel Node.js App settings):
   ```
   NODE_ENV=production
   PORT=3000
   HOSTNAME=0.0.0.0
   ```

### Step 5: Start the Application

1. **In cPanel Node.js Apps**, click **Start** on your application
2. **Monitor logs** for any errors
3. **Test the application** by visiting your domain

## 🔧 Troubleshooting

### Common Issues and Solutions

#### 1. "Cannot find package 'next'" Error
**Solution**: Ensure dependencies are installed on the server:
```bash
cd /home/angffpot/public_html/fedoagencies
npm install next react react-dom
```

#### 2. "Missing .next/BUILD_ID" Error
**Solution**: Build the application on the server:
```bash
npm run build
# Verify build files exist
ls -la .next/
```

#### 3. "Module not found" Errors
**Solution**: Install missing dependencies:
```bash
npm install
# Or for specific packages:
npm install lucide-react @hookform/resolvers zod
```

#### 4. Port/Hostname Issues
**Solution**: Use the cPanel-specific start script:
```bash
npm run start:cpanel
```

#### 5. Permission Errors
**Solution**: Fix file permissions:
```bash
chmod -R 755 /home/angffpot/public_html/fedoagencies
chmod +x server.js
```

## 📊 Verification Steps

After deployment, verify these items:

### 1. Application Status
- [ ] Node.js app shows "Running" in cPanel
- [ ] No errors in application logs
- [ ] Server responds on configured port

### 2. Page Accessibility
- [ ] Home page loads: `https://yourdomain.com/`
- [ ] All routes work correctly
- [ ] Static assets load properly
- [ ] Images display correctly

### 3. Performance Check
- [ ] Page load times are acceptable
- [ ] No console errors in browser
- [ ] Mobile responsiveness works

## 🔄 Updating the Application

For future updates:

1. **Local changes**:
   ```bash
   npm run build
   npm run start  # Test locally
   ```

2. **Upload changes**:
   - Upload modified files via File Manager
   - Or use Git deployment if available

3. **Rebuild on server**:
   ```bash
   cd /home/angffpot/public_html/fedoagencies
   npm run build:production
   ```

4. **Restart application**:
   - In cPanel Node.js Apps, click "Restart"

## 📞 Support

If you encounter issues:

1. **Check application logs** in cPanel Node.js Apps
2. **Verify file permissions** are correct
3. **Ensure all dependencies** are installed
4. **Check Node.js version** compatibility
5. **Contact your hosting provider** for server-specific issues

## 🎯 Key Changes Made

### server.js Updates:
- ✅ Converted ES6 imports to CommonJS requires
- ✅ Added cPanel-specific environment variables
- ✅ Improved error handling and logging
- ✅ Added graceful shutdown handling
- ✅ Added hostname configuration for cPanel

### package.json Updates:
- ✅ Added `start:cpanel` script for cPanel hosting
- ✅ Added `build:production` script
- ✅ Added `deploy:prepare` script for automated deployment

### Configuration:
- ✅ Updated .cpanel.yml for automated deployment
- ✅ Added proper Next.js configuration for production

Your Next.js application is now properly configured for cPanel deployment! 🎉

## 📋 Pre-Deployment Checklist

### 1. Local Preparation

Before deploying to cPanel, ensure these steps are completed locally:

```bash
# 1. Install dependencies
npm install

# 2. Build the application
npm run build

# 3. Test production build locally
npm run start

# 4. Verify all pages load correctly
# Visit: http://localhost:3000
```

### 2. Files to Upload to cPanel

Upload the following files and folders to your cPanel hosting:

```
📁 Your cPanel Directory (/home/angffpot/public_html/fedoagencies/)
├── 📁 .next/                    # Generated build files (REQUIRED)
├── 📁 public/                   # Static assets
├── 📁 src/                      # Source code
├── 📁 node_modules/             # Dependencies (install on server)
├── 📄 server.js                 # Fixed server file
├── 📄 package.json              # Updated with deployment scripts
├── 📄 package-lock.json         # Lock file
├── 📄 next.config.js            # Next.js configuration
├── 📄 tailwind.config.js        # Tailwind configuration
├── 📄 postcss.config.js         # PostCSS configuration
├── 📄 tsconfig.json             # TypeScript configuration
└── 📄 .cpanel.yml               # cPanel deployment configuration
```

## 🚀 Deployment Steps

### Step 1: Upload Files

1. **Compress your project** (excluding node_modules):
   ```bash
   # Create a zip file excluding node_modules
   zip -r fedo-agencies.zip . -x "node_modules/*" ".git/*" ".trae/*"
   ```

2. **Upload to cPanel**:
   - Go to cPanel File Manager
   - Navigate to `/public_html/fedoagencies/`
   - Upload and extract the zip file

### Step 2: Install Dependencies

1. **Access Terminal in cPanel**:
   - Go to cPanel → Terminal
   - Navigate to your app directory:
     ```bash
     cd public_html/fedoagencies
     ```

2. **Install Node.js dependencies**:
   ```bash
   # Install production dependencies
   npm ci --production
   
   # Or if npm ci fails, use:
   npm install --production
   ```

### Step 3: Build the Application

```bash
# Build for production
npm run build:production

# Verify .next directory was created
ls -la .next/
```

### Step 4: Configure Node.js App in cPanel

1. **Go to cPanel → Node.js Apps**
2. **Create New App**:
   - **Node.js Version**: Select latest available (preferably 18.x or higher)
   - **Application Mode**: Production
   - **Application Root**: `/public_html/fedoagencies`
   - **Application URL**: Your domain or subdomain
   - **Application Startup File**: `server.js`

3. **Environment Variables** (Add these in cPanel Node.js App settings):
   ```
   NODE_ENV=production
   PORT=3000
   HOSTNAME=0.0.0.0
   ```

### Step 5: Start the Application

1. **In cPanel Node.js Apps**, click **Start** on your application
2. **Monitor logs** for any errors
3. **Test the application** by visiting your domain

## 🔧 Troubleshooting

### Common Issues and Solutions

#### 1. "Cannot find package 'next'" Error
**Solution**: Ensure dependencies are installed on the server:
```bash
cd /home/angffpot/public_html/fedoagencies
npm install next react react-dom
```

#### 2. "Missing .next/BUILD_ID" Error
**Solution**: Build the application on the server:
```bash
npm run build
# Verify build files exist
ls -la .next/
```

#### 3. "Module not found" Errors
**Solution**: Install missing dependencies:
```bash
npm install
# Or for specific packages:
npm install lucide-react @hookform/resolvers zod
```

#### 4. Port/Hostname Issues
**Solution**: Use the cPanel-specific start script:
```bash
npm run start:cpanel
```

#### 5. Permission Errors
**Solution**: Fix file permissions:
```bash
chmod -R 755 /home/angffpot/public_html/fedoagencies
chmod +x server.js
```

## 📊 Verification Steps

After deployment, verify these items:

### 1. Application Status
- [ ] Node.js app shows "Running" in cPanel
- [ ] No errors in application logs
- [ ] Server responds on configured port

### 2. Page Accessibility
- [ ] Home page loads: `https://yourdomain.com/`
- [ ] All routes work correctly
- [ ] Static assets load properly
- [ ] Images display correctly

### 3. Performance Check
- [ ] Page load times are acceptable
- [ ] No console errors in browser
- [ ] Mobile responsiveness works

## 🔄 Updating the Application

For future updates:

1. **Local changes**:
   ```bash
   npm run build
   npm run start  # Test locally
   ```

2. **Upload changes**:
   - Upload modified files via File Manager
   - Or use Git deployment if available

3. **Rebuild on server**:
   ```bash
   cd /home/angffpot/public_html/fedoagencies
   npm run build:production
   ```

4. **Restart application**:
   - In cPanel Node.js Apps, click "Restart"

## 📞 Support

If you encounter issues:

1. **Check application logs** in cPanel Node.js Apps
2. **Verify file permissions** are correct
3. **Ensure all dependencies** are installed
4. **Check Node.js version** compatibility
5. **Contact your hosting provider** for server-specific issues

## 🎯 Key Changes Made

### server.js Updates:
- ✅ Converted ES6 imports to CommonJS requires
- ✅ Added cPanel-specific environment variables
- ✅ Improved error handling and logging
- ✅ Added graceful shutdown handling
- ✅ Added hostname configuration for cPanel

### package.json Updates:
- ✅ Added `start:cpanel` script for cPanel hosting
- ✅ Added `build:production` script
- ✅ Added `deploy:prepare` script for automated deployment

### Configuration:
- ✅ Updated .cpanel.yml for automated deployment
- ✅ Added proper Next.js configuration for production

Your Next.js application is now properly configured for cPanel deployment! 🎉