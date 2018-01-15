
function tipo_persona_id_modificar(codigo, descripcion) {
    
  $('#cod_tipo-persona_estatico').val(codigo);
   $('#desc_tipo-persona_actual').val(descripcion);
    $('#tipo-persona-desc').val(descripcion);
     $("#texto-guardar-tipo-persona").text('Modificar');
}