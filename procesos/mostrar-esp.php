<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <script type="text/javascript" src="../js/aspecto-elementos.js"></script>
  <link rel="stylesheet" href="../css/estilo_css.css" />
</head>
<body>
<table class="tabla_general" id="tabla-mostrar-esp" border="0">
   <thead>
   <th style='width:50%;'>Ubicaci&oacuten</th>
   <th style='width:50%;'>Direcci&oacuten</th>
   </thead>
   <tbody>
  <?php
include_once('conexion-bd.php');
$desc_buscar=$_POST['valorBusqueda'];

$query_esp="SELECT cod_ubicacion, desc_ubicacion, direccion_esp
 FROM rec.tbl_ubicacion_esp WHERE desc_ubicacion  LIKE '%$desc_buscar%' ORDER BY cod_ubicacion DESC LIMIT 3";
 
$resultado_esp = pg_query ($query_esp) or die("Error en la consulta sentencia");
$datos_esp= pg_num_rows($resultado_esp);

         for ($i=0;$i<$datos_esp;$i++)
         {
         $fila_esp = pg_fetch_array ($resultado_esp,$i);
          ?>
         <tr style='cursor:pointer' onclick="esp_id_modificar('<?php echo $fila_esp["cod_ubicacion"]; ?>','<?php echo $fila_esp["desc_ubicacion"]; ?>','<?php echo $fila_esp["direccion_esp"]; ?>');">
         <td> <?php echo $fila_esp[1]; ?></td>
         <td> <?php echo $fila_esp[2]; ?></td>
        </tr>
       <?php } ?>
</tbody>
</table>
</body>
</html>
