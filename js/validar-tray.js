$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/

$("#tray-desc").keyup(function () {/*Apertura función jQuery*/
 if($("#tray-desc").val().length < 1) {/*Apertura if*/
  $("#tray-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
   $("#tray-desc").css("color", "black");//Agregar color negro en el texto
    $("#boton-enviar-tray").prop('disabled', false);//Habilitar este elemento
     
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#tray-desc').val().toUpperCase(), id_busqueda: 13}, function(resultado) {
             
           if ($("#texto-guardar-trayecto").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#tray-desc" ).focus();//Colocar el foco en el campo de texto                       
                     $("#tray-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-tray").prop('disabled', true);//Deshabilitar este elemento
                       $("#tray-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#tray-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-tray").prop('disabled', false);//Habilitar este elemento
                        $("#tray-desc").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-trayecto").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_tray_actual').val() == $('#tray-desc').val()){
                        $("#tray-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-tray").prop('disabled', false);//Habilitar este elemento
                        $("#tray-desc").css("color", "black");//Agregar color negro en el texto
                   } else{

                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#tray-desc').val().toUpperCase(), id_busqueda: 13}, function(existe) {
                        if (existe != 0 ) {
                        $("#tray-desc" ).focus();//Colocar el foco en el campo de texto                      
                        $("#tray-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-tray").prop('disabled', true);//Deshabilitar este elemento
                        $("#tray-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#tray-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-tray").prop('disabled', false);//Habilitar este elemento
                        $("#tray-desc").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
           });
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/
/*<!-- ******************VALIDACION PARA REGISTRAR TRAYECTOS**************-->*/
    $('#boton-enviar-tray').on('click', function(event) {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR
        //EL parametro event es obligatorio colocarlo, debido a que en Firefox da error sino se coloca 
      event.preventDefault();
    if($("#tray-desc").val().length < 1) {  
            $("#tray-desc").focus();
             error('#mensaje','Ingresar trayecto');

    }else{
          
          if ($("#texto-guardar-trayecto").text() == 'Registrar'){

                Registrar(event);

          }else if($("#texto-guardar-trayecto").text() == 'Modificar'){ 
                
                Modificar(event);
         }
      }
  });
/*<!-- ***********************************************************-->*/
  function Registrar(event){
   /*Nota: Cada proceso es enviado con un ID propio, por ejemplo el evento [registrar trayecto] tiene el ID 13*/
    event.preventDefault();//Detiene el evento 

    var datos_trayecto ='id_proceso=' + 13
     + '&desc_trayecto=' + $('#tray-desc').val().toUpperCase();
       
    registro_ajax("../procesos/procesos.php", datos_trayecto, '#mostrar_trayecto', '../vista/buscar-tray.html', '#form_tray');
               $.ajax({ type: "POST", url: "../procesos/mostrar-tray.php", success: function(response){
                $('.selector-trayecto select').html(response).fadeIn();  
                 }
           });
    exito('#mensaje','Registrado');

  }
  function Modificar(event){
/*Nota: Cada proceso es enviado con un ID propio, por ejemplo el evento [modificar trayecto] tiene el ID 14*/
    event.preventDefault();//Detiene el evento 

    var datos_trayecto ='id_proceso=' + 14
     + '&desc_trayecto=' + $('#tray-desc').val().toUpperCase()
     + '&cod_tray_estatico=' + $('#cod_tray_estatico').val();
       
    registro_ajax("../procesos/procesos.php", datos_trayecto, '#mostrar_trayecto', '../vista/buscar-tray.html', '#form_tray');
    exito('#mensaje','¡Hecho!');
   
   $("#texto-guardar-trayecto").text('Registrar');
  }
});/*CIERRE*/

