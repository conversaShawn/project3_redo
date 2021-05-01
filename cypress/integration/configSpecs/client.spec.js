/// <reference types="cypress" />

describe('Testing Client Config', () => {
	it('Connects to react client', () => {
		cy.visit('/');
		cy.log('Frontend works!');
	});
});