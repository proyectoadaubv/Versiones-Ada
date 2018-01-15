<!DOCTYPE html>
<html lang="es">
<head></head>
<body>
<table class="tabla_general">
   <thead>
   <th style="width:50%;">Sigla</th>
   <th style="width:50;">Programa de formaci&oacuten</th>
   </thead>
   <tbody>
  <?php
include_once('conexion-bd.php');
$Query="SELECT * FROM rec.tbl_prog_acad pfg INNER JOIN rec.tbl_desc_programa dp 
 ON(pfg.cod_prog_acad = dp.cod_programa_acad)";
$Resultado = pg_query ($Query) or die("Error en la consulta sentencia");

         while($Fila=pg_fetch_array($Resultado)){
          ?>
         <tr style="cursor:pointer" onclick="rec2('<?php echo $Fila['cod_desc_prog']; ?>','<?php echo $Fila[1]; ?>','<?php echo $Fila[4]; ?>');">
         <td> <?php echo $Fila[1]; ?></td>
         <td> <?php echo $Fila[4]; ?></td>
        </tr>
       <?php 
       }
       ?>
</tbody>
</table>
</body>
</html>