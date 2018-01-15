 <?php
     include_once('conexion-bd.php');
     /*EXTRAER PARROQUIA*/
     $query = "SELECT *  FROM rec.tbl_parroquia";
     $datos= pg_query($query);
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($fila=pg_fetch_array($datos)){
      echo '<option  value="'.$fila["cod_parroquia"].'">'.$fila["desc_parroquia"].'</option>';
      }
    echo "</select>";
 ?>
