<?php
include_once('conexion-bd.php');
$nom_docente = pg_query ("SELECT * FROM reg.tbl_persona tp 
INNER JOIN reg.tbl_cargo_persona tbcp ON(tp.ced_persona = tbcp.ced_persona) 
INNER JOIN rec.tbl_tipo_persona tbtp ON(tbcp.cod_tipop = tbtp.cod_tipo_persona) 
WHERE tbtp.descripcion ='DOCENTE'") or die("Error en la consulta de periodo");
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($datos_docente=pg_fetch_array($nom_docente)){
      echo '<option  value="'.$datos_docente["ced_persona"].'">'.$datos_docente["nom_persona"].' '.$datos_docente["ape_persona"].'</option>';
      }
    echo "</select>";
?>