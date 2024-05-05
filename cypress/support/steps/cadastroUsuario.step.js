import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import cadastroPage from "../pages/cadastro.page";
const paginaCadastro = new cadastroPage();
Given("que acessei a funcionalidade de cadastro", function () {
  cy.visit("https://rarocrud-frontend-88984f6e4454.herokuapp.com/users");
  cy.get(paginaCadastro.novoCadastro).should("be.visible");
  paginaCadastro.clickNovo();
});
When("informar um novo nome", function () {
  paginaCadastro.typeNome();
});
When("informar um novo email", function () {
  paginaCadastro.typeEmail();
});
When("confirmar a operação", function () {
  cy.get(paginaCadastro.buttonSalvar).should("be.visible");
  paginaCadastro.clickButtonSalvar();
  cy.get(".go3958317564").should("have.text", "Usuário salvo com sucesso!");
});
Then("o usuario devera ser cadastrado", function () {});
