#!/bin/bash
# Drop all cases-related _order indices

sqlite3 ra-demo-payload.db <<EOF
SELECT name FROM sqlite_master 
WHERE type='index' 
AND name LIKE '%cases%' 
AND name LIKE '%order_idx';
EOF | while read index_name; do
  echo "Dropping: $index_name"
  sqlite3 ra-demo-payload.db "DROP INDEX IF EXISTS $index_name;"
done

echo "Done!"
