#!/bin/bash
# Script to safely archive old migration scripts
# Run with: bash scripts/cleanup-old-scripts.sh

echo "🗑️  Migration Scripts Cleanup"
echo "================================"
echo ""

# Create archive directory
echo "📁 Creating archive directory..."
mkdir -p scripts/archive
echo "✅ Archive directory created"
echo ""

# Count files to be archived
OLD_MJS_COUNT=$(ls scripts/*.mjs 2>/dev/null | wc -l)
OLD_TS_COUNT=2  # migrate-home.ts and migrate-homepage-full.ts

echo "📊 Files to archive:"
echo "   - .mjs scripts: $OLD_MJS_COUNT"
echo "   - Old .ts scripts: $OLD_TS_COUNT"
echo "   - Total: $((OLD_MJS_COUNT + OLD_TS_COUNT))"
echo ""

# Ask for confirmation
read -p "❓ Do you want to move these to scripts/archive/? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo ""
    echo "🚚 Moving files to archive..."
    
    # Move .mjs files
    if [ $OLD_MJS_COUNT -gt 0 ]; then
        mv scripts/*.mjs scripts/archive/ 2>/dev/null
        echo "✅ Moved $OLD_MJS_COUNT .mjs files"
    fi
    
    # Move old TypeScript files
    if [ -f scripts/migrate-home.ts ]; then
        mv scripts/migrate-home.ts scripts/archive/
        echo "✅ Moved migrate-home.ts"
    fi
    
    if [ -f scripts/migrate-homepage-full.ts ]; then
        mv scripts/migrate-homepage-full.ts scripts/archive/
        echo "✅ Moved migrate-homepage-full.ts"
    fi
    
    echo ""
    echo "🎉 Cleanup complete!"
    echo ""
    echo "📂 Archived files are in: scripts/archive/"
    echo ""
    echo "✅ Active scripts remaining:"
    echo "   - migrate-cases.ts"
    echo "   - migrate-over-ons.ts"
    echo "   - TEMPLATE-migrate-page.ts"
    echo "   - README-MIGRATION-SCRIPTS.md"
    echo ""
else
    echo ""
    echo "❌ Cleanup cancelled. No files were moved."
    echo ""
fi
