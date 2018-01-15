
function municipio_id_modificar(codigo, descripcion,desc_estado) {
    
  $('#cod_municipio_estatico').val(codigo);

    $('#municipio-desc').val(descripcion);

     for(var indice=0 ;indice<document.getElementById('id_estado').length;indice++)
    {
        if (document.getElementById('id_estado').options[indice].text==desc_estado)
            document.getElementById('id_estado').selectedIndex =indice;
    } 
  $("#texto-guardar-municipio").text('Modificar');
}

