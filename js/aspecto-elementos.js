/*ESTA CLASE DE JQUERY ES PARA DARLE ASPECTOS Y PROPIEDADES A CIERTOS ELEMENTOS DE LA PAGINA*/
$(document).ready(function(){/*APERTURA cuando el documento este colocado apropiadamente en el navegador*/
/*<!-- ***************************************************************************************************-->*/
/*<!-- ****************************
DETALLES PARA LA PAGINA:
 REG_PERIODO.HTML
*****************************-->*/
    //Manejo de seleccion de filas de tablas
    entrada_mouse_filatabla("#tabla-mostrar-periodo tbody tr", "sombra-mouse-tabla");
    salida_mouse_filatabla("#tabla-mostrar-periodo tbody tr","sombra-mouse-tabla");
    //Manejo de placeholders
    texto_fondo("#periodo-desc", "Ej: I-2017");
    texto_fondo("#fecha-inicio-desc", "Inicio");
    texto_fondo("#fecha-cierre-desc", "Cierre");
  /*<!-- ***************************MOUSE ADENTRO************************-->*/
      entrada_raton('#periodo-desc');
      periodo('#periodo-desc');
      mayuscula("input#periodo-desc");
  /*<!-- ***************************MOUSE ADENTRO************************-->*/
      entrada_raton('#edif-ubicacion');
      entrada_raton('#edif-descripcion');
/*<!-- ***************************************************************************************************-->*/
/*<!-- ***************************************************************************************************-->*/
/*<!-- ****************************
DETALLES PARA LA PAGINA:
 REG_EDIFICIOS.HTML
 EDIF_MOSTRAR.PHP
*****************************-->*/
    //Manejo de seleccion de filas de tablas
    //entrada_mouse_filatabla("#tabla-mostrar-edif tbody tr", "sombra-mouse-tabla");
    //salida_mouse_filatabla("#tabla-mostrar-edif tbody tr","sombra-mouse-tabla");

    //Manejo de colocar mayusculas los caracteres
    mayuscula("input#direccion-esp");
    mayuscula("input#ubicacion-esp"); 
    mayuscula("input#edif-descripcion");

    //Manejo de placeholders
    texto_fondo("#direccion-esp", "Ej: Vía La Rinconada, Sector La Retirada.");
    texto_fondo("#ubicacion-esp", "Ej: Sede-UBV.");
    texto_fondo("#edif-descripcion", "Ej: Ezequiel Zamora");

   //Validacion solo letras
    solo_letras('#edif-ubicacion');
    solo_letras('#edif-descripcion');
   
  /*<!-- ***************************MOUSE ADENTRO************************-->*/
      entrada_raton('#direccion-esp');
      entrada_raton('#edif-ubicacion');
      entrada_raton('#ubicacion-esp');

/*<!-- ***************************************************************************************************-->*/

/*<!-- ***************************************************************************************************-->*/
/*<!-- ****************************
DETALLES PARA LA PAGINA:
tramo_tabla.php
tray_tabla.php
*****************************-->*/
    //entrada_mouse_filatabla("#tabla-mostrar-tram tbody tr", "sombra-mouse-tabla");
    //salida_mouse_filatabla("#tabla-mostrar-tram tbody tr","sombra-mouse-tabla");

    //entrada_mouse_filatabla("#tabla-mostrar-tray tbody tr", "sombra-mouse-tabla");
    //salida_mouse_filatabla("#tabla-mostrar-tray tbody tr","sombra-mouse-tabla");

    //Manejo de colocarmayusculas los caracteres
    mayuscula("input#tray-desc"); 

    //Manejo de placeholders
    texto_fondo("#tray-desc", "Ejemplo: I, II, III, IV");
    texto_fondo("#tram-desc", "Ejemplo: 1, 2, 3, 4, 5, 6, 7, 8");

    //Validacion solo letras
    solo_letras('#tray-desc');
    solo_numeros('#tram-desc');
/*<!-- ***************************MOUSE ADENTRO************************-->*/
      entrada_raton('#tram-desc');
      entrada_raton('#tray-desc');


  /*    
  $("#boton-enviar-tram").mouseover(function(){
      $("#boton-enviar-tram").focus();
     //quitar .seleccionado a todos (por si hay alguno)
    $("#boton-enviar-tram").removeClass("Estilo_boton");
    // agregar seleccionado a "este" elemento.
    $(this).addClass("seleccionado");
  });
  /*<!-- ***********************************************************-->*/
/*<!-- ***************************MOUSE FUERA************************-->*/
  /*$("#boton-enviar-tram").mouseout(function(){
    $("#boton-enviar-tram").removeClass("seleccionado");
    $(this).addClass("Estilo_boton");
  });

  $("#boton-enviar-tray").mouseover(function(){
      $("#boton-enviar-tray").focus();
     //quitar .seleccionado a todos (por si hay alguno)
    $("#boton-enviar-tray").removeClass("Estilo_boton");
    // agregar seleccionado a "este" elemento.
    $(this).addClass("seleccionado");
  });
  $("#boton-enviar-tray").mouseout(function(){
    $("#boton-enviar-tray").removeClass("seleccionado");
    $(this).addClass("Estilo_boton");
  });
/*<!-- ***************************************************************************************************-->*/















/*<!-- ***************************************************************************************************-->*/
/*<!-- ****************************
DETALLES PARA LA PAGINA:
 CONF_MALLA.HTML
 UC_MOSTRAR.PHP
*****************************-->*/
    //Manejo de colocarmayusculas los caracteres
    mayuscula("input#cod_unidadc"); 
    mayuscula("input#desc_unidadc");

    //Manejo de placeholders
    texto_fondo("#cod_unidadc", "Ej: inf-sw-100");
    texto_fondo("#desc_unidadc", "Ej: Algoritmos y programación");
    texto_fondo("#horas_uc", "Ej: 6");
    //texto_fondo("#Campo_busqueda", "Ej: Algoritmo");
 
   //Validacion solo numeros
    solo_numeros('#horas_uc');

   //Validacion solo letras
    solo_letras('#desc_unidadc');
    solo_letras('#desc_unidadc');
    bloquear_espacios('#cod_unidadc');
   
/*<!-- ***************************MOUSE ADENTRO************************-->*/
      entrada_raton('#cod_unidadc');
      entrada_raton('#desc_unidadc');
      entrada_raton('#id_trayecto');
      entrada_raton('#id_tramoini');
      entrada_raton('#id_tramofin');
      entrada_raton('#id_tipouc');
      entrada_raton('#horas_uc');
































/*<!-- ***************************************************************************************************-->*/
/*<!-- ****************************
DETALLES PARA LA PAGINA:
 SECCION_TURNO.HTML
*****************************-->*/
    //entrada_mouse_filatabla("#tabla-mostrar-seccion tbody tr", "sombra-mouse-tabla");
    //salida_mouse_filatabla("#tabla-mostrar-seccion tbody tr","sombra-mouse-tabla");

    //entrada_mouse_filatabla("#tabla-mostrar-turno tbody tr", "sombra-mouse-tabla");
    //salida_mouse_filatabla("#tabla-mostrar-turno tbody tr","sombra-mouse-tabla");
    //Manejo de colocar mayusculas los caracteres
    mayuscula("input#seccion-desc"); 
    mayuscula("input#turno-desc");
    
    //Manejo de placeholders
    texto_fondo("#seccion-desc", "Ej: A, B, 1-A, 12-B");
    texto_fondo("#turno-desc", "Ej: Diurno, Nocturno, Matutino, tarde,");
/*<!-- ***************************MOUSE ADENTRO************************-->*/
    entrada_raton('#seccion-desc');
    entrada_raton('#turno-desc'); 
/*<!-- ***************************************************************************************************-->*/

/*<!-- ***************************************************************************************************-->*/
/*<!-- ****************************
DETALLES PARA LA PAGINA:
 REG_ESTADOS-MUNI.HTML
*****************************-->*/
    //entrada_mouse_filatabla("#tabla-mostrar-estado tbody tr", "sombra-mouse-tabla");
    //salida_mouse_filatabla("#tabla-mostrar-estado tbody tr","sombra-mouse-tabla");
    //entrada_mouse_filatabla("#tabla-mostrar-municipio tbody tr", "sombra-mouse-tabla");
    //salida_mouse_filatabla("#tabla-mostrar-municipio tbody tr","sombra-mouse-tabla");
    //entrada_mouse_filatabla("#tabla-mostrar-parroquia tbody tr", "sombra-mouse-tabla");
    //salida_mouse_filatabla("#tabla-mostrar-parroquia tbody tr","sombra-mouse-tabla");
    //Manejo de placeholders
    texto_fondo("#estado-desc", "Ej: Zulia");
    texto_fondo("#municipio-desc", "Ej: Maracaibo");
    texto_fondo("#parroquia-desc", "Ej: San isidro");
    //Manejo de colocarmayusculas los caracteres
    mayuscula("input#estado-desc"); 
    mayuscula("input#municipio-desc");
    mayuscula("input#parroquia-desc");
/*<!-- ***************************MOUSE ADENTRO************************-->*/
    entrada_raton('#estado-desc');
    entrada_raton('#municipio-desc');
    entrada_raton('#parroquia-desc');
   //Validacion solo letras
    solo_letras('#estado_desc');
    solo_letras('#municipio_desc');
    solo_letras('#parroquia_desc');
/*<!-- ***************************************************************************************************-->*/
/*<!-- ****************************
DETALLES PARA LA PAGINA:
 REGISTRAR CARGOS.HTML
*****************************-->*/
    //entrada_mouse_filatabla("#tabla-mostrar-cargos tbody tr", "sombra-mouse-tabla");
    //salida_mouse_filatabla("#tabla-mostrar-cargos tbody tr","sombra-mouse-tabla");
    //entrada_mouse_filatabla("#tabla-mostrar-tipo-persona tbody tr", "sombra-mouse-tabla");
    //salida_mouse_filatabla("#tabla-mostrar-tipo-persona tbody tr","sombra-mouse-tabla");
    //entrada_mouse_filatabla("#tabla-mostrar-profesiones tbody tr", "sombra-mouse-tabla");
    //salida_mouse_filatabla("#tabla-mostrar-profesiones tbody tr","sombra-mouse-tabla");
    //Manejo de placeholders
    texto_fondo("#cargo-desc", "Ej: Coordinador, Enlace Cipee");
    texto_fondo("#tipo-persona-desc", "Ej: Docente, Estudiante, Comunidad");
    texto_fondo("#profesion-desc", "Ej: Ingeniero, Licenciado");
/*<!-- ***************************MOUSE ADENTRO************************-->*/
    entrada_raton('#cargo-desc');
    entrada_raton('#tipo-persona-desc');
    entrada_raton('#profesion-desc');
   //Validacion solo letras
    solo_letras('#cargo-desc');
    solo_letras('#tipo-persona-desc');
    solo_letras('#profesion-desc');

    //Manejo de colocarmayusculas los caracteres
    mayuscula("input#cargo-desc");
    mayuscula("input#tipo-persona-desc");
    mayuscula("input#profesion-desc");

  
/*<!-- ***************************************************************************************************-->*/
/*<!-- ****************************
DETALLES PARA LA PAGINA:
 REGISTRAR DETALLES PROYECTO.HTML
*****************************-->*/
    //entrada_mouse_filatabla("#tabla-mostrar-etapa-proyecto tbody tr", "sombra-mouse-tabla");
    //salida_mouse_filatabla("#tabla-mostrar-etapa-proyecto tbody tr","sombra-mouse-tabla");
    //entrada_mouse_filatabla("#tabla-mostrar-tipo-software tbody tr", "sombra-mouse-tabla");
    //salida_mouse_filatabla("#tabla-mostrar-tipo-software tbody tr","sombra-mouse-tabla");

    //Manejo de placeholders
    texto_fondo("#etapa-proyecto-desc", "Ej: Abordaje, diseño, construcción");
    texto_fondo("#tipos-software-desc", "Ej: Web, escritorio, móvil");

/*<!-- ***************************MOUSE ADENTRO************************-->*/
    entrada_raton('#etapa-proyecto-desc');
    entrada_raton('#tipos-software-desc');

   //Validacion solo letras
    solo_letras('#etapa-proyecto-desc');
    solo_letras('#tipos-software-desc');


    //Manejo de colocarmayusculas los caracteres
    mayuscula("input#etapa-proyecto-desc");
    mayuscula("input#tipos-software-desc");
/*<!-- ***************************************************************************************************-->*/
/*<!-- ****************************
DETALLES PARA LA PAGINA:
 REGISTRAR AULAS Y LABORATORIOS.HTML
*****************************-->*/
    //Manejo de placeholders
    texto_fondo("#desc_esp", "Aula/Lab");
    texto_fondo("#cap_esp", "Ej: 27");
    texto_fondo("#cant_equipo", "Ej: 12");

    //Manejo de colocarmayusculas los caracteres
    mayuscula("input#desc_esp");
/*<!-- ***************************MOUSE ADENTRO************************-->*/
    entrada_raton('#desc_esp');
    entrada_raton('#cant_equipo');
    entrada_raton('#cap_esp');

    letras_numeros('#desc_esp');

    solo_numeros('#cap_esp');
    solo_numeros('#cant_equipo');
/*<!-- ***************************************************************************************************-->*/
/*<!-- ****************************
DETALLES PARA LA PAGINA:
 REGISTRAR REGISTRAR PERSONA.HTML
*****************************-->*/
    //Manejo de placeholders
    texto_fondo("#cedula", "Ej: 17123456");
    texto_fondo("#nombre", "Ej: Adalberto");
    texto_fondo("#apellido", "Ej: Pirela");
    texto_fondo("#direccion", "Ej: Vía La Rinconada");
    texto_fondo("#telefono", "Ej: 0416-1234567");
    texto_fondo("#correo", "Ej: ubvzulia@gmail.com");
    texto_fondo("#desc-espacio-asg", "Ej: Pfg: Informática");   
    texto_fondo("#desc-act-becado", "Ej: Ayudante de oficina");
    texto_fondo("#horas-dia-labor", "Ej: 6");
    texto_fondo("#dias_labor", "Ej: Lunes y martes");
    texto_fondo("#centro-vot", "Ej: Colegio las Amalias");
    texto_fondo("#dir-centro-vot", "Ej: Via a la Concepción");
    texto_fondo("#tipo-habilidad", "Ej: lingüística");
    texto_fondo("#desc-habilidad", "Ej: Habla Inglés e Italiano");
    texto_fondo("#fecha-egreso", "Ej: Noviembre 2016");
    texto_fondo("#institu-bachiller", "Ej: Liceo Bolivariano Zamora");
    texto_fondo("#titulo-obtenido", "Ej: Bachiller integral");
    texto_fondo("#buscar-persona", "Búsqueda por cédula o por nombre");
    texto_fondo("#estado-centro-votacion", "Ej: Zulia");
    texto_fondo("#tipo-discapacidad", "Ej: Cognitiva");
    texto_fondo("#desc-discapacidad", "Ej: Visión borrosa");
    //Manejo de colocar mayusculas los caracteres
    mayuscula("#nombre"); 
    mayuscula("#apellido");
    mayuscula("#direccion");
    mayuscula("#desc-espacio-asg"); 
    mayuscula("#desc-act-becado");
    mayuscula("#centro-vot"); 
    mayuscula("#dir-centro-vot");
    mayuscula("#centro-vot"); 
    mayuscula("#dir-centro-vot");
    mayuscula("#tipo-habilidad"); 
    mayuscula("#desc-habilidad");
    mayuscula("#fecha-egreso");
    mayuscula("#institu-bachiller"); 
    mayuscula("#titulo-obtenido");
    mayuscula("#buscar-persona");
    mayuscula("#estado-centro-votacion"); 
    mayuscula("#tipo-discapacidad");
    mayuscula("#desc-discapacidad");
    mayuscula("#dias_labor");

    letras_numeros("#tipo-discapacidad");
    letras_numeros("#desc-discapacidad");
    solo_letras('#estado-centro-votacion');
    solo_letras('#nombre');
    solo_letras('#apellido');   
    solo_letras('#desc-espacio-asg');
    solo_letras('#desc-act-becado');
    solo_letras('#dias_labor');
    solo_letras('#tipo-habilidad');
    letras_numeros('#desc-habilidad'); 
    letras_numeros("#fecha-egreso");
    solo_letras('#institu-bachiller');
    solo_letras('#titulo-obtenido'); 
    letras_numeros("#buscar-persona");
 
   //Validacion solo numeros
    solo_numeros('#cedula');
    solo_numeros('#telefono');
    solo_numeros('#horas-dia-labor');
/*<!-- ***************************MOUSE ADENTRO************************-->*/
    entrada_raton('#cedula');
    entrada_raton('#nombre');
    entrada_raton('#apellido');
    entrada_raton('#direccion');
    entrada_raton('#telefono');  
    entrada_raton('#correo');
    entrada_raton('#desc-espacio-asg');
    entrada_raton('#desc-act-becado');  
    entrada_raton('#horas-dia-labor');
    entrada_raton('#dias_labor');
    entrada_raton('#centro-vot');  
    entrada_raton('#dir-centro-vot');
    entrada_raton('#tipo-habilidad');  
    entrada_raton('#desc-habilidad');
    entrada_raton('#fecha-egreso');
    entrada_raton('#institu-bachiller');  
    entrada_raton('#titulo-obtenido');
    entrada_raton('#buscar-persona');
    entrada_raton('#estado-centro-votacion');
    entrada_raton('#tipo-discapacidad');
    entrada_raton('#desc-discapacidad');

/*<!-- *******************************************LOGIN*****************************************************-->*/
    texto_fondo("#usuario", "***");
    texto_fondo("#clave", "***"); 
    mayuscula("#usuario");
    entrada_raton('#usuario');
    entrada_raton('#clave');
    solo_letras('#usuario');


/*<!-- *******************************************MODULO USUARIO*********************************************-->*/
    texto_fondo("#nom-user", "Ingrese nombre usuario");
    texto_fondo("#clave-user", "Ingrese clave");
    texto_fondo("#clave-user-reingreso", "Vuelva ingresar la clave de usuario");
    texto_fondo("#desc-respuesta-pregunta", "Ingrese la respuesta de la pregunta");
    mayuscula("#nom-user");
    mayuscula("#desc-respuesta-pregunta");
    entrada_raton('#nom-user');
    entrada_raton('#clave-user');
    entrada_raton('#clave-user-reingreso');
    entrada_raton('#desc-respuesta-pregunta');
    solo_letras('#usuario');
    solo_letras('#desc-respuesta-pregunta');
    letras_numeros('#clave-user');
    letras_numeros('#clave-user-reingreso'); 





 mayuscula("#desc-recursos");
 texto_fondo("#horas-comp", "Ej: 6");
 entrada_raton('#horas-comp');
 solo_numeros('#horas-comp');
 texto_fondo("#descripcion-siglas", "Ej: PFG - PNG - PFA");
  entrada_raton('#descripcion-siglas');
 mayuscula("#descripcion-siglas");

/*< = ============================CAMPOS PAGINA CARGA ACADEMICA================================= =>*/
    letras_numeros('#horas-aulas');
    letras_numeros('#horas-ea');
    letras_numeros('#horas-piu');
    letras_numeros('#horas-asesorias'); 
    letras_numeros('#total');

    entrada_raton('#horas-aulas'); 
    entrada_raton('#horas-ea'); 
    entrada_raton('#horas-asesorias'); 
    entrada_raton('#horas-piu'); 
    texto_fondo("#horas-aulas", "Ingresar");
    texto_fondo("#horas-ea", "Ingresar");
    texto_fondo("#horas-piu", "Ingresar");
    texto_fondo("#horas-asesorias", "Ingresar");
    texto_fondo("#total", "Sumatoria");        

});/*CIERRE*/
