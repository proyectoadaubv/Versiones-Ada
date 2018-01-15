$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/
 
/*<!-- ***********************************************************-->*/
       var Fecha_actual = new Date()
       //Thu May 1 2011 17:25:38 GMT+1000 {}
       var anio_sistema_actual = Fecha_actual.getFullYear();
  
     /*<!-- ***********************************************************-->*/
        var id_contenedor;
        $(".contenedor-calendario").on('click', function(){
                     id_contenedor = $(this).attr("id");
         });

        $('.boton-aceptar').on('click', function(){
                  var anio_cal_i;
                  var anio_comparar_i;
                  var mes_comparar_i;
                  var dia_comparar_i;

          if( id_contenedor == 'fecha-inicio'){/*<!-- == IF == -->*/

                   anio_cal_i = $('#fecha-inicio-desc').html();
                   anio_comparar_i = anio_cal_i[6]+anio_cal_i[7]+anio_cal_i[8]+anio_cal_i[9];
                   mes_comparar_i = anio_cal_i[3]+anio_cal_i[4];
                   dia_comparar_i = anio_cal_i[0]+anio_cal_i[1];    
                  
                 if(anio_sistema_actual >  anio_comparar_i){
                    $("#fecha-inicio-desc").html('');
                    error("#mensaje","El año de inicio es menor que el año actual");
                 }

          }else if(id_contenedor == 'fecha-cierre'){/*<!-- == ELSE == -->*/

                   anio_cal_i = $('#fecha-inicio-desc').html();
                   anio_comparar_i = anio_cal_i[6]+anio_cal_i[7]+anio_cal_i[8]+anio_cal_i[9];
                   mes_comparar_i = anio_cal_i[3]+anio_cal_i[4];
                   dia_comparar_i = anio_cal_i[0]+anio_cal_i[1]; 

                  var anio_cal_c = $('#fecha-cierre-desc').html();
                  var anio_comparar_c = anio_cal_c[6]+anio_cal_c[7]+anio_cal_c[8]+anio_cal_c[9];
                  var mes_comparar_c = anio_cal_c[3]+anio_cal_c[4];
                  var dia_comparar_c = anio_cal_c[0]+anio_cal_c[1]; 
                
                if(anio_sistema_actual >  anio_comparar_c){
                    $("#fecha-cierre-desc").html('');
                    error("#mensaje","El año de cierre es menor que el año actual");
                 }

                 if($('#fecha-inicio-desc').is(':empty')) {
                   $("#fecha-cierre-desc").html('');
                   error("#mensaje","Ingresar fecha de inicio");
                 }

                 if((dia_comparar_i+""+mes_comparar_i+""+anio_comparar_i)
                  == (dia_comparar_c+""+mes_comparar_c+""+anio_comparar_c)){
                    error("#mensaje","La fecha de inicio coincide con la fecha de cierre");
                     $("#fecha-inicio-desc").html('');
                      $("#fecha-cierre-desc").html('');
                 }

                if(anio_comparar_i >  anio_comparar_c){
                    $("#fecha-cierre-desc").html('');
                    error("#mensaje","El año de inicio es mayor que el año de cierre");
                 }

                 if( mes_comparar_i > mes_comparar_c ){

                     if( anio_comparar_i < anio_comparar_c){}else{
                       $("#fecha-cierre-desc").html('');
                       error("#mensaje","El mes de incio es mayor que el mes de cierre");
                     }
                  }

                 if( mes_comparar_i == mes_comparar_c && anio_comparar_i == anio_comparar_c){

                        $("#fecha-cierre-desc").html('');
                       error("#mensaje","La fecha de inicio coincide con la fecha de cierre");
                  }
             }/*<!-- == CLOSE ELSE == -->*/              
           });
/*<!-- ***********************************************************-->*/
 
 limpiar('#contenedor-accion-recursos');
 texto_fondo("#desc-recursos", "Descripción de actividades");
 entrada_raton('#desc-recursos');

