/// <reference types="cypress" />

describe('Testing Server Config', () => {
	it('Connects to the server', () => {
		cy.visit('/');
		cy.log('Backend works!');
	});
});