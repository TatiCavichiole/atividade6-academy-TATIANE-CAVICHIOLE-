export default class cadastroPage {
  novoCadastro = '[href= "/users/novo"]';
  inputNome = ".sc-dLMFU.Mcjyi.nameInput";
  inputEmail = "#email";
  buttonSalvar = ".sc-dAlyuH.jdAtLn";
  mensagemErro = ".sc-cPiKLX";

  getNovo() {
    cy.get(this.linkPaginaNovo).click();
  }
  clickNovo() {
    cy.get(this.novoCadastro).click();
  }
  typeNome(nome) {
    cy.get(this.inputNome).type(nome);
  }
  typeEmail(email) {
    cy.get(this.inputEmail).type(email);
  }
  clickButtonSalvar() {
    cy.get(this.buttonSalvar).click();
  }
}
