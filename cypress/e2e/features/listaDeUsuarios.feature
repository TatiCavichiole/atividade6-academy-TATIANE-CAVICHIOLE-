#language:pt

Funcionalidade: Lista de usuarios
Contexto: estar na pagina de lista de usuarios
Dado que acessei a lista de usuarios

Cenário: Deve ser possivel listar usuarios Cadastrados
E que existem 6 usuários cadastrados no sistema
Quando verificar os usuarios cadastrados
Entao devera exibir uma lista de usuarios cadastrados com as informaçoes do usuario

Cenario: Deve aparecer opçao de cadastrar novo usuario caso a lista de usuarios seja vazia
E que nao existam usuarios cadastrados
Quando verificar a lista vazia usuarios cadastrados
Entao deve exibir opçao para cadastrar novo usuario
E devera exibir mensagem sem usuarios

Cenario: Deve exibir paginaçao se existir mais de 6 usuarios cadastrados
E que existem 13 usuários cadastrados no sistema
Quando verificar os usuarios cadastrados
Então a indicação de página correta deve ser mostrada como Página 1 de 3

Esquema do Cenario: Deve ser possivel avançar a pagina de lista de usuarios
E que existem 13 usuários cadastrados no sistema
Quando  clicar na opção Próximo ate ultima pagina
Então a indicação de página deverá ser corretamente exibida como Página 3 de 3


Cenario: Nao deve ser possivel avançar para proxima pagina caso nao tenham usuários para serem exibidos nela
E que existem 6 usuários cadastrados no sistema
Quando  clicar na opção Próximo na paginação
Então o botao nao devera estar habilitado


Cenario: Deve ser possivel voltar a pagina de lista de usuarios
E que existem 13 usuários cadastrados no sistema
Quando  clicar na opção Anterior ate a primeira pagina
Então a indicação de página deverá ser corretamente exibida como Página 1 de 3

Cenario: Deve ser existir opçoes para ver detalhes do usuario
E que existem 6 usuários cadastrados no sistema
Quando verificar os usuarios cadastrados
Então devera exibir botao de ver detalhes 

Cenario: Deve ser existir opçoes para excluir o usuario
E que existem 6 usuários cadastrados no sistema
Quando verificar os usuarios cadastrados
Então devera exibir botao de excluir 
