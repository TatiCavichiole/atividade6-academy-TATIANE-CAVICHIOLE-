export default class ListaUsuarioPage {
  paginaUsuarios = "#listaUsuarios";
  novoUsuario = ".sc-bmzYkS";
  dadosEmail = '[data-test="userDataEmail"]';
  dadosNome = '[data-test="userDataName"]';

  paginaTodosUsuarios() {
    return cy.get(this.paginaUsuarios);
  }
}
