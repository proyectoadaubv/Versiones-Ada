<!DOCTYPE html>
<html lang="es">
<head></head>
<body>
<table class="tabla_general">
   <thead>
   <th style="width:50%;">Componente</th>
   <th style="width:50;">Horas</th>
   </thead>
   <tbody>
  <?php
include_once('conexion-bd.php');
$Query="SELECT * FROM rec.tbl_componentes";
$Resultado = pg_query ($Query) or die("Error en la consulta sentencia");

         while($Fila=pg_fetch_array($Resultado)){
          ?>
         <tr style="cursor:pointer" onclick="rec3('<?php echo $Fila['cod_componente']; ?>','<?php echo $Fila[1]; ?>','<?php echo $Fila[2]; ?>');">
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