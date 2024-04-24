describe('Assert Link and menu', () => {
  it('Assert f the widget container', () => {
    cy.visit('https://www.techinasia.com/')
    cy.get('a[data-cy="News-nav-link"]').contains('News')
    cy.get('a[data-cy="Jobs-nav-link"]').contains('Jobs')
    cy.get('a[data-cy="Companies-nav-link"]').contains('Database')
    cy.get('a[data-cy="Events-nav-link').contains('Events')
    cy.get('a[data-cy="About-nav-link"]').contains('About')
    cy.get('a[data-cy="Advertise-nav-link"]').contains('Advertise')
  })

  it('Assert the widget container Upcoming events',() => {
    cy.visit('https://www.techinasia.com/')
    cy.get('span[class="jsx-1176106062"]').contains('Upcoming Events')
    cy.get('b[class="jsx-3534304846"]').should('be.visible')
  })

  it('Assert the widget container Latest Stories',() => {
   cy.visit('https://www.techinasia.com/')
   cy.get('h3[class="jsx-4016345616"]').contains('Latest Stories')
   cy.wait(5000)
   const selectors = ['.h2[class="jsx-2737968273', '.h2[class="jsx-2737968273', 'h2[class="jsx-2737968273', 'h2[class="jsx-2737968273', 'h2[class="jsx-2737968273','h2[class="jsx-2737968273','h2[class="jsx-2737968273'];
   cy.get('h2[class="jsx-2737968273"][1]').should('not.be.empty')
  })

  it('Assert Premium content',() => {
    cy.visit('https://www.techinasia.com/')
    cy.wait(5000)
    cy.get('li[class="jsx-2737968273"]').should('be.visible')
  })

  it('Assert the widget container Latest Jobs', () => {
    cy.visit('https://www.techinasia.com/')
    cy.get('span[class="jsx-2211675673"]').contains('💼 Latest Jobs')
  })

})