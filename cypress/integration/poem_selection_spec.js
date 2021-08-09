describe('Poem selection page spec', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://poetrydb.org/author', {
        statusCode: 200,
        fixture: 'authors.json'
        });
        cy.visit('http://localhost:3000/poems')
    })

    it('Should contain header with zenbox text' , ()=> {
        cy.contains('.title-text', 'Tha-Zen');
    })

    it('Should contain a select with 14 authors', () => {
        cy.get('select').select('Algernon Charles Swinburne')
    })


    it('Should contain a select with 14 authors', () => {
        cy.intercept('GET', 'https://poetrydb.org/author/Algernon%20Charles%20Swinburne', {
            statusCode: 200,
            fixture: 'poem.json'
            });

        cy.wait(1000);
        cy.get('select').select('Algernon Charles Swinburne')
    })
})