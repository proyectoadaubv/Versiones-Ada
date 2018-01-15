<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <script type="text/javascript" src="../js/detalles_elementos.js"></script>
  <link rel="stylesheet" href="../css/estilo_css.css" />
</head>
<body>
<table class="tabla_general" id="tabla-mostrar-aulas">
   <thead>
   <th style='width:20%;'>Aula</th>
   <th style='width:15%;'>Capacidad</th>
   <th style='width:65%;'>Edificio</th>
   </thead>
   <tbody>
  <?php
include_once('conexion-bd.php');
$desc_buscar=$_POST['valorBusquedaAula'];

$query_aula="SELECT * FROM rec.tbl_aula ta INNER JOIN
 reg.tbl_espacios_asg tea ON(ta.cod_aula=tea.cod_aula) INNER JOIN 
 rec.tbl_espacios_acad td ON(td.cod_espacio=tea.cod_edificio)
  WHERE ta.cod_aula != 1 AND ta.descripcion LIKE '%$desc_buscar%' ORDER BY ta.cod_aula DESC";

$resultado_aula = pg_query ($query_aula) or die("Error en la consulta sentencia");

         while($fila_aula=pg_fetch_array($resultado_aula)){
          ?>
         <tr style="cursor:pointer" onclick="aula_id_modificar('<?php echo $fila_aula['cod_aula']; ?>','<?php echo $fila_aula['descripcion']; ?>','<?php echo $fila_aula['capacidad']; ?>','<?php echo $fila_aula['desp_espacio']; ?>');">
         <td> <?php echo $fila_aula['descripcion']; ?></td>
         <td> <?php echo $fila_aula['capacidad']; ?></td>
         <td> <?php echo $fila_aula['desp_espacio']; ?></td>
        </tr>
       <?php 
       }
       ?>
</tbody>
</table>
</body>
</html>
