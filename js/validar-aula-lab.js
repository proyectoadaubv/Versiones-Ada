$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/
$("#desc_esp").keyup(function () {/*Apertura función jQuery*/
if( $('#id_espacio').val() == 1){
 if($("#desc_esp").val().length < 1) {/*Apertura if*/
  $("#desc_esp").removeClass("color_f");//Quitar el color de fondo del campo de texto
   $("#desc_esp").css("color", "black");//Agregar color negro en el texto
    $("#boton-enviar-esp").prop('disabled', false);//Habilitar este elemento
     
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc_esp').val().toUpperCase(), id_busqueda: 17}, function(resultado) {
             
           if ($("#texto-guardar").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#desc_esp" ).focus();//Colocar el foco en el campo de texto                       
                     $("#desc_esp").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-esp").prop('disabled', true);//Deshabilitar este elemento
                       $("#desc_esp").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#desc_esp").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-esp").prop('disabled', false);//Habilitar este elemento
                        $("#desc_esp").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_au_actual').val() == $('#desc_esp').val()){
                        $("#desc_esp").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-esp").prop('disabled', false);//Habilitar este elemento
                        $("#desc_esp").css("color", "black");//Agregar color negro en el texto
                   } else{

                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc_esp').val().toUpperCase(), id_busqueda: 17}, function(existe) {
                        if (existe != 0 ) {
                        $("#desc_esp" ).focus();//Colocar el foco en el campo de texto                      
                        $("#desc_esp").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-esp").prop('disabled', true);//Deshabilitar este elemento
                        $("#desc_esp").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#desc_esp").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-esp").prop('disabled', false);//Habilitar este elemento
                        $("#desc_esp").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                    }
                 }
             });
          }/*Cierre else*/

   }else if( $('#id_espacio').val() == 2 ){

if($("#desc_esp").val().length < 1) {/*Apertura if*/
  $("#desc_esp").removeClass("color_f");//Quitar el color de fondo del campo de texto
   $("#desc_esp").css("color", "black");//Agregar color negro en el texto
    $("#boton-enviar-esp").prop('disabled', false);//Habilitar este elemento
     
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc_esp').val().toUpperCase(), id_busqueda: 19}, function(resultado) {
             
           if ($("#texto-guardar").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#desc_esp" ).focus();//Colocar el foco en el campo de texto                       
                     $("#desc_esp").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-esp").prop('disabled', true);//Deshabilitar este elemento
                       $("#desc_esp").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#desc_esp").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-esp").prop('disabled', false);//Habilitar este elemento
                        $("#desc_esp").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_lab_actual').val() == $('#desc_esp').val()){
                        $("#desc_esp").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-esp").prop('disabled', false);//Habilitar este elemento
                        $("#desc_esp").css("color", "black");//Agregar color negro en el texto
                   } else{

                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#desc_esp').val().toUpperCase(), id_busqueda: 19}, function(existe) {
                        if (existe != 0 ) {
                        $("#desc_esp" ).focus();//Colocar el foco en el campo de texto                      
                        $("#desc_esp").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-esp").prop('disabled', true);//Deshabilitar este elemento
                        $("#desc_esp").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#desc_esp").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-esp").prop('disabled', false);//Habilitar este elemento
                        $("#desc_esp").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                    }
                 }
             });
          }/*Cierre else*/

     }else{
      $("#desc_esp").val('');
   }
}).keyup();/*Cierre función jQuery*/

    $('#id_espacio').on('click', function(){

       if($('#id_espacio').val() ==0) { 

        $('#cant_equipo').prop('disabled', false);
          $('#cant_equipo').val('');

       }else if($('#id_espacio').val() ==2) { 

        $('#cant_equipo').prop('disabled', false);

       }else{
        $('#cant_equipo').prop('disabled', true);
       }

    });
/*<!-- ******************VALIDACION PARA REGISTRAR**************-->*/
    $('#form_au_lab').submit(function() {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR
    
     event.preventDefault();//Detiene el evento

    if($('#id_espacio').val() ==0) {  
          error('#mensaje','Seleccionar espacio Aula/Laboratorio');
    }else if($('#id_edificio').val() ==0){
          error('#mensaje','Seleccionar edificio');  
    }else if($("#desc_esp").val().length < 1) {  
          $("#desc_esp").focus();
          error('#mensaje','Ingresar descripción'); 
    }else if($("#cap_esp").val().length < 1) {  
          $("#cap_esp").focus();
          error('#mensaje','Ingresar capacidad'); 
    }else if($('#id_espacio').val() ==2) {

          if($("#cant_equipo").val().length < 1) {  
              $("#cant_equipo").focus();
           error('#mensaje','Cantidad de equipos disponibles en el laboratorio'); 
           
          }else{
             if ($("#texto-guardar").text() == 'Registrar'){

                Registrar(event);
             }else if($("#texto-guardar").text() == 'Modificar'){ 
                Modificar(event);
          } 
        }
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
      
    if( $('#id_espacio').val() == 1){

    var datos_aula ='id_proceso=' + 17
     + '&desc_aula=' + $('#desc_esp').val().toUpperCase()
     + '&cap_aula=' + $('#cap_esp').val() 
     + '&id_edificio_aula=' + $('#id_edificio').val(); 
    registro_ajax("../procesos/procesos.php", datos_aula, '#mostrar-aula', '../vista/buscar-aula.html', '#form_au_lab');
    exito('#mensaje', 'Registrado');  

    }else if ($('#id_espacio').val() == 2){

    var datos_lab ='id_proceso=' + 19
     + '&desc_lab=' + $('#desc_esp').val().toUpperCase()
     + '&cap_lab=' + $('#cap_esp').val() 
     + '&cant_eq_lab=' + $('#cant_equipo').val() 
     + '&id_edificio_lab=' + $('#id_edificio').val();


    registro_ajax("../procesos/procesos.php", datos_lab,"#mostrar-lab","../vista/buscar-lab.html","#form_au_lab");
    exito('#mensaje','Registrado');

    }
}
/*<!-- ***********************************************************-->*/
  function Modificar(event){
/*Nota: Cada proceso es enviado con un ID propio, por ejemplo el evento [modificar aula] tiene el ID 18*/
    event.preventDefault();//Detiene el evento 

   if( $('#id_espacio').val() == 1){

    var datos_aula ='id_proceso=' + 18
     + '&cod_aula=' + $('#cod_au_estatico').val()
     + '&desc_aula=' + $('#desc_esp').val().toUpperCase()
     + '&cap_aula=' + $('#cap_esp').val()
     + '&id_edificio_aula=' + $('#id_edificio1').val();
    registro_ajax("../procesos/procesos.php", datos_aula, '#mostrar-aula', '../vista/buscar-aula.html', '#form_au_lab');
    exito('#mensaje','¡Hecho!');
    $("#texto-guardar").text('Registrar');

   }else{

    var datos_lab ='id_proceso=' + 20
     + '&cod_lab=' + $('#cod_lab_estatico').val()
     + '&desc_lab=' + $('#desc_esp').val().toUpperCase()
     + '&cap_lab=' + $('#cap_esp').val() 
     + '&cant_eq_lab=' + $('#cant_equipo').val() 
     + '&id_edificio_lab=' + $('#id_edificio').val();

    registro_ajax("../procesos/procesos.php", datos_lab, '#mostrar-lab', '../vista/buscar-lab.html', '#form_au_lab');
    exito('#mensaje','¡Hecho!');
    $("#texto-guardar").text('Registrar');

   }
  }  
});/*CIERRE*/