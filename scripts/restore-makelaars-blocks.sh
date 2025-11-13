#!/bin/bash
# Restore Makelaars blocks data from backup

BACKUP_DB="ra-demo-payload.db.backup-before-makelaars-fix"
CURRENT_DB="ra-demo-payload.db"

echo "📦 Restoring Makelaars blocks data from backup..."

# Get list of makelaars block tables
TABLES=$(sqlite3 $BACKUP_DB "SELECT name FROM sqlite_master WHERE type='table' AND name LIKE 'pages_blocks_makelaars_%' AND name NOT LIKE '_pages_v_%';")

for table in $TABLES; do
  echo "Copying data from $table..."
  
  # Export data from backup
  sqlite3 $BACKUP_DB ".mode insert $table" "SELECT * FROM $table;" > /tmp/${table}_data.sql 2>/dev/null
  
  # Import into current database
  sqlite3 $CURRENT_DB < /tmp/${table}_data.sql 2>/dev/null
  
  # Clean up
  rm /tmp/${table}_data.sql
done

echo "✅ Blocks data restored!"
echo "🔄 Refresh the page: http://localhost:3000/nl/makelaars"
