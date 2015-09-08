<?php

$plugin = array(
  'label' => t('Workshops'),
  'resource' => 'workshops',
  'name' => 'workshops__1_0',
  'entity_type' => 'workshop',
  'bundle' => 'workshop',
  'description' => t('Export workshops.'),
  'class' => 'LuzcWorkshopsResource',
  'authentication_types' => TRUE,
  'authentication_optional' => TRUE,
);
