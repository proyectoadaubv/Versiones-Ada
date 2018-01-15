
function etapapro_id_modificar(codigo, descripcion) {
    
  $('#cod_etapasoft_estatico').val(codigo);
  $('#desc_etapasoft_actual').val(descripcion);
  $('#etapa-proyecto-desc').val(descripcion);
  $("#texto-guardar-etapa-proyecto").text('Modificar');
}

