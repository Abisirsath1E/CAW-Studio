describe("Data driven testing", () => {
  before(() => {
    cy.visit("https://testpages.herokuapp.com/styled/tag/dynamic-table.html");
  });

  it("Should use multiple values from Json", () => {
    const jsonData = [
      {"name": "Bob", "age": 20, "gender": "male"},
      {"name": "George", "age": 42, "gender": "male"},
      {"name": "Sara", "age": 42, "gender": "female"},
      {"name": "Conor", "age": 40, "gender": "male"},
      {"name": "Jennifer", "age": 42, "gender": "female"}
  ];

    cy.fillTableWithJsonData(jsonData);

     // For example, to validate the "name" column:
     cy.assertTableDataByColumnName(jsonData, 'name');

     // To validate the "age" column:
     cy.assertTableDataByColumnName( jsonData, 'age');
 
     // To validate the "gender" column:
     cy.assertTableDataByColumnName( jsonData, 'gender')
  });
});
