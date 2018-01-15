<?php
include_once('conexion-bd.php');
$desc_uc = pg_query ("SELECT * FROM reg.tbl_unidad_curricular") or die("Error en la consulta de periodo");
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($filas_dia=pg_fetch_array($desc_uc)){
      echo '<option  value="'.$filas_dia["cod_unidadc"].'">'.$filas_dia["desc_unidadc"].'</option>';
      }
    echo "</select>";
?>