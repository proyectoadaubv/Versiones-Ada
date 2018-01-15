
$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/

$("#estado-desc").keyup(function () {/*Apertura función jQuery*/
 if($("#estado-desc").val().length < 1) {/*Apertura if*/
  $("#estado-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
   $("#estado-desc").css("color", "black");//Agregar color negro en el texto
    $("#boton-enviar-estado").prop('disabled', false);//Habilitar este elemento
     
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#estado-desc').val().toUpperCase(), id_busqueda: 33}, function(resultado) {
             
           if ($("#texto-guardar-estado").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#estado-desc" ).focus();//Colocar el foco en el campo de texto                       
                     $("#estado-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-estado").prop('disabled', true);//Deshabilitar este elemento
                       $("#estado-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#estado-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-estado").prop('disabled', false);//Habilitar este elemento
                        $("#estado-desc").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-estado").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_estado_actual').val() == $('#estado-desc').val()){
                        $("#estado-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-estado").prop('disabled', false);//Habilitar este elemento
                        $("#estado-desc").css("color", "black");//Agregar color negro en el texto
                   } else{

                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#estado-desc').val().toUpperCase(), id_busqueda: 33}, function(existe) {
                        if (existe != 0 ) {
                        $("#estado-desc" ).focus();//Colocar el foco en el campo de texto                      
                        $("#estado-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-estado").prop('disabled', true);//Deshabilitar este elemento
                        $("#estado-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#estado-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-estado").prop('disabled', false);//Habilitar este elemento
                        $("#estado-desc").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
           });
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/
/*<!-- ******************VALIDACION PARA REGISTRAR**************-->*/
    $('#form_estado').submit(function() {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR
    
     event.preventDefault();//Detiene el evento
    
     if($("#estado-desc").val().length < 1) {  
          $("#estado-desc").focus();
          error("#mensaje-e","Ingresar estado");

    }else{
          
          if ($("#texto-guardar-estado").text() == 'Registrar'){

                Registrar(event);

          }else if($("#texto-guardar-estado").text() == 'Modificar'){ 
                
                Modificar(event);        
         }
      }
  });
/*<!-- ***********************************************************-->*/
  function Registrar(event){
  event.preventDefault();//Detiene el evento  
    var datos_estado ='id_proceso=' + 33
     + '&desc=' + $('#estado-desc').val().toUpperCase();
  registro_ajax("../procesos/procesos.php",datos_estado,"#mostrar_estado","../vista/buscar-estado.html","#form_estado");
  exito("#mensaje-e","Registrado");

      $.ajax({ type: "POST", url: "../procesos/mostrar-estado.php", success: function(response){
      $('.selector-estado select').html(response).fadeIn(); } });

  }
/*<!-- ***********************************************************-->*/
  function Modificar(event){
   event.preventDefault();//Detiene el evento  
    var datos_estado ='id_proceso=' + 33.1
     + '&desc=' + $('#estado-desc').val().toUpperCase()
     + '&cod=' + $('#cod_estado_estatico').val();

  registro_ajax("../procesos/procesos.php",datos_estado,"#mostrar_estado","../vista/buscar-estado.html","#form_estado");
  exito("#mensaje-e","¡Hecho!");

      $.ajax({ type: "POST", url: "../procesos/mostrar-estado.php", success: function(response){
      $('.selector-estado select').html(response).fadeIn(); } });

  $("#texto-guardar-estado").text('Registrar');
  }  
/*<!-- ***********************************************************-->*/

});/*CIERRE*/

