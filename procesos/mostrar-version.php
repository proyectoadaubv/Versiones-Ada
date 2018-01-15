<?php
include_once('conexion-bd.php');
$desc_version_uc = pg_query ("SELECT * FROM rec.tbl_version_malla WHERE estatus = 1") or die("Error en la consulta");
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($filas_version_uc=pg_fetch_array($desc_version_uc)){
      echo '<option  value="'.$filas_version_uc["cod_version"].'">'.$filas_version_uc["desc_version"].'</option>';
      }
    echo "</select>";
?>