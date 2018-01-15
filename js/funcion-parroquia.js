
function parroquia_id_modificar(codigo, descripcion,desc_municipio) {
    
  $('#cod_parroquia_estatico').val(codigo);

    $('#parroquia-desc').val(descripcion);

     for(var indice=0 ;indice<document.getElementById('id_municipio').length;indice++)
    {
        if (document.getElementById('id_municipio').options[indice].text==desc_municipio)
            document.getElementById('id_municipio').selectedIndex =indice;
    } 
  $("#texto-guardar-parroquia").text('Modificar');
}

