
$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/

$("#turno-desc").keyup(function () {/*Apertura función jQuery*/
 if($("#turno-desc").val().length < 1) {/*Apertura if*/
  $("#turno-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
   $("#turno-desc").css("color", "black");//Agregar color negro en el texto
    $("#boton-enviar-turno").prop('disabled', false);//Habilitar este elemento
     
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#turno-desc').val().toUpperCase(), id_busqueda: 4}, function(resultado) {
             
           if ($("#texto-guardar-turno").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#turno-desc" ).focus();//Colocar el foco en el campo de texto                       
                     $("#turno-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-turno").prop('disabled', true);//Deshabilitar este elemento
                       $("#turno-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#turno-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-turno").prop('disabled', false);//Habilitar este elemento
                        $("#turno-desc").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-turno").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_turno_actual').val() == $('#turno-desc').val()){
                        $("#turno-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-turno").prop('disabled', false);//Habilitar este elemento
                        $("#turno-desc").css("color", "black");//Agregar color negro en el texto
                   } else{
                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#turno-desc').val().toUpperCase(), id_busqueda: 4}, function(existe) {
                        if (existe != 0 ) {
                        $("#turno-desc" ).focus();//Colocar el foco en el campo de texto                      
                        $("#turno-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-turno").prop('disabled', true);//Deshabilitar este elemento
                        $("#turno-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#turno-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-turno").prop('disabled', false);//Habilitar este elemento
                        $("#turno-desc").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
           });
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/

/*<!-- ******************VALIDACION PARA REGISTRAR**************-->*/
    $('#form_turno').submit(function() {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR
     event.preventDefault();//Detiene el evento
     if($("#turno-desc").val().length < 1) {  
          $("#turno-desc").focus();
          error("#mensajet","Debe ingresar la descripción del turno");

    }else{
          
          if ($("#texto-guardar-turno").text() == 'Registrar'){

                Registrar(event);

          }else if($("#texto-guardar-turno").text() == 'Modificar'){ 
                
                Modificar(event);        
         }
      }
  });
/*<!-- ***********************************************************-->*/
  function Registrar(event){
  event.preventDefault();//Detiene el evento  
    var datos ='id_proceso=' + 4
     + '&desc=' + $('#turno-desc').val().toUpperCase();
  registro_ajax("../procesos/procesos.php",datos,"#mostrar_turno","../vista/buscar-turno.html","#form_turno");
  exito("#mensajet","Registrado");

  }
/*<!-- ***********************************************************-->*/
  function Modificar(event){
   event.preventDefault();//Detiene el evento  
    var datos ='id_proceso=' + 4.1
     + '&desc=' + $('#turno-desc').val().toUpperCase()
     + '&cod=' + $('#cod_turno_estatico').val();
      registro_ajax("../procesos/procesos.php",datos,"#mostrar_turno","../vista/buscar-turno.html","#form_turno");
     exito("#mensajet","¡Hecho!");
   $("#texto-guardar-turno").text('Registrar');
  }  
});/*CIERRE*/

