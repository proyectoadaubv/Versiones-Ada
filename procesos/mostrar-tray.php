 <?php
     include_once('conexion-bd.php');
     /*EXTRAER TRAYECTO*/
     $query_trayecto = "SELECT * FROM rec.tbl_trayecto";
     $query_datos_trayecto= pg_query($query_trayecto);
     echo "<select>"; 
     echo "<option value='0'>Elegir</option>";
      while($fila_trayecto=pg_fetch_array($query_datos_trayecto)){
       echo '<option  value="'.$fila_trayecto["cod_trayecto"].'">'.$fila_trayecto["desc_trayecto"].'</option>';
    }
    echo "</select>";
  ?>
