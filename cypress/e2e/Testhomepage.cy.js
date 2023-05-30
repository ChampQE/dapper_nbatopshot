import HomePage from "../support/pages/HomePage"
   
  it("should visit home page", () => {
      HomePage.visit();  
      HomePage.elements.nbatopshotlogo().should('exist')
   });