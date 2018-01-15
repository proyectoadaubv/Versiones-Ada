
function tram_id_modificar(codigotramo, descripciontramo, trayecto) {
    
  $('#cod_tram_estatico').val(codigotramo);//Valor a la variable oculta
  $('#desc_tramo_actual').val(descripciontramo);////Valor a la variable oculta

  $('#tram-desc').val(descripciontramo);
  for(var indice=0 ;indice<document.getElementById('id_trayecto').length;indice++)
    {
        if (document.getElementById('id_trayecto').options[indice].text==trayecto )
            document.getElementById('id_trayecto').selectedIndex =indice;
    } 
  $("#texto-guardar-tram").text('Modificar');
}

