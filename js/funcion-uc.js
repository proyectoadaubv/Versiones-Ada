
function uc_id_modificar(codigo, descripcion, horas_uc, tramoinicio, tramofin, tipo, modalidad, version) {

  $('#cod_unidadc').val(codigo);
  $('#cod_uc_estatico').val(codigo);//Variable oculta en la la vista de registrar malla curricular
  $('#desc_unidadc').val(descripcion);
  $('#horas_uc').val(horas_uc); 

 for(var indice=0 ;indice<document.getElementById('id_tramoini').length;indice++)
    {
        if (document.getElementById('id_tramoini').options[indice].text==tramoinicio )
            document.getElementById('id_tramoini').selectedIndex =indice;
    }
 for(var indice=0 ;indice<document.getElementById('id_tramofin').length;indice++)
    {
        if (document.getElementById('id_tramofin').options[indice].text==tramofin )
            document.getElementById('id_tramofin').selectedIndex =indice;
    }
 for(var indice=0 ;indice<document.getElementById('id_tipouc').length;indice++)
    {
        if (document.getElementById('id_tipouc').options[indice].text==tipo )
            document.getElementById('id_tipouc').selectedIndex =indice;
    }
 for(var indice=0 ;indice<document.getElementById('id_modalidad').length;indice++)
    {
        if (document.getElementById('id_modalidad').options[indice].text==modalidad)
            document.getElementById('id_modalidad').selectedIndex =indice;
    }
 for(var indice=0 ;indice<document.getElementById('id_version_uc').length;indice++)
    {
        if (document.getElementById('id_version_uc').options[indice].text==version)
            document.getElementById('id_version_uc').selectedIndex =indice;
    }
  $("#texto-guardar").text('Modificar');
  //$("#cod_unidadc").prop('disabled', true);//selector para desabilitar un elemento en la pagina web
  //$("#cod_unid adc").prop('disabled', false);
}
