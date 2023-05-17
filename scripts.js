

$(document).ready(function() {

	

	$('#enviar').val('Autorize o contato').css({'color':'gray'})

	var checkTermos = document.getElementById('aceita-termos');
  	$(document).on('click','#aceita-termos', function(){
  		
  		if(checkTermos.checked){
  			$('#enviar').val('Enviar');
  			$('#enviar').removeAttr('disabled');
  			$('#enviar').css({'color':'black'});
  		}else{
  			$('#enviar').val('Autorize o contato');
  			$('#enviar').attr('disabled','disabled');
  			$('#enviar').css({'color':'gray'});
  		}
  	});

  	$(document).on('click','#enviar', function(){
  		$('#enviar').val('Enviando...');
  	})

	












  
});
