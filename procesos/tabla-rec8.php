<!DOCTYPE html>
<html lang="es">
<head></head>
<body>
<table class="tabla_general">
   <thead>
   <th>Versi&oacuten</th>
   <th>Apertura</th>
   <th>Cierre</th>
   <th>Estatus</th>
   </thead>
   <tbody>
  <?php
include_once('conexion-bd.php');
$Query="SELECT * FROM rec.tbl_version_malla ORDER BY cod_version DESC";
$Resultado = pg_query ($Query) or die("Error en la consulta sentencia");

         while($Fila=pg_fetch_array($Resultado)){
          ?>
         <tr style="cursor:pointer" onclick="rec8('<?php echo $Fila[0]; ?>',
         '<?php echo $Fila[1]; ?>','<?php echo implode("-", array_reverse(explode("-",$Fila[2]))); ?>'
         ,'<?php echo implode("-", array_reverse(explode("-",$Fila[3]))); ?>','<?php echo $Fila[4]; ?>');">
         <td> <?php echo $Fila[1]; ?></td>
         <td> <?php echo implode("-", array_reverse(explode("-",$Fila[2]))); ?></td>
         <td> <?php echo implode("-", array_reverse(explode("-",$Fila[3]))); ?></td>
         <td>
          <?php
           $mostrar;
           if( $Fila[4] == 1 ){
             $mostrar = "ACTIVO";
           }else {
             $mostrar = "CERRADA";
           }
           echo  $mostrar;  
          ?>
          </td>
        </tr>
       <?php 
       }
       ?>
</tbody>
</table>
</body>
</html>