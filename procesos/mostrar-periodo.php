<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
<script type="text/javascript" src="../js/aspecto-elementos.js"></script>

</head>
<body>
<table  class="tabla_general" id="tabla-mostrar-periodo">
   <thead>
    <th style='width:20%;'>Tipo del periodo</th>
     <th style='width:20%;'>Periodo lectivo</th>
     <th style='width:20%;'>Fecha de inicio</th>
     <th style='width:20%;'>Fecha de cierre</th>
   </thead>
   <tbody>
  <?php
include_once('conexion-bd.php');
$Query="SELECT * FROM reg.tbl_periodo WHERE estatus != 0";
$Resultado_periodo = pg_query ($Query) or die("Error en la consulta de periodo");

         while($Fila_periodo=pg_fetch_array($Resultado_periodo)){
         ?>
          <tr style='cursor:pointer' onclick="periodo_id_modificar('<?php echo $Fila_periodo[0]; ?>
         ','<?php echo $Fila_periodo[1]; ?>
         ','<?php echo implode("-", array_reverse(explode("-", $Fila_periodo[2]))); ?>
         ','<?php echo implode("-", array_reverse(explode("-", $Fila_periodo[3]))); ?>
         ','<?php if($Fila_periodo[4]==6){ echo "SEMESTRE"; }else  if($Fila_periodo[4]==3){ echo "TRIMESTRE"; } ?>');">
           <td>
            <?php
              if($Fila_periodo[4]==6){
                echo "SEMESTRE";
                 }else  if($Fila_periodo[4]==3){
                  echo "TRIMESTRE";
                   }
                   ?>
                  </td>
                  <td> <?php echo $Fila_periodo[1]; ?></td>
                  <td>
                  <?php
                   /*Invertir la fecha recibida desde la base de datos, en formato: Dia-Mes-Año*/
                   echo implode("-", array_reverse(explode("-", $Fila_periodo[2])));
                   ?>
                   </td>
                   <td>
                  <?php
                   /*Invertir la fecha recibida desde la base de datos, en formato: Dia-Mes-Año*/
                   echo implode("-", array_reverse(explode("-", $Fila_periodo[3])));
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