function of_mod(id_mod){

    id_mod.removeClass("efecto_modulo");//Quitar el color de fondo del modulo elegido
}
function on_mod(id_mod){

    id_mod.addClass("efecto_modulo");//Agregar el color de fondo del modulo elegido
}

function mayuscula(campo){
      $(campo).keyup(function() {
      $(this).val($(this).val().toUpperCase());
       });
}
function minuscula(campo){
      $(campo).keyup(function() {
      $(this).val($(this).val().toLowerCase());
      });
}
function texto_fondo(id_campo, texto){
     $(id_campo).attr("placeholder", texto);
}

function mensaje_error(mensaje){
     swal('Advertencia', mensaje, 'error');
}

function mensaje_exito(mensaje){
    swal('Exito', mensaje, 'success');
}

function mensaje_valor(mensaje, valor){
    swal(mensaje+valor);
}

function error(elemento, texto){
 $(elemento).text(texto).css("color", "red");
 setTimeout(function() {$(elemento).empty();},1900);//Limpiar mensaje
}

function exito(elemento, texto){
 $(elemento).text(texto).css("color", "#055377");
 setTimeout(function() {$(elemento).empty();},1900);//Limpiar mensaje
}

function solo_numeros(id_campo){
     //Validacion solo numeros
    $(id_campo).keyup(function (){
     this.value = (this.value + '').replace(/[^0-9]/g,'');
      
    });

}
function periodo(id_campo){
     //Validacion solo numeros para el periodo
    jQuery(id_campo).keypress(function(tecla) {
        if((tecla.charCode < 48 ||
           tecla.charCode > 57)
            && tecla.charCode != 45
             && tecla.charCode != 73
              && tecla.charCode != 105)//El 45 representa el - la 73 para la I Mayuscula y 105 para la i minuscula
            return false;

    });
}
function solo_letras(id_campo){
       //Validacion solo letras
        $(id_campo).keypress(function (key) {
            window.console.log(key.charCode)
            if ((key.charCode < 97 || key.charCode > 122)//letras mayusculas
                && (key.charCode < 65 || key.charCode > 90) //letras minusculas
                && (key.charCode != 45) //retroceso y -
                && (key.charCode != 46) //borrar y .
                && (key.charCode != 241) //ñ
                && (key.charCode != 209) //Ñ
                && (key.charCode != 32) //espacio
                && (key.charCode != 225) //á
                && (key.charCode != 233) //é
                && (key.charCode != 237) //í
                && (key.charCode != 243) //ó
                && (key.charCode != 250) //ú
                && (key.charCode != 193) //Á
                && (key.charCode != 201) //É
                && (key.charCode != 205) //Í
                && (key.charCode != 211) //Ó
                && (key.charCode != 218) //Ú
                )
                return false;
        });
}
function bloquear_espacios(id_campo){
       //Validacion bloquear la barra espaciadora
        $(id_campo).keypress(function (key) {
            window.console.log(key.charCode)
            if ( key.charCode == 32 )
                return false;
        });
}
 //Validacion permite números y letras
function letras_numeros(id_campo){
       //Validacion solo letras
        $(id_campo).keypress(function (key) {
            window.console.log(key.charCode)
            if ((key.charCode < 97 || key.charCode > 122)//letras mayusculas
                && (key.charCode < 65 || key.charCode > 90) //letras minusculas
                && (key.charCode != 241) //ñ
                && (key.charCode != 209) //Ñ
                && (key.charCode != 32) //espacio
                && (key.charCode != 225) //á
                && (key.charCode != 233) //é
                && (key.charCode != 237) //í
                && (key.charCode != 243) //ó
                && (key.charCode != 250) //ú
                && (key.charCode != 193) //Á
                && (key.charCode != 201) //É
                && (key.charCode != 205) //Í
                && (key.charCode != 211) //Ó
                && (key.charCode != 218) //Ú
                && (key.charCode != 48) //0
                && (key.charCode != 49) //1
                && (key.charCode != 50) //2
                && (key.charCode != 51) //3
                && (key.charCode != 52) //4
                && (key.charCode != 53) //5
                && (key.charCode != 54) //6
                && (key.charCode != 55) //7
                && (key.charCode != 56) //8
                && (key.charCode != 57) //9
                )
                return false;
        });
}

//Entrada del mouse en el campo de texto
function entrada_raton(id_campo){
      $(id_campo).mouseover(function(){
      $(id_campo).focus();
    });
}

/*#################################################-AJAX-#################################################*/
//Esta es la función encargada de enviar los valores de un determinado formulario a php
function registro_ajax(direccion, datos, id_mostrar, url_pagina, id_formulario){
         
         $.ajax({
             type: "POST",
             url: direccion,
             data: datos,
             success: function() {
                $(id_mostrar).load(url_pagina);
                $(id_formulario)[0].reset(); 
              },
             error: function() {
             $("#mensaje").text("¡Error interno en Ajax! No se ha podido efectuar el registro");               
       }
   });
}
/*####################################################CIERRE-AJAX##########################################*/

/*####################################################-AJAX-RECURSOS##########################################*/
function ajax(url, datos, contenedor){
      event.preventDefault();//Detiene el evento
              $.ajax({
                    type: "POST",
                    url: url,
                    data: datos,
                    dataType: "html",
                    error: function(){
                     mensaje_error("Error");
                    },
                    success: function(data){                                                    
                    $(contenedor).empty();
                    $(contenedor).append(data);                                                             
                    }
              });
}

function entrada_mouse_filatabla(id_tabla, nom_clase_css){
          $(id_tabla).mouseover(function() {
          // a la fila sobre la que esté el ratón (this)
         //se le añade la clase que la resaltará, la clase que esta en el archivo css
            $(this).addClass(nom_clase_css);
       });
}

function salida_mouse_filatabla(id_tabla,nom_clase_css){
          // para cada fila del body de la tabla x
         // defino el comporatamiento que tendrá cuando el ratón
        // deje de estar encima
             $(id_tabla).mouseout(function() {
             // a la fila sobre la que esté el ratón (this)
            // le quito la clase que hace que resalte
             $(this).removeClass(nom_clase_css);
            });
}
function asignar(contenedor_hijo, contenedor_padre){
 $(contenedor_hijo).appendTo(contenedor_padre);
 $(contenedor_hijo).fadeIn();
}

function ocultar(elemento){
   $(elemento).fadeOut();
}
function mostrar(elemento){
   $(elemento).fadeIn();
}
function limpiar(elemento){
   $(elemento).empty();
}








