
$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/

$("#tram-desc").keyup(function () {/*Apertura función jQuery*/
 if($("#tram-desc").val().length < 1) {/*Apertura if*/
  $("#tram-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
   $("#tram-desc").css("color", "black");//Agregar color negro en el texto
    $("#boton-enviar-tram").prop('disabled', false);//Habilitar este elemento
     
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#tram-desc').val().toUpperCase(), id_busqueda: 15}, function(resultado) {
             
           if ($("#texto-guardar-tram").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#tram-desc" ).focus();//Colocar el foco en el campo de texto                       
                     $("#tram-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-tram").prop('disabled', true);//Deshabilitar este elemento
                       $("#tram-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#tram-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-tram").prop('disabled', false);//Habilitar este elemento
                        $("#tram-desc").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-tram").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_tramo_actual').val() == $('#tram-desc').val()){
                        $("#tram-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-tram").prop('disabled', false);//Habilitar este elemento
                        $("#tram-desc").css("color", "black");//Agregar color negro en el texto
                   } else{

                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#tram-desc').val().toUpperCase(), id_busqueda: 15}, function(existe) {
                        if (existe != 0 ) {
                        $("#tram-desc" ).focus();//Colocar el foco en el campo de texto                      
                        $("#tram-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-tram").prop('disabled', true);//Deshabilitar este elemento
                        $("#tram-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#tram-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-tram").prop('disabled', false);//Habilitar este elemento
                        $("#tram-desc").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
           });
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/
/*<!-- ******************VALIDACION PARA REGISTRAR TRAMOS**************-->*/
    $('#boton-enviar-tram').on('click',function(event) {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR
    
     event.preventDefault();//Detiene el evento
    
    if($("#id_trayecto").val() == 0) {  
          $("#id_trayecto").focus();
          error("#mensaje","Seleccionar un trayecto");

    }else if($("#tram-desc").val().length < 1) {  
          $("#tram-desc").focus();
          error("#mensaje","Ingresar la descripción de un tramo");

    }else{
          
          if ($("#texto-guardar-tram").text() == 'Registrar'){

                Registrar(event);

          }else if($("#texto-guardar-tram").text() == 'Modificar'){ 
                
                Modificar(event);        
         }
      }
  });
/*<!-- ***********************************************************-->*/
  function Registrar(event){
  
  event.preventDefault();//Detiene el evento  
    var datos_tram ='id_proceso='+15
     +'&desc_tram='+$('#tram-desc').val()
     +'&cod_trayecto='+$('#id_trayecto').val();

    registro_ajax("../procesos/procesos.php",datos_tram,'#mostrar_tramo','../vista/buscar-tramo.html','#form_tram');
    $('#tram-desc').val('');
    exito('#mensaje','Registrado');
  }
/*<!-- ***********************************************************-->*/
  function Modificar(event){
   event.preventDefault();//Detiene el evento  

    var datos_tram ='id_proceso='+16
     +'&desc_tram=' + $.trim($('#tram-desc').val().toUpperCase())
     +'&cod_trayecto='+ $.trim($('#id_trayecto').val())
     +'&cod_tram_estatico='+ $.trim($('#cod_tram_estatico').val());
       
    registro_ajax("../procesos/procesos.php",datos_tram,'#mostrar_tramo','../vista/buscar-tramo.html','#form_tram');

    $('#tram-desc').val('');
    exito('#mensaje','¡Hecho!');
   $("#texto-guardar-tram").text('Registrar');
   
  }  

});/*CIERRE*/

