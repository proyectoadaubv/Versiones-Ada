<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
    <script type="text/javascript" src="../js/detalles_elementos.js"></script>
  <link rel="stylesheet" href="../css/estilo_css.css" />
</head>
<body>
<table class="tabla_general" id="tabla-mostrar-tram">
   <thead>
   <th style='width:40%;'>Trayecto</th>
   <th style='width:40%;'>Tramo</th>
   </thead>
   <tbody>
  <?php

include_once('conexion-bd.php');
$BuscarTramo=$_POST['valorBusquedaTramo'];


$Query_tramo="SELECT *  FROM rec.tbl_trayecto tt INNER JOIN rec.tbl_tramo tm ON(tt.cod_trayecto = tm.cod_trayecto) WHERE desc_tramo LIKE '%$BuscarTramo%';";
$Resultado_tramo = pg_query ($Query_tramo) or die("Error en la consulta sentencia");

         while($Fila_tramo=pg_fetch_array($Resultado_tramo)){
          ?>
         <tr style="cursor:pointer" onclick="tram_id_modificar('<?php echo $Fila_tramo['cod_tramo']; ?>','<?php echo $Fila_tramo['desc_tramo']; ?>','<?php echo $Fila_tramo['desc_trayecto']; ?>');">
         <td> <?php echo $Fila_tramo['desc_trayecto']; ?></td>
         <td> <?php echo $Fila_tramo['desc_tramo']; ?></td>
        </tr>
       <?php 
       }


       
       ?>
</tbody>
</table>
</body>
</html>