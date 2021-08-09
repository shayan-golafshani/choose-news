describe('Fave poem page spec', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/favorited-poems')
        cy.contains('You haven\'t favorited any cards yet! Go ❤️ some!')
        cy.like_two_poems()
    })

    it('Should contain header with zenbox text' , ()=> {
        cy.contains('.title-text', 'Tha-Zen');
    })

    
    it('Should contain two favorited poems', () => {
        cy.get('.poetry-container > :nth-child(1) > h3').contains("On the Death of Robert Browning")
        cy.get('.poetry-container > :nth-child(2)').contains('Etude Realiste')
    })

    it('Each stubbed poem should be dissappear after click', () => {        
        //cy.get('[style="transform: none; width: 30px; height: 33px; position: absolute; z-index: 2147483647; background-color: rgb(159, 196, 231); top: -255.5px; left: 146.833px;"]').click({ multiple: true })
        // cy.get('.favorite-btn').click()
        cy.get(':nth-child(1) > .favorite-btn').click()
        cy.get(':nth-child(1) > .favorite-btn').click()
        cy.get('h2').should('contain', 'You haven\'t favorited any cards yet! Go ❤️ some!')
    })
})