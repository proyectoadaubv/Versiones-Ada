<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <script type="text/javascript" src="../js/detalles_elementos.js"></script>
  <link rel="stylesheet" href="../css/estilo_css.css" />
</head>
<body>
<table class="tabla_general" id="tabla-mostrar-laboratorios">
   <thead>


   <th style='width:20%;'>Laboratorio</th>
   <th style='width:15%;'>Capacidad</th>
   <th style='width:15%;'>Equipos</th>
   <th style='width:50%;'>Edificio</th>
   </thead>
   <tbody>
  <?php
include_once('conexion-bd.php');
$desc_buscar=$_POST['valorBusquedaLab'];
$query_lab="SELECT * FROM rec.tbl_laboratorio tl INNER JOIN
 reg.tbl_espacios_asg tea ON(tl.cod_lab=tea.cod_lab) INNER JOIN 
 rec.tbl_espacios_acad td ON(td.cod_espacio=tea.cod_edificio) WHERE tl.cod_lab != 1 AND tl.desc_lab LIKE '%$desc_buscar%' ORDER BY tl.cod_lab DESC";

       $resultado_lab = pg_query ($query_lab) or die("Error en la consulta sentencia");

         while($fila_lab=pg_fetch_array($resultado_lab)){
          ?>
         <tr style="cursor:pointer" onclick="lab_id_modificar('<?php echo $fila_lab['cod_lab']; ?>',
         '<?php echo $fila_lab['desc_lab']; ?>','<?php echo $fila_lab['cap_lab']; ?>','<?php echo $fila_lab['equipos_lab']; ?>'
         ,'<?php echo $fila_lab['desp_espacio']; ?>');">
         <td> <?php echo $fila_lab['desc_lab']; ?></td>
         <td> <?php echo $fila_lab['cap_lab']; ?></td>
         <td> <?php echo $fila_lab['equipos_lab']; ?></td>
         <td> <?php echo $fila_lab['desp_espacio']; ?></td>
        </tr>
       <?php 
       }
       ?>
</tbody>
</table>
</body>
</html>
