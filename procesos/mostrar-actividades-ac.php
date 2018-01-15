<?php
include_once('conexion-bd.php');
$desc_act_aca = pg_query ("SELECT * FROM rec.tbl_actividades_acad") or die("Error en la consulta");
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($filas_act_aca=pg_fetch_array($desc_act_aca)){
      echo '<option  value="'.$filas_act_aca["cod_actividad"].'">'.$filas_act_aca["desc_actividad"].'</option>';
      }
    echo "</select>";
?>