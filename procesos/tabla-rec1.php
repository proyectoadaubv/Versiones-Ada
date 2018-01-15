<!DOCTYPE html>
<html lang="es">
<head></head>
<body>
<table class="tabla_general">
   <thead>
   <th style="width:50%;">Sigla</th>
   <th style="width:50%;">Descripci&oacuten</th>
   </thead>
   <tbody>
  <?php
include_once('conexion-bd.php');
$Query="SELECT *  FROM rec.tbl_prog_acad";
$Resultado = pg_query ($Query) or die("Error en la consulta sentencia");

         while($Fila=pg_fetch_array($Resultado)){
          ?>
         <tr style="cursor:pointer" onclick="rec1('<?php echo $Fila[0]; ?>','<?php echo $Fila[1]; ?>','<?php echo $Fila[2]; ?>');">
         <td> <?php echo $Fila[1]; ?></td>
         <td> <?php echo $Fila[2]; ?></td>   
        </tr>
       <?php 
       }
       ?>
</tbody>
</table>
</body>
</html>