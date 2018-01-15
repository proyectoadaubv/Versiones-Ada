 <?php
     include_once('conexion-bd.php');
     /*EXTRAER TIPO DE PERSONA*/
     $query = "SELECT *  FROM rec.tbl_tipo_persona";
     $datos= pg_query($query);
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($fila=pg_fetch_array($datos)){
      echo '<option  value="'.$fila["cod_tipo_persona"].'">'.$fila["descripcion"].'</option>';
      }
    echo "</select>";
 ?>