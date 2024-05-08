#language: pt
Funcionalidade: Cadastro de usuario

Contexto: acesso ao compo cadastro
 Dado que acessei a funcionalidade de cadastro Novo

Cenário: Cadastro de usuario com sucesso
    Quando informar um novo nome
    E informar um novo email
    E confirmar a operação
    Então o usuario devera ser cadastrado

Cenario: Nao deve ser possivel cadastrar com email invalido
    Quando informar um novo nome
    E informar um novo email de formato invalido
    E confirmar a operação
    Então o usuario nao conseguira executar o cadastro e recebe mensagem de erro no email
 
Cenario: Nao deve ser possivel cadastrar com email ja cadastrado
    Quando informar um novo nome
    E informar um novo email ja utilizado por outro usuario
    E confirmar a operação
    Então o usuario nao conseguira executar o cadastro e recebe mensagem de erro de email ja utilizado

Cenario: Nao deve ser possivel cadastrar nome com mais de 100 caracteres
    Quando informar um novo nome com mais de 100 caracteres
    E informar um novo email
    E confirmar a operação
    Então o usuario nao conseguira executar o cadastro e recebe mensagem de erro de carasteres no nome

Cenario: Nao deve ser possivel cadastrar um email com mais de 60 caracteres
    Quando informar um novo nome 
    E informar um novo email com mais de 60 caracteres
    E confirmar a operação
    Então o usuario nao conseguira executar o cadastro e recebe mensagem de erro de caracteres no email

Esquema do Cenario: Nao deve ser possivel cadastrar usuario com campo nome vazio
    Quando o usuário tentar cadastrar um novo usuário com nome vazio 
    E confirmar a operação
    Então o usuario nao conseguira executar o cadastro e recebe mensagem de erro no nome
    
