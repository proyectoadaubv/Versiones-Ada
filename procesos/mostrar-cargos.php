<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <script type="text/javascript" src="../js/aspecto-elementos.js"></script>
  <link rel="stylesheet" href="../css/estilo_css.css" />
</head>
<body>
<table class="tabla_general" id="tabla-mostrar-cargos">
   <thead>
   <th style='width:80%;'>Cargos</th>
   </thead>
   <tbody>
  <?php
include_once('conexion-bd.php');
$desc_buscar=$_POST['valorBusquedaCargo'];
$query_cargo="SELECT * FROM rec.tbl_cargos WHERE desc_cargo LIKE '%$desc_buscar%';";

$resultado_cargo = pg_query ($query_cargo) or die("Error en la consulta sentencia");

         while($fila_cargo=pg_fetch_array($resultado_cargo)){
          ?>
         <tr style="cursor:pointer" onclick="cargo_id_modificar('<?php echo $fila_cargo[0]; ?>','<?php echo $fila_cargo[1]; ?>');">
         <td> <?php echo $fila_cargo[1]; ?></td>
        </tr>
       <?php 
       }
       ?>
</tbody>
</table>
</body>
</html>
