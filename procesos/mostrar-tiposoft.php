<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <script type="text/javascript" src="../js/aspecto-elementos.js"></script>
  <link rel="stylesheet" href="../css/estilo_css.css" />
</head>
<body>
<table class="tabla_general" id="tabla-mostrar-tipo-software">
   <thead>
   <th style='width:80%;'>Tipos de software</th>
   </thead>
   <tbody>
  <?php
include_once('conexion-bd.php');
$desc_buscar=$_POST['valorBusquedaTipoSoft'];
$query_tiposoft="SELECT * FROM rec.tbl_tipo_producto WHERE desc_producto LIKE '%$desc_buscar%';";

$resultado_tiposoft = pg_query ($query_tiposoft) or die("Error en la consulta sentencia");

         while($fila_tiposoft=pg_fetch_array($resultado_tiposoft)){
          ?>
         <tr style="cursor:pointer" onclick="tiposoft_id_modificar('<?php echo $fila_tiposoft[0]; ?>','<?php echo $fila_tiposoft[1]; ?>');">
         <td> <?php echo $fila_tiposoft[1]; ?></td>
        </tr>
       <?php 
       }
       ?>
</tbody>
</table>
</body>
</html>
