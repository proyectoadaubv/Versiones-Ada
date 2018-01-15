
function esp_id_modificar(codigo, ubicacion, direccion) {
    
  $('#cod_esp_estatico').val(codigo);
  $('#desc_esp_estatico').val(ubicacion);
  $('#ubicacion-esp').val(ubicacion);
  $('#direccion-esp').val(direccion);
  $("#texto-guardar-esp").text('Modificar');
}

function edif_id_modificar(codigo, ubicacion, desc) {
    
  $('#cod_edif_estatico').val(codigo);
  $('#desc_edif_estatico').val(desc);
    for(var indice=0 ;indice<document.getElementById('cod_ubic-esp').length;indice++)
    {
        if (document.getElementById('cod_ubic-esp').options[indice].text==ubicacion )
            document.getElementById('cod_ubic-esp').selectedIndex =indice;
    }
  $('#edif-descripcion').val(desc);
  $("#texto-guardar").text('Modificar');
}
