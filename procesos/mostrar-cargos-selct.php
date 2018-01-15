 <?php
     include_once('conexion-bd.php');
     /*EXTRAER CARGO DE PERSONA*/
     $query = "SELECT *  FROM rec.tbl_cargos";
     $datos= pg_query($query);
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($fila=pg_fetch_array($datos)){
      echo '<option  value="'.$fila["cod_cargo"].'">'.$fila["desc_cargo"].'</option>';
      }
    echo "</select>";
 ?>