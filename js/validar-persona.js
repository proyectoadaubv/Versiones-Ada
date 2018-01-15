$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/

/*< = =================Obtener fecha actual del sistema================= = >*/
  var Fecha_actual = new Date();/* <=  Obtener fecha actual =>*//* <= Lunes  06 - Febrero - 2017 ^_^ =>*/
       var anio_sistema_actual = Fecha_actual.getFullYear();/* <=  Obtener año actual =>*/
          var fn_resta = anio_sistema_actual - 14;/* <=  Restar 14 años al año actual =>*/
          var fn_anio;

/*< = =================Validar seleccion del tipo de persona================= = >*/
 $("#id_tipo_persona").on('click', function(){
    
    var id_valor=document.getElementById('id_tipo_persona').options.selectedIndex; //Obtener id del valor
    var valor_obtenido  = document.getElementById('id_tipo_persona').options[id_valor].text;//Obtener el valor atravez del id

       if( valor_obtenido == 'NINGUNO' ){

       $('#id_tipo_persona').prop('selectedIndex',0);
      }
 });

/*< = =================Funciones de la tecla ENTER en el campo buscar persona================= = >*/
$("#buscar-persona").keypress(function(event) {/*EVENTO TECLA ENTER*/
      
       if(e.which == 13) {
         if($("#buscar-persona").val().length < 1) { 
                error('#mostrar-mensaje-buscar','Ingrese búsqueda');
         }else{
             
         }
       }
});/*EVENTO TECLA ENTER*/


/*< = =================Validacion del campo buscar cedula persona================= = >*/
$("#buscar-persona").keyup(function () {/*Apertura función jQuery*/

 if($("#buscar-persona").val().length < 1) {/*Apertura if*/
    $('#mostrar-mensaje-buscar').text("");//limpiar el contenedor del mensaje
     $("#form_persona")[0].reset();//limpiar formulario
     $("#texto-guardar-persona").text('Registrar');
   }else{/*Apertura else*/

                if ( isNaN($("#buscar-persona").val()) == false ) {/*SI ES CEDULA*/ 
                 
                   if ($("#buscar-persona").val().length >= 7) {/*si el digito ingresado supera o es igual a 7 caracteres*/
      
                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#buscar-persona').val(), id_busqueda: 11}, function(resultado) {
                
                   if (resultado != 0 ) {
                    $('#mostrar-mensaje-buscar').text("");//vaciar mensaje por si acaso
                    
                     consulta = $("#buscar-persona").val();//obtenemos el texto introducido en el campo de búsqueda
                           
                    $.ajax({//hacemos la búsqueda con ajax
                    type: "POST",
                    url: "../procesos/mostrar-persona.php",
                    data: "dato_buscar="+consulta,
                    dataType: "html",
                          success: function(data){                                                       
                        $("#mostrar-mensaje-buscar").append(data);//mostrar                                                     
                        }
                     });
                   }else{ 
                         $("#form_persona")[0].reset();//limpiar formulario
                            $("#fecha-nacpersona").html('');
                            $("#info-estudiante").fadeOut(0);
                       $('#mostrar-mensaje-buscar').text('No existe el registro').addClass('aviso_busqueda_no');//Agregar el color de fondo 
                    }
               
                    });
                }
            } else{/*SI ES NOMBRE*/
                   
              if($("#buscar-persona").val().length >= 3) {/*si el digito ingresado supera o es gual a 3 caracteres*/
                  
                //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#buscar-persona').val().toUpperCase(), id_busqueda: 11}, function(resultado) {
             
                  if (resultado != 0 ) {
                  $('#mostrar-mensaje-buscar').text("");//vaciar mensaje por si acaso
                    
                     consulta = $("#buscar-persona").val();//obtenemos el texto introducido en el campo de búsqueda
                           
                    $.ajax({//hacemos la búsqueda con ajax
                    type: "POST",
                    url: "../procesos/mostrar-persona.php",
                    data: "dato_buscar="+consulta,
                    dataType: "html",
                          success: function(data){                                                       
                             $("#mostrar-mensaje-buscar").append(data);//mostrar                                               
                        }
                     });
                   }else{ 
                       $("#form_persona")[0].reset();//limpiar formulario
                       $("#fecha-nacpersona").html('');
                      $("#info-estudiante").fadeOut(0);
                       $('#mostrar-mensaje-buscar').text('No existe el registro').addClass('aviso_busqueda_no');//Agregar el color de fondo 
                    }
               
                 });  
            }             
        }

    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/

