<?php
include_once('conexion-bd.php');
$desc_siglas = pg_query ("SELECT * FROM rec.tbl_prog_acad") or die("Error en la consulta");
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($filas_siglas=pg_fetch_array($desc_siglas)){
      echo '<option  value="'.$filas_siglas["cod_prog_acad"].'">'.$filas_siglas["sigla"].'</option>';
      }
    echo "</select>";
?>