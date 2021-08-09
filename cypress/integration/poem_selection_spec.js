describe('Poem selection page spec', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://poetrydb.org/author', {
        statusCode: 200,
        fixture: 'authors.json'
        });
        cy.visit('http://localhost:3000/poem')
    })

    it('Should contain header with zenbox text' , ()=> {
        cy.contains('Tha-Zen');
    })

    it('Should contain blah', () => {
        
    })
})