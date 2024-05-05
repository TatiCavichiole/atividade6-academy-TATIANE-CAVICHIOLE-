#language: pt
Funcionalidade: Cadastro de usuario

Cenário: Cadastro de usuario com sucesso
    Dado que acessei a funcionalidade de cadastro
    Quando informar um novo nome
    E informar um novo email
    E confirmar a operação
    Então o usuario devera ser cadastrado