Feature: Testing Login Can access Client Management 

A Valid Admin Should have access to Client Management
Scenario: Admin user should be able to access Client Management
    When I insert the Valid Admin User email
    And I insert the Valid Admin User password
    And I click on the login button
    And I should be able to click Client Management tab
    And I should see the client management dashboard
    And I click on Action Button