
$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/

$("#tipo-persona-desc").keyup(function () {/*Apertura función jQuery*/
 if($("#tipo-persona-desc").val().length < 1) {/*Apertura if*/
  $("#tipo-persona-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
   $("#tipo-persona-desc").css("color", "black");//Agregar color negro en el texto
    $("#boton-enviar-tipo-persona").prop('disabled', false);//Habilitar este elemento
     
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#tipo-persona-desc').val().toUpperCase(), id_busqueda: 37}, function(resultado) {
             
           if ($("#texto-guardar-tipo-persona").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#tipo-persona-desc" ).focus();//Colocar el foco en el campo de texto                       
                     $("#tipo-persona-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-tipo-persona").prop('disabled', true);//Deshabilitar este elemento
                       $("#tipo-persona-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#tipo-persona-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-tipo-persona").prop('disabled', false);//Habilitar este elemento
                        $("#tipo-persona-desc").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-tipo-persona").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_tipo-persona_actual').val() == $('#tipo-persona-desc').val()){
                        $("#tipo-persona-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-tipo-persona").prop('disabled', false);//Habilitar este elemento
                        $("#tipo-persona-desc").css("color", "black");//Agregar color negro en el texto
                   } else{

                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#tipo-persona-desc').val().toUpperCase(), id_busqueda: 37}, function(existe) {
                        if (existe != 0 ) {
                        $("#tipo-persona-desc" ).focus();//Colocar el foco en el campo de texto                      
                        $("#tipo-persona-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-tipo-persona").prop('disabled', true);//Deshabilitar este elemento
                        $("#tipo-persona-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#tipo-persona-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-tipo-persona").prop('disabled', false);//Habilitar este elemento
                        $("#tipo-persona-desc").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
           });
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/
/*<!-- ******************VALIDACION PARA REGISTRAR**************-->*/
    $('#form_tipo_persona').submit(function() {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR
    
     event.preventDefault();//Detiene el evento
    
     if($("#tipo-persona-desc").val().length < 1) {  
          $("#tipo-persona-desc").focus();
          error("#mensaje-tp","Ingresar la descripción de tipo de persona");

    }else{
          
          if ($("#texto-guardar-tipo-persona").text() == 'Registrar'){

                Registrar(event);

          }else if($("#texto-guardar-tipo-persona").text() == 'Modificar'){ 
                
                Modificar(event);        
         }
      }
  });
/*<!-- ***********************************************************-->*/
  function Registrar(event){
  event.preventDefault();//Detiene el evento  
    var datos_tipoper ='id_proceso=' + 37
     + '&desc=' + $('#tipo-persona-desc').val().toUpperCase();
    registro_ajax("../procesos/procesos.php",datos_tipoper,"#mostrar_tipos_persona","../vista/buscar-tipoper.html","#form_tipo_persona");
    exito("#mensaje-tp","Registrado");
  }
/*<!-- ***********************************************************-->*/
  function Modificar(event){
   event.preventDefault();//Detiene el evento  
    var datos_tipoper ='id_proceso=' + 37.1
     + '&desc=' + $('#tipo-persona-desc').val().toUpperCase()
     + '&cod=' + $('#cod_tipo-persona_estatico').val();
    registro_ajax("../procesos/procesos.php",datos_tipoper,"#mostrar_tipos_persona","../vista/buscar-tipoper.html","#form_tipo_persona");
    exito("#mensaje-tp","¡Hecho!");
  $("#texto-guardar-tipo-persona").text('Registrar');
  }  
/*<!-- ***********************************************************-->*/

});/*CIERRE*/

