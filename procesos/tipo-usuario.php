<?php
include_once('conexion-bd.php');
$desc_tipo_usuario = pg_query ("SELECT * FROM rec.tbl_tipo_usuario") or die("Error en la consulta de periodo");
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($filas_tipo_usuario=pg_fetch_array($desc_tipo_usuario)){
      echo '<option  value="'.$filas_tipo_usuario["cod_tipo_usuario"].'">'.$filas_tipo_usuario["desc_tipo_usuario"].'</option>';
      }
    echo "</select>";
?>