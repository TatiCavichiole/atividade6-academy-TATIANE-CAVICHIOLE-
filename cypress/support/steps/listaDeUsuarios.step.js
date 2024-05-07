import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import ListaUsuarioPage from "../pages/listaDeUsuarios.page";

var paginaListaUsario = new ListaUsuarioPage();
let listaUsuarios;
Given("que acessei a lista de usuarios", function () {
  cy.visit("");
});
Given(
  "que existem {int} usuários cadastrados no sistema",
  function (numUsuarios) {
    let nomeFixture;
    if (numUsuarios <= 6) {
      nomeFixture = "listaSeisUsuarios.json";
    } else if (numUsuarios > 6) {
      nomeFixture = "listaTrezeUsuarios.json";
    }

    cy.intercept("GET", "/api/v1/users", {
      statusCode: 200,
      fixture: nomeFixture,
    }).as("getUsers");
    cy.wait("@getUsers").then(function (consultaDeUsuarios) {
      listaUsuarios = consultaDeUsuarios.response.body;
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
//Given("que acessei a lista de usuarios", function () {});

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
When("clicar na opção {string} na paginação", function () {});
Then("a paginação deverá ser atualizada para a próxima página", function () {});

Then("o botao nao devera estar habilitado", function () {});

Then(
  "a paginação deverá ser atualizada para a pagina anterior",
  function () {}
);
