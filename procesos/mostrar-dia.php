<?php
include_once('conexion-bd.php');
$desc_dia = pg_query ("SELECT * FROM rec.tbl_dia") or die("Error en la consulta");
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($filas_dia=pg_fetch_array($desc_dia)){
      echo '<option  value="'.$filas_dia["cod_dia"].'">'.$filas_dia["desc_dia"].'</option>';
      }
    echo "</select>";
?>