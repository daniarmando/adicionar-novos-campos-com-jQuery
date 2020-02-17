var container = $('#boxCamposTabelaEscalaDeFerias'); 
var conteudoHtmlPadrao = container.html();
var quantidadeDeLinhas = 1;
var inputQuantidadeDeLinhas = $('#quantidadeDeLinhas');  

atualizarInputQuantidadeDeLinhas();   
exibirLinha();

function adicionar() {
  quantidadeDeLinhas += 1;            
  container.append(conteudoHtmlPadrao);
  atualizarPropriedades(true);      
  atualizarInputQuantidadeDeLinhas();
}

function remover(botao) {    
  var botao = $(botao);
  esconderLinha(botao.parent());
  botao.attr('disabled', 'disabled');                 
  
  setTimeout(function(){        
    botao.parent().remove();      
    quantidadeDeLinhas -= 1;      
    atualizarInputQuantidadeDeLinhas();
    atualizarPropriedades(false); 
  }, 300);           
}        

function atualizarInputQuantidadeDeLinhas() {
  inputQuantidadeDeLinhas.val(quantidadeDeLinhas);      
}

function exibirLinha() {
  $('.campos-tabela-escala-de-ferias').css({'opacity':'1', 'transition':'opacity .5s'});
}

function esconderLinha(div) { 
  div.css({'opacity':'0'});
}

function atualizarPropriedades(isSetarFoco) {
  container.children().each(function(index) {         
    var divCampos = $(this);
    var nroLinhaAnterior = divCampos.find('.titulo-linha')[0].textContent.replace('Linha', '').trim();                       
    var nroLinhaNova = (index + 1);            
    
    if (nroLinhaAnterior && nroLinhaAnterior > 0) { 
      var linha = '_linha_';     
      var isUltimaLinha = (nroLinhaNova == quantidadeDeLinhas);
      
      divCampos.find('.titulo-linha')[0].innerHTML = 'Linha ' + nroLinhaNova;                            
      divCampos.find('[name=botao-adicionar' + linha + nroLinhaAnterior + ']')[0].name = 'botao-adicionar' + linha + nroLinhaNova;
      divCampos.find('[name=botao-remover' + linha + nroLinhaAnterior + ']')[0].name = 'botao-remover' + linha + nroLinhaNova;
      
      if (quantidadeDeLinhas == 1) {          
        $('[name=botao-adicionar' + linha + nroLinhaNova + ']').removeAttr('disabled');                 
        $('[name=botao-remover' + linha + nroLinhaNova + ']').attr('disabled', 'disabled');                 
      } else {
        $('[name=botao-remover' + linha + nroLinhaNova + ']').removeAttr('disabled');              
        $('[name=botao-adicionar' + linha + nroLinhaNova + ']').attr('disabled', 'disabled');                 
      }
      
      if (isUltimaLinha) {
        $('[name=botao-adicionar' + linha + nroLinhaNova + ']').removeAttr('disabled');                 
      }
      
      divCampos.find('[name=nome' + linha + nroLinhaAnterior + ']')[0].name = 'nome' + linha + nroLinhaNova;                            
      divCampos.find('[name=RG' + linha + nroLinhaAnterior + ']')[0].name = 'RG' + linha + nroLinhaNova;                  
      divCampos.find('[name=nroDias' + linha + nroLinhaAnterior + ']')[0].name = 'nroDias' + linha + nroLinhaNova;        
      divCampos.find('[name=periodo1' + linha + nroLinhaAnterior + ']')[0].name = 'periodo1' + linha + nroLinhaNova;        
      divCampos.find('[name=periodo2' + linha + nroLinhaAnterior + ']')[0].name = 'periodo2' + linha + nroLinhaNova;        
      divCampos.find('[name=periodo3' + linha + nroLinhaAnterior + ']')[0].name = 'periodo3' + linha + nroLinhaNova;                  
      divCampos.find('[name=periodo4' + linha + nroLinhaAnterior + ']')[0].name = 'periodo4' + linha + nroLinhaNova;                   
      divCampos.find('[name=observacao' + linha + nroLinhaAnterior + ']')[0].name = 'observacao' + linha + nroLinhaNova;         
      divCampos.find('.botao-remover')[0].title = 'remover linha ' + nroLinhaNova;

      if (isSetarFoco) $('[name=nome_linha_' + nroLinhaNova + ']').focus();
      
      exibirLinha();
    }
  });
}