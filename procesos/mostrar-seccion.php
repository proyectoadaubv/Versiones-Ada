<?php
include_once('conexion-bd.php');
$desc_seccion = pg_query ("SELECT * FROM rec.tbl_seccion") or die("Error en la consulta de periodo");
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($filas_seccion=pg_fetch_array($desc_seccion)){
      echo '<option  value="'.$filas_seccion["cod_seccion"].'">'.$filas_seccion["desc_seccion"].'</option>';
      }
    echo "</select>";
?>