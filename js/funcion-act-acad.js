
function actividad_id_modificar(codigo, descripcion, fecha_ini, fecha_fin) {

//La funcion $.trim es para quitar los espacios en blanco
    $('#cod_actividad_estatico').val($.trim(codigo));
    $('#desc_actividad_actual').val($.trim(descripcion));
    $('#fecha-actividad-inicio').html($.trim(fecha_ini));
    $('#fecha-actividad-cierre').html($.trim(fecha_fin));

    for(var indice=0 ;indice<document.getElementById('actividades-academicas').length;indice++)
    {
        if (document.getElementById('actividades-academicas').options[indice].text==$.trim(descripcion))
          document.getElementById('actividades-academicas').selectedIndex =indice;
    }
    $("#texto-guardar-actividad").text('Modificar');
}