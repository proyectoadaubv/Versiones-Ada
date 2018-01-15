<?php
include_once('conexion-bd.php');
$periodo_actual = pg_query ("SELECT desc_periodo FROM reg.tbl_periodo WHERE estatus != 0") or die("Error en la consulta de periodo");
         while($desc_periodo=pg_fetch_array($periodo_actual)){echo $desc_periodo['desc_periodo'];}
?>