<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <script type="text/javascript" src="../js/aspecto-elementos.js"></script>
  <link rel="stylesheet" href="../css/estilo_css.css" />
</head>
<body>
<table class="tabla_general" id="tabla-mostrar-tipo-persona">
   <thead>
   <th style='width:80%;'>Tipo de persona</th>
   </thead>
   <tbody>
  <?php
include_once('conexion-bd.php');
$desc_buscar=$_POST['valorBusquedaTipoPersona'];
$query_tipo_persona="SELECT * FROM rec.tbl_tipo_persona WHERE descripcion LIKE '%$desc_buscar%';";

$resultado_tipo_persona = pg_query ($query_tipo_persona) or die("Error en la consulta sentencia");

         while($fila_tipo_persona=pg_fetch_array($resultado_tipo_persona)){
          ?>
         <tr style="cursor:pointer" onclick="tipo_persona_id_modificar('<?php echo $fila_tipo_persona[0]; ?>','<?php echo $fila_tipo_persona[1]; ?>');">
         <td> <?php echo $fila_tipo_persona[1]; ?></td>
        </tr>
       <?php 
       }
       ?>
</tbody>
</table>
</body>
</html>
