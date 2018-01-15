 <?php
     include_once('conexion-bd.php');
     $consulta_edif_selct = "SELECT * FROM rec.tbl_espacios_acad esp
 INNER JOIN rec.tbl_ubicacion_esp ubc ON(esp.cod_ubicacion = ubc.cod_ubicacion)";
     $datos_edificios_selct= pg_query($consulta_edif_selct);
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($fila_edif_selct=pg_fetch_array($datos_edificios_selct)){
      echo '<option  value="'.$fila_edif_selct["cod_espacio"].'">'.$fila_edif_selct["desp_espacio"].'</option>';
      }
    echo "</select>";
 ?>
