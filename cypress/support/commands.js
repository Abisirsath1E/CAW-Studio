// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('fillTableWithJsonData', (jsonData) => {
    const jsonString = JSON.stringify(jsonData);
  
    cy.get('summary').click();
    cy.get('#jsondata').clear();
    cy.get('#jsondata').type(jsonString, { parseSpecialCharSequences: false });
    cy.get('#refreshtable').click();
  });
  
  Cypress.Commands.add('assertTableDataByColumnName', ( jsonData, columnName) => {
    // Define a mapping of column names to their respective indices
    const columnIndexMap = {
      name: 1,
      age: 2,
      gender: 3,
    };
  
    // Get the column index based on the provided columnName
    const columnIndex = columnIndexMap[columnName];
  
    // Create a selector for the specified column index
    const columnSelector = `tr td:nth-child(${columnIndex})`;
  
    cy.get(columnSelector).each(($cell, index) => {
      expect($cell.text()).to.equal(jsonData[index][columnName].toString());
    });
  });
  
