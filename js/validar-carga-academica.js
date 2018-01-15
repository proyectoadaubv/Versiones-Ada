
$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/

$('#total').prop('disabled', true);/*< = Bloquear campo total= >*/



/*< = 20 de febrero Chavez= >*/
var valor;
var estatico;


$('#listar-docentes').on('click', function(){

   if( $('#lista').text() == '' ){
     $('#lista').load('../procesos/listar-docentes.php').slideDown('slide');
     $('#datos-docente').css('background','color:blue');

   }
});

$('#horas-aulas').keyup(function(){

     if ($('#horas-aulas').val().length < 1 ) {
   
          evento(0, estatico);
        
        } else{

         valor = $('#horas-aulas').val();
         estatico = $('#horas-aulas').val();

         evento(1, valor);
     };
});

$('#horas-ea').keyup(function(){

     if ($('#horas-ea').val().length < 1 ) {
   
          evento(0, estatico);
        
        } else{

         valor = $('#horas-ea').val();
         estatico = $('#horas-ea').val();

         evento(1, valor);
     };
}); 


});/*CIERRE*/



 var acumulador;
function evento(codigo, valor){

  if( codigo == 1){

     acumulador = valor;
   $('#mensaje').text(parseInt(acumulador) + parseInt(valor));

  }
  if( codigo == 0){

  $('#mensaje').text(parseInt(acumulador) - parseInt(valor));

  }

}
