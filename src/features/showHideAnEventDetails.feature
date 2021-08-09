Feature: Show/Hide an Events details

  Scenario: An event element is collapsed by default
    Given The main page is loaded
    When The user is looking at an event
    Then The event’s details will be collapsed

  Scenario: User can expand an event to see its details
    Given The user is looking through the events
    When The user clicks a “show details” button
    Then Details for the event are expanded

  Scenario: User can collapse an event to hide it’s details
    Given The user has expanded an event’s details
    When The user clicks a “hide details” button
    Then The Event details will collapse
