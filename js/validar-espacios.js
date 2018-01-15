$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/

$("#ubicacion-esp").keyup(function () {/*Apertura función jQuery*/
 if($("#ubicacion-esp").val().length < 1) {/*Apertura if*/
  $("#ubicacion-esp").removeClass("color_f");//Quitar el color de fondo del campo de texto
    $("#boton-enviar-espacios").prop('disabled', false);//Habilitar este elemento
     
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#ubicacion-esp').val().toUpperCase(), id_busqueda: 31.1}, function(resultado) {
             
           if ($("#texto-guardar").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#ubicacion-esp" ).focus();//Colocar el foco en el campo de texto                       
                     $("#ubicacion-esp").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-espacios").prop('disabled', true);//Deshabilitar este elemento
                       $("#ubicacion-esp").css("color", "red");//Agregar color rojo en el texto
                        error('#mensaje-esp', '¡Ya está registrado!');
                  }else{ 
                        $("#ubicacion-esp").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-espacios").prop('disabled', false);//Habilitar este elemento
                        $("#ubicacion-esp").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-esp").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_esp_estatico').val() == $('#ubicacion-esp').val()){
                        $("#ubicacion-esp").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-espacios").prop('disabled', false);//Habilitar este elemento
                        $("#ubicacion-esp").css("color", "black");//Agregar color negro en el texto
                   } else{

                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#ubicacion-esp').val().toUpperCase(), id_busqueda: 31.1}, function(existe) {
                        if (existe != 0 ) {
                        $("#ubicacion-esp" ).focus();//Colocar el foco en el campo de texto                      
                        $("#ubicacion-esp").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-espacios").prop('disabled', true);//Deshabilitar este elemento
                        $("#ubicacion-esp").css("color", "red");//Agregar color rojo en el texto
                        error('#mensaje-esp', '¡Ya está registrado!');
                  }else{
                        $("#ubicacion-esp").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-espacios").prop('disabled', false);//Habilitar este elemento
                        $("#ubicacion-esp").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
           });
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/
/*<!-- ******************VALIDACION PARA REGISTRAR ESPACIOS ACADEMICOS**************-->*/
 $('#form_espacios').submit(function(event) {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR
  //EL parametro event es obligatorio colocarlo, debido a que en Firefox da error sino se coloca 
      event.preventDefault();

    if($("#ubicacion-esp").val().length < 1) {  

            $("#ubicacion-esp").focus();
          error('#mensaje-esp', 'Ingresar la ubicación del espacio');

    }else if($("#direccion-esp").val().length < 1) {  
            $("#direccion-esp").focus();
          error('#mensaje-esp','Ingresar dirección');
    }else{
          
          if ($("#texto-guardar-esp").text() == 'Registrar'){

                 Registrar_esp(event);

          }else if($("#texto-guardar-esp").text() == 'Modificar'){ 
                 
                 Modificar_esp(event);
         }
      }
  });
/*<!-- ***********************************************************-->*/
  function Registrar_esp(event){

    var datos_esp ='id_proceso=' + 31
     + '&ubicacion_esp=' + $('#ubicacion-esp').val().toUpperCase()
     + '&direccion_esp=' + $('#direccion-esp').val().toUpperCase();

    registro_ajax("../procesos/procesos.php",datos_esp,"#mostrar_esp","../vista/buscar-esp.html","#form_espacios");
    exito('#mensaje-esp','Registrado'); 
  }
  function Modificar_esp(event){
    var datos_esp ='id_proceso=' + 31.1
     + '&ubicacion_esp=' + $('#ubicacion-esp').val().toUpperCase()
     + '&direccion_esp=' + $('#direccion-esp').val().toUpperCase()
     + '&cod_esp=' + $('#cod_esp_estatico').val();

    registro_ajax("../procesos/procesos.php",datos_esp,"#mostrar_esp","../vista/buscar-esp.html","#form_espacios");
    exito('#mensaje-esp','¡Hecho!'); 
   $('#mostrar_edificio').load('../vista/buscar-edif.html');//Cargar datos desde la base de datos
   $("#texto-guardar-esp").text('Registrar');   
  }
$("#edif-descripcion").keyup(function () {/*Apertura función jQuery*/
 if($("#edif-descripcion").val().length < 1) {/*Apertura if*/
  $("#edif-descripcion").removeClass("color_f");//Quitar el color de fondo del campo de texto
    $("#boton-enviar-edif").prop('disabled', false);//Habilitar este elemento
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#edif-descripcion').val().toUpperCase(), id_busqueda: 32.1}, function(resultado) {
             
           if ($("#texto-guardar").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#edif-descripcion" ).focus();//Colocar el foco en el campo de texto                       
                     $("#edif-descripcion").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-edif").prop('disabled', true);//Deshabilitar este elemento
                       $("#edif-descripcion").css("color", "red");//Agregar color rojo en el texto
                           error('#mensaje', '¡Ya está registrado!');
                  }else{ 
                        $("#edif-descripcion").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-edif").prop('disabled', false);//Habilitar este elemento
                        $("#edif-descripcion").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_edif_estatico').val() == $('#edif-descripcion').val()){
                        $("#edif-descripcion").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-edif").prop('disabled', false);//Habilitar este elemento
                        $("#edif-descripcion").css("color", "black");//Agregar color negro en el texto
                   } else{

                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#edif-descripcion').val().toUpperCase(), id_busqueda: 32.1}, function(existe) {
                        if (existe != 0 ) {
                        $("#edif-descripcion" ).focus();//Colocar el foco en el campo de texto                      
                        $("#edif-descripcion").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-edif").prop('disabled', true);//Deshabilitar este elemento
                        $("#edif-descripcion").css("color", "red");//Agregar color rojo en el texto
                        error('#mensaje', '¡Ya está registrado!');
                  }else{
                        $("#edif-descripcion").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-edif").prop('disabled', false);//Habilitar este elemento
                        $("#edif-descripcion").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
           });
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/

/*<!-- ******************VALIDACION PARA REGISTRAR EDIFICIOS**************-->*/
 $('#form_edif').submit(function(event) {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR
  //EL parametro event es obligatorio colocarlo, debido a que en Firefox da error sino se coloca 
      event.preventDefault();

    if($("#cod_ubic-esp").val() == 0) {  
            $("#cod_ubic-esp").focus();
          error('#mensaje', 'Ingresar ubicación del edificio');

    }else if($("#edif-descripcion").val().length < 1) {  
            $("#edif-descripcion").focus();
          error('#mensaje','Ingresar descripción del edificio');
    }else{
          
          if ($("#texto-guardar").text() == 'Registrar'){

                 Registrar(event);

          }else if($("#texto-guardar").text() == 'Modificar'){ 
                 
                 Modificar(event);
         }
      }
  });
/*<!-- ***********************************************************-->*/
  function Registrar(event){

   event.preventDefault();//Detiene el evento  
    var datos_edif ='id_proceso=' + 32
     + '&cod_ubicacion=' + $('#cod_ubic-esp').val()
     + '&desc_edif=' + $('#edif-descripcion').val().toUpperCase();

    registro_ajax("../procesos/procesos.php",datos_edif,"#mostrar_edificio","../vista/buscar-edif.html","#form_edif");
    exito('#mensaje','Registrado'); 
  
  }
/*<!-- ***********************************************************-->*/
  function Modificar(event){
   event.preventDefault();//Detiene el evento  

    var datos_edif ='id_proceso=' + 32.1
     + '&cod_ubicacion=' + $('#cod_ubic-esp').val()
     + '&desc_edif=' + $('#edif-descripcion').val().toUpperCase()
     + '&cod_edif=' + $('#cod_edif_estatico').val();

    registro_ajax("../procesos/procesos.php",datos_edif,"#mostrar_edificio","../vista/buscar-edif.html","#form_edif");
    exito('#mensaje','¡Hecho!'); 
   $("#texto-guardar").text('Registrar');   
  }
/*<!-- ***********************************************************-->*/ 
});/*CIERRE*/