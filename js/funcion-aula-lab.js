function aula_id_modificar(codigo, descripcion, cap_aula, desc_edif) {
    
  $('#cod_au_estatico').val(codigo);
  $('#desc_au_actual').val(descripcion);

     for(var indice=0 ;indice<document.getElementById('id_espacio').length;indice++)
     {
        if (document.getElementById('id_espacio').options[indice].text=='AULA')
            document.getElementById('id_espacio').selectedIndex =indice;
    }
  $('#desc_esp').val(descripcion);
  $('#cap_esp').val(cap_aula);

     for(var indice=0 ;indice<document.getElementById('id_edificio').length;indice++)
     {
        if (document.getElementById('id_edificio').options[indice].text==desc_edif)
            document.getElementById('id_edificio').selectedIndex =indice;
    } 
  $("#texto-guardar").text('Modificar');
}

function lab_id_modificar(codigo, descripcion, cap_lab, cant_equipo, desc_edif) {
    
  $('#cod_lab_estatico').val(codigo);
  $('#desc_lab_actual').val(descripcion);
     for(var indice=0 ;indice<document.getElementById('id_espacio').length;indice++)
     {
        if (document.getElementById('id_espacio').options[indice].text=='LABORATORIO')
            document.getElementById('id_espacio').selectedIndex =indice;
    }

  $('#desc_esp').val(descripcion);
  $('#cap_esp').val(cap_lab);
  $('#cant_equipo').val(cant_equipo);

     for(var indice=0 ;indice<document.getElementById('id_edificio').length;indice++)
     {
        if (document.getElementById('id_edificio').options[indice].text==desc_edif)
            document.getElementById('id_edificio').selectedIndex =indice;
    } 
  $("#texto-guardar").text('Modificar');
}