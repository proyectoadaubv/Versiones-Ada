<!DOCTYPE html>
<html lang="es">
<head></head>
<body>
<table class="tabla_general">
   <thead>
   <th>Linea de investigaci&oacuten</th>
   </thead>
   <tbody>
  <?php
include_once('conexion-bd.php');
$Query="SELECT * FROM rec.tbl_linea_investigacion";
$Resultado = pg_query ($Query) or die("Error en la consulta sentencia");

         while($Fila=pg_fetch_array($Resultado)){
          ?>
         <tr style="cursor:pointer" onclick="rec4('<?php echo $Fila[0]; ?>','<?php echo $Fila[1]; ?>');">
         <td> <?php echo $Fila[1]; ?></td>
        </tr>
       <?php 
       }
       ?>
</tbody>
</table>
</body>
</html>