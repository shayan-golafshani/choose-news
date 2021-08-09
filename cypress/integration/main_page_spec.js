describe('Feeling lucky page', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://poetrydb.org/random', {
        statusCode: 200,
        fixture: 'random.json'
        });
        cy.visit('http://localhost:3000/')
    })

    it('Should contain header with zenbox text' , ()=> {
        cy.contains('.title-text', 'Tha-Zen');
        // cy.get('.title-text')
    })

    it('Should contain header 3 buttons inside the header', () => {
        cy.get('.active > button').should('contain', 'Feeling lucky!')
        cy.get('[href="/poems"] > button').should('contain', 'Search poems')
        cy.get('[href="/favorited-poems"] > button').should('contain', 'Fave poems')
    })

    it('Should display a rotating piece of art' , ()=> {
        cy.get('.App-logo').should("have.attr", "src")
    })

    it('Should display a poem' , ()=> {

    })

    it('Should display a React player component' , ()=> {

    })

});