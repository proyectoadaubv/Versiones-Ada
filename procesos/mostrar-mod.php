<?php
include_once('conexion-bd.php');
$desc_modalidad = pg_query ("SELECT * FROM rec.tbl_modalidad_uc") or die("Error en la consulta");
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($filas_modalidad=pg_fetch_array($desc_modalidad)){
      echo '<option  value="'.$filas_modalidad["cod_modalidad"].'">'.$filas_modalidad["desc_mod"].'</option>';
      }
    echo "</select>";
?>