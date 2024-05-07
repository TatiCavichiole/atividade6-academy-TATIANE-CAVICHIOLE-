import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import ListaUsuarioPage from "../pages/listaDeUsuarios.page";

var paginaListaUsario = new ListaUsuarioPage();
let listaUsuarios;
let numUsuarios;
Given("que acessei a lista de usuarios", function () {
  cy.visit("");
});
Given(
  "que existem {int} usuários cadastrados no sistema",
  function (quantidade) {
    numUsuarios = quantidade;
    let nomeFixture;
    if (quantidade <= 6) {
      nomeFixture = "listaSeisUsuarios.json";
    } else if (quantidade > 6) {
      nomeFixture = "listaTrezeUsuarios.json";
    }

    cy.intercept("GET", "/api/v1/users", {
      statusCode: 200,
      fixture: nomeFixture,
    }).as("getUsers");
    cy.wait("@getUsers").then(function (consultaDeUsuarios) {
      listaUsuarios = consultaDeUsuarios.response.body;
      quantUsuarios = consultaDeUsuarios.response.body.length;
      cy.wrap(quantUsuarios).as("quantUsuarios");
    });
  }
);

When("verificar os usuarios cadastrados", function () {
  cy.get(paginaListaUsario.paginaUsuarios).should("be.visible");
});

Then(
  "devera exibir uma lista de usuarios cadastrados com as informaçoes do usuario",
  function () {
    listaUsuarios.forEach(function (dadosUsuario) {
      cy.contains(paginaListaUsario.dadosNome, "Nome: " + dadosUsuario.name);
      cy.contains(
        paginaListaUsario.dadosEmail,
        "E-mail: " + dadosUsuario.email.slice(0, 21)
      );
    });
  }
);

Given("que nao existam usuarios cadastrados", function () {
  cy.visit("/users");
  cy.intercept("GET", "/api/v1/users", {
    statusCode: 200,
    body: [],
  }).as("listaVazia");
});

When("verificar a lista vazia usuarios cadastrados", function () {
  cy.wait("@listaVazia");
});

Then("deve exibir opçao para cadastrar novo usuario", function () {
  cy.contains(paginaListaUsario.novoUsuario, "Cadastre um novo usuário");
});
Then("devera exibir mensagem sem usuarios", function () {
  cy.contains("Ops! Não existe nenhum usuário para ser exibido.").should(
    "exist"
  );
});
Then(
  "a indicação de página correta deve ser mostrada como Página {int} de {int}",
  function () {
    cy.get(paginaListaUsario.paginacaoAtual)
      .contains("1 de 3")
      .and("be.visible");
  }
);
When("clicar na opção Próximo na paginação", function () {
  cy.get("@quantUsuarios").then(function (quantidadePaginas) {
    quantidadePaginas = Math.floor(quantUsuarios / 6);
    if (quantidadePaginas < 1) {
      for (var i = 0; i < quantidadePaginas; i++) {
        paginaListaUsario.clickButtonProximaPagina();
      }
    }
  });
});

When("clicar na opção Anterior na paginação", function () {
  cy.get("@quantUsuarios").then((quantidadePaginas) => {
    quantidadePaginas = Math.floor(quantUsuarios / 6);
    if (quantidadePaginas < 1) {
      for (var i = 0; i < quantidadePaginas; i++) {
        paginaListaUsario.clickButtonVoltarPagina();
      }
    }
  });
});
Then(
  "a indicação de página deverá ser corretamente exibida",
  function (tabela) {
    const exemplo = tabela.rowsHash();
    paginaListaUsario.getComponenteTodosUsuarios(exemplo["Paginação"]);
    if (numUsuarios <= 6) {
      cy.get(paginaListaUsario.buttonProximaPagina).should("be.disabled");
      cy.get(paginaListaUsario.buttonVoltarPagina).should("be.disabled");
    } else {
      cy.get(paginaListaUsario.buttonProximaPagina).should("be.enabled");
      cy.get(paginaListaUsario.buttonVoltarPagina).should("be.enabled");
    }
  }
);

Then("o botao nao devera estar habilitado", function () {});

// Then("devera exibir botao de excluir", function () {
//   cy.get(paginaListaUsario.todosUsuarios).find(paginaListaUsuario.buttonDeletarUsuario)
//   .should('be.visible');
// });
