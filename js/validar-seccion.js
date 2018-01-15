
$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/
$("#seccion-desc").keyup(function () {/*Apertura función jQuery*/
 if($("#seccion-desc").val().length < 1) {/*Apertura if*/
  $("#seccion-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
   $("#seccion-desc").css("color", "black");//Agregar color negro en el texto
    $("#boton-enviar-seccion").prop('disabled', false);//Habilitar este elemento
     
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#seccion-desc').val().toUpperCase(), id_busqueda: 3}, function(resultado) {
             
           if ($("#texto-guardar-seccion").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#seccion-desc" ).focus();//Colocar el foco en el campo de texto                       
                     $("#seccion-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-seccion").prop('disabled', true);//Deshabilitar este elemento
                       $("#seccion-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#seccion-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-seccion").prop('disabled', false);//Habilitar este elemento
                        $("#seccion-desc").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-seccion").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_seccion_actual').val() == $('#seccion-desc').val()){
                        $("#seccion-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-seccion").prop('disabled', false);//Habilitar este elemento
                        $("#seccion-desc").css("color", "black");//Agregar color negro en el texto
                   } else{

                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#seccion-desc').val().toUpperCase(), id_busqueda: 3}, function(existe) {
                        if (existe != 0 ) {
                        $("#seccion-desc" ).focus();//Colocar el foco en el campo de texto                      
                        $("#seccion-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-seccion").prop('disabled', true);//Deshabilitar este elemento
                        $("#seccion-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#seccion-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-seccion").prop('disabled', false);//Habilitar este elemento
                        $("#seccion-desc").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
           });
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/

/*<!-- ******************VALIDACION PARA REGISTRAR**************-->*/
    $('#form_seccion').submit(function() {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR
    
     event.preventDefault();//Detiene el evento
    
     if($("#seccion-desc").val().length < 1) {  
          $("#seccion-desc").focus();
          error("#mensajes","Ingresar descripción de la sección");

    }else{
          
          if ($("#texto-guardar-seccion").text() == 'Registrar'){

                Registrar(event);

          }else if($("#texto-guardar-seccion").text() == 'Modificar'){ 
                
                Modificar(event);        
         }
      }
  });
/*<!-- ***********************************************************-->*/
  function Registrar(event){
    event.preventDefault();//Detiene el evento  
    var datos_seccion ='id_proceso=' + 3
     + '&desc_seccion=' + $('#seccion-desc').val().toUpperCase();
    registro_ajax("../procesos/procesos.php",datos_seccion,"#mostrar_secciones","../vista/buscar-seccion.html","#form_seccion");
  exito("#mensajes","Registrado");

  }
/*<!-- ***********************************************************-->*/
  function Modificar(event){

   event.preventDefault();//Detiene el evento  
       var datos_seccion ='id_proceso=' + 3.1
     + '&desc_seccion=' + $('#seccion-desc').val().toUpperCase()
     + '&cod_seccion_estatico=' + $('#cod_seccion_estatico').val();

    registro_ajax("../procesos/procesos.php",datos_seccion,"#mostrar_secciones","../vista/buscar-seccion.html","#form_seccion");
     exito("#mensajes","¡Hecho!");
   $("#texto-guardar-seccion").text('Registrar');
  }  
});/*CIERRE*/

