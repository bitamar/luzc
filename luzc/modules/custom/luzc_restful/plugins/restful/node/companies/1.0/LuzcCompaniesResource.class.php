<?php

/**
 * @file
 * Contains LuzcCompaniesResource.
 */

class LuzcCompaniesResource extends \LuzcEntityBaseNode {


  /**
   * Overrides \RestfulEntityBaseNode::publicFieldsInfo().
   */
  public function publicFieldsInfo() {
    $public_fields = parent::publicFieldsInfo();

    $public_fields['logo'] = array(
      'property' => 'field_company_logo',
      'image_styles' => array('thumbnail', 'medium', 'large'),
    );

    return $public_fields;
  }
}
