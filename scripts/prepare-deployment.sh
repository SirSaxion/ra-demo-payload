#!/bin/bash

###############################################################################
# Deployment Preparation Script
# Prepares the app for VPS deployment - copies all necessary files
###############################################################################

set -e  # Exit on error

echo "🚀 Starting Deployment Preparation..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEPLOY_DIR="$PROJECT_ROOT/deployment"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

echo -e "${BLUE}📁 Project root: $PROJECT_ROOT${NC}"
echo -e "${BLUE}📦 Deploy folder: $DEPLOY_DIR${NC}"
echo ""

# Clean old deployment folder
if [ -d "$DEPLOY_DIR" ]; then
    echo -e "${YELLOW}🗑️  Cleaning old deployment folder...${NC}"
    rm -rf "$DEPLOY_DIR"
fi

# Create deployment structure
echo -e "${GREEN}📁 Creating deployment structure...${NC}"
mkdir -p "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR/public"
mkdir -p "$DEPLOY_DIR/src"

# Copy essential files
echo -e "${GREEN}📄 Copying essential files...${NC}"

# Root configuration files
echo "  → Root configs..."
cp "$PROJECT_ROOT/package.json" "$DEPLOY_DIR/"
cp "$PROJECT_ROOT/pnpm-lock.yaml" "$DEPLOY_DIR/" 2>/dev/null || echo "  ⚠️  No pnpm-lock.yaml found"
cp "$PROJECT_ROOT/yarn.lock" "$DEPLOY_DIR/" 2>/dev/null || echo "  ⚠️  No yarn.lock found"
cp "$PROJECT_ROOT/.npmrc" "$DEPLOY_DIR/" 2>/dev/null || true
cp "$PROJECT_ROOT/.yarnrc" "$DEPLOY_DIR/" 2>/dev/null || true
cp "$PROJECT_ROOT/tsconfig.json" "$DEPLOY_DIR/"
cp "$PROJECT_ROOT/next.config.mjs" "$DEPLOY_DIR/"
cp "$PROJECT_ROOT/postcss.config.mjs" "$DEPLOY_DIR/"
cp "$PROJECT_ROOT/components.json" "$DEPLOY_DIR/" 2>/dev/null || true
cp "$PROJECT_ROOT/middleware.ts" "$DEPLOY_DIR/" 2>/dev/null || true
cp "$PROJECT_ROOT/eslint.config.mjs" "$DEPLOY_DIR/" 2>/dev/null || true

# Copy .env.example (NOT .env for security!)
echo "  → Environment template..."
cp "$PROJECT_ROOT/.env.example" "$DEPLOY_DIR/"

# Copy entire src directory
echo "  → Source code..."
cp -r "$PROJECT_ROOT/src" "$DEPLOY_DIR/"

# Copy public folder (images, videos, static assets)
echo "  → Public assets..."
cp -r "$PROJECT_ROOT/public" "$DEPLOY_DIR/"

# Copy database (CRITICAL!)
echo -e "${GREEN}🗄️  Copying database...${NC}"
if [ -f "$PROJECT_ROOT/ra-demo-payload.db" ]; then
    cp "$PROJECT_ROOT/ra-demo-payload.db" "$DEPLOY_DIR/"
    echo -e "  ${GREEN}✅ Database copied: ra-demo-payload.db${NC}"
else
    echo -e "  ${YELLOW}⚠️  Warning: Database not found at root!${NC}"
fi

# Copy deployment specific files
echo -e "${GREEN}🐳 Copying deployment configs...${NC}"
if [ -f "$PROJECT_ROOT/Dockerfile" ]; then
    cp "$PROJECT_ROOT/Dockerfile" "$DEPLOY_DIR/"
    echo "  ✅ Dockerfile copied"
fi

if [ -f "$PROJECT_ROOT/docker-compose.yml" ]; then
    cp "$PROJECT_ROOT/docker-compose.yml" "$DEPLOY_DIR/"
    echo "  ✅ docker-compose.yml copied"
fi

if [ -f "$PROJECT_ROOT/docker-compose.prod.yml" ]; then
    cp "$PROJECT_ROOT/docker-compose.prod.yml" "$DEPLOY_DIR/"
    echo "  ✅ docker-compose.prod.yml copied"
fi

# Copy documentation
echo -e "${GREEN}📚 Copying documentation...${NC}"
cp "$PROJECT_ROOT/README.md" "$DEPLOY_DIR/" 2>/dev/null || true
cp "$PROJECT_ROOT/DEPLOY-VPS.md" "$DEPLOY_DIR/" 2>/dev/null || true
cp "$PROJECT_ROOT/DEPLOY-VPS-GUIDE.md" "$DEPLOY_DIR/" 2>/dev/null || true

