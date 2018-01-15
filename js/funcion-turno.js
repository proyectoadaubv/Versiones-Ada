
function turno_id_modificar(codigoturno, descripcionturno) {
    
  $('#cod_turno_estatico').val(codigoturno);//Valor a la variable oculta
  $('#desc_turno_actual').val(descripcionturno);////Valor a la variable oculta
  $('#turno-desc').val(descripcionturno);
  $("#texto-guardar-turno").text('Modificar');
}

