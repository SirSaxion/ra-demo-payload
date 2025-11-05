#!/bin/bash

# Script to add localized: true to all text/textarea/array fields in projectontwikkelaars blocks
# This is a quick fix to enable proper localization

echo "🔧 Adding localized: true to all projectontwikkelaars blocks..."

# Find all projectontwikkelaars block files
BLOCK_DIR="/Users/sirwolfski/Desktop/Recent Projects/ra-van-eigencms-naar-payload/ra-demo-payload/src/blocks"

# List of files to update
FILES=(
  "ProjectontwikkelaarsHero.ts"
  "ProjectontwikkelaarsTrustStrip.ts"
  "ProjectontwikkelaarsPainPointsSection.ts"
  "ProjectontwikkelaarsMethodologySection.ts"
  "ProjectontwikkelaarsBewezenAanpakSection.ts"
  "ProjectontwikkelaarsDubaiSuccessStorySection.ts"
  "ProjectontwikkelaarsVoorWieIsDitSection.ts"
  "ProjectontwikkelaarsStrategieSessionCTA.ts"
)

for file in "${FILES[@]}"; do
  filepath="$BLOCK_DIR/$file"
  if [ -f "$filepath" ]; then
    echo "📝 Processing $file..."
    
    # Create a backup
    cp "$filepath" "$filepath.backup"
    
    # Add localized: true to text fields (simple pattern matching)
    # This is a basic approach - you might need to verify manually
    sed -i '' 's/type: '\''text'\'',$/type: '\''text'\'',\n      localized: true,/g' "$filepath"
    sed -i '' 's/type: '\''textarea'\'',$/type: '\''textarea'\'',\n      localized: true,/g' "$filepath"
    sed -i '' 's/type: '\''array'\'',$/type: '\''array'\'',\n      localized: true,/g' "$filepath"
    
    echo "✅ Updated $file"
  else
    echo "⚠️  File not found: $file"
  fi
done

echo ""
echo "🎉 Done! Please review the changes and remove .backup files if everything looks good."
echo "⚠️  Note: You may need to manually adjust some fields that shouldn't be localized (like hrefs, icons, etc.)"
