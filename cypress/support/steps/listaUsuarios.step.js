import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { faker } from "@faker-js/faker";
import ListaUsuarioPage from "../pages/listaUsuarios.page";
let usuarioCadastrado = { name: "testeraro", email: faker.internet.email() };
var paginaListaUsario = new ListaUsuarioPage();
Given("que existe um usuario cadastrado", function () {
  cy.request("POST", "api/v1/users", usuarioCadastrado);
});
Given("que acessei a lista de usuarios", function () {
  paginaListaUsario.paginaUsuarios;
});
