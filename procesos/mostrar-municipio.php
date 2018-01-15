 <?php
     include_once('conexion-bd.php');
     /*EXTRAER MUNICIPIO*/
     $query = "SELECT *  FROM rec.tbl_municipio";
     $datos= pg_query($query);
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($fila=pg_fetch_array($datos)){
      echo '<option  value="'.$fila["cod_municipio"].'">'.$fila["desc_municipio"].'</option>';
      }
    echo "</select>";
 ?>
