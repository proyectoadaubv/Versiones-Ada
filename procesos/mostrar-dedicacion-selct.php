 <?php
     include_once('conexion-bd.php');
     $query = "SELECT * FROM rec.tbl_dedicacion_doc";
     $datos_dedicacion= pg_query($query);
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($fila_dedicacion=pg_fetch_array($datos_dedicacion)){
      echo '<option  value="'.$fila_dedicacion["cod_dedicacion"].'">'.$fila_dedicacion["desc_dedicacion"].'</option>';
      }
    echo "</select>";
 ?>