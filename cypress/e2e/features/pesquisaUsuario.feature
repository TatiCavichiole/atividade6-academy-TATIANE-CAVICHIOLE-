#language: pt
Funcionalidade: Pesquisas de usuarios

Contexto: estar na pagina de lista de usuarios
Dado que acessei a lista de usuarios

Cenário: Deve ser possivel pesquisar usuarios cadastrados pelo email
E que existem usuários cadastrados no sistema
Quando pesquisar usuario cadastrado pelo email
Entao devera exibir as informações do usuario

Cenário: Deve exibir o botao de detalhes do usuarios pesquisado
E que existem usuários cadastrados no sistema
Quando pesquisar usuario cadastrado pelo email
Entao devera exibir a opçao de detalhes do usuario


Cenário: Deve exibir o botao de apagar o usuarios pesquisado
E que existem usuários cadastrados no sistema
Quando pesquisar usuario cadastrado pelo email
Entao devera exibir a opçao de apagar usuario