$("#descripcion-siglas").keyup(function () {/*Apertura función jQuery*/
 if($("#descripcion-siglas").val().length < 1) {/*Apertura if*/
  $("#descripcion-siglas").removeClass("color_f");//Quitar el color de fondo del campo de texto
   $("#descripcion-siglas").css("color", "black");//Agregar color negro en el texto
    $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
     }else{/*Apertura else*/
          //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
           $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#descripcion-siglas').val().toUpperCase(), id_busqueda: 41}, function(resultado) {  
           if ($("#texto-guardar-recursos").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#descripcion-siglas" ).focus();//Colocar el foco en el campo de texto                       
                     $("#descripcion-siglas").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                       $("#descripcion-siglas").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#descripcion-siglas").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#descripcion-siglas").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-recursos").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_actual').val() == $('#descripcion-siglas').val()){
                        $("#descripcion-siglas").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#descripcion-siglas").css("color", "black");//Agregar color negro en el texto
                   } else{
                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#descripcion-siglas').val().toUpperCase(), id_busqueda: 41}, function(existe) {
                        if (existe != 0 ) {
                        $("#descripcion-siglas" ).focus();//Colocar el foco en el campo de texto                      
                        $("#descripcion-siglas").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                        $("#descripcion-siglas").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#descripcion-siglas").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#descripcion-siglas").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
            }); 
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/

$("#desc-recursos").keyup(function () {/*Apertura función jQuery*/
 if($("#desc-recursos").val().length < 1) {/*Apertura if*/
  $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
   $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
    $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
     }else{/*Apertura else*/

         if($('#acciones-recursos').val() == 2){/*====================INICIO====================*/
          //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
           $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.2}, function(resultado) {  
           if ($("#texto-guardar-recursos").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                       
                     $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                       $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-recursos").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_actual').val() == $('#desc-recursos').val()){
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                   } else{
                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.2}, function(existe) {
                        if (existe != 0 ) {
                        $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                      
                        $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                        $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
            }); 
          }/*====================FIN====================*/
        
         if($('#acciones-recursos').val() == 3){/*====================INICIO====================*/
          //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
           $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.3}, function(resultado) {  
           if ($("#texto-guardar-recursos").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                       
                     $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                       $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-recursos").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_actual').val() == $('#desc-recursos').val()){
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                   } else{
                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.3}, function(existe) {
                        if (existe != 0 ) {
                        $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                      
                        $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                        $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
            }); 
          }/*====================FIN====================*/

         if($('#acciones-recursos').val() == 4){/*====================INICIO====================*/
          //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
           $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.4}, function(resultado) {  
           if ($("#texto-guardar-recursos").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                       
                     $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                       $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-recursos").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_actual').val() == $('#desc-recursos').val()){
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                   } else{
                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.4}, function(existe) {
                        if (existe != 0 ) {
                        $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                      
                        $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                        $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
            }); 
          }/*====================FIN====================*/

         if($('#acciones-recursos').val() == 5){/*====================INICIO====================*/
          //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
           $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.5}, function(resultado) {  
           if ($("#texto-guardar-recursos").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                       
                     $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                       $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-recursos").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_actual').val() == $('#desc-recursos').val()){
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                   } else{
                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.5}, function(existe) {
                        if (existe != 0 ) {
                        $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                      
                        $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                        $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
            }); 
          }/*====================FIN====================*/

         if($('#acciones-recursos').val() == 6){/*====================INICIO====================*/
          //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
           $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.6}, function(resultado) {  
           if ($("#texto-guardar-recursos").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                       
                     $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                       $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-recursos").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_actual').val() == $('#desc-recursos').val()){
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                   } else{
                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.6}, function(existe) {
                        if (existe != 0 ) {
                        $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                      
                        $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                        $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
            }); 
          }/*====================FIN====================*/

         if($('#acciones-recursos').val() == 7){/*====================INICIO====================*/
          //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
           $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.7}, function(resultado) {  
           if ($("#texto-guardar-recursos").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                       
                     $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                       $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-recursos").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_actual').val() == $('#desc-recursos').val()){
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                   } else{
                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.7}, function(existe) {
                        if (existe != 0 ) {
                        $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                      
                        $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                        $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
            }); 
          }/*====================FIN====================*/

         if($('#acciones-recursos').val() == 8){/*====================INICIO====================*/
          //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
           $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.8}, function(resultado) {  
           if ($("#texto-guardar-recursos").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                       
                     $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                       $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-recursos").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_actual').val() == $('#desc-recursos').val()){
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                   } else{
                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.8}, function(existe) {
                        if (existe != 0 ) {
                        $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                      
                        $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                        $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
            }); 
          }/*====================FIN====================*/

         if($('#acciones-recursos').val() == 9){/*====================INICIO====================*/
          //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
           $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.9}, function(resultado) {  
           if ($("#texto-guardar-recursos").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                       
                     $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                       $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-recursos").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_actual').val() == $('#desc-recursos').val()){
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                   } else{
                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.9}, function(existe) {
                        if (existe != 0 ) {
                        $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                      
                        $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                        $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
            }); 
          }/*====================FIN====================*/
         if($('#acciones-recursos').val() == 10){/*====================INICIO====================*/
          //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
           $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.10}, function(resultado) {  
           if ($("#texto-guardar-recursos").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                       
                     $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                       $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-recursos").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_actual').val() == $('#desc-recursos').val()){
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                   } else{
                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.10}, function(existe) {
                        if (existe != 0 ) {
                        $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                      
                        $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                        $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
            }); 
          }/*====================FIN====================*/

         if($('#acciones-recursos').val() == 11){/*====================INICIO====================*/
          //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
           $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.11}, function(resultado) {  
           if ($("#texto-guardar-recursos").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                       
                     $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                       $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-recursos").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_actual').val() == $('#desc-recursos').val()){
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                   } else{
                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.11}, function(existe) {
                        if (existe != 0 ) {
                        $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                      
                        $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                        $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
            }); 
          }/*====================FIN====================*/


         if($('#acciones-recursos').val() == 12){/*====================INICIO====================*/
          //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
           $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.12}, function(resultado) {  
           if ($("#texto-guardar-recursos").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                       
                     $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                       $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-recursos").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_actual').val() == $('#desc-recursos').val()){
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                   } else{
                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc-recursos').val().toUpperCase(), id_busqueda: 41.12}, function(existe) {
                        if (existe != 0 ) {
                        $("#desc-recursos" ).focus();//Colocar el foco en el campo de texto                      
                        $("#desc-recursos").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', true);//Deshabilitar este elemento
                        $("#desc-recursos").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#desc-recursos").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-recursos").prop('disabled', false);//Habilitar este elemento
                        $("#desc-recursos").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
            }); 
          }/*====================FIN====================*/
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/

$('#acciones-recursos').change(function(){
  
  if($('#acciones-recursos').val() == 0){
      texto_fondo("#desc-recursos", "Descripción de actividades");
      ocultar('#siglas'); 
      ocultar('#desc-sigla');
      ocultar('#ag-horas-comp');
      ocultar('#version-malla');
      limpiar('#contenedor-accion-recursos');
      $('#desc-recursos').val('');
      $('#texto-guardar-recursos').text('Registrar');
  }
  if($('#acciones-recursos').val() == 1){
      texto_fondo("#desc-recursos", "Ej: Programa de formación de grado");
      ocultar('#siglas'); 
      ocultar('#ag-horas-comp');
      ocultar('#version-malla');
      asignar('#desc-sigla','#mostrar-contenido');
      $('#contenedor-accion-recursos').load('../procesos/tabla-rec1.php');
  }

  if($('#acciones-recursos').val() == 2){
       limpiar('#contenedor-accion-recursos');
       ocultar('#ag-horas-comp');
       ocultar('#desc-sigla');
       ocultar('#version-malla');
       asignar('#siglas','#mostrar-contenido');
       texto_fondo("#desc-recursos", "Ej: Informática");
       $('#contenedor-accion-recursos').load('../procesos/tabla-rec2.php');
  }

  if($('#acciones-recursos').val() == 3){
       limpiar('#contenedor-accion-recursos');
       ocultar('#siglas'); 
       ocultar('#desc-sigla');
       ocultar('#version-malla');
       asignar('#ag-horas-comp','#mas-contenido');
       texto_fondo("#desc-recursos", "Ej: Formación - Administrativa - Socio comunitaria");
       $('#contenedor-accion-recursos').load('../procesos/tabla-rec3.php');
  }
  if($('#acciones-recursos').val() == 4){
       limpiar('#contenedor-accion-recursos');
       ocultar('#siglas'); 
       ocultar('#ag-horas-comp');
       ocultar('#desc-sigla');
       ocultar('#version-malla');
       texto_fondo("#desc-recursos", "Ej: Exclusiva");
      $('#contenedor-accion-recursos').load('../procesos/tabla-rec4.php');
  }
  if($('#acciones-recursos').val() == 5){
       limpiar('#contenedor-accion-recursos');
       ocultar('#siglas'); 
       ocultar('#ag-horas-comp');
       ocultar('#desc-sigla');
       ocultar('#version-malla');
       texto_fondo("#desc-recursos", "Ej: Agregado - Titular");
       $('#contenedor-accion-recursos').load('../procesos/tabla-rec5.php');
  }
  if($('#acciones-recursos').val() == 6){
      limpiar('#contenedor-accion-recursos');
      ocultar('#siglas'); 
      ocultar('#ag-horas-comp');
      ocultar('#desc-sigla');
      ocultar('#version-malla');
      texto_fondo("#desc-recursos", "Ej: Profesor guia - profesor metodológico");
       $('#contenedor-accion-recursos').load('../procesos/tabla-rec6.php');
  }
  if($('#acciones-recursos').val() == 7){
      ocultar('#siglas'); 
      ocultar('#ag-horas-comp');
      ocultar('#desc-sigla');
      ocultar('#version-malla');
      texto_fondo("#desc-recursos", "Ej: Diurno - nocturno");
      $('#contenedor-accion-recursos').load('../procesos/tabla-rec7.php');
  }
  if($('#acciones-recursos').val() == 8){
      limpiar('#contenedor-accion-recursos');
      ocultar('#siglas'); 
      ocultar('#ag-horas-comp');
      ocultar('#desc-sigla');
      texto_fondo("#desc-recursos", "Descripción de la versión");
      asignar('#version-malla','#mas-contenido');
      $('#contenedor-accion-recursos').load('../procesos/tabla-rec8.php');
  }
  if($('#acciones-recursos').val() == 9){
      limpiar('#contenedor-accion-recursos');
      ocultar('#siglas'); 
      ocultar('#ag-horas-comp');
      ocultar('#desc-sigla');
      ocultar('#version-malla');
      texto_fondo("#desc-recursos", "Descripción");
      $('#contenedor-accion-recursos').load('../procesos/tabla-rec9.php');
  }
  if($('#acciones-recursos').val() == 10){
      limpiar('#contenedor-accion-recursos');
      ocultar('#siglas'); 
      ocultar('#ag-horas-comp');
      ocultar('#desc-sigla');
      ocultar('#version-malla');
      texto_fondo("#desc-recursos", "Descripción");
      $('#contenedor-accion-recursos').load('../procesos/tabla-rec10.php');
  }
  if($('#acciones-recursos').val() == 11){
      limpiar('#contenedor-accion-recursos');
      ocultar('#siglas');
      ocultar('#ag-horas-comp'); 
      ocultar('#desc-sigla');
      ocultar('#version-malla');
      texto_fondo("#desc-recursos", "Descripción");
      $('#contenedor-accion-recursos').load('../procesos/tabla-rec11.php');
  }
 if($('#acciones-recursos').val() == 12){
      limpiar('#contenedor-accion-recursos');
      ocultar('#siglas'); 
      ocultar('#ag-horas-comp');
      ocultar('#desc-sigla');
      ocultar('#version-malla');
      texto_fondo("#desc-recursos", "Ej: Perteneciente - apoyo");
      $('#contenedor-accion-recursos').load('../procesos/tabla-rec12.php');
  }
});
$('#form-recursos-academicos').submit(function(event){
    event.preventDefault();
    if( $('#acciones-recursos').val() == 0){
           
       error('#mensaje','Seleccionar una actividad');
    }else{ 
        if( $('#acciones-recursos').val() == 1){
      
           if( $('#descripcion-siglas').val().length < 1 ){
      
                 error('#mensaje','Ingresar sigla');
      
           }else if($('#desc-recursos').val().length < 1){
      
                error('#mensaje','Ingresar descripción');
      
           }else{

                if ($("#texto-guardar-recursos").text() == 'Registrar'){

                Registrar(event);

                }else if($("#texto-guardar-recursos").text() == 'Modificar'){ 
            
                Modificar(event);
                
                }
           }
        }else if( $('#acciones-recursos').val() == 2){
      
           if( $('#cod_siglas').val() == 0){
      
                 error('#mensaje','Seleccionar sigla');
      
           }else if($('#desc-recursos').val().length < 1){
      
                error('#mensaje','Ingresar descripción');
      
           }else{

                if ($("#texto-guardar-recursos").text() == 'Registrar'){

                Registrar(event);

                }else if($("#texto-guardar-recursos").text() == 'Modificar'){ 
            
                Modificar(event);
                
                }
           }
        }else if( $('#acciones-recursos').val() == 3){
      
           
           if($('#desc-recursos').val().length < 1){
      
                error('#mensaje','Ingresar descripción');
      
           }else if($('#horas-comp').val().length < 1){
      
                error('#mensaje','Ingresar horas');
      
           }else{

                if ($("#texto-guardar-recursos").text() == 'Registrar'){

                Registrar(event);

                }else if($("#texto-guardar-recursos").text() == 'Modificar'){ 
            
                Modificar(event);
                
                }
           }
        }else if( $('#acciones-recursos').val() == 8){
         
           if($('#desc-recursos').val().length < 1){
      
                error('#mensaje','Ingresar versión');
      
           } else if ($('#fecha-inicio-desc').is(':empty')) {
              
             error('#mensaje','Ingresar fecha de apertura');
       
           }else if ($('#fecha-cierre-desc').is(':empty')) {
              
             error('#mensaje','Ingresar fecha de cierre');
             } else{

                if ($("#texto-guardar-recursos").text() == 'Registrar'){

                Registrar(event);

                }else if($("#texto-guardar-recursos").text() == 'Modificar'){ 
            
                Modificar(event);
                
                }
           }
        } else if($('#desc-recursos').val().length < 1){
           var valor=document.getElementById('acciones-recursos').options.selectedIndex;//Obtener valor
            
          error('#mensaje','Ingresar descripcion de: '+( document.getElementById('acciones-recursos').options[valor].text)+'');
         }else{

          if ($("#texto-guardar-recursos").text() == 'Registrar'){

                Registrar(event);

          }else if($("#texto-guardar-recursos").text() == 'Modificar'){ 
            
                Modificar(event);
           }

         }
    }
});

function Registrar(event){
    event.preventDefault();//Detiene el evento
  var datos;
  if($('#acciones-recursos').val() == 1){

     datos ='id_proceso=' + 41
     + '&desc=' + $('#descripcion-siglas').val().toUpperCase()
     + '&agregado=' + $('#desc-recursos').val().toUpperCase()
     + '&opcion=' + 1;
    registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec1.php","#");
    $('#desc-recursos').val('');
    $('#descripcion-siglas').val('');
    exito("#mensaje","Registrado");
        $.ajax({ type: "POST", url: "../procesos/mostrar-siglas.php", success: function(response){
        $('.siglas select').html(response).fadeIn();  
          }
        });
  }
  if($('#acciones-recursos').val() == 2){
    datos ='id_proceso=' + 41
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&agregado=' + $('#cod_siglas').val()
     + '&opcion=' + 2;
    registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec2.php","#");
    $('#desc-recursos').val('');
    $('#cod_siglas').prop('selectedIndex',0);/*Reiniciar select*/
    exito("#mensaje","Registrado"); 
  }

  if($('#acciones-recursos').val() == 3){
    datos ='id_proceso=' + 41
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&agregado=' + $('#horas-comp').val()
     + '&opcion=' + 3;
    registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec3.php","#");
    $('#desc-recursos').val('');
    $('#horas-comp').val('');
    exito("#mensaje","Registrado");     
  }

  if($('#acciones-recursos').val() == 4){
     datos ='id_proceso=' + 41
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&opcion=' + 4;
    registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec4.php","#");
    $('#desc-recursos').val('');
    exito("#mensaje","Registrado");     
  }
  if($('#acciones-recursos').val() == 5){
     datos ='id_proceso=' + 41
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&opcion=' + 5;
    registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec5.php","#");
    $('#desc-recursos').val('');
    exito("#mensaje","Registrado");     
  }
  if($('#acciones-recursos').val() == 6){
     datos ='id_proceso=' + 41
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&opcion=' + 6;
    registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec6.php","#");
    $('#desc-recursos').val('');
    exito("#mensaje","Registrado");     
  }

  if($('#acciones-recursos').val() == 7){
     datos ='id_proceso=' + 41
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&opcion=' + 7;
    registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec7.php","#");
    $('#desc-recursos').val('');
    exito("#mensaje","Registrado");
       
  }

   if($('#acciones-recursos').val() == 8){
        /*Invertir fecha de inicio del periodo, formato: Año-Mes-Dia*/
        var invertir_fecha_ini = $("#fecha-inicio-desc").html().split('-');
        invertir_fecha_ini.reverse();
        var fecha_invertida_ini= invertir_fecha_ini.join('-');
        /*Invertir fecha de cierre del periodo, formato: Año-Mes-Dia*/
        var invertir_fecha_fin = $("#fecha-cierre-desc").html().split('-');
        invertir_fecha_fin.reverse();
        var fecha_invertida_fin= invertir_fecha_fin.join('-');
     datos ='id_proceso=' + 41
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&desc2=' + fecha_invertida_ini
     + '&agregado=' + fecha_invertida_fin
     + '&opcion=' + 8;
    registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec8.php","#");
    $('#desc-recursos').val('');
     $("#fecha-inicio-desc").html('');
     $("#fecha-cierre-desc").html('');
    exito("#mensaje","Registrado"); 
  }

  if($('#acciones-recursos').val() == 9){
     datos ='id_proceso=' + 41
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&opcion=' + 9;
    registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec9.php","#");
    $('#desc-recursos').val('');
    exito("#mensaje","Registrado");  
  }
  if($('#acciones-recursos').val() == 10){
       datos ='id_proceso=' + 41
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&opcion=' + 10;
    registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec10.php","#");
    $('#desc-recursos').val('');
    exito("#mensaje","Registrado");    
  }
  if($('#acciones-recursos').val() == 11){
       datos ='id_proceso=' + 41
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&opcion=' + 11;
    registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec11.php","#");
    $('#desc-recursos').val('');
    exito("#mensaje","Registrado");     
  }
 if($('#acciones-recursos').val() == 12){
     datos ='id_proceso=' + 41
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&opcion=' + 12;
    registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec12.php","#");
    $('#desc-recursos').val('');
    exito("#mensaje","Registrado");   
  }

}

  function Modificar(event){/*Open funcion*/
    event.preventDefault();//Detiene el evento
     var datos;
     
     if($('#acciones-recursos').val() == 1){/*Open if*/
     datos ='id_proceso=' + 42
     + '&desc=' + $('#descripcion-siglas').val().toUpperCase()
     + '&desc2=' + $('#desc-recursos').val()
     + '&agregado=' + $('#cod_actual').val()
     + '&opcion=' + 1;
        registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec1.php","#");
        $('#descripcion-siglas').val('');
        $('#desc-recursos').val('');
        $.ajax({ type: "POST", url: "../procesos/mostrar-siglas.php", success: function(response){
        $('.siglas select').html(response).fadeIn();  
          }
        });
     exito("#mensaje",'¡Hecho!');
     $('#texto-guardar-recursos').text('Registrar');
    }/*Close if*/
    
     if($('#acciones-recursos').val() == 2){/*Open if*/
    datos ='id_proceso=' + 42
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&desc2=' + $('#cod_siglas').val()
     + '&agregado=' + $('#cod_actual').val()
     + '&opcion=' + 2;
     registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec2.php","#");
     $('#desc-recursos').val('');
     $('#cod_siglas').prop('selectedIndex',0);/*Reiniciar select*/
     exito("#mensaje","¡Hecho!");
     $('#texto-guardar-recursos').text('Registrar');

    }/*Close if*/

     if($('#acciones-recursos').val() == 3){/*Open if*/
    datos ='id_proceso=' + 42
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&desc2=' + $('#horas-comp').val()
     + '&agregado=' + $('#cod_actual').val()
     + '&opcion=' + 3;
     registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec3.php","#");
     $('#desc-recursos').val('');
     $('#horas-comp').val('');

     exito("#mensaje","¡Hecho!");
     $('#texto-guardar-recursos').text('Registrar');

    }/*Close if*/

     if($('#acciones-recursos').val() == 4){/*Open if*/
    datos ='id_proceso=' + 42
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&agregado=' + $('#cod_actual').val()
     + '&opcion=' + 4;
     registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec4.php","#");
     $('#desc-recursos').val('');
     exito("#mensaje","¡Hecho!");
     $('#texto-guardar-recursos').text('Registrar');

    }/*Close if*/

     if($('#acciones-recursos').val() == 5){/*Open if*/
    datos ='id_proceso=' + 42
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&agregado=' + $('#cod_actual').val()
     + '&opcion=' + 5;
     registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec5.php","#");
     $('#desc-recursos').val('');
     exito("#mensaje","¡Hecho!");
     $('#texto-guardar-recursos').text('Registrar');
    }/*Close if*/

     if($('#acciones-recursos').val() == 6){/*Open if*/
    datos ='id_proceso=' + 42
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&agregado=' + $('#cod_actual').val()
     + '&opcion=' + 6;
     registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec6.php","#");
     $('#desc-recursos').val('');
     exito("#mensaje","¡Hecho!");
     $('#texto-guardar-recursos').text('Registrar');

    }/*Close if*/

     if($('#acciones-recursos').val() == 7){/*Open if*/
    datos ='id_proceso=' + 42
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&agregado=' + $('#cod_actual').val()
     + '&opcion=' + 7;
     registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec7.php","#");
     $('#desc-recursos').val('');
     exito("#mensaje","¡Hecho!");
     $('#texto-guardar-recursos').text('Registrar');

    }/*Close if*/

     if($('#acciones-recursos').val() == 8){/*Open if*/
        /*Invertir fecha de inicio del periodo, formato: Año-Mes-Dia*/
        var invertir_fecha_ini = $("#fecha-inicio-desc").html().split('-');
        invertir_fecha_ini.reverse();
        var fecha_invertida_ini= invertir_fecha_ini.join('-');
        /*Invertir fecha de cierre del periodo, formato: Año-Mes-Dia*/
        var invertir_fecha_fin = $("#fecha-cierre-desc").html().split('-');
        invertir_fecha_fin.reverse();
        var fecha_invertida_fin= invertir_fecha_fin.join('-');

    datos ='id_proceso=' + 42
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&desc2=' + fecha_invertida_ini
     + '&desc3=' + fecha_invertida_fin
     + '&agregado=' + $('#cod_actual').val()
     + '&opcion=' + 8;
     registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec8.php","#");
     $('#desc-recursos').val('');
     $("#fecha-inicio-desc").html('');
     $("#fecha-cierre-desc").html('');
     exito("#mensaje","¡Hecho!");
     $('#texto-guardar-recursos').text('Registrar');

    }/*Close if*/

     if($('#acciones-recursos').val() == 9){/*Open if*/
    datos ='id_proceso=' + 42
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&agregado=' + $('#cod_actual').val()
     + '&opcion=' + 9;
     registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec9.php","#");
     $('#desc-recursos').val('');
     exito("#mensaje","¡Hecho!");
     $('#texto-guardar-recursos').text('Registrar');

    }/*Close if*/
     if($('#acciones-recursos').val() == 10){/*Open if*/
    datos ='id_proceso=' + 42
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&agregado=' + $('#cod_actual').val()
     + '&opcion=' + 10;
     registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec10.php","#");
     $('#desc-recursos').val('');
     exito("#mensaje","¡Hecho!");
     $('#texto-guardar-recursos').text('Registrar');

    }/*Close if*/

     if($('#acciones-recursos').val() == 11){/*Open if*/
    datos ='id_proceso=' + 42
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&agregado=' + $('#cod_actual').val()
     + '&opcion=' + 11;
     registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec11.php","#");
     $('#desc-recursos').val('');
     exito("#mensaje","¡Hecho!");
     $('#texto-guardar-recursos').text('Registrar');

    }/*Close if*/
     if($('#acciones-recursos').val() == 12){/*Open if*/
    datos ='id_proceso=' + 42
     + '&desc=' + $('#desc-recursos').val().toUpperCase()
     + '&agregado=' + $('#cod_actual').val()
     + '&opcion=' + 12;
     registro_ajax("../procesos/procesos.php",datos,"#contenedor-accion-recursos","../procesos/tabla-rec12.php","#");
     $('#desc-recursos').val('');
     exito("#mensaje","¡Hecho!");
     $('#texto-guardar-recursos').text('Registrar');

    }/*Close if*/
  }/*Close funcion*/
});/*CIERRE*/