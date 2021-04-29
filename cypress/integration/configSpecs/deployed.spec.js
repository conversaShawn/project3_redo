/// <reference types="cypress" />

describe('Testing Deployed App', () => {
	it('Run this baby, I said!', () => {
		cy.visit('/');
		cy.log('This is for demo purpose so I am not doing assertion!');
	});
});
