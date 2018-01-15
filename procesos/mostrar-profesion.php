<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <script type="text/javascript" src="../js/aspecto-elementos.js"></script>
  <link rel="stylesheet" href="../css/estilo_css.css" />
</head>
<body>
<table class="tabla_general" id="tabla-mostrar-profesiones">
   <thead>
   <th style='width:80%;'>Profesiones</th>
   </thead>
   <tbody>
  <?php
include_once('conexion-bd.php');
$desc_buscar=$_POST['valorBusquedaProfesion'];
$query_profesion="SELECT * FROM rec.tbl_profesion WHERE desc_profesion LIKE '%$desc_buscar%';";

$resultado_profesion = pg_query ($query_profesion) or die("Error en la consulta sentencia");

         while($fila_profesion=pg_fetch_array($resultado_profesion)){
          ?>
         <tr style="cursor:pointer" onclick="profesion_id_modificar('<?php echo $fila_profesion[0]; ?>','<?php echo $fila_profesion[1]; ?>');">
         <td> <?php echo $fila_profesion[1]; ?></td>
        </tr>
       <?php 
       }
       ?>
</tbody>
</table>
</body>
</html>
