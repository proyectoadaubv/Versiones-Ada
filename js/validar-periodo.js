
$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/

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
$("#periodo-desc").keyup(function () {/*Apertura función jQuery*/
 if($("#periodo-desc").val().length < 1) {/*Apertura if*/
  $("#periodo-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
    $("#boton-enviar-periodo").prop('disabled', false);//Habilitar este elemento
     
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#periodo-desc').val().toUpperCase(), id_busqueda: 1}, function(resultado) {
             
           if ($("#texto-guardar-periodo").text() == 'Establecer'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#periodo-desc" ).focus();//Colocar el foco en el campo de texto                       
                     $("#periodo-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-periodo").prop('disabled', true);//Deshabilitar este elemento
                       $("#periodo-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#periodo-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-periodo").prop('disabled', false);//Habilitar este elemento
                        $("#periodo-desc").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar-periodo").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_periodo_actual').val() == $('#periodo-desc').val()){
                        $("#periodo-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-periodo").prop('disabled', false);//Habilitar este elemento
                        $("#periodo-desc").css("color", "black");//Agregar color negro en el texto
                   } else{
                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#periodo-desc').val().toUpperCase(), id_busqueda: 1}, function(existe) {
                        if (existe != 0 ) {
                        $("#periodo-desc" ).focus();//Colocar el foco en el campo de texto                      
                        $("#periodo-desc").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-periodo").prop('disabled', true);//Deshabilitar este elemento
                        $("#periodo-desc").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#periodo-desc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-periodo").prop('disabled', false);//Habilitar este elemento
                        $("#periodo-desc").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
           });
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/

/*<!-- ******************VALIDACION PARA REGISTRAR**************-->*/
    $('#form_periodo').submit(function() {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR
    
     event.preventDefault();//Detiene el evento


       if($('#tipo-periodo').val() ==0){
       
        error('#mensaje','Seleccionar el tipo del periodo académico');
       
       }else if ($("#periodo-desc").val().length < 1 ) {
              
              error('#mensaje','Ingrese la descripción del periodo académico');
       
           } else if ($('#fecha-inicio-desc').is(':empty')) {
              
               error('#mensaje','Ingrese la fecha de inicio del semestre');
       
            }else if ($('#fecha-cierre-desc').is(':empty')) {
              
               error('#mensaje','Ingrese la fecha de cierre del semestre');
       
            }else if ($("#fecha-inicio-desc").html() == $("#fecha-cierre-desc").html()) {
              
               error('#mensaje','La fecha de inicio coincide con la fecha de cierre');
           }else{
                if ($("#texto-guardar-periodo").text() == 'Establecer'){

                      establecer_periodo(event);

                 }else if($("#texto-guardar-periodo").text() == 'Modificar'){ 
  
                      modificar_periodo(event);    
                }
               }
  });

/*<!-- ***********************************************************-->*/
        function establecer_periodo(event){
        /*Nota: Cada proceso es enviado con un ID propio, por ejemplo el evento [establecer] tiene el ID 1*/
          event.preventDefault();//Detiene el evento
        
        /*Invertir fecha de inicio del periodo, formato: Año-Mes-Dia*/
        var invertir_fecha_ini = $("#fecha-inicio-desc").html().split('-');
        invertir_fecha_ini.reverse();
        var fecha_invertida_ini= invertir_fecha_ini.join('-');
        /*Invertir fecha de cierre del periodo, formato: Año-Mes-Dia*/
        var invertir_fecha_fin = $("#fecha-cierre-desc").html().split('-');
        invertir_fecha_fin.reverse();
        var fecha_invertida_fin= invertir_fecha_fin.join('-');

            var datos_periodo ='id_proceso=' + 1 
              + '&desc_periodo=' + $.trim($('#periodo-desc').val()) 
               + '&fecha_inicio_p=' + fecha_invertida_ini 
                + '&fecha_cierre_p=' + fecha_invertida_fin
                 + '&tipo_periodo=' + $("select[id=tipo-periodo]").val();

          registro_ajax("../procesos/procesos.php", datos_periodo, '#mostrar_periodo', '../procesos/mostrar-periodo.php', '#form_periodo');
            $("#fecha-inicio-desc").html('');
            $("#fecha-cierre-desc").html('');
          exito('#mensaje','Periodo establecido'); 
        }
/*<!-- ***********************************************************-->*/
        function modificar_periodo(event){
        /*Nota: Cada proceso es enviado con un ID propio, por ejemplo el evento [modificar] tiene el ID 2*/
         event.preventDefault();//Detiene el evento 

        /*Invertir fecha de inicio del periodo, formato: Año-Mes-Dia*/
        var invertir_fecha_ini = $("#fecha-inicio-desc").html().split('-');
        invertir_fecha_ini.reverse();
        var fecha_invertida_ini= invertir_fecha_ini.join('-');
        /*Invertir fecha de cierre del periodo, formato: Año-Mes-Dia*/
        var invertir_fecha_fin = $("#fecha-cierre-desc").html().split('-');
        invertir_fecha_fin.reverse();
        var fecha_invertida_fin= invertir_fecha_fin.join('-');

            var datos_periodo ='id_proceso=' + 2 
            + '&cod_periodo=' + $.trim($('#cod_periodo_estatico').val()) 
              + '&desc_periodo=' + $.trim($('#periodo-desc').val()) 
               + '&fecha_inicio_p=' + fecha_invertida_ini 
                + '&fecha_cierre_p=' + fecha_invertida_fin
                 + '&tipo_periodo=' + $("select[id=tipo-periodo]").val();
             registro_ajax("../procesos/procesos.php", datos_periodo, '#mostrar_periodo', '../procesos/mostrar-periodo.php', '#form_periodo');
            $("#fecha-inicio-desc").html('');
            $("#fecha-cierre-desc").html('');
             $("#texto-guardar-periodo").text('Establecer');
        }  
/*<!-- ======================================VALIDAR ACTIVIDADES ACADEMICAS====================================-->*/ 
$('.boton-aceptar').on('click', function(){
                  var anio_cal_i;
                  var anio_comparar_i;
                  var mes_comparar_i;
                  var dia_comparar_i;

          if( id_contenedor == 'fecha-actividades-inicio'){/*<!-- == IF == -->*/

                   anio_cal_i = $('#fecha-actividad-inicio').html();
                   anio_comparar_i = anio_cal_i[6]+anio_cal_i[7]+anio_cal_i[8]+anio_cal_i[9];
                   mes_comparar_i = anio_cal_i[3]+anio_cal_i[4];
                   dia_comparar_i = anio_cal_i[0]+anio_cal_i[1];    
                  
                 if(anio_sistema_actual >  anio_comparar_i){
                    $("#fecha-actividad-inicio").html('');
                    error("#mensaje-actividad","El año de inicio es menor que el año actual");
                 }

          }else if(id_contenedor == 'fecha-actividades-cierre'){/*<!-- == ELSE == -->*/

                   anio_cal_i = $('#fecha-actividad-inicio').html();
                   anio_comparar_i = anio_cal_i[6]+anio_cal_i[7]+anio_cal_i[8]+anio_cal_i[9];
                   mes_comparar_i = anio_cal_i[3]+anio_cal_i[4];
                   dia_comparar_i = anio_cal_i[0]+anio_cal_i[1]; 

                  var anio_cal_c = $('#fecha-actividad-cierre').html();
                  var anio_comparar_c = anio_cal_c[6]+anio_cal_c[7]+anio_cal_c[8]+anio_cal_c[9];
                  var mes_comparar_c = anio_cal_c[3]+anio_cal_c[4];
                  var dia_comparar_c = anio_cal_c[0]+anio_cal_c[1]; 
                
                if(anio_sistema_actual >  anio_comparar_c){
                    $("#fecha-actividad-cierre").html('');
                    error("#mensaje-actividad","El año de cierre es menor que el año actual");
                 }

                 if($('#fecha-actividad-inicio').is(':empty')) {
                   $("#fecha-actividad-cierre").html('');
                   error("#mensaje-actividad","Ingresar fecha de inicio");
                 }

                 if((dia_comparar_i+""+mes_comparar_i+""+anio_comparar_i)
                  == (dia_comparar_c+""+mes_comparar_c+""+anio_comparar_c)){
                    error("#mensaje-actividad","La fecha de inicio coincide con la fecha de cierre");
                      $("#fecha-actividad-cierre").html('');
                 }

                if(anio_comparar_i >  anio_comparar_c){
                    $("#fecha-actividad-cierre").html('');
                    error("#mensaje-actividad","El año de inicio es mayor que el año de cierre");
                 }

                 if( mes_comparar_i > mes_comparar_c ){

                     if( anio_comparar_i < anio_comparar_c){}else{
                       $("#fecha-actividad-cierre").html('');
                       error("#mensaje-actividad","El mes de incio es mayor que el mes de cierre");
                     }
                  }

                 if( mes_comparar_i == mes_comparar_c && anio_comparar_i == anio_comparar_c){

                        $("#fecha-actividad-cierre").html('');
                       error("#mensaje-actividad","La fecha de inicio coincide con la fecha de cierre");
                  }
             }/*<!-- == CLOSE ELSE == -->*/              
           });
$("#actividades-academicas").on('click', function (){

  var descripcion=document.getElementById('actividades-academicas').options.selectedIndex; //valor_año
  var desc_act = document.getElementById('actividades-academicas').options[descripcion].text;

 /*Apertura función jQuery*/
 if($("#actividades-academicas").val()== 0) {/*Apertura if*/

    $("#boton-enviar-actividad").prop('disabled', false);//Habilitar este elemento
     
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda:  desc_act, id_busqueda: 1.4}, function(resultado) {
           if ($("#texto-guardar-actividad").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {

                      $("#boton-enviar-actividad").prop('disabled', true);//Deshabilitar este elemento
                       error('#mensaje-actividad','La actividad '+desc_act+' ya esta establecida');
                  }else{ 
                        $("#boton-enviar-actividad").prop('disabled', false);//Habilitar este elemento
                        }
                  }else if($("#texto-guardar-actividad").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_actividad_actual').val() ==  desc_act ){
                        $("#boton-enviar-actividad").prop('disabled', false);//Habilitar este elemento
                   } else{
                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda:  desc_act, id_busqueda: 1.4}, function(existe) {
                        if (existe != 0 ) {
                        $("#boton-enviar-actividad").prop('disabled', true);//Deshabilitar este elemento
                          error('#mensaje-actividad','La actividad '+desc_act+' ya esta establecida');
                  }else{
                        $("#boton-enviar-actividad").prop('disabled', false);//Habilitar este elemento

                        }
                      });
                   }
               }
           });
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/

    $('#form-actividades-academicas').submit(function() {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR
     event.preventDefault();//Detiene el evento

      if($('#actividades-academicas').val() ==0){
       
        error('#mensaje-actividad','Seleccionar actividad académica');
       
       }else if ($('#fecha-actividad-inicio').is(':empty')){

        error('#mensaje-actividad','Seleccionar fecha de inicio');

       }else if ($('#fecha-actividad-cierre').is(':empty')){

        error('#mensaje-actividad','Seleccionar fecha de cierre');

       }else{
                if ($("#texto-guardar-actividad").text() == 'Registrar'){

                      registrar_actividad(event);

                 }else if($("#texto-guardar-actividad").text() == 'Modificar'){ 
  
                      modificar_actividad(event);    
                }
       }
    });
  function registrar_actividad(event){
        event.preventDefault();//Detiene el evento

        $.post("../procesos/procesos.php", {id_proceso: 0, id_busqueda: 1.1}, function(id_periodo_actual){
            
        /*Invertir fecha de inicio del periodo, formato: Año-Mes-Dia*/
        var invertir_fecha_ini = $("#fecha-actividad-inicio").html().split('-');
        invertir_fecha_ini.reverse();
        var fecha_invertida_ini= invertir_fecha_ini.join('-');
        /*Invertir fecha de cierre del periodo, formato: Año-Mes-Dia*/
        var invertir_fecha_fin = $("#fecha-actividad-cierre").html().split('-');
        invertir_fecha_fin.reverse();
        var fecha_invertida_fin= invertir_fecha_fin.join('-');

            var datos_actividades ='id_proceso=' + 1.2 
              + '&cod_actividad=' + $('#actividades-academicas').val() 
               + '&fecha_apertura=' + fecha_invertida_ini 
                + '&fecha_cierre=' + fecha_invertida_fin 
                 + '&cod_periodo=' + id_periodo_actual;

          registro_ajax("../procesos/procesos.php", datos_actividades, '#mostrar_actividades', '../procesos/mostrar-act-acad.php', '#form-actividades-academicas');
            $("#fecha-actividad-inicio").html('');
            $("#fecha-actividad-cierre").html('');
          exito('#mensaje-actividad','Establecido');
         });
    }

    function modificar_actividad(event){
       event.preventDefault();//Detiene el evento
        $.post("../procesos/procesos.php", {id_proceso: 0, id_busqueda: 1.1}, function(id_periodo_actual){
        /*Invertir fecha de inicio del periodo, formato: Año-Mes-Dia*/
        var invertir_fecha_ini = $("#fecha-actividad-inicio").html().split('-');
        invertir_fecha_ini.reverse();
        var fecha_invertida_ini= invertir_fecha_ini.join('-');
        /*Invertir fecha de cierre del periodo, formato: Año-Mes-Dia*/
        var invertir_fecha_fin = $("#fecha-actividad-cierre").html().split('-');
        invertir_fecha_fin.reverse();
        var fecha_invertida_fin= invertir_fecha_fin.join('-');

            var datos_actividades ='id_proceso=' + 1.3 
              + '&cod_actividad=' + $('#actividades-academicas').val() 
               + '&fecha_apertura=' + fecha_invertida_ini 
                + '&fecha_cierre=' + fecha_invertida_fin 
                 + '&cod_periodo=' + id_periodo_actual 
                 + '&cod_condicion=' + $('#cod_actividad_estatico').val(); 
          registro_ajax("../procesos/procesos.php", datos_actividades, '#mostrar_actividades', '../procesos/mostrar-act-acad.php', '#form-actividades-academicas');
            $("#fecha-actividad-inicio").html('');
            $("#fecha-actividad-cierre").html('');
          exito('#mensaje-actividad','¡Hecho!');
             $("#texto-guardar-actividad").text('Registrar');
         });
    }
});/*CIERRE*/

