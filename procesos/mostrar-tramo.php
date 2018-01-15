 <?php
     include_once('conexion-bd.php');
     /*EXTRAER TRAMO*/
     $query_tramo = "SELECT * FROM rec.tbl_tramo";
     $query_datos_tramo= pg_query($query_tramo);
    echo "<select>";
    echo " <option value='0'>ELEGIR</option> ";
   while($fila_tramo=pg_fetch_array($query_datos_tramo)){
    echo '<option  value="'.$fila_tramo["cod_tramo"].'">'.$fila_tramo["desc_tramo"].'</option>';
    }
    echo "</select>";
?>