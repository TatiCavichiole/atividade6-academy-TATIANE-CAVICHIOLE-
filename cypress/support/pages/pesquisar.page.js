export default class PesquisarPage {
  inputEmailouNome = ".sc-gsFSXq";
  userDataName = '[data-test="userDataName"]';
  userDataEmail = '[data-test="userDataEmail"]';
  buttonDetalhes = "#userDataDetalhe";
  buttonRemover = ".sc-fUnMCh.dttKkA";
  paginaUsuarios = "#listaUsuarios";
  detalheNome = "#userName";
  detalheEmail = "#userEmail";

  typeNomePesquisa(name) {
    cy.get(this.inputEmailouNome).type(name);
  }
  typeEmailPesquisa(email) {
    cy.get(this.inputEmailouNome).type(email);
  }
  clickButtonDetalhes() {
    cy.get(this.buttonDetalhes).click();
  }
}
