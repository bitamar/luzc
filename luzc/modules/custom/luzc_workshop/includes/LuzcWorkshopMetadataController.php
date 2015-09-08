<?php

class LuzcWorkshopMetadataController extends EntityDefaultMetadataController {
  public function entityPropertyInfo() {
    $info = parent::entityPropertyInfo();

    $info[$this->type]['properties']['teacher'] = array(
      'label' => t('Teacher'),
      'type' => 'user',
      'getter callback' => 'luzc_workshop_get_properties',
      'setter callback' => 'entity_property_verbatim_set',
      'schema field' => 'teacher',
    );

    $info[$this->type]['properties']['type'] = array(
      'label' => t('Workshop type'),
      'type' => 'taxonomy_term',
      'getter callback' => 'luzc_workshop_get_properties',
      'setter callback' => 'entity_property_verbatim_set',
      'schema field' => 'type',
    );

    return $info;
  }
}
