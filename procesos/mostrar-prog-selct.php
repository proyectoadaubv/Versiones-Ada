 <?php
     include_once('conexion-bd.php');
     $consulta_prog = "SELECT *  FROM rec.tbl_desc_programa";
     $datos_prog= pg_query($consulta_prog);
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($fila_prog=pg_fetch_array($datos_prog)){
      echo '<option  value="'.$fila_prog["cod_desc_prog"].'">'.$fila_prog["desc_programa"].'</option>';
      }
    echo "</select>";
 ?>
