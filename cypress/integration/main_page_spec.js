describe('Feeling lucky page', () => {
    beforeEach(() => {
        cy.intercept('https://poetrydb.org/random', {statusCode: 500})
        cy.visit('http://localhost:3000/')
    })

    it('Should contain header with zenbox text' , ()=> {

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