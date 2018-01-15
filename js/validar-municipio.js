
$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/

$("#municipio-desc").keyup(function () {/*Apertura función jQuery*/
 if($("#municipio-desc").val().length < 1) {/*Apertura if*/
  $("#municipio-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
   $("#municipio-desc").css("color", "black");//Agregar color negro en el texto
    $("#boton-enviar-municipio").prop('disabled', false);//Habilitar este elemento
     
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#municipio-desc').val().toUpperCase(), id_busqueda: 34}, function(resultado) {
             
           if ($("#texto-guardar-municipio").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#municipio-desc" ).focus();//Colocar el foco en el campo de texto                       
                     $("#municipio-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-municipio").prop('disabled', true);//Deshabilitar este elemento
                       $("#municipio-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#municipio-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-municipio").prop('disabled', false);//Habilitar este elemento
                        $("#municipio-desc").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-municipio").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_municipio_actual').val() == $('#municipio-desc').val()){
                        $("#municipio-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-municipio").prop('disabled', false);//Habilitar este elemento
                        $("#municipio-desc").css("color", "black");//Agregar color negro en el texto
                   } else{

                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#municipio-desc').val().toUpperCase(), id_busqueda: 34}, function(existe) {
                        if (existe != 0 ) {
                        $("#municipio-desc" ).focus();//Colocar el foco en el campo de texto                      
                        $("#municipio-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-municipio").prop('disabled', true);//Deshabilitar este elemento
                        $("#municipio-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#municipio-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-municipio").prop('disabled', false);//Habilitar este elemento
                        $("#municipio-desc").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
           });
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/

/*<!-- ******************VALIDACION PARA REGISTRAR**************-->*/
    $('#form_municipio').submit(function() {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR
     event.preventDefault();//Detiene el evento
    if( $('#id_estado').val() ==0 ) { 
      
          error("#mensaje-m","Seleccionar un estado");
    }else if($("#municipio-desc").val().length < 1) { 

          $("#municipio-desc").focus();
          error("#mensaje-m","Ingresar descripción del municipio");
    }else{          
          if ($("#texto-guardar-municipio").text() == 'Registrar'){

                Registrar(event);

          }else if($("#texto-guardar-municipio").text() == 'Modificar'){ 
                
                Modificar(event);        
         }
      }
  });
/*<!-- ***********************************************************-->*/
  function Registrar(event){
  event.preventDefault();//Detiene el evento  
  var datos_municipio ='id_proceso=' + 34
     +'&desc=' + $('#municipio-desc').val().toUpperCase()
     +'&cod_estado=' + $('#id_estado').val();
  registro_ajax("../procesos/procesos.php",datos_municipio,"#mostrar_municipio","../vista/buscar-municipio.html","#form_municipio");
  $.ajax({ type: "POST", url: "../procesos/mostrar-municipio.php", success: function(response){
  $('.selector-municipio select').html(response).fadeIn(); } });
  exito("#mensaje-m","Registrado");
  }
/*<!-- ***********************************************************-->*/
  function Modificar(event){
   event.preventDefault();//Detiene el evento  

  var datos_municipio ='id_proceso=' + 34.1
     +'&desc=' + $('#municipio-desc').val().toUpperCase()
     +'&cod_estado=' + $('#id_estado').val()
     +'&cod=' + $('#cod_municipio_estatico').val();

  registro_ajax("../procesos/procesos.php",datos_municipio,"#mostrar_municipio","../vista/buscar-municipio.html","#form_municipio");
  $.ajax({ type: "POST", url: "../procesos/mostrar-municipio.php", success: function(response){
  $('.selector-municipio select').html(response).fadeIn(); } });
  exito("#mensaje-m","¡Hecho!");
  $("#texto-guardar-municipio").text('Registrar');
  }  
/*<!-- ***********************************************************-->*/

});/*CIERRE*/

