export default class ListaUsuarioPage {
  paginaUsuarios = "#listaUsuarios";
  novoUsuario = '[href = "/users/novo]';
  dadosEmail = '[data-test="userDataEmail"]';
  dadosNome = '[data-test="userDataName"]';

  paginaTodosUsuarios() {
    return cy.get(this.paginaUsuarios);
  }
}
