
$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/

$("#tipos-software-desc").keyup(function () {/*Apertura función jQuery*/
 if($("#tipos-software-desc").val().length < 1) {/*Apertura if*/
  $("#tipos-software-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
   $("#tipos-software-desc").css("color", "black");//Agregar color negro en el texto
    $("#boton-enviar-tipos-software").prop('disabled', false);//Habilitar este elemento
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#tipos-software-desc').val().toUpperCase(), id_busqueda: 40}, function(resultado) {
             
           if ($("#texto-guardar-tipos-software").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#tipos-software-desc" ).focus();//Colocar el foco en el campo de texto                       
                     $("#tipos-software-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-tipos-software").prop('disabled', true);//Deshabilitar este elemento
                       $("#tipos-software-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#tipos-software-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-tipos-software").prop('disabled', false);//Habilitar este elemento
                        $("#tipos-software-desc").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-tipos-software").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_tiposoft_actual').val() == $('#tipos-software-desc').val()){
                        $("#tipos-software-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-tipos-software").prop('disabled', false);//Habilitar este elemento
                        $("#tipos-software-desc").css("color", "black");//Agregar color negro en el texto
                   } else{
                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#tipos-software-desc').val().toUpperCase(), id_busqueda: 40}, function(existe) {
                        if (existe != 0 ) {
                        $("#tipos-software-desc" ).focus();//Colocar el foco en el campo de texto                      
                        $("#tipos-software-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-tipos-software").prop('disabled', true);//Deshabilitar este elemento
                        $("#tipos-software-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#tipos-software-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-tipos-software").prop('disabled', false);//Habilitar este elemento
                        $("#tipos-software-desc").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
           });
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/

/*<!-- ******************VALIDACION PARA REGISTRAR**************-->*/
    $('#form_tipos-software').submit(function() {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR
     event.preventDefault();//Detiene el evento
     if($("#tipos-software-desc").val().length < 1) {  
          $("#tipos-software-desc").focus();
          error("#mensaje-ts","Ingresar descripción tipo de software");
    }else{
          
          if ($("#texto-guardar-tipos-software").text() == 'Registrar'){

                Registrar(event);

          }else if($("#texto-guardar-tipos-software").text() == 'Modificar'){ 
                
                Modificar(event);        
         }
      }
  });
/*<!-- ***********************************************************-->*/
  function Registrar(event){
  
  event.preventDefault();//Detiene el evento  
    var datos_ts ='id_proceso=' + 40
     + '&desc=' + $('#tipos-software-desc').val().toUpperCase();
    registro_ajax("../procesos/procesos.php",datos_ts,"#mostrar_tipos_software","../vista/buscar-tipo-soft.html","#form_tipos-software");
  exito("#mensaje-ts","Registrado");
  }
/*<!-- ***********************************************************-->*/
  function Modificar(event){
   event.preventDefault();//Detiene el evento  
    var datos_ts ='id_proceso=' + 40.1
     + '&desc=' + $('#tipos-software-desc').val().toUpperCase()
     + '&cod=' + $('#cod_tiposoft_estatico').val();
    registro_ajax("../procesos/procesos.php",datos_ts,"#mostrar_tipos_software","../vista/buscar-tipo-soft.html","#form_tipos-software");
    exito("#mensaje-ts","¡Hecho!");
   $("#texto-guardar-tipos-software").text('Registrar');
  }  
});/*CIERRE*/

