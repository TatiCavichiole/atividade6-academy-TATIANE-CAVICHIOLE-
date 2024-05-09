export default class AtualizarUsuarioPage {
    paginaUsuarios = "#listaUsuarios";
    buscarUsuario = ".sc-gsFSXq mUpIH";
        
    buttonDetalhes = "#userDataDetalhe";
    buttonEditar = '.sc-dAlyuH.jdAtLn';
    buttonSalvar = '.sc-dAlyuH.jdAtLn';
    buttonCancelar = ".sc-lcIPJg.ifkIA-D";
    buttonFechar = ".sc-fhzFiK.koXtdc";
    dadosId = '.sc-dLMFU.Mcjyi';
    dadosNome = "#userName";
    dadosEmail = "#userEmail";
    mensagemErro = ".sc-dCFHLb.lmTxRO";
    
    
    clickButtonVerDetalhes() {
        cy.get(this.buttonDetalhes).click();
      }
    typeAtualizarNome(nome) {
      cy.get(this.dadosNome).type(nome);
    }
  
    typeAtualizarEmail(email) {
      cy.get(this.dadosEmail).type(email);
    }
  
    typeBuscar(dados) {
      cy.get(this.buscarUsuario).type(dados);
    }
  
    clickButtonEditar() {
      cy.get(this.buttonEditar).click();
    }
  
    clickButtonSalvar() {
      cy.get(this.buttonSalvar).click();
    }
  
   
  }