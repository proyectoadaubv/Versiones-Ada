 <?php
     include_once('conexion-bd.php');
     /*EXTRAER ESTADO*/
     $query = "SELECT *  FROM rec.tbl_estado";
     $datos= pg_query($query);
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($fila=pg_fetch_array($datos)){
      echo '<option  value="'.$fila["cod_estado"].'">'.$fila["desc_estado"].'</option>';
      }
    echo "</select>";
 ?>
