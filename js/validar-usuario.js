
$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/

$("#nom-user").keyup(function () {/*Apertura función jQuery*/
 if($("#nom-user").val().length < 1) {/*Apertura if*/
  $("#nom-user").removeClass("color_f");//Quitar el color de fondo del campo de texto
    $("#boton-registrar-user").prop('disabled', false);//Habilitar este elemento
     
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("procesos-php/procesos.php", {id_proceso: 0, busqueda: $('#nom-user').val().toUpperCase(), id_busqueda: 30}, function(resultado) {
             
           if ($("#texto-guardar-user").text() == 'Registrar usuario'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#nom-user" ).focus();//Colocar el foco en el campo de texto                       
                     $("#nom-user").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-registrar-user").prop('disabled', true);//Deshabilitar este elemento
                       $("#nom-user").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#nom-user").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-registrar-user").prop('disabled', false);//Habilitar este elemento
                        $("#nom-user").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-user").text() == 'Modificar usuario'){//De lo contrario si el boton es modificar
                        if ($('#desc_user_actual').val() == $('#nom-user').val()){
                        $("#nom-user").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-registrar-user").prop('disabled', false);//Habilitar este elemento
                        $("#nom-user").css("color", "black");//Agregar color negro en el texto
                   } else{

                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("procesos-php/procesos.php", {id_proceso: 0, busqueda: $('#nom-user').val().toUpperCase(), id_busqueda: 30}, function(existe) {
                        if (existe != 0 ) {
                        $("#nom-user" ).focus();//Colocar el foco en el campo de texto                      
                        $("#nom-user").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-registrar-user").prop('disabled', true);//Deshabilitar este elemento
                        $("#nom-user").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#nom-user").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-registrar-user").prop('disabled', false);//Habilitar este elemento
                        $("#nom-user").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
           });
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/

/*<!-- ******************VALIDACION PARA REGISTRAR**************-->*/
    $('#form_registrar_usuario').submit(function() {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR
    
     event.preventDefault();//Detiene el evento

    if($("#nom-user").val().length < 1) {  
          $("#nom-user").focus();
          mensaje_error("Debe ingresar el nombre de un usuario");

    }else if($("#clave-user").val().length < 1) {  
          $("#clave-user").focus();

          mensaje_error("Debe ingresar la clave del usuario");

    } else  if($("#clave-user-reingreso").val().length < 1) {  
          $("#clave-user-reingreso").focus();
          mensaje_error("Debe volver a ingresar la clave");

    }  else if($('#tipo-user').val() ==0) {

          mensaje_error("Debe seleccionar un tipo de usuario");

    } else if($('#id_pregunta').val() ==0) { 

          mensaje_error("Debe seleccionar una pregunta");

    }else if($("#desc-respuesta-pregunta").val().length < 1) {  
          $("#desc-respuesta-pregunta").focus();

          mensaje_error("Debe ingresar la respuesta a la pregunta");

    }else{

          /*

          
          if ($("#texto-guardar-user").text() == 'Registrar'){

                Registrar(event);

          }else if($("#texto-guardar-user").text() == 'Modificar'){ 
                
                Modificar(event);        
         }
         
         */


      }
  });
/*<!-- ***********************************************************-->*/
  function Registrar(event){
/*Nota: Cada proceso es enviado con un ID propio, por ejemplo el evento [registrar usuario] tiene el ID 30*/
    event.preventDefault();//Detiene el evento 

    var datos_aula ='id_proceso=' + 30
     + '&nom_user=' + $('#nom-user').val().toUpperCase()
     + '&clave_user=' + $('#clave-user').val() 
     + '&pregunta_user=' + $('#id_pregunta').val() 
     + '&respuesta_user=' + $('#desc-respuesta-pregunta').val();
       
    registro_ajax("procesos-php/procesos.php", datos_aula, '#mostrar_aulas', 'procesos-php/aula_buscar.html', '#form_au');
    
    setTimeout(function() {$("#mensaje-au").fadeIn(0);});//Aparece el aviso en 0 milisegundos
    setTimeout(function() { $("#mensaje-au").fadeOut(0); },800);//Desaparece el aviso en 800 milisegundos
}








/*<!-- ***********************************************************-->*/
  function Modificar(event){
/*Nota: Cada proceso es enviado con un ID propio, por ejemplo el evento [modificar aula] tiene el ID 18*/
    event.preventDefault();//Detiene el evento 

    var datos_aula ='id_proceso=' + 31
     + '&cod_aula=' + $('#cod_au_estatico').val()
     + '&desc_aula=' + $('#nom-user').val().toUpperCase()
     + '&cap_aula=' + $('#au-cap').val()
     + '&id_edificio_aula=' + $('#id_edificio1').val();
       
    registro_ajax("procesos-php/procesos.php", datos_aula, '#mostrar_aulas', 'procesos-php/aula_buscar.html', '#form_au');
    
    setTimeout(function() {$("#mensaje-au").fadeIn(0);});//Aparece el aviso en 0 milisegundos
    setTimeout(function() { $("#mensaje-au").fadeOut(0); },800);//Desaparece el aviso en 800 milisegundos
   
   $("#texto-guardar-user").text('Registrar usuario');
   
  }  
});/*CIERRE*/