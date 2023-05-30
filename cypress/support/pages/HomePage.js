class HomePage {

  elements = {
    
    nbatopshotlogo : () => cy.xpath("//img[@alt='NBA Top Shot']"),
    hamburgermenu : () =>  cy.get("#hamburgerbutton"),
    marketplace  :() => cy.xpath ("//a[normalize-space()='Marketplace']"),
    first_element:() => cy.xpath("//div[@data-testid='scrollable-listings']/*[2]/*/*/*/*[1]")
  }

  visit(){
    cy.visit('https://nbatopshot.com')

  } 

  login(email, password){
    //cy.visit('https://nbatopshot.com')
    //cy.xpath("//span[normalize-space()='Log In']").click()
    cy.xpath("//a[@class='chakra-button css-1fe68wh']").click()
    cy.xpath("//input[@name='email']").type(email)
    cy.xpath("//button[@id='email-search']").click()
    cy.xpath("//input[@name='password']").type(password)
    cy.xpath("//button[@id='login']").click()
    //cy.url().should('include', '/dashboard')
    //cy.get('h1').should('contain', username)
  } 

  clickOnMarketplace(){
    hamburgermenu.click()
    marketplace.click()
  }

}
module.exports = new HomePage()