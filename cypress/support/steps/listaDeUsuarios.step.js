import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import ListaUsuarioPage from "../pages/listaDeUsuarios.page";

var paginaListaUsario = new ListaUsuarioPage();
let listaUsuarios;
Given("que existem um ou mais usuarios cadastrados", function () {
  cy.visit("");

  cy.intercept("GET", "/api/v1/users", {
    statusCode: 200,
    fixture: "listaSeisUsuarios.json",
  }).as("getUsers");
  cy.wait("@getUsers").then(function (consultaDeUsuarios) {
    listaUsuarios = consultaDeUsuarios.response.body;
  });
});

Given("que acessei a lista de usuarios", function () {
  cy.visit("/users");
});

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
Given("que acessei a lista de usuarios", function () {});

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
