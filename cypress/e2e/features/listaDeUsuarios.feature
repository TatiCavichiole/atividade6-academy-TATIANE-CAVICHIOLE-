#language:pt

Funcionalidade: Lista de usuarios

Cenário: Listar usuarios Cadastrados
Dado que existem um ou mais usuarios cadastrados
E que acessei a lista de usuarios
Quando verificar os usuarios cadastrados
Entao devera exibir uma lista de usuarios cadastrados com as informaçoes do usuario

Cenario: Deve aparecer opçao de cadastrar novo usuario caso a lista de usuarios seja vazia
Dado que nao existam usuarios cadastrados
E que acessei a lista de usuarios
Quando verificar a lista vazia usuarios cadastrados
Entao deve exibir opçao para cadastrar novo usuario
E devera exibir mensagem sem usuarios
