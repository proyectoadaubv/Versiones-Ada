
function periodo_id_modificar(codigo, descripcion, fecha_ini, fecha_fin, tipo) {

//La funcion $.trim es para quitar los espacios en blanco
  $('#cod_periodo_estatico').val($.trim(codigo));
   $('#desc_periodo_actual').val($.trim(descripcion));
    $('#periodo-desc').val($.trim(descripcion));
     $('#fecha-inicio-desc').html($.trim(fecha_ini));
      $('#fecha-cierre-desc').html($.trim(fecha_fin));
      
    for(var indice=0 ;indice<document.getElementById('tipo-periodo').length;indice++)
    {
        if (document.getElementById('tipo-periodo').options[indice].text==tipo)
            document.getElementById('tipo-periodo').selectedIndex =indice;
    }
      $("#texto-guardar-periodo").text('Modificar');
}