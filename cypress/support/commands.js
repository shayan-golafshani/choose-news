Cypress.Commands.add('like_two_poems', () => {
    cy.intercept('GET', 'https://poetrydb.org/author', {
        statusCode: 200,
        fixture: 'authors.json'
        });

        cy.intercept('GET', 'https://poetrydb.org/author/Algernon%20Charles%20Swinburne', {
            statusCode: 200,
            fixture: 'poem.json'
            });

        cy.visit('http://localhost:3000/poems')

        cy.get('select').select('Algernon Charles Swinburne')
        cy.get('.favorite-btn').click({ multiple: true })

        cy.get('[href="/favorited-poems"] > button').should('contain', 'Fave poems').click()
})