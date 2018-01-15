
function cargo_id_modificar(codigo, descripcion) {
    
  $('#cod_cargos_estatico').val(codigo);
   $('#desc_cargos_actual').val(descripcion);
    $('#cargo-desc').val(descripcion);
     $("#texto-guardar-cargo").text('Modificar');
}