<?php
/**
 * @file
 * luzc_workshop.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function luzc_workshop_taxonomy_default_vocabularies() {
  return array(
    'workshop_types' => array(
      'name' => 'Workshop types',
      'machine_name' => 'workshop_types',
      'description' => '',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
  );
}
