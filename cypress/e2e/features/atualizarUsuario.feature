# language: pt

Funcionalidade: Atualizar dados de Usuarios Cadastrados

 Contexto: Atualizar dados de Usuarios Cadastrados
  Dado que localizei o usuario a ser editado


  Cenario: Deve ser possível atualizar os dados do usuario com credenciais validas
  E acessei a função de editar
  Quando preencher os dados dos campos de nome e email validos 
  E selecionar a opçao salvar
  Então  o sistema atualiza os dados e retorna mensagem de sucesso

  Cenario: Não deve ser possível atualizar o email com novo nome de formato invalido
  E acessei a função de editar
  Quando preencher os dados dos campos de nome invalido 
  E selecionar a opçao salvar
  Então o sistema nao atualiza os dados e retorna mensagem de formato de nome é invalido

  Cenario: Não deve ser possível atualizar o email com novo email de formato invalido
  E acessei a função de editar
  Quando preencher os dados dos campos de email invalido 
  E selecionar a opçao salvar
  Então o sistema nao atualiza os dados e retorna mensagem de formato de e-mail é invalido
 
  Cenario: Não deve ser possível atualizar o email com novo email ja cadastrado no sistema
  E acessei a função de editar
  Quando preencher os dados dos campos de email com email ja existente
  E selecionar a opçao salvar
  Então o sistema nao atualiza os dados e retorna mensagem de email ja cadastrado
 

