Feature: Upon Login Valid Admin User Should be able to access Gateway

A Valid Admin user should should have access to the Gateway

Scenario: A valid admin user should have access to the Gateway
    When I insert the Valid Admin User email
    And I insert the Valid Admin User password
    And I click on the login button
    And I should be able to access and click Gateway
    And I should be able to click on Transfer
    And I should be able to click on Virtual Account
    Then I should see the Virtual account page page