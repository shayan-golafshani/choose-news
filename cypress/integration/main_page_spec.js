describe('Feeling lucky page', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://poetrydb.org/random', {
        statusCode: 200,
        fixture: 'random.json'
        });
        cy.visit('http://localhost:3000/')
    })

    it('Should contain header with zenbox text' , ()=> {
        cy.contains('Tha-Zen');
    })

    it('Should contain header 3 buttons inside the header' , ()=> {

    })

    it('Should display a rotating piece of art' , ()=> {

    })

    it('Should display a poem' , ()=> {

    })

    it('Should display a React player component' , ()=> {

    })

});