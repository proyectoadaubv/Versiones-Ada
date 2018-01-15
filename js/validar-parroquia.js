
$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/

$("#parroquia-desc").keyup(function () {/*Apertura función jQuery*/
 if($("#parroquia-desc").val().length < 1) {/*Apertura if*/
  $("#parroquia-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
   $("#parroquia-desc").css("color", "black");//Agregar color negro en el texto
    $("#boton-enviar-parroquia").prop('disabled', false);//Habilitar este elemento
     
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#parroquia-desc').val().toUpperCase(), id_busqueda: 35}, function(resultado) {
             
           if ($("#texto-guardar-parroquia").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#parroquia-desc" ).focus();//Colocar el foco en el campo de texto                       
                     $("#parroquia-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-parroquia").prop('disabled', true);//Deshabilitar este elemento
                       $("#parroquia-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#parroquia-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-parroquia").prop('disabled', false);//Habilitar este elemento
                        $("#parroquia-desc").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-parroquia").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_parroquia_actual').val() == $('#parroquia-desc').val()){
                        $("#parroquia-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-parroquia").prop('disabled', false);//Habilitar este elemento
                        $("#parroquia-desc").css("color", "black");//Agregar color negro en el texto
                   } else{

                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#parroquia-desc').val().toUpperCase(), id_busqueda: 35}, function(existe) {
                        if (existe != 0 ) {
                        $("#parroquia-desc" ).focus();//Colocar el foco en el campo de texto                      
                        $("#parroquia-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-parroquia").prop('disabled', true);//Deshabilitar este elemento
                        $("#parroquia-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#parroquia-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-parroquia").prop('disabled', false);//Habilitar este elemento
                        $("#parroquia-desc").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
           });
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/

/*<!-- ******************VALIDACION PARA REGISTRAR**************-->*/
    $('#form_parroquia').submit(function() {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR    
     event.preventDefault();//Detiene el evento
    if( $('#id_municipio').val() ==0 ) { 
          error("#mensaje-p","Seleccionar un municipio");
    }else if($("#parroquia-desc").val().length < 1) { 
          $("#parroquia-desc").focus();
         error("#mensaje-p","Ingresar descripción de la parroquia");
    }else{
          if ($("#texto-guardar-parroquia").text() == 'Registrar'){
                Registrar(event);
          }else if($("#texto-guardar-parroquia").text() == 'Modificar'){ 
                Modificar(event);        
         }
      }
  });
/*<!-- ***********************************************************-->*/
  function Registrar(event){
  event.preventDefault();//Detiene el evento  
  var datos_parroquia ='id_proceso=' + 35
     +'&desc=' + $('#parroquia-desc').val().toUpperCase()
     +'&cod_municipio=' + $('#id_municipio').val();
  registro_ajax("../procesos/procesos.php",datos_parroquia,"#mostrar_parroquia","../vista/buscar-parroquia.html","#form_parroquia");
  exito("#mensaje-p","Registrado");

  }
/*<!-- ***********************************************************-->*/
  function Modificar(event){
   event.preventDefault();//Detiene el evento  
    var datos_parroquia ='id_proceso=' + 35.1
     +'&desc=' + $('#parroquia-desc').val().toUpperCase()
     +'&cod_municipio=' + $('#id_municipio').val()
     +'&cod=' + $('#cod_parroquia_estatico').val();
  registro_ajax("../procesos/procesos.php",datos_parroquia,"#mostrar_parroquia","../vista/buscar-parroquia.html","#form_parroquia");
  exito("#mensaje-p","¡Hecho!"); 
  $("#texto-guardar-parroquia").text('Registrar');
  }  
/*<!-- ***********************************************************-->*/
});/*CIERRE*/