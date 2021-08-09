describe('Error Handling', () => {

    beforeEach(() => {
        cy.intercept('https://poetrydb.org/random', {statusCode: 500})
        cy.intercept('https://poetrydb.org/author', {statusCode: 500})
        cy.intercept('https://poetrydb.org/author/Henry David Thoreau')
    })

    it('Should display error message for 500 status code', () => {
        
          cy.visit('http://localhost:3000/')
          .contains('Errors are red, blue-screens of death are blue, Sorry we were unable to find this resource for you!')
      });


    it('Should display error message for 500 status code', () => {
      
        cy.visit('http://localhost:3000/poems')
        // .contains('Oops server is down! Please try again later.')
    });

});