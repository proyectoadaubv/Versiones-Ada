
$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/

$("#cod_unidadc").keyup(function () {/*Apertura función jQuery*/
 if($("#cod_unidadc").val().length < 1) {/*Apertura if*/
  $("#cod_unidadc").removeClass("color_f");//Quitar el color de fondo del campo de texto
   $("#cod_unidadc").css("color", "black");//Agregar color negro en el texto
    $("#boton-enviar-uc").prop('disabled', false);//Habilitar este elemento
     
     }else{/*Apertura else*/
        //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
        $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#cod_unidadc').val().toUpperCase(), id_busqueda: 9}, function(resultado) {
             
           if ($("#texto-guardar").text() == 'Registrar'){//Si el boton es registrar 
                  if (resultado != 0 ) {
                    $("#cod_unidadc" ).focus();//Colocar el foco en el campo de texto                       
                     $("#cod_unidadc").addClass("color_f");//Agregar el color de fondo del campo de texto
                      $("#boton-enviar-uc").prop('disabled', true);//Deshabilitar este elemento
                       $("#cod_unidadc").css("color", "red");//Agregar color rojo en el texto
                  }else{ 
                        $("#cod_unidadc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-uc").prop('disabled', false);//Habilitar este elemento
                        $("#cod_unidadc").css("color", "black");//Agregar color negro en el texto
                        }
                  }else if($("#texto-guardar").text() == 'Modificar'){//De lo contrario si el boton es modificar
                        if ($('#desc_au_actual').val() == $('#cod_unidadc').val()){
                        $("#cod_unidadc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-uc").prop('disabled', false);//Habilitar este elemento
                        $("#cod_unidadc").css("color", "black");//Agregar color negro en el texto
                   } else{

                     //Enviar petición a php, buscar el valor que se esta ingresando en la base de datos
                     $.post("../procesos/procesos.php", {id_proceso: 0, busqueda: $('#cod_unidadc').val().toUpperCase(), id_busqueda: 9}, function(existe) {
                        if (existe != 0 ) {
                        $("#cod_unidadc" ).focus();//Colocar el foco en el campo de texto                      
                        $("#cod_unidadc").addClass("color_f");//Agregar el color de fondo del campo de texto
                        $("#boton-enviar-uc").prop('disabled', true);//Deshabilitar este elemento
                        $("#cod_unidadc").css("color", "red");//Agregar color rojo en el texto
                  }else{
                        $("#cod_unidadc").removeClass("color_f");//Quitar el color de fondo del campo de texto
                        $("#boton-enviar-uc").prop('disabled', false);//Habilitar este elemento
                        $("#cod_unidadc").css("color", "black");//Agregar color negro en el texto
                        }
                      });
                   }
               }
           });
    }/*Cierre else*/
}).keyup();/*Cierre función jQuery*/

/*<!-- ******************VALIDACION PARA REGISTRAR MALLA CURRICULAR**************-->*/
    $('#form_malla_curricular').submit(function(event) {//ESTE METODO TENDRA 2 FUNCIONES UNO PARA REGISTRAR Y OTRO PARA ACTUALIZAR
    event.preventDefault();//Detiene el evento

    if ($('#id_modalidad').val() ==0){

         error('#mensaje','Seleccionar modalidad');
 
    }else if ($('#id_version_uc').val() ==0){
          
         error('#mensaje','Seleccionar versión de la malla curricular');
         
    }else if($("#cod_unidadc").val().length < 1) {  
            $("#cod_unidadc").focus();

         error('#mensaje','Debe ingresar el código\nde la unidad curricular');

    }else if($("#desc_unidadc").val().length < 1) { 
            $( "#desc_unidadc" ).focus(); 
         error('#mensaje','Debe ingresar la descripción\nde la unidad curricular');

    }else if($("#horas_uc").val().length < 1) { 
            $( "#horas_uc" ).focus(); 
         error('#mensaje','Debe ingresar las horas de la unidad curricular');
         
    }else if ($('#id_trayecto').val() ==0){

         error('#mensaje','Debe seleccionar un trayecto');
   
    }else if ($('#id_tramoini').val() ==0){

         error('#mensaje','Debe seleccionar un tramo de unicio');
   
    }else if ($('#id_tramofin').val() ==0){
           
        error('#mensaje','Debe seleccionar un tramo final'); 
         
    }else if ($('#id_tipouc').val() ==0){

        error('#mensaje','Debe seleccionar un tipo de la unidad curricular'); 
   
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
/*Nota: Cada proceso es enviado con un ID propio, por ejemplo el evento [registrar unidad curricular] tiene el ID 9*/
    event.preventDefault();//Detiene el evento 
    var datos_uc ='id_proceso=' + 9
     + '&cod_uc=' + $('#cod_unidadc').val().toUpperCase()
     + '&desc_uc=' + $('#desc_unidadc').val().toUpperCase() 
     + '&id_trayecto=' + $('#id_trayecto').val()
     + '&id_tramoini=' + $('#id_tramoini').val()
     + '&id_tramofin=' + $('#id_tramofin').val() 
     + '&id_tipouc=' +$('#id_tipouc').val()
     + '&horas_uc=' + $('#horas_uc').val()
     + '&modalidad=' + $('#id_modalidad').val()
     + '&version=' + $('#id_version_uc').val();

   registro_ajax("../procesos/procesos.php",datos_uc,"#mostrar_malla_curricular","../vista/buscar-uc.html","#form_malla_curricular");
    exito('#mensaje','Registrado'); 

}
/*<!-- ***********************************************************-->*/
  function Modificar(event){
/*Nota: Cada proceso es enviado con un ID propio, por ejemplo el evento [modificar unidad curricular] tiene el ID 10*/
    event.preventDefault();//Detiene el evento 
    var datos_uc ='id_proceso=' + 10
     + '&cod_uc=' + $.trim($('#cod_unidadc').val().toUpperCase())
     + '&desc_uc=' + $('#desc_unidadc').val().toUpperCase() 
     + '&id_trayecto=' + $('#id_trayecto').val()
     + '&id_tramoini=' + $('#id_tramoini').val()
     + '&id_tramofin=' + $('#id_tramofin').val() 
     + '&id_tipouc=' +$('#id_tipouc').val()
     + '&horas_uc=' + $('#horas_uc').val()
     + '&cod_estatico_uc=' + $('#cod_uc_estatico').val()
     + '&modalidad=' + $('#id_modalidad').val()
     + '&version=' + $('#id_version_uc').val();
       
     registro_ajax("../procesos/procesos.php",datos_uc,"#mostrar_malla_curricular","../vista/buscar-uc.html","#form_malla_curricular");
     exito('#mensaje','Modificado'); 
     $("#texto-guardar").text('Registrar');
  }
//Nota: en esta clase de js, bien se pudo colocar en la parte inferior fuera del $(document).ready(function(){
//las otras funciones que estan en la otra clase. Pero carga la pagina muy lenta, por ende se coloco en el otro archivo.
});/*CIERRE*/