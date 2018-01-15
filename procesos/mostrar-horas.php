<?php
include_once('conexion-bd.php');
$desc_horas = pg_query ("SELECT * FROM rec.tbl_horas") or die("Error en la consulta de periodo");
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($filas_horas=pg_fetch_array($desc_horas)){
      echo '<option  value="'.$filas_horas["cod_hora"].'">'.$filas_horas["hora_inicio"].' a '.$filas_horas["hora_cierre"].'</option>';
      }
    echo "</select>";
?>