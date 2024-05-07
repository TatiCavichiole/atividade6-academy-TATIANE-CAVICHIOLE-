#language:pt

Funcionalidade: Lista de usuarios
Contexto: 
Dado que acessei a lista de usuarios

Cenário: Listar usuarios Cadastrados
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

Cenario: Deve ser possivel avançar a pagina de lista de usuarios
E que existem 13 usuários cadastrados no sistema
Quando  clicar na opção "Próximo" na paginação
Então a paginação deverá ser atualizada para a próxima página
E a indicação de página deverá ser corretamente exibida
Exemplos:
 | Paginação |
 |"1 de 3"   |
 |"2 de 3"   |
 |"3 de 3"   |

Cenario: Nao deve ser possivel avançar para proxima pagina caso nao tenham usuários para serem exibidos nela
E que existem 6 usuários cadastrados no sistema
Quando  clicar na opção "Próximo" na paginação
Então o botao nao devera estar habilitado
E a indicação de página deverá ser corretamente exibida

Cenario: Deve ser possivel voltar a pagina de lista de usuarios
E que existem 13 usuários cadastrados no sistema

Quando  clicar na opção "Anterior" na paginação
Então a paginação deverá ser atualizada para a pagina anterior
E a indicação de página deverá ser corretamente exibida
Exemplos:
 | Paginação |
 |"1 de 3"   |
 |"2 de 3"   |
 |"3 de 3"   |

Cenario: Deve ser existir opçoes para ver detalhes do usuario
E que existem 6 usuários cadastrados no sistema
Quando verificar os usuarios cadastrados
Então devera exibir botao de ver detalhes 

Cenario: Deve ser existir opçoes para excluir o usuario
E que existem 6 usuários cadastrados no sistema
Quando verificar os usuarios cadastrados
Então devera exibir botao de excluir 
