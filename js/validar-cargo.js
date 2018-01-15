
$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/

$("#cargo-desc").keyup(function () {/*Apertura función jQuery*/
 if($("#cargo-desc").val().length < 1) {/*Apertura if*/
  $("#cargo-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
   $("#cargo-desc").css("color", "black");//Agregar color negro en el texto
    $("#boton-enviar-cargo").prop('disabled', false);//Habilitar este elemento
     
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#cargo-desc').val().toUpperCase(), id_busqueda: 36}, function(resultado) {
             
           if ($("#texto-guardar-cargo").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#cargo-desc" ).focus();//Colocar el foco en el campo de texto                       
                     $("#cargo-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-cargo").prop('disabled', true);//Deshabilitar este elemento
                       $("#cargo-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#cargo-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-cargo").prop('disabled', false);//Habilitar este elemento
                        $("#cargo-desc").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-cargo").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_cargos_actual').val() == $('#cargo-desc').val()){
                        $("#cargo-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-cargo").prop('disabled', false);//Habilitar este elemento
                        $("#cargo-desc").css("color", "black");//Agregar color negro en el texto
                   } else{

                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#cargo-desc').val().toUpperCase(), id_busqueda: 36}, function(existe) {
                        if (existe != 0 ) {
                        $("#cargo-desc" ).focus();//Colocar el foco en el campo de texto                      
                        $("#cargo-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-cargo").prop('disabled', true);//Deshabilitar este elemento
                        $("#cargo-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#cargo-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-cargo").prop('disabled', false);//Habilitar este elemento
                        $("#cargo-desc").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
           });
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/
/*<!-- ******************VALIDACION PARA REGISTRAR**************-->*/
    $('#form_cargos').submit(function() {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR
    
     event.preventDefault();//Detiene el evento
    
     if($("#cargo-desc").val().length < 1) {  
          $("#cargo-desc").focus();
          error("#mensaje-c","Ingresar descripción del cargo");
        }else{
          
          if ($("#texto-guardar-cargo").text() == 'Registrar'){

                Registrar(event);

          }else if($("#texto-guardar-cargo").text() == 'Modificar'){ 
                
                Modificar(event);        
         }
      }
  });
/*<!-- ***********************************************************-->*/
  function Registrar(event){
  
  event.preventDefault();//Detiene el evento  
    var datos_cargo ='id_proceso=' + 36
     + '&desc=' + $('#cargo-desc').val().toUpperCase();
    registro_ajax("../procesos/procesos.php",datos_cargo,"#mostrar_cargos","../vista/buscar-cargos.html","#form_cargos");
  exito("#mensaje-c","Registrado");
  }
/*<!-- ***********************************************************-->*/
  function Modificar(event){

   event.preventDefault();//Detiene el evento 
    var datos_cargo ='id_proceso=' + 36.1
     + '&desc=' + $('#cargo-desc').val().toUpperCase()
     + '&cod=' + $('#cod_cargos_estatico').val();
    registro_ajax("../procesos/procesos.php",datos_cargo,"#mostrar_cargos","../vista/buscar-cargos.html","#form_cargos");
    exito("#mensaje-c","¡Hecho!");
  $("#texto-guardar-cargo").text('Registrar');   
  }  
/*<!-- ***********************************************************-->*/

});/*CIERRE*/