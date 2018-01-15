
$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/


$("#profesion-desc").keyup(function () {/*Apertura función jQuery*/
 if($("#profesion-desc").val().length < 1) {/*Apertura if*/
  $("#profesion-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
   $("#profesion-desc").css("color", "black");//Agregar color negro en el texto
    $("#boton-enviar-profesion").prop('disabled', false);//Habilitar este elemento
     
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#profesion-desc').val().toUpperCase(), id_busqueda: 38}, function(resultado) {
             
           if ($("#texto-guardar-profesion").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#profesion-desc" ).focus();//Colocar el foco en el campo de texto                       
                     $("#profesion-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-profesion").prop('disabled', true);//Deshabilitar este elemento
                       $("#profesion-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#profesion-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-profesion").prop('disabled', false);//Habilitar este elemento
                        $("#profesion-desc").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-profesion").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_profesiones_actual').val() == $('#profesion-desc').val()){
                        $("#profesion-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-profesion").prop('disabled', false);//Habilitar este elemento
                        $("#profesion-desc").css("color", "black");//Agregar color negro en el texto
                   } else{

                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#profesion-desc').val().toUpperCase(), id_busqueda: 38}, function(existe) {
                        if (existe != 0 ) {
                        $("#profesion-desc" ).focus();//Colocar el foco en el campo de texto                      
                        $("#profesion-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-profesion").prop('disabled', true);//Deshabilitar este elemento
                        $("#profesion-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#profesion-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-profesion").prop('disabled', false);//Habilitar este elemento
                        $("#profesion-desc").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
           });
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/
/*<!-- ******************VALIDACION PARA REGISTRAR**************-->*/
    $('#form_profesiones').submit(function() {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR
    
     event.preventDefault();//Detiene el evento
     if($("#profesion-desc").val().length < 1) {  
          $("#profesion-desc").focus();
          error("#mensaje-p","Ingresar descripción de la profesión");

    }else{
          
          if ($("#texto-guardar-profesion").text() == 'Registrar'){

                Registrar(event);

          }else if($("#texto-guardar-profesion").text() == 'Modificar'){ 
                
                Modificar(event);        
         }
      }
  });
/*<!-- ***********************************************************-->*/
  function Registrar(event){
  
  event.preventDefault();//Detiene el evento    
    var datos_profesion ='id_proceso=' + 38
     + '&desc=' + $('#profesion-desc').val().toUpperCase();
    registro_ajax("../procesos/procesos.php",datos_profesion,"#mostrar_profesiones","../vista/buscar-profesion.html","#form_profesiones");
    exito("#mensaje-p","Registrado");
  }
/*<!-- ***********************************************************-->*/
  function Modificar(event){
   event.preventDefault();//Detiene el evento  
    var datos_profesion ='id_proceso=' + 38.1
     + '&desc=' + $('#profesion-desc').val().toUpperCase()
     + '&cod=' + $('#cod_profesiones_estatico').val();
    registro_ajax("../procesos/procesos.php",datos_profesion,"#mostrar_profesiones","../vista/buscar-profesion.html","#form_profesiones");
    exito("#mensaje-p","¡Hecho!");
   $("#texto-guardar-profesion").text('Registrar');
  }  
});/*CIERRE*/

