
function estado_id_modificar(codigo, descripcion) {
    
  $('#cod_estado_estatico').val(codigo);
  $('#desc_estado_actual').val(descripcion);
  $('#estado-desc').val(descripcion);
  $("#texto-guardar-estado").text('Modificar');
}

