 <?php
     include_once('conexion-bd.php');
     /*EXTRAER TIPO UNIDAD CURRICULAR*/
     $query_tipouc = "SELECT * FROM rec.tbl_tipounidadc";
     $query_datos_tipouc= pg_query($query_tipouc);
     echo "<select>";
     echo "<option value='0'>ELEGIR</option> ";  
     while($fila_tipouc=pg_fetch_array($query_datos_tipouc)){
      echo '<option  value="'.$fila_tipouc["cod_tipo_unidadc"].'">'.$fila_tipouc["tipo_uc"].'</option>';
      }
    echo "</select>";
 ?>
