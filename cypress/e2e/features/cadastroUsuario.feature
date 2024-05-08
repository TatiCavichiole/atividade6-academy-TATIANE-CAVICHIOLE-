#language: pt
Funcionalidade: Cadastro de usuario

Contexto: acesso ao compo cadastro
 Dado que acessei a funcionalidade de cadastro

Cenário: Cadastro de usuario com sucesso
    Quando informar um novo nome
    E informar um novo email
    E confirmar a operação
    Então o usuario devera ser cadastrado

Cenario: Nao deve ser possivel cadastrar com email invalido
    Quando informar um novo nome
    E informar um novo email de formato invalido
    E confirmar a operação
    Então o usuario nao conseguira executar o cadastro e recebe mensagem de erro
 
Cenario: Nao deve ser possivel cadastrar com email ja cadastrado
    Quando informar um novo nome
    E informar um novo email ja utilizado por outro usuario
    E confirmar a operação
    Então o usuario nao conseguira executar o cadastro e recebe mensagem de erro

Cenario: Nao deve ser possivel cadastrar nome com mais de 100 caracteres
    Quando informar um novo nome com mais de 100 caracteres
    E informar um novo email
    E confirmar a operação
    Então o usuario nao conseguira executar o cadastro e recebe mensagem de erro

Cenario: Nao deve ser possivel cadastrar um email com mais de 60 caracteres
    Quando informar um novo nome 
    E informar um novo email com mais de 60 caracteres
    E confirmar a operação
    Então o usuario nao conseguira executar o cadastro e recebe mensagem de erro  

Esquema do Cenario: Nao deve ser possivel cadastrar usuario com campo nome e email vazio
    Quando o usuário tentar cadastrar um novo usuário com os seguintes detalhes: 
    | Nome   | Email           |
    | ""     | "test@test.com" | 
    | "John" | ""              | 
    | ""     | ""              |
    E confirmar a operação
    Então o usuário receberá a seguinte mensagem de erro para cada caso:
    | Caso  | Mensagem de Erro                    |
    | 1     | "Por favor, insira um nome válido." |
    | 2     | "Por favor, insira um email válido."|
    | 3     | "Por favor, insira um nome válido." |
    
