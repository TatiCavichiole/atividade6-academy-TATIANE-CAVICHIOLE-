import {
  Given,
  When,
  Then,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

import PesquisarPage from "../pages/pesquisar.page";
import CadastroPage from "../pages/cadastro.page";
import { faker } from "@faker-js/faker";
var paginaRegistro = new CadastroPage();
var paginaPesquisa = new PesquisarPage();
let name;
let usuarioCriado;
Before(function () {
  usuarioCriado = { name: "testeraro", email: faker.internet.email() };

  cy.request(
    "POST",
    "rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users",
    usuarioCriado
  );
});

Given("que acessei a lista de usuarios", function () {
  cy.visit("/users");
});

Given("que existem usuários cadastrados no sistema", function () {
  cy.get(paginaPesquisa.paginaUsuarios).should("be.visible");
});

When("pesquisar usuario cadastrado pelo email", function () {
  paginaPesquisa.typeEmailPesquisa(usuarioCriado.email);
});

Then("devera exibir as informações do usuario", function () {
  cy.contains(usuarioCriado.name).should("be.visible");
  cy.contains(usuarioCriado.email.slice(0, 21)).should("be.visible");
});

Then("devera exibir a opçao de detalhes do usuario", function () {
  cy.get(paginaPesquisa.buttonDetalhes).should("be.visible");
});
Then("devera exibir a opçao de apagar usuario", function () {
  cy.get(paginaPesquisa.buttonRemover).should("be.visible");
});
