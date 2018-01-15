
function tiposoft_id_modificar(codigo, descripcion) {
    
  $('#cod_tiposoft_estatico').val(codigo);
  $('#desc_tiposoft_actual').val(descripcion);
  $('#tipos-software-desc').val(descripcion);
  $("#texto-guardar-tipos-software").text('Modificar');
}

