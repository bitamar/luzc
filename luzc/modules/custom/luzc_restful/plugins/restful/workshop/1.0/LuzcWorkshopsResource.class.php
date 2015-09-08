<?php

class LuzcWorkshopsResource extends \RestfulEntityBase {

  public function publicFieldsInfo() {
    $public_fields = parent::publicFieldsInfo();

    unset($public_fields['label']);

    $public_fields['teacher'] = array(
      'property' => 'teacher',
      'resource' => array('user' => array('name' => 'users')),
    );

    $public_fields['date'] = array('property' => 'date');

    $public_fields['start_time'] = array('property' => 'start_time');

    $public_fields['end_time'] = array('property' => 'end_time');

    $public_fields['type'] = array(
      'property' => 'type',
      'sub_property' => 'name',
    );

    $public_fields['participants'] = array(
      'callback' => array($this, 'loadParticipants'),
    );

    return $public_fields;
  }

  protected function loadParticipants($wrapper) {
    $select = db_select('workshop_participants', 'wp');
    $select->addField('wp', 'participant');
    $result = $select
      ->condition('workshop', $wrapper->getIdentifier())
      ->condition('active', TRUE)
      ->execute()
      ->fetchAllKeyed();

    $participants = array();
    foreach (user_load_multiple(array_keys($result)) as $account) {
      $participants[] = $account->name;
    }
    return $participants;
  }

  /**
   * Overrides RestfulEntityBase::getQueryForList().
   *
   * Add dates filter.
   */
  public function getEntityFieldQuery() {
    $request = $this->getRequest();
    $query = parent::getEntityFieldQuery();

    if (empty($request['from_date'])) {
      throw new \RestfulBadRequestException('Missing from_date parameter.');
    }
    if (!self::validDate($request['from_date'])) {
      throw new \RestfulBadRequestException('Wrong from_date format. Expecting yyyy-mm-dd.');
    }
    $query->propertyCondition('date', $request['from_date'], '>=');

    if (empty($request['until_date'])) {
      throw new \RestfulBadRequestException('Missing until_date parameter.');
    }
    if (!self::validDate($request['until_date'])) {
      throw new \RestfulBadRequestException('Wrong until_date format. Expecting yyyy-mm-dd.');
    }
    $query->propertyCondition('date', $request['until_date'], '<=');

    return $query;
  }

  /**
   * Validate a date string.
   *
   * @param string $date
   *   A date string
   *
   * @return bool
   *   Whether the date is formatted as yyyy-mm-dd.
   */
  static private function validDate($date) {
    return preg_match('/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/', $date);
  }

}
