 <?php
     include_once('conexion-bd.php');
     $consulta_esp = "SELECT *  FROM rec.tbl_ubicacion_esp";
     $datos_esp= pg_query($consulta_esp);
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($fila_esp=pg_fetch_array($datos_esp)){
      echo '<option  value="'.$fila_esp["cod_ubicacion"].'">'.$fila_esp["desc_ubicacion"].'</option>';
      }
    echo "</select>";
 ?>
