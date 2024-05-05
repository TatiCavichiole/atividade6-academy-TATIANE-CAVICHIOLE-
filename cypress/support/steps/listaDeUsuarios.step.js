import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { faker } from "@faker-js/faker";
import ListaUsuarioPage from "../pages/listaDeUsuarios.page";

//let usuarioCadastrado = { name: "testeraro", email: faker.internet.email() };
var paginaListaUsario = new ListaUsuarioPage();
Given("que existem um ou mais usuarios cadastrados", function () {
  cy.visit("");

  cy.intercept("GET", "/api/v1/users", {
    statusCode: 200,
    fixture: "listaSeisUsuarios.json",
  }).as("getUsers");
  cy.wait("@getUsers").then(function (consultaDeUsuarios) {
    const listaUsuarios = consultaDeUsuarios.response.body;

    listaUsuarios.forEach(function (dadosUsuario) {
      cy.contains(paginaListaUsario.dadosNome, "Nome: " + dadosUsuario.name);
      cy.contains(
        paginaListaUsario.dadosEmail,
        "E-mail: " + dadosUsuario.email.slice(0, 21)
      );
    });
  });
});

Given("que acessei a lista de usuarios", function () {
  paginaListaUsario.paginaTodosUsuarios;
});

When("verificar os usuarios cadastrados", function () {
  cy.get(paginaListaUsario.paginaUsuarios).should("be.visible");
});

Then(
  "devera exibir uma lista de usuarios cadastrados com as informaçoes do usuario",
  function () {}
);
