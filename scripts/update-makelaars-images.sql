-- Update Makelaars Page Images
-- Run with: sqlite3 ra-demo-payload.db < scripts/update-makelaars-images.sql

-- 1. Update Hero Avatars (first 3 avatars)
UPDATE pages_blocks_makelaars_hero_avatars 
SET image_id = 56 
WHERE _parent_id = '690aa4a1d8948549a17d61ed' 
  AND _locale = 'nl' 
  AND _order = '1';

UPDATE pages_blocks_makelaars_hero_avatars 
SET image_id = 57 
WHERE _parent_id = '690aa4a1d8948549a17d61ed' 
  AND _locale = 'nl' 
  AND _order = '2';

UPDATE pages_blocks_makelaars_hero_avatars 
SET image_id = 58 
WHERE _parent_id = '690aa4a1d8948549a17d61ed' 
  AND _locale = 'nl' 
  AND _order = '3';

-- 2. Update BewezenSysteemSection decorative image
UPDATE pages_blocks_makelaars_bewezen_systeem_section 
SET decorative_image_id = 59 
WHERE _parent_id = 4 
  AND _locale = 'nl';

-- 3. Update ResultsBentoGrid results
-- DE BRABANT MAKELAAR (order 1) - logo + image
UPDATE pages_blocks_makelaars_results_bento_grid_results 
SET logo_image_id = 60, result_image_id = 61 
WHERE _parent_id = '690aa4a1d8948549a17d620d' 
  AND _locale = 'nl' 
  AND _order = '1';

-- MARCO VAN BARNEVELD (order 2) - image only
UPDATE pages_blocks_makelaars_results_bento_grid_results 
SET result_image_id = 62 
WHERE _parent_id = '690aa4a1d8948549a17d620d' 
  AND _locale = 'nl' 
  AND _order = '2';

-- THOMA POST (order 3) - image only
UPDATE pages_blocks_makelaars_results_bento_grid_results 
SET result_image_id = 63 
WHERE _parent_id = '690aa4a1d8948549a17d620d' 
  AND _locale = 'nl' 
  AND _order = '3';

-- Verify updates
SELECT 'Hero Avatars:' as section;
SELECT _order, alt, image_id FROM pages_blocks_makelaars_hero_avatars 
WHERE _parent_id = '690aa4a1d8948549a17d61ed' AND _locale = 'nl' AND _order IN ('1','2','3');

SELECT 'BewezenSysteem:' as section;
SELECT decorative_image_id FROM pages_blocks_makelaars_bewezen_systeem_section WHERE _parent_id = 4 AND _locale = 'nl';

SELECT 'Results:' as section;
SELECT _order, company, logo_image_id, result_image_id FROM pages_blocks_makelaars_results_bento_grid_results 
WHERE _parent_id = '690aa4a1d8948549a17d620d' AND _locale = 'nl';
