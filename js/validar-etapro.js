
$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/

$("#etapa-proyecto-desc").keyup(function () {/*Apertura función jQuery*/
 if($("#etapa-proyecto-desc").val().length < 1) {/*Apertura if*/
  $("#etapa-proyecto-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
   $("#etapa-proyecto-desc").css("color", "black");//Agregar color negro en el texto
    $("#boton-enviar-etapa-proyecto").prop('disabled', false);//Habilitar este elemento
     
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#etapa-proyecto-desc').val().toUpperCase(), id_busqueda: 39}, function(resultado) {
             
           if ($("#texto-guardar-etapa-proyecto").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#etapa-proyecto-desc" ).focus();//Colocar el foco en el campo de texto                       
                     $("#etapa-proyecto-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-etapa-proyecto").prop('disabled', true);//Deshabilitar este elemento
                       $("#etapa-proyecto-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#etapa-proyecto-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-etapa-proyecto").prop('disabled', false);//Habilitar este elemento
                        $("#etapa-proyecto-desc").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-etapa-proyecto").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_etapasoft_actual').val() == $('#etapa-proyecto-desc').val()){
                        $("#etapa-proyecto-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-etapa-proyecto").prop('disabled', false);//Habilitar este elemento
                        $("#etapa-proyecto-desc").css("color", "black");//Agregar color negro en el texto
                   } else{

                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#etapa-proyecto-desc').val().toUpperCase(), id_busqueda: 39}, function(existe) {
                        if (existe != 0 ) {
                        $("#etapa-proyecto-desc" ).focus();//Colocar el foco en el campo de texto                      
                        $("#etapa-proyecto-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-etapa-proyecto").prop('disabled', true);//Deshabilitar este elemento
                        $("#etapa-proyecto-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#etapa-proyecto-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-etapa-proyecto").prop('disabled', false);//Habilitar este elemento
                        $("#etapa-proyecto-desc").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
           });
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/
/*<!-- ******************VALIDACION PARA REGISTRAR**************-->*/
    $('#form_etapa-proyecto').submit(function() {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR
     event.preventDefault();//Detiene el evento
     if($("#etapa-proyecto-desc").val().length < 1) {  
          $("#etapa-proyecto-desc").focus();
          error("#mensaje-ep","Ingresar descripción etapa de proyecto");

    }else{
          
          if ($("#texto-guardar-etapa-proyecto").text() == 'Registrar'){

                Registrar(event);

          }else if($("#texto-guardar-etapa-proyecto").text() == 'Modificar'){ 
                
                Modificar(event);        
         }
      }
  });
/*<!-- ***********************************************************-->*/
  function Registrar(event){
  event.preventDefault();//Detiene el evento  
    var datos_etapro ='id_proceso=' + 39
     + '&desc=' + $('#etapa-proyecto-desc').val().toUpperCase();
    registro_ajax("../procesos/procesos.php",datos_etapro,"#mostrar_etapas_proyecto","../vista/buscar-et-proyecto.html","#form_etapa-proyecto");
  exito("#mensaje-ep","Registrado");
  }
/*<!-- ***********************************************************-->*/
  function Modificar(event){
   event.preventDefault();//Detiene el evento  
  var datos_etapro ='id_proceso=' + 39.1
     + '&desc=' + $('#etapa-proyecto-desc').val().toUpperCase()
     + '&cod=' + $('#cod_etapasoft_estatico').val();
   registro_ajax("../procesos/procesos.php",datos_etapro,"#mostrar_etapas_proyecto","../vista/buscar-et-proyecto.html","#form_etapa-proyecto");
   exito("#mensaje-ep","¡Hecho!");
   $("#texto-guardar-etapa-proyecto").text('Registrar');
  }  
});/*CIERRE*/

