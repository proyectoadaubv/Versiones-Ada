<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
<script type="text/javascript" src="../js/aspecto-elementos.js"></script>
</head>
<body>
<table  class="tabla_general" id="tabla-mostrar-act-acad">
   <thead>
     <th style='width:33%;'>Actividad</th>
     <th style='width:33%;'>Inicio</th>
     <th style='width:33%;'>Cierre</th>
   </thead>
   <tbody>
  <?php

include_once('conexion-bd.php');
$Query="SELECT act.cod_fecha_ac, dact.desc_actividad, act.fecha_apertura, act.fecha_cierre FROM reg.tbl_fecha_actividad act
 INNER JOIN reg.tbl_periodo p ON(p.cod_periodo = act.cod_periodo)
 INNER JOIN rec.tbl_actividades_acad dact ON(dact.cod_actividad = act.cod_actividad)
WHERE p.estatus != 0";

$Resultado_actividad = pg_query ($Query) or die("Error en la consulta de actividad");

         while($Fila_actividad=pg_fetch_array($Resultado_actividad)){
         ?>
          <tr style='cursor:pointer' onclick="actividad_id_modificar('<?php echo $Fila_actividad[0]; ?>
         ','<?php echo $Fila_actividad[1]; ?>
         ','<?php echo implode("-", array_reverse(explode("-", $Fila_actividad[2]))); ?>
         ','<?php echo implode("-", array_reverse(explode("-", $Fila_actividad[3]))); ?>');">

                  <td> <?php echo $Fila_actividad['desc_actividad']; ?></td>
                  <td>
                  <?php
                   /*Invertir la fecha recibida desde la base de datos, en formato: Dia-Mes-Año*/
                   echo implode("-", array_reverse(explode("-", $Fila_actividad['fecha_apertura'])));
                   ?>
                   </td>
                   <td>
                  <?php
                   /*Invertir la fecha recibida desde la base de datos, en formato: Dia-Mes-Año*/
                   echo implode("-", array_reverse(explode("-", $Fila_actividad['fecha_cierre'])));
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