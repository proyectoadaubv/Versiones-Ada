<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <script type="text/javascript" src="../js/aspecto-elementos.js"></script>
  <link rel="stylesheet" href="../css/estilo_css.css" />
</head>
<body>
<table class="tabla_general" id="tabla-mostrar-edif">
   <thead>
   <th style='width:33%;'>Ubicaci&oacuten</th>
   <th style='width:33%;'>Direcci&oacuten</th>
   <th style='width:33%;'>Edificio</th>
   </thead>
   <tbody>
  <?php

include_once('conexion-bd.php');
$desc_buscar=$_POST['valorBusqueda'];
$query_edificio="SELECT * FROM rec.tbl_espacios_acad esp
 INNER JOIN rec.tbl_ubicacion_esp ubc ON(esp.cod_ubicacion = ubc.cod_ubicacion)
  WHERE esp.desp_espacio LIKE '%$desc_buscar%';";

$resultado_edificio = pg_query ($query_edificio) or die("Error en la consulta sentencia");

         while($fila_edificio=pg_fetch_array($resultado_edificio)){
          ?>
         <tr style="cursor:pointer" onclick="edif_id_modificar('<?php echo $fila_edificio["cod_espacio"]; ?>'
         ,'<?php echo $fila_edificio["desc_ubicacion"]; ?>','<?php echo $fila_edificio["desp_espacio"]; ?>');">
         <td> <?php echo $fila_edificio['desc_ubicacion']; ?></td>
         <td> <?php echo $fila_edificio['direccion_esp']; ?></td>
         <td> <?php echo $fila_edificio['desp_espacio']; ?></td>
        </tr>
       <?php 
       }
       ?>
</tbody>
</table>
</body>
</html>