/*< = =================Validacion del campo cedula persona================= = >*/
$("#cedula").keyup(function () {/*Apertura función jQuery*/
 if($("#cedula").val().length < 1) {/*Apertura if*/
  $("#cedula").removeClass("color_f");//Quitar el color de fondo del campo de texto
   $("#cedula").css("color", "black");//Agregar color negro en el texto
    $("#boton-enviar-persona").prop('disabled', false);//Habilitar este elemento
     
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#cedula').val(), id_busqueda: 11}, function(resultado) {
             
           if ($("#texto-guardar-persona").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#cedula" ).focus();//Colocar el foco en el campo de texto                       
                     $("#cedula").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-persona").prop('disabled', true);//Deshabilitar este elemento
                       $("#cedula").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#cedula").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-persona").prop('disabled', false);//Habilitar este elemento
                        $("#cedula").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-persona").text() == 'Modificar persona'){//De lo contrario si el boton es modificar
                        if ($('#desc_au_actual').val() == $('#cedula').val()){
                        $("#cedula").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-persona").prop('disabled', false);//Habilitar este elemento
                        $("#cedula").css("color", "black");//Agregar color negro en el texto
                   } else{

                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#cedula').val(), id_busqueda: 11}, function(existe) {
                        if (existe != 0 ) {
                        $("#cedula" ).focus();//Colocar el foco en el campo de texto                      
                        $("#cedula").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-persona").prop('disabled', true);//Deshabilitar este elemento
                        $("#cedula").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#cedula").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-persona").prop('disabled', false);//Habilitar este elemento
                        $("#cedula").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
           });
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/


























/*<!-- ================Validar calendario================ -->*/
 $('.boton-aceptar').click(function(){

       fn_anio  = $('#anio').val();/* <=  Obtener año seleccionado en el calendario =>*/

          if(  fn_anio  >= anio_sistema_actual ){
              $("#fecha-nacpersona").addClass("color_f");//Agregar el color de fondo del campo de texto
              $("#fecha-nacpersona").css("color", "red");//Agregar color rojo en el texto
          }else if( fn_anio >= fn_resta ){
              $("#fecha-nacpersona").addClass("color_f");//Agregar el color de fondo del campo de texto
              $("#fecha-nacpersona").css("color", "red");//Agregar color rojo en el texto
          }else{
            $("#fecha-nacpersona").removeClass("color_f");//Quitar el color de fondo del campo de texto
            $("#fecha-nacpersona").css("color", "black");//Agregar color negro en el texto
          }

});

/*< = =================Validacion si se elige el valor ESTUDIANTE================= = >*/
    $("#id_tipo_persona").change(function(){
        
          if( $("#id_tipo_persona").val() == 0){/*Si es elegir, se oculta los campos de informaciones adicionales solo para estudiantes*/

            $("#info-estudiante").fadeOut(0);

               } else if( $("#id_tipo_persona option:selected").html() =="ESTUDIANTE"){/*Si se selecciono estudiante, se muestra*/
 
                $("#info-estudiante").fadeIn(0);

            } else {/*De lo contrario se oculta*/

          $("#info-estudiante").fadeOut(0);
          
          }
     });

/*< = =================Validacion del formulario================= = >*/
    $('#form_persona').submit(function() {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR
    
     event.preventDefault();//Detiene el evento

    if($('#id_tipo_persona').val() ==0) {  

          error("#mensaje","Seleccionar tipo persona");

    }else if($("#cedula").val().length < 1) {  
          $("#cedula").focus();
          error("#mensaje","Ingresar cédula");

    }else if( $("#cedula").val().length < 7 ) { 

          error("#mensaje","Cédula muy corta, minimo 7 digitos");

    } else  if($("#nombre").val().length < 1) {  
          $("#nombre").focus();
          error("#mensaje","Ingresar nombre");

    } else  if($("#apellido").val().length < 1) {  
          $("#apellido").focus();
          error("#mensaje","Ingresar apellido");

    } else  if( $('input[name="radio-sexo"]').is(':checked') ){

     if( $('#fecha-nacpersona').is(':empty')) {  
          $("#fecha-nacpersona").focus();
          error("#mensaje","Ingresar fecha de nacimiento");

    }else if( fn_anio  >= anio_sistema_actual ){

            error("#mensaje","Fecha de nacimiento inválida");

     }else if( fn_anio >= fn_resta ){
      
      error("#mensaje","Fecha de nacimiento inválida");

     } else  if($("#direccion").val().length < 1) {  
          $("#direccion").focus();
          error("#mensaje","Ingresar dirección");

    } else if($('#id_parroquia').val() ==0) {  

          error("#mensaje","Seleccionar parroquia");
    } else if($('#id_cargo').val() ==0) {  

          error("#mensaje","Seleccionar cargo");

    } else if($('#id_profesion').val() ==0) {  

          error("#mensaje","Seleccionar profesión");

    } else  if($("#telefono").val().length < 1) {  
          $("#telefono").focus();

          error("#mensaje","Ingresar número teléfonico");

    } else if($("#correo").val().length < 1) {  
          $("#correo").focus();

          error("#mensaje","Ingresar correo");

    } else {
          
          if ($("#texto-guardar-persona").text() == 'Registrar'){

                verificar_padron_electoral(event);

          }else if($("#texto-guardar-persona").text() == 'Modificar'){ 
                
               verificar_padron_electoral(event);      
           }
        }
    } else{

       error("#mensaje","Seleccionar sexo");
  }

});

function verificar_padron_electoral(event){
    event.preventDefault();//Detiene el evento 

  if( $('input[name="padron-electoral"]').is(':checked') ){

        if($("input[name='padron-electoral']:checked").val() == 1){
          validar_padron_electoral(event);
             
        }else{
            verificar_discapacidad(event);           
          }
  }else{
        error("#mensaje","Seleccionar padrón electoral Si/No");
  }
}
function validar_padron_electoral(event){
    event.preventDefault();//Detiene el evento 
    if( $('#centro-vot').val().length < 1 ){
        error("#mensaje","Ingresar centro de votación");
    }else if( $('#dir-centro-vot').val().length < 1 ){
        error("#mensaje","Ingresar dirección del centro de votación");
    }else  if( $('#id_estado_votacion').val() == 0 ){
        error("#mensaje","Ingresar estado donde ejerce el voto");
    }else{
        verificar_discapacidad(event);
      }
}

/*<!-- ********************************************************************-->*/
function verificar_discapacidad(event){
    event.preventDefault();//Detiene el evento 

  if( $('input[name="discapacidad"]').is(':checked') ){

        if($("input[name='discapacidad']:checked").val() == 1){
             validar_discapacidad(event);
        }else{
           verificar_habilidades(event);
          }
        }else{
        error("#mensaje","Seleccionar discapacidad Si/No");
      }
}
function validar_discapacidad(event){
    event.preventDefault();//Detiene el evento 

    if( $('#tipo-discapacidad').val().length < 1 ){
        error("#mensaje","Ingresar tipo de discapacidad");
    }else if( $('#desc-discapacidad').val().length < 1 ){
        error("#mensaje","Ingresar descripción de discapacidad");
    }else{
        verificar_habilidades(event);
    }
}
/*<!-- ********************************************************************-->*/
function verificar_habilidades(event){
    event.preventDefault();//Detiene el evento 

  if( $('input[name="info-habilidades"]').is(':checked') ){

        if($("input[name='info-habilidades']:checked").val() == 1){
              validar_habilidades(event);
        }else{
        verificar_estudiante_docente(event);
        }

      }else{
        error("#mensaje","Seleccionar habilidades Si/No");
    }
    
}
function validar_habilidades(event){
    event.preventDefault();//Detiene el evento 

    if( $('#tipo-habilidad').val().length < 1 ){
        error("#mensaje","Ingresar tipo de habilidades");
    }else if( $('#desc-habilidad').val().length < 1 ){
        error("#mensaje","Ingresar descripción de habilidades");
    }else{
        verificar_estudiante_docente(event);
    }
}
/*<!-- ********************************************************************-->*/
function verificar_estudiante_docente(event){
        event.preventDefault();//Detiene el evento 

       if ( $("#id_tipo_persona option:selected").html() =="ESTUDIANTE") {
            validar_info_estudiante(event);
       }else{

          if ($("#texto-guardar-persona").text() == 'Registrar'){
                Registrar(event);//si no es estudiante el registro, se dirige al metodo registrar de una vez

          }else if($("#texto-guardar-persona").text() == 'Modificar'){ 
                
               Modificar(event);        
           }
       } 
}
/*<!-- ********************************************************************-->*/
function validar_info_estudiante(event){
       event.preventDefault();//Detiene el evento 

       if ( $('#fecha-egreso').val().length < 1 ) {
           error("#mensaje","Ingresar fecha de egreso del bachillerato");
       } else if ( $('#institu-bachiller').val().length < 1 ) {
           error("#mensaje","Ingresar institución donde cursó el bachillerato");
       } else if ( $('#titulo-obtenido').val().length < 1 ) {
           error("#mensaje","Ingresar titulo obtenido");
       }else{
        validar_beca_estudiante(event);
       }
}
/*<!-- ********************************************************************-->*/
function validar_beca_estudiante(event){
       event.preventDefault();//Detiene el evento 

  if( $('input[name="info-beca"]').is(':checked') ){

        if($("input[name='info-beca']:checked").val() == 1){
              obtener_info_beca(event);
        }else{
          if ($("#texto-guardar-persona").text() == 'Registrar'){

                Registrar_estudiante_sin_beca(event);

          }else if($("#texto-guardar-persona").text() == 'Modificar'){ 
                
                  exito('#mensaje','registramos');
                Modificar_estudiante_sin_beca(event);       
           }
        }

      }else{
        error("#mensaje","Seleccionar si es becado Si/No");
    }
}
/*<!-- ********************************************************************-->*/
function obtener_info_beca(event){
       event.preventDefault();//Detiene el evento 
          if ( $('#desc-espacio-asg').val().length < 1 ) {
        error("#mensaje","Describir espacio asignado");
         } else if ( $('#desc-act-becado').val().length < 1 ) {
        error("#mensaje","Describir actividad asignada");
        }else if ( $('#horas-dia-labor').val().length < 1 ) {
        error("#mensaje","Describir horas de actividad a la semana");
        }else{
          if ($("#texto-guardar-persona").text() == 'Registrar'){

              Registrar_estudiante_becado(event);

          }else if($("#texto-guardar-persona").text() == 'Modificar'){ 
                

               Modificar_estudiante_becado(event);        
           }

        }
}

/*<!-- ***********************************************************-->*/
  function Registrar_estudiante_sin_beca(event){
  /*Nota: Cada proceso es enviado con un ID propio, por ejemplo el evento [Registrar] tiene el ID 11*/
    event.preventDefault();//Detiene el evento 
        /*Invertir fecha de nacimiento de la persona, formato: Año-Mes-Dia*/
        var fn_nac = $('#fecha-nacpersona').html().split('-');
        fn_nac.reverse();
        var fn_nacpersona= fn_nac.join('-');

    var datos_persona ='id_proceso=' + 11
     + '&tipo=' + 'ESTUDIANTE'
     + '&cod_tipo_persona=' + $('#id_tipo_persona').val()
     + '&ced_persona=' + $.trim($('#cedula').val()) 
     + '&nom_persona=' + $('#nombre').val()
     + '&ape_persona=' + $('#apellido').val()
     + '&sexo_persona=' + $("input[name='radio-sexo']:checked").val()
     + '&fn_persona=' + fn_nacpersona
     + '&dir_persona=' + $('#direccion').val()
     + '&pa_persona=' + $('#id_parroquia').val()
     + '&cargo_persona=' + $('#id_cargo').val()
     + '&profesion_persona=' + $('#id_profesion').val()
     + '&telefono_persona=' + $('#telefono').val()
     + '&correo_persona=' + $('#correo').val()
     + '&vota=' + $("input[name='padron-electoral']:checked").val()
     + '&centro-vot=' + $('#centro-vot').val()
     + '&dir-centro-vot=' + $('#dir-centro-vot').val()
     + '&id_estado_votacion=' + $('#id_estado_votacion').val()
     + '&discapacidad=' + $("input[name='discapacidad']:checked").val()
     + '&tipo-discapacidad=' + $('#tipo-discapacidad').val()
     + '&desc-discapacidad=' + $('#desc-discapacidad').val()
     + '&habilidades=' + $("input[name='info-habilidades']:checked").val()
     + '&tipo-habilidad=' + $('#tipo-habilidad').val()
     + '&desc-habilidad=' + $('#desc-habilidad').val()
     + '&fecha-egreso=' + $('#fecha-egreso').val()
     + '&institu-bachiller=' + $('#institu-bachiller').val()
     + '&titulo-obtenido=' + $('#titulo-obtenido').val();

      registro_ajax("../procesos/procesos.php", datos_persona, '#x', '#x', '#form_persona');
     $("#fecha-nacpersona").html('');
     $("#info-estudiante").fadeOut(0);
    $("#cedula").prop('disabled', false);//Deshabilitar el campo cedula
       exito("#mensaje","Registrado");

}

/*<!-- ***********************************************************-->*/
  function Modificar_estudiante_sin_beca(event){
  /*Nota: Cada proceso es enviado con un ID propio, por ejemplo el evento [Registrar] tiene el ID 11*/
    event.preventDefault();//Detiene el evento 
        /*Invertir fecha de nacimiento de la persona, formato: Año-Mes-Dia*/
        var fn_nac = $('#fecha-nacpersona').html().split('-');
        fn_nac.reverse();
        var fn_nacpersona= fn_nac.join('-');

    var datos_persona ='id_proceso=' + 12
     + '&tipo=' + 'ESTUDIANTE'
     + '&cod_tipo_persona=' + $('#id_tipo_persona').val()
     + '&ced_persona=' + $.trim($('#cedula').val()) 
     + '&nom_persona=' + $('#nombre').val()
     + '&ape_persona=' + $('#apellido').val()
     + '&sexo_persona=' + $("input[name='radio-sexo']:checked").val()
     + '&fn_persona=' + fn_nacpersona
     + '&dir_persona=' + $('#direccion').val()
     + '&pa_persona=' + $('#id_parroquia').val()
     + '&cargo_persona=' + $('#id_cargo').val()
     + '&profesion_persona=' + $('#id_profesion').val()
     + '&telefono_persona=' + $('#telefono').val()
     + '&correo_persona=' + $('#correo').val()
     + '&vota=' + $("input[name='padron-electoral']:checked").val()
     + '&centro-vot=' + $('#centro-vot').val()
     + '&dir-centro-vot=' + $('#dir-centro-vot').val()
     + '&id_estado_votacion=' + $('#id_estado_votacion').val()
     + '&discapacidad=' + $("input[name='discapacidad']:checked").val()
     + '&tipo-discapacidad=' + $('#tipo-discapacidad').val()
     + '&desc-discapacidad=' + $('#desc-discapacidad').val()
     + '&habilidades=' + $("input[name='info-habilidades']:checked").val()
     + '&tipo-habilidad=' + $('#tipo-habilidad').val()
     + '&desc-habilidad=' + $('#desc-habilidad').val()
     + '&fecha-egreso=' + $('#fecha-egreso').val()
     + '&institu-bachiller=' + $('#institu-bachiller').val()
     + '&titulo-obtenido=' + $('#titulo-obtenido').val();

      registro_ajax("../procesos/procesos.php", datos_persona, '#x', '#x', '#form_persona');
     $("#fecha-nacpersona").html('');
     $("#info-estudiante").fadeOut(0);
       exito("#mensaje","¡Hecho!");
    $("#cedula").prop('disabled', false);//Deshabilitar el campo cedula
    $("#texto-guardar-persona").text('Registrar');
}

/*<!-- ***********************************************************-->*/
  function Registrar_estudiante_becado(event){
  /*Nota: Cada proceso es enviado con un ID propio, por ejemplo el evento [Registrar] tiene el ID 11*/
    event.preventDefault();//Detiene el evento 
        /*Invertir fecha de nacimiento de la persona, formato: Año-Mes-Dia*/
        var fn_nac = $('#fecha-nacpersona').html().split('-');
        fn_nac.reverse();
        var fn_nacpersona= fn_nac.join('-');

    var datos_persona ='id_proceso=' + 11
     + '&tipo=' + 'ESTUDIANTE'
     + '&cod_tipo_persona=' + $('#id_tipo_persona').val()
     + '&ced_persona=' + $.trim($('#cedula').val()) 
     + '&nom_persona=' + $('#nombre').val()
     + '&ape_persona=' + $('#apellido').val()
     + '&sexo_persona=' + $("input[name='radio-sexo']:checked").val()
     + '&fn_persona=' + fn_nacpersona
     + '&dir_persona=' + $('#direccion').val()
     + '&pa_persona=' + $('#id_parroquia').val()
     + '&cargo_persona=' + $('#id_cargo').val()
     + '&profesion_persona=' + $('#id_profesion').val()
     + '&telefono_persona=' + $('#telefono').val()
     + '&correo_persona=' + $('#correo').val()
     + '&vota=' + $("input[name='padron-electoral']:checked").val()
     + '&centro-vot=' + $('#centro-vot').val()
     + '&dir-centro-vot=' + $('#dir-centro-vot').val()
     + '&id_estado_votacion=' + $('#id_estado_votacion').val()
     + '&discapacidad=' + $("input[name='discapacidad']:checked").val()
     + '&tipo-discapacidad=' + $('#tipo-discapacidad').val()
     + '&desc-discapacidad=' + $('#desc-discapacidad').val()
     + '&habilidades=' + $("input[name='info-habilidades']:checked").val()
     + '&tipo-habilidad=' + $('#tipo-habilidad').val()
     + '&desc-habilidad=' + $('#desc-habilidad').val()
     + '&fecha-egreso=' + $('#fecha-egreso').val()
     + '&institu-bachiller=' + $('#institu-bachiller').val()
     + '&titulo-obtenido=' + $('#titulo-obtenido').val()
     + '&beca=' + $("input[name='info-beca']:checked").val()
     + '&desc-espacio-asg=' + $('#desc-espacio-asg').val()
     + '&dias_labor=' + $('#dias_labor').val()
     + '&horas-dia-labor=' + $('#horas-dia-labor').val()
     + '&desc-act-becado=' + $('#desc-act-becado').val();

       
     registro_ajax("../procesos/procesos.php", datos_persona, '#x', '#x', '#form_persona');
     $("#fecha-nacpersona").html('');
      $("#info-estudiante").fadeOut(0);
    $("#cedula").prop('disabled', false);//Deshabilitar el campo cedula
       exito("#mensaje","Registrado");

}

  function Modificar_estudiante_becado(event){
  /*Nota: Cada proceso es enviado con un ID propio, por ejemplo el evento [Registrar] tiene el ID 11*/
    event.preventDefault();//Detiene el evento 
        /*Invertir fecha de nacimiento de la persona, formato: Año-Mes-Dia*/
        var fn_nac = $('#fecha-nacpersona').html().split('-');
        fn_nac.reverse();
        var fn_nacpersona= fn_nac.join('-');

    var datos_persona ='id_proceso=' + 12
     + '&tipo=' + 'ESTUDIANTE'
     + '&cod_tipo_persona=' + $('#id_tipo_persona').val()
     + '&ced_persona=' + $.trim($('#cedula').val()) 
     + '&nom_persona=' + $('#nombre').val()
     + '&ape_persona=' + $('#apellido').val()
     + '&sexo_persona=' + $("input[name='radio-sexo']:checked").val()
     + '&fn_persona=' + fn_nacpersona
     + '&dir_persona=' + $('#direccion').val()
     + '&pa_persona=' + $('#id_parroquia').val()
     + '&cargo_persona=' + $('#id_cargo').val()
     + '&profesion_persona=' + $('#id_profesion').val()
     + '&telefono_persona=' + $('#telefono').val()
     + '&correo_persona=' + $('#correo').val()
     + '&vota=' + $("input[name='padron-electoral']:checked").val()
     + '&centro-vot=' + $('#centro-vot').val()
     + '&dir-centro-vot=' + $('#dir-centro-vot').val()
     + '&id_estado_votacion=' + $('#id_estado_votacion').val()
     + '&discapacidad=' + $("input[name='discapacidad']:checked").val()
     + '&tipo-discapacidad=' + $('#tipo-discapacidad').val()
     + '&desc-discapacidad=' + $('#desc-discapacidad').val()
     + '&habilidades=' + $("input[name='info-habilidades']:checked").val()
     + '&tipo-habilidad=' + $('#tipo-habilidad').val()
     + '&desc-habilidad=' + $('#desc-habilidad').val()
     + '&fecha-egreso=' + $('#fecha-egreso').val()
     + '&institu-bachiller=' + $('#institu-bachiller').val()
     + '&titulo-obtenido=' + $('#titulo-obtenido').val()
     + '&beca=' + $("input[name='info-beca']:checked").val()
     + '&desc-espacio-asg=' + $('#desc-espacio-asg').val()
     + '&dias_labor=' + $('#dias_labor').val()
     + '&horas-dia-labor=' + $('#horas-dia-labor').val()
     + '&desc-act-becado=' + $('#desc-act-becado').val();

     registro_ajax("../procesos/procesos.php", datos_persona, '#x', '#x', '#form_persona');
     $("#fecha-nacpersona").html('');
      $("#info-estudiante").fadeOut(0);
       exito("#mensaje","¡Hecho!");
    $("#cedula").prop('disabled', false);//Deshabilitar el campo cedula
    $("#texto-guardar-persona").text('Registrar');
}

/*<!-- ***********************************************************-->*/
  function Registrar(event){
  /*Nota: Cada proceso es enviado con un ID propio, por ejemplo el evento [Registrar] tiene el ID 11*/
    event.preventDefault();//Detiene el evento 
        /*Invertir fecha de nacimiento de la persona, formato: Año-Mes-Dia*/
        var fn_nac = $('#fecha-nacpersona').html().split('-');
        fn_nac.reverse();
        var fn_nacpersona= fn_nac.join('-');

    var datos_persona ='id_proceso=' + 11
     + '&tipo=' + 'PERSONA'
     + '&cod_tipo_persona=' + $('#id_tipo_persona').val()
     + '&ced_persona=' + $.trim($('#cedula').val()) 
     + '&nom_persona=' + $('#nombre').val()
     + '&ape_persona=' + $('#apellido').val()
     + '&sexo_persona=' + $("input[name='radio-sexo']:checked").val()
     + '&fn_persona=' + fn_nacpersona
     + '&dir_persona=' + $('#direccion').val()
     + '&pa_persona=' + $('#id_parroquia').val()
     + '&cargo_persona=' + $('#id_cargo').val()
     + '&profesion_persona=' + $('#id_profesion').val()
     + '&telefono_persona=' + $('#telefono').val()
     + '&correo_persona=' + $('#correo').val()
     + '&vota=' + $("input[name='padron-electoral']:checked").val()
     + '&centro-vot=' + $('#centro-vot').val()
     + '&dir-centro-vot=' + $('#dir-centro-vot').val()
     + '&id_estado_votacion=' + $('#id_estado_votacion').val()
     + '&discapacidad=' + $("input[name='discapacidad']:checked").val()
     + '&tipo-discapacidad=' + $('#tipo-discapacidad').val()
     + '&desc-discapacidad=' + $('#desc-discapacidad').val()
     + '&habilidades=' + $("input[name='info-habilidades']:checked").val()
     + '&tipo-habilidad=' + $('#tipo-habilidad').val()
     + '&desc-habilidad=' + $('#desc-habilidad').val();

     registro_ajax("../procesos/procesos.php", datos_persona, '#x', '#x', '#form_persona');
     $("#fecha-nacpersona").html('');
      $("#info-estudiante").fadeOut(0);
    $("#cedula").prop('disabled', false);//Deshabilitar el campo cedula
       exito("#mensaje","Registrado");

}

/*<!-- ***********************************************************-->*/
  function Modificar(event){
/*Nota: Cada proceso es enviado con un ID propio, por ejemplo el evento [modificar persona] tiene el ID 12*/
    event.preventDefault();//Detiene el evento 

        /*Invertir fecha de nacimiento de la persona, formato: Año-Mes-Dia*/
        var fn_nac = $('#fecha-nacpersona').html().split('-');
        fn_nac.reverse();
        var fn_nacpersona= fn_nac.join('-');

    var datos_persona ='id_proceso=' + 12
     + '&cod_tipo_persona=' + $('#id_tipo_persona').val()
     + '&ced_persona=' + $.trim($('#cedula').val()) 
     + '&nom_persona=' + $('#nombre').val()
     + '&ape_persona=' + $('#apellido').val()
     + '&sexo_persona=' + $("input[name='radio-sexo']:checked").val()
     + '&fn_persona=' + fn_nacpersona
     + '&dir_persona=' + $('#direccion').val()
     + '&pa_persona=' + $('#id_parroquia').val()
     + '&cargo_persona=' + $('#id_cargo').val()
     + '&profesion_persona=' + $('#id_profesion').val()
     + '&telefono_persona=' + $('#telefono').val()
     + '&correo_persona=' + $('#correo').val()
     + '&vota=' + $("input[name='padron-electoral']:checked").val()
     + '&centro-vot=' + $('#centro-vot').val()
     + '&dir-centro-vot=' + $('#dir-centro-vot').val()
     + '&id_estado_votacion=' + $('#id_estado_votacion').val()
     + '&discapacidad=' + $("input[name='discapacidad']:checked").val()
     + '&tipo-discapacidad=' + $('#tipo-discapacidad').val()
     + '&desc-discapacidad=' + $('#desc-discapacidad').val()
     + '&habilidades=' + $("input[name='info-habilidades']:checked").val()
     + '&tipo-habilidad=' + $('#tipo-habilidad').val()
     + '&desc-habilidad=' + $('#desc-habilidad').val();

     registro_ajax("../procesos/procesos.php", datos_persona, '#x', '#x', '#form_persona');
     $('#fecha-nacpersona').text("");//limpiar calendario
     $('#mostrar-mensaje-buscar').text("");//limpiar el contenedor del mensaje
     $('#buscar-persona').val("");//limpiar campo buscar
     $("#cedula").prop('disabled', false);//habilitar el campo cedula para que se edite
      $("#info-estudiante").fadeOut(0);
     exito("#mensaje","¡Hecho!");
    $("#cedula").prop('disabled', false);//Deshabilitar el campo cedula
    $("#texto-guardar-persona").text('Registrar');

  }  


});/*CIERRE*/

