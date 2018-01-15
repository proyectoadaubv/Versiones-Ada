<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <script type="text/javascript" src="../js/aspecto-elementos.js"></script>
  <link rel="stylesheet" href="../css/estilo_css.css" />
</head>
<body>
<table class="tabla_general" id="tabla-mostrar-etapa-proyecto">
   <thead>
   <th style='width:80%;'>Etapa proyecto</th>
   </thead>
   <tbody>
  <?php
include_once('conexion-bd.php');
$desc_buscar=$_POST['valorBusquedaEtapaPro'];
$query_etapapro="SELECT * FROM rec.tbl_etapa_proyecto WHERE desc_etapa_p LIKE '%$desc_buscar%';";

$resultado_etapapro = pg_query ($query_etapapro) or die("Error en la consulta sentencia");

         while($fila_etapapro=pg_fetch_array($resultado_etapapro)){
          ?>
         <tr style="cursor:pointer" onclick="etapapro_id_modificar('<?php echo $fila_etapapro[0]; ?>','<?php echo $fila_etapapro[1]; ?>');">
         <td> <?php echo $fila_etapapro[1]; ?></td>
        </tr>
       <?php 
       }
       ?>
</tbody>
</table>
</body>
</html>
