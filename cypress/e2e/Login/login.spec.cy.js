import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
let data
before(() =>{
	cy.fixture('elements').then((el) => {
		data = el
	})
})
Given(/^I launch the paymen-service site$/, () => {
	cy.visit('/')
});

When(/^I insert the Valid Admin User email$/, () => {
	cy.InsertAnyText(data.emailField, data.emailText)
});

Then(/^I insert the Valid Admin User password$/, () => {
	cy.InsertAnyText(data.passwordField, data.passwordText)
});

When(/^I click on the login button$/, () => {
	cy.clickElement(data.loginButton)
});

Then(/^I should see the dashboard page$/, () => {
	return true;
});