# Create deployment info file
echo -e "${GREEN}📝 Creating deployment info...${NC}"
cat > "$DEPLOY_DIR/DEPLOYMENT-INFO.txt" << EOF
========================================
Deployment Package Information
========================================

Created: $(date)
From: $PROJECT_ROOT
Package: Real Accelerate Demo - Payload CMS

========================================
Database Status
========================================

Database file: ra-demo-payload.db
$(if [ -f "$DEPLOY_DIR/ra-demo-payload.db" ]; then
    echo "✅ Included in deployment"
    echo "Size: $(du -h "$DEPLOY_DIR/ra-demo-payload.db" | cut -f1)"
else
    echo "❌ NOT FOUND - CRITICAL!"
fi)

========================================
Required Environment Variables
========================================

Copy .env.example to .env and configure:

- PAYLOAD_SECRET=your-secret-key
- DATABASE_URI=file:./ra-demo-payload.db
- NEXT_PUBLIC_SERVER_URL=https://your-domain.com
- NODE_ENV=production

========================================
Installation Steps on VPS
========================================

1. Upload this folder to your VPS
2. Copy .env.example to .env
3. Configure environment variables in .env
4. Install dependencies: pnpm install
5. Build: pnpm build
6. Start: pnpm start

OR use Docker:

1. Upload folder to VPS
2. Configure .env
3. Run: docker-compose up -d

========================================
Media Files
========================================

Media files in /public/media/ are included.
Database references these files via:
  - pages.blocks[].image (Media ID)
  - Media collection stores file metadata

If images don't show:
1. Check database has correct Media entries
2. Check /public/media/ has actual files
3. Check file permissions (644 for files, 755 for dirs)

========================================
Post-Deployment Checklist
========================================

□ Database file present and readable
□ .env configured correctly
□ Dependencies installed (pnpm install)
□ App builds successfully (pnpm build)
□ App starts (pnpm start)
□ Homepage loads at /
□ Admin panel accessible at /admin
□ Images load correctly
□ All pages responsive

========================================
EOF

# Create .dockerignore if not exists
if [ ! -f "$DEPLOY_DIR/.dockerignore" ]; then
    echo -e "${GREEN}🐳 Creating .dockerignore...${NC}"
    cat > "$DEPLOY_DIR/.dockerignore" << EOF
node_modules
.next
.git
.env.local
*.log
EOF
fi

# Create .gitignore for deployment folder
echo -e "${GREEN}📝 Creating .gitignore...${NC}"
cat > "$DEPLOY_DIR/.gitignore" << EOF
# Dependencies
node_modules/
.pnp
.pnp.js

# Next.js
.next/
out/

# Environment
.env
.env.local
.env.*.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/

# Keep database in deployment!
!ra-demo-payload.db
EOF

# Calculate sizes
echo ""
echo -e "${BLUE}📊 Deployment Package Info:${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Total size: $(du -sh "$DEPLOY_DIR" | cut -f1)"
echo "Database: $(if [ -f "$DEPLOY_DIR/ra-demo-payload.db" ]; then du -h "$DEPLOY_DIR/ra-demo-payload.db" | cut -f1; else echo "NOT FOUND!"; fi)"
echo "Public folder: $(du -sh "$DEPLOY_DIR/public" | cut -f1)"
echo "Source code: $(du -sh "$DEPLOY_DIR/src" | cut -f1)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# List critical files
echo ""
echo -e "${BLUE}🔍 Critical Files Check:${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

check_file() {
    if [ -f "$DEPLOY_DIR/$1" ]; then
        echo -e "  ${GREEN}✅${NC} $1"
    else
        echo -e "  ${YELLOW}❌${NC} $1 (missing)"
    fi
}

check_file "ra-demo-payload.db"
check_file "package.json"
check_file "next.config.mjs"
check_file ".env.example"
check_file "src/app/layout.tsx"
check_file "src/payload.config.ts"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Success message
echo ""
echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║     ✅ DEPLOYMENT PACKAGE READY!       ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════╝${NC}"
echo ""
echo -e "${BLUE}📦 Location: $DEPLOY_DIR${NC}"
echo ""
echo -e "${YELLOW}📋 Next steps:${NC}"
echo "  1. Review DEPLOYMENT-INFO.txt"
echo "  2. Compress folder: tar -czf deployment.tar.gz deployment/"
echo "  3. Upload to VPS"
echo "  4. Extract and follow deployment guide"
echo ""
echo -e "${GREEN}🚀 Ready to ship!${NC}"
echo ""
