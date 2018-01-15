<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <script type="text/javascript" src="jQuery/detalles_elementos.js"></script>
  <link rel="stylesheet" href="css/estilo_css.css" />
</head>
<body>
<table class="tabla_general" id="tabla-mostrar-tray">
   <thead>
   <th style='width:50%;'>Descripción del trayecto</th>
   </thead>
   <tbody>
  <?php

include_once('conexion-bd.php');
$Buscar=$_POST['valorBusqueda'];
$Query="SELECT * FROM rec.tbl_trayecto WHERE desc_trayecto LIKE '%$Buscar%';";
$Resultado = pg_query ($Query) or die("Error en la consulta sentencia");

         while($Fila=pg_fetch_array($Resultado)){
          ?>
         <tr style="cursor:pointer" onclick="tray_id_modificar('<?php echo $Fila[0]; ?>','<?php echo $Fila[1]; ?>');">
         <td> <?php echo $Fila[1]; ?></td>
        </tr>
       <?php 
       }
       ?>
</tbody>
</table>
</body>
</html>