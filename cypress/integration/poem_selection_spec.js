describe.skip('Poem selection page spec', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://poetrydb.org/author', {
        statusCode: 200,
        fixture: 'authors.json'
        });

        cy.intercept('GET', 'https://poetrydb.org/author/Algernon%20Charles%20Swinburne', {
            statusCode: 200,
            fixture: 'poem.json'
            });

        cy.visit('http://localhost:3000/poems')
    })

    it('Should contain header with zenbox text' , ()=> {
        cy.contains('.title-text', 'Tha-Zen');
    })

    it('Should contain a select with 14 authors', () => {
        cy.get('select').select('Algernon Charles Swinburne')
    })


    it('Should contain two stubbed poems', () => {
        // cy.wait(1000);
        cy.get('select').select('Algernon Charles Swinburne')
        cy.get('.poetry-container > :nth-child(1) > h3').contains("On the Death of Robert Browning")
        cy.get('.poetry-container > :nth-child(2)').contains('Etude Realiste')
    })

    it('Each stubbed poem should be likeable', () => {
        // cy.wait(1000);
        cy.get('select').select('Algernon Charles Swinburne')
        cy.get('.favorite-btn').click({ multiple: true })
        cy.get(':nth-child(1) > .disabled-favorite').should('have.css', 'background-color')
        .and('eq', 'rgb(255, 0, 0)')
        cy.get(':nth-child(2) > .disabled-favorite').should('have.css', 'background-color')
        .and('eq', 'rgb(255, 0, 0)')
    })

    it('Each stubbed poem should show up on favorites page', () => {
        
        cy.get('select').select('Algernon Charles Swinburne')
        cy.get('.favorite-btn').click({ multiple: true })
        cy.get('[href="/favorited-poems"] > button').should('contain', 'Fave poems').click()

        cy.get('.poetry-container > :nth-child(1) > h3').contains("On the Death of Robert Browning")
        cy.get('.poetry-container > :nth-child(2)').contains('Etude Realiste')
    })

})