export default class cadastroPage {
  novoCadastro = '[href= "/users/novo"]';
  inputNome = ".sc-dLMFU.Mcjyi.nameInput";
  inputEmail = "#email";
  buttonSalvar = ".sc-dAlyuH.jdAtLn";

  clickNovo() {
    cy.get(this.novoCadastro).click();
  }
  typeNome() {
    cy.get(this.inputNome).type("testeCucumber");
  }
  typeEmail() {
    cy.get(this.inputEmail).type("teste2@cucumber.com");
  }
  clickButtonSalvar() {
    cy.get(this.buttonSalvar).click();
  }
}
