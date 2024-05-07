export default class ListaUsuarioPage {
  paginaUsuarios = "#listaUsuarios";
  novoUsuario = ".sc-bmzYkS";
  dadosEmail = '[data-test="userDataEmail"]';
  dadosNome = '[data-test="userDataName"]';
  usuarioNaoCadastrado = "h3";
  todosUsuarios = "#listaUsuarios #userData";
  buttonDeletarUsuario = '[data-test="userDataDelete"]';
  buttonVerDetalhesUsuario = "#userDataDetalhe";
  buttonVoltarPagina = "#paginacaoVoltar";
  buttonProximaPagina = "#paginacaoProximo";
  paginacaoAtual = "#paginacaoAtual";

  paginaTodosUsuarios() {
    return cy.get(this.paginaUsuarios);
  }
  clickButtonProximaPagina() {
    cy.get(this.buttonProximaPagina).click();
  }

  clickButtonVoltarPagina() {
    cy.get(this.buttonVoltarPagina).click();
  }

  getComponenteTodosUsuarios() {
    return cy.get(this.todosUsuarios);
  }
}
