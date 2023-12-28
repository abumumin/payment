
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

// Then(/^I should see the dashboard page$/, () => {
// 	return true;
// });


// When(/^ Admin user Login$/, () => {
// 	return true;
// });

When(/^I should be able to click Client Management tab$/, () => {
	cy.clickElement(data.clientManagement)
});

Then(/^I should see the client management dashboard$/, () => {
	return true;
});
// When(/^I should be able to click on Create Client Management tab$/, () => {
//     //cy.focus().click()
// 	cy.contains('+ Create Client').click({force: true})
//     //cy.get('[class^=hidden]').click({force: true})
//     //cy.clickElement(data.createclientButton)
//     cy.get('span').contains('Create Client').should('have.attr', [xpath='1'], 'Create Client')
// });

When(/^I click on Action Button$/, () => {
	cy.clickElement(data.clientMgmtAction)
});