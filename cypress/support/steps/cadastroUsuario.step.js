import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import cadastroPage from "../pages/cadastro.page";
import { faker } from "@faker-js/faker";
let email;
let nome = "testeRaro";
const paginaCadastro = new cadastroPage();
Given("que acessei a funcionalidade de cadastro Novo", function () {
  cy.visit("/users");
  cy.get(paginaCadastro.novoCadastro).should("be.visible");
  paginaCadastro.clickNovo();
});
When("informar um novo nome", function () {
  paginaCadastro.typeNome(nome);
});
When("informar um novo nome com mais de 100 caracteres", function () {
  paginaCadastro.typeNome(
    "abcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxy"
  );
});
When("informar um novo email", function () {
  email = faker.internet.email();
  cy.wrap(email).as("emailFaker");

  paginaCadastro.typeEmail(email);
});
When("informar um novo email de formato invalido", function () {
  paginaCadastro.typeEmail("emailinvalido");
  paginaCadastro.clickButtonSalvar();
});
When("informar um novo email ja utilizado por outro usuario", function () {
  paginaCadastro.typeEmail(email);
  paginaCadastro.clickButtonSalvar();
});
When("informar um novo email com mais de 60 caracteres", function () {
  paginaCadastro.typeEmail(
    email + "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl"
  );
  paginaCadastro.clickButtonSalvar();
});
When("o usuário tentar cadastrar um novo usuário com nome vazio", function () {
  paginaCadastro.typeNome(" ");
  paginaCadastro.typeEmail(email);
  paginaCadastro.clickButtonSalvar();
});
Then(
  "o usuario nao conseguira executar o cadastro e recebe mensagem de erro no email",
  function () {
    cy.get(paginaCadastro.mensagemErro)
      .should("be.visible")
      .and("have.text", "Formato de e-mail inválido");
  }
);
Then(
  "o usuario nao conseguira executar o cadastro e recebe mensagem de erro no nome",
  function () {
    cy.get(paginaCadastro.mensagemErro)
      .should("be.visible")
      .and("have.text", "Informe pelo menos 4 letras para o nome.");
  }
);

Then(
  "o usuario nao conseguira executar o cadastro e recebe mensagem de erro de carasteres no nome",
  function () {
    cy.get(paginaCadastro.mensagemErro)
      .should("be.visible")
      .and("have.text", "Informe no máximo 100 caracteres para o nome");
  }
);
Then(
  "o usuario nao conseguira executar o cadastro e recebe mensagem de erro de caracteres no email",
  function () {
    cy.get(paginaCadastro.mensagemErro)
      .should("be.visible")
      .and("have.text", "Informe no máximo 60 caracteres para o e-mail");
  }
);

Then(
  "o usuario nao conseguira executar o cadastro e recebe mensagem de erro de email ja utilizado",
  function () {
    cy.contains("Este e-mail já é utilizado por outro usuário.").should(
      "exist"
    );
  }
);

When("confirmar a operação", function () {
  cy.get(paginaCadastro.buttonSalvar).should("be.visible");
  paginaCadastro.clickButtonSalvar();
});
Then("o usuario devera ser cadastrado", function () {
  cy.get(".go3958317564")
    .should("be.visible")
    .and("have.text", "Usuário salvo com sucesso!");
});
