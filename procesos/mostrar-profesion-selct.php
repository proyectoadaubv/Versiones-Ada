 <?php
     include_once('conexion-bd.php');
     $query = "SELECT * FROM rec.tbl_profesion";
     $datos= pg_query($query);
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($fila=pg_fetch_array($datos)){
      echo '<option  value="'.$fila["cod_profesion"].'">'.$fila["desc_profesion"].'</option>';
      }
    echo "</select>";
 ?>
