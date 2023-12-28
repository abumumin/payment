Feature: Testing Login for a Valid Admin User Login

A Valid Admin user should a glitch fee login exerience 

Scenario: A valid admin user should be able to login to payment-service
    When I insert the Valid Admin User email
    And I insert the Valid Admin User password
    And I click on the login button
    Then I should see the dashboard page