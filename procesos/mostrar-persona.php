<!DOCTYPE html>
<html lang="es">
<head>
<script>
/*< = =================Funcion encargada de mostrar los datos de persona en el formulario================= = >*/
   function cargar_datos_persona(cedula, nombre, apellido, sexo, fn, direccion_casa, parroquia, cargo, tipo_persona, profesion, telf, correo, centro_votacion, dir_voto, desc_estado, tipo_disc, desc_disc, tipo_hab, desc_hab, egreso, institucion_bachiller, titulo, espacio_asg_beca, actividad_beca, dias_labor_beca, horas_dia_beca){//funcion que recibe por parametro los valores enviados desde php
   $('#buscar-persona').val('');/*< = =================Limpiar campo buscar persona================= = >*/
   $('#mostrar-mensaje-buscar').text('');/*< = =================Limpiar contenedor de mensaje================= = >*/
/*< = =================Mostrar u ocultar los campos relacionados con estudiante================= = >*/
        if( tipo_persona =="ESTUDIANTE"){/*Si se selecciono estudiante, se muestra*/
 
                $("#info-estudiante").fadeIn(0);

            } else {/*De lo contrario se oculta*/

                $("#info-estudiante").fadeOut(0);
          }
/*< = =================Mostrar los datos en cada campo que le corresponda================= = >*/
    $('#cedula').val(cedula);
    $("#cedula").prop('disabled', true);//Deshabilitar el campo cedula para que no edite
    $('#nombre').val(nombre);
    $('#apellido').val(apellido);
      if(sexo=='M'){
           document.getElementById("mas").checked = true;
      }else if(sexo=='F'){
           document.getElementById("fem").checked = true;
      }
    $('#fecha-nacpersona').text(fn);
    $('#direccion').val(direccion_casa);

    for(var indice=0 ;indice<document.getElementById('id_parroquia').length;indice++)
    {
        if (document.getElementById('id_parroquia').options[indice].text==parroquia)
            document.getElementById('id_parroquia').selectedIndex =indice;
    } 
    for(var indice=0 ;indice<document.getElementById('id_cargo').length;indice++)
    {
        if (document.getElementById('id_cargo').options[indice].text==cargo)
            document.getElementById('id_cargo').selectedIndex =indice;
    } 
    for(var indice=0 ;indice<document.getElementById('id_tipo_persona').length;indice++)
    {
        if (document.getElementById('id_tipo_persona').options[indice].text==tipo_persona)
            document.getElementById('id_tipo_persona').selectedIndex =indice;
    } 
    for(var indice=0 ;indice<document.getElementById('id_profesion').length;indice++)
    {
        if (document.getElementById('id_profesion').options[indice].text==profesion)
            document.getElementById('id_profesion').selectedIndex =indice;
    } 
    $('#telefono').val(telf);
    $('#correo').val(correo);
      if(centro_votacion != ''){
           document.getElementById("si-vota").checked = true;
      }else{
           document.getElementById("no-vota").checked = true;
      }
    $('#centro-vot').val(centro_votacion);
    $('#dir-centro-vot').val(dir_voto);

    for(var indice=0 ;indice<document.getElementById('id_estado_votacion').length;indice++)
    {
        if (document.getElementById('id_estado_votacion').options[indice].text==desc_estado)
            document.getElementById('id_estado_votacion').selectedIndex =indice;
    } 
    $('#tipo-discapacidad').val(tipo_disc);
    $('#desc-discapacidad').val(desc_disc);
      if(tipo_disc != ''){
           document.getElementById("si-padece").checked = true;
      }else{
           document.getElementById("no-padece").checked = true;
      }
    $('#tipo-habilidad').val(tipo_hab);
    $('#desc-habilidad').val(desc_hab);
      if(tipo_hab != ''){
           document.getElementById("si-tiene").checked = true;
      }else{
           document.getElementById("no-tiene").checked = true;
      }
    $('#fecha-egreso').val(egreso);
    $('#institu-bachiller').val(institucion_bachiller);
    $('#titulo-obtenido').val(titulo);
      if(espacio_asg_beca != ''){
           document.getElementById("si-becado").checked = true;
      }else{
           document.getElementById("no-becado").checked = true;
      }
    $('#desc-espacio-asg').val(espacio_asg_beca);
    $('#desc-act-becado').val(actividad_beca);
    $('#dias_labor').val(dias_labor_beca);
    $('#horas-dia-labor').val(horas_dia_beca);

    $("#texto-guardar-persona").text('Modificar');
}                                                                        
</script>
</head>
<body>
  <?php

  include_once('conexion-bd.php');/*< = =================Conexion a base de datos================= = >*/
      include_once('funciones-sql.php');/*< = =================llamar a la clase funciones-sql================= = >*/
        $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
        $recibido=$_POST['dato_buscar'];/*< = =================Recibir valor enviado desde html================= = >*/
         $dato_buscar = trim($recibido);//eliminar espacios vacios
         /* < = ==============================Variables================================ = >*/
         $query_persona;

          $campos_principales = "SELECT tp.ced_persona, tp.nom_persona, tp.ape_persona, tp.sexo_persona, tp.fn_persona,
              tp.direccion, tpa.desc_parroquia, tc.desc_cargo, ttipo.descripcion, tpro.desc_profesion, tt.desc_telefono,
              tco.desc_correo";
          $tablas_principales = "reg.tbl_persona tp
          INNER JOIN reg.tbl_cargo_persona tcp ON(tp.ced_persona = tcp.ced_persona)
          INNER JOIN rec.tbl_cargos tc ON(tcp.cod_cargo = tc.cod_cargo) 
          INNER JOIN reg.tbl_telefono tt ON(tp.ced_persona = tt.ced_persona) 
          INNER JOIN reg.tbl_correo tco ON(tp.ced_persona = tco.ced_persona) 
          INNER JOIN rec.tbl_parroquia tpa ON(tp.cod_parroquia=tpa.cod_parroquia) 
          INNER JOIN rec.tbl_tipo_persona ttp ON(tcp.cod_tipop = ttp.cod_tipo_persona)
          INNER JOIN rec.tbl_profesion tpro ON(tcp.cod_profesion = tpro.cod_profesion)
          INNER JOIN rec.tbl_tipo_persona ttipo ON(tcp.cod_tipop=ttipo.cod_tipo_persona)";

         $campos_votar = "inf_elc.centro_votacion, inf_elc.direccion_centro_votacion, est.desc_estado";
         $tablas_votar = "INNER JOIN reg.tbl_inf_electoral inf_elc ON(inf_elc.ced_persona = tp.ced_persona)
               INNER JOIN rec.tbl_estado est ON(est.cod_estado = inf_elc.cod_estado)";
         
         $campos_discapacidad = "dis.tipo_discapacidad, dis.desc_discapacidad";
         $tablas_discapacidad = "INNER JOIN reg.tbl_discapacidad dis ON(dis.ced_persona = tp.ced_persona)";

         $campos_habilidades = "hab.tipo_habilidad, hab.descripcion_habilidad";
         $tablas_habilidades = "INNER JOIN reg.tbl_habilidades hab ON(hab.ced_persona = tp.ced_persona)";

         $campos_bachillerato = "infb.anio_egreso, infb.institucion, infb.titulo_obtenido";
         $tablas_bachillerato = "INNER JOIN reg.tbl_inf_bachillerato infb ON(infb.ced_persona = tp.ced_persona)";

         $campos_becado = "infbeca.espacio_asg, infbeca.dias_labor, infbeca.horas_dia, infbeca.actividad_beca";
         $tablas_becado = "INNER JOIN reg.tbl_inf_becado infbeca ON(infbeca.ced_persona = tp.ced_persona)";         

         $tipo_persona;

         $vota;
         $discapacitado;
         $habilidad;
         $bachiller;
         $est_becado;

         /* < = =============================Validar si es cedula o nombre=========================== = >*/
          if (is_numeric($dato_buscar)) {//si es cedula, hacer la condicion para cedula

              $condicion = "WHERE tp.ced_persona = $dato_buscar";

          }else{//si es nombre, hacer la condicion para nombre

              $condicion = "WHERE tp.nom_persona = '$dato_buscar'";
          }
         /* < = ======================================================================================= = >*/

         /* < = =============================Validar si es estudiante=========================== = >*/
          $busqueda_tipo  = $sql->buscar_dato_especifico("SELECT tipo.descripcion FROM rec.tbl_tipo_persona tipo 
            INNER JOIN reg.tbl_cargo_persona cargo ON(cargo.cod_tipop = tipo.cod_tipo_persona) 
            INNER JOIN reg.tbl_persona tp ON(cargo.ced_persona = tp.ced_persona) $condicion","descripcion");
          if( $busqueda_tipo == 'ESTUDIANTE'){
                 $tipo_persona = 1;
           }

  $persona_vota =  $sql->busqueda_dato("SELECT * FROM reg.tbl_inf_electoral inf_elc INNER JOIN reg.tbl_persona tp 
                 ON(inf_elc.ced_persona  = tp.ced_persona) $condicion");

  $persona_discapacidad =  $sql->busqueda_dato("SELECT * FROM reg.tbl_persona tp INNER JOIN reg.tbl_discapacidad dis ON(dis.ced_persona = tp.ced_persona) $condicion");
            
  $persona_habilidades =  $sql->busqueda_dato("SELECT * FROM reg.tbl_persona tp  INNER JOIN reg.tbl_habilidades hab ON(hab.ced_persona = tp.ced_persona) $condicion");

  $becado=  $sql->busqueda_dato("SELECT * FROM reg.tbl_persona tp INNER JOIN reg.tbl_inf_becado infbeca ON(infbeca.ced_persona = tp.ced_persona) $condicion");
           

             if($persona_vota != 0){
                  $vota = 1;
             }else{
                  $vota = 0;
             }

             if( $persona_discapacidad != 0 ){
                 $discapacitado = 1;
             }else{
                 $discapacitado = 0;
             }

             if( $persona_habilidades!= 0 ){
                 $habilidad = 1;
             }else{
                 $habilidad = 0;
             }
             
             if( $becado != 0 ){
                 $est_becado = 1;
             }else{
                 $est_becado= 0;
             }
/*< = =============================Estructura de decisión======================== = >*/
/*< = ===================================000====================================== = >*/
             if( $vota == 0 && $persona_discapacidad == 0 && $persona_habilidades == 0 ){

              if( $tipo_persona == 1 ){

                   if ( $becado == 1 ) {
                     $query_persona = $campos_principales.",".$campos_bachillerato.",".$campos_becado." FROM ".$tablas_principales." ".$tablas_bachillerato." ".$tablas_becado." ".$condicion; 
                   } else {
                     $query_persona = $campos_principales.",".$campos_bachillerato." FROM ".$tablas_principales." ".$tablas_bachillerato." ".$condicion; 
                   }
              }else{
              
               $query_persona = $campos_principales." FROM ".$tablas_principales." ".$condicion; 
              
              }
             }
/*< = ====================================001===================================== = >*/
             if( $vota == 0 && $persona_discapacidad == 0 && $persona_habilidades == 1 ){

                if( $tipo_persona == 1 ){
                  
                     if ( $becado == 1 ) {
                  $query_persona = $campos_principales.",".$campos_habilidades.",".$campos_bachillerato.",".$campos_becado." FROM ".$tablas_principales." ".$tablas_habilidades." ".$tablas_bachillerato." ".$tablas_becado." ".$condicion;
                     } else {
                  $query_persona = $campos_principales.",".$campos_habilidades.",".$campos_bachillerato." FROM ".$tablas_principales." ".$tablas_habilidades." ".$tablas_bachillerato." ".$condicion;
                     }
                    
                }else{
                  $query_persona = $campos_principales.",".$campos_habilidades." FROM ".$tablas_principales." ".$tablas_habilidades." ".$condicion;
                
                }

             }
/*< = ====================================010===================================== = >*/
             if( $vota == 0 && $persona_discapacidad == 1 && $persona_habilidades == 0 ){

                if( $tipo_persona == 1 ){

                     if ( $becado == 1 ) {
$query_persona = $campos_principales.",".$campos_discapacidad.",".$campos_bachillerato.",".$campos_becado." FROM ".$tablas_principales." ".$tablas_discapacidad." ".$tablas_bachillerato." ".$tablas_becado." ".$condicion;
                     } else {
$query_persona = $campos_principales.",".$campos_discapacidad.",".$campos_bachillerato." FROM ".$tablas_principales." ".$tablas_discapacidad." ".$tablas_bachillerato." ".$condicion;
                     }              
                }else{

$query_persona = $campos_principales.",".$campos_discapacidad." FROM ".$tablas_principales." ".$tablas_discapacidad." ".$condicion;
                
                }
             }

/*< = ====================================011===================================== = >*/
             if( $vota == 0 && $persona_discapacidad == 1 && $persona_habilidades == 1 ){
                if( $tipo_persona == 1 ){

                     if ( $becado == 1 ) {
$query_persona = $campos_principales.",".$campos_discapacidad.",".$campos_habilidades.",".$campos_bachillerato.",".$campos_becado." FROM ".$tablas_principales." ".$tablas_discapacidad." ".$tablas_habilidades." ".$tablas_bachillerato." ".$tablas_becado." ".$condicion;
                     } else {
$query_persona = $campos_principales.",".$campos_discapacidad.",".$campos_habilidades.",".$campos_bachillerato." FROM ".$tablas_principales." ".$tablas_discapacidad." ".$tablas_habilidades." ".$tablas_bachillerato." ".$condicion;
                     }   
                }else{

$query_persona = $campos_principales.",".$campos_discapacidad.",".$campos_habilidades." FROM ".$tablas_principales." ".$tablas_discapacidad." ".$tablas_habilidades." ".$condicion;
                
                }
             }
/*< = ====================================100===================================== = >*/
             if( $vota == 1 && $persona_discapacidad == 0 && $persona_habilidades == 0 ){

                if( $tipo_persona == 1 ){

                     if ( $becado == 1 ) {
$query_persona = $campos_principales.",".$campos_votar.",".$campos_bachillerato.",".$campos_becado." FROM ".$tablas_principales." ".$tablas_votar." ".$tablas_bachillerato." ".$tablas_becado." ".$condicion;
                     } else {
$query_persona = $campos_principales.",".$campos_votar.",".$campos_bachillerato." FROM ".$tablas_principales." ".$tablas_votar." ".$tablas_bachillerato." ".$condicion;
                     }
                    
                }else{

$query_persona = $campos_principales.",".$campos_votar." FROM ".$tablas_principales." ".$tablas_votar." ".$condicion;
                
                }

             }
/*< = ====================================101===================================== = >*/
             if( $vota == 1 && $persona_discapacidad == 0 && $persona_habilidades == 1 ){

              if( $tipo_persona == 1 ){
                   if ( $becado == 1 ) {

$query_persona = $campos_principales.",".$campos_votar.",".$campos_habilidades.",".$campos_bachillerato.",".$campos_becado." FROM ".$tablas_principales." ".$tablas_votar." ".$tablas_habilidades." ".$tablas_bachillerato." ".$tablas_becado." ".$condicion;                  

                    }else{
$query_persona = $campos_principales.",".$campos_votar.",".$campos_habilidades.",".$campos_bachillerato." FROM ".$tablas_principales." ".$tablas_votar." ".$tablas_habilidades." ".$tablas_bachillerato." ".$condicion;                  
                    }
              }else{
$query_persona = $campos_principales.",".$campos_votar.",".$campos_habilidades." FROM ".$tablas_principales." ".$tablas_votar." ".$tablas_habilidades." ".$condicion;
              } 
             
             }
/*< = ====================================110===================================== = >*/
             if( $vota == 1 && $persona_discapacidad == 1 && $persona_habilidades == 0 ){

              if($tipo_persona == 1 ){

                if ( $becado == 1 ) {

$query_persona = $campos_principales.",".$campos_votar.",".$campos_discapacidad.",".$campos_bachillerato.",".$campos_becado." FROM ".$tablas_principales." ".$tablas_votar." ".$tablas_discapacidad." ".$tablas_bachillerato." ".$tablas_becado." ".$condicion;

                } else {

$query_persona = $campos_principales.",".$campos_votar.",".$campos_discapacidad.",".$campos_bachillerato." FROM ".$tablas_principales." ".$tablas_votar." ".$tablas_discapacidad." ".$tablas_bachillerato." ".$condicion;

                }
                
                }else{
$query_persona = $campos_principales.",".$campos_votar.",".$campos_discapacidad." FROM ".$tablas_principales." ".$tablas_votar." ".$tablas_discapacidad." ".$condicion;
               }
             }
/*< = ====================================111===================================== = >*/
             if( $vota == 1 && $persona_discapacidad == 1 && $persona_habilidades == 1 ){

                if( $tipo_persona == 1 ){

                     if ( $becado == 1 ) {
$query_persona = $campos_principales.",".$campos_votar.",".$campos_discapacidad.",".$campos_habilidades.",".$campos_bachillerato.",".$campos_becado." FROM ".$tablas_principales." ".$tablas_votar." ".$tablas_discapacidad." ".$tablas_habilidades." ".$tablas_bachillerato." ".$tablas_becado." ".$condicion;
                     } else {
$query_persona = $campos_principales.",".$campos_votar.",".$campos_discapacidad.",".$campos_habilidades.",".$campos_bachillerato." FROM ".$tablas_principales." ".$tablas_votar." ".$tablas_discapacidad." ".$tablas_habilidades." ".$tablas_bachillerato." ".$condicion;
                     }
                    
                }else{

$query_persona = $campos_principales.",".$campos_votar.",".$campos_discapacidad.",".$campos_habilidades." FROM ".$tablas_principales." ".$tablas_votar." ".$tablas_discapacidad." ".$tablas_habilidades." ".$condicion;
                
                }
             }

            $resultado_persona = pg_query($query_persona) or die("Error--> ".pg_last_error());
             if($resultado_persona != 0){   
              while($fila_persona=pg_fetch_array($resultado_persona)){
               ?>
               <div  id="mostrar_persona"
           onclick="cargar_datos_persona('<?php echo $fila_persona['ced_persona']; ?>',
           '<?php echo $fila_persona['nom_persona']; ?>',
           '<?php echo $fila_persona['ape_persona']; ?>',
           '<?php echo $fila_persona['sexo_persona']; ?>',
           '<?php echo implode("-", array_reverse(explode("-", $fila_persona['fn_persona']))); ?>',
           '<?php echo $fila_persona['direccion']; ?>',
           '<?php echo $fila_persona['desc_parroquia']; ?>',
           '<?php echo $fila_persona['desc_cargo']; ?>',
           '<?php echo $fila_persona['descripcion']; ?>',
           '<?php echo $fila_persona['desc_profesion']; ?>',
           '<?php echo $fila_persona['desc_telefono']; ?>',
           '<?php echo $fila_persona['desc_correo']; ?>',
           '<?php echo $fila_persona['centro_votacion']; ?>',
           '<?php echo $fila_persona['direccion_centro_votacion']; ?>',
           '<?php echo $fila_persona['desc_estado']; ?>',
           '<?php echo $fila_persona['tipo_discapacidad']; ?>',
           '<?php echo $fila_persona['desc_discapacidad']; ?>',
           '<?php echo $fila_persona['tipo_habilidad']; ?>',
           '<?php echo $fila_persona['descripcion_habilidad']; ?>',
           '<?php echo $fila_persona['anio_egreso']; ?>',
           '<?php echo $fila_persona['institucion']; ?>',
           '<?php echo $fila_persona['titulo_obtenido']; ?>',
           '<?php echo $fila_persona['espacio_asg']; ?>',
           '<?php echo $fila_persona['actividad_beca']; ?>',
           '<?php echo $fila_persona['dias_labor']; ?>',
           '<?php echo $fila_persona['horas_dia']; ?>');">Mostrar</div>

             <?php 
           }
        }
    ?>
  </body>
</html>