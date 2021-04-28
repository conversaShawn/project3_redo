/// <reference types="cypress" />

describe('Run this baby!', () => {
	it('Run this baby, I said!', () => {
		cy.visit('/');
		cy.log('This is for demo purpose so I am not doing assertion!');
	});
});
