Feature:	Specify Number of Events

  Scenario: When a user hasn’t specified a number, 32 is the default number
    Given The user is browsing some list of events
    When The user has not specified the number of events to show
    Then The number of events to show will default to 32

  Scenario: The user can change the number of events they want to see
    Given The user is browsing a list of events
    When The user enters in a number
    Then The number of events showing will change to the selected number
