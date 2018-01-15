<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
    <script type="text/javascript" src="../js/aspecto-elementos.js"></script>
  <link rel="stylesheet" href="../css/estilo_css.css" />
</head>
<body>
<table class="tabla_general" id="tabla-mostrar-turno">
   <thead>
   <th style='width:40%;'>Turno</th>
   </thead>
   <tbody>
  <?php

include_once('conexion-bd.php');
$Buscar=$_POST['valorBusquedaTurno'];
$Query="SELECT *  FROM rec.tbl_turno  WHERE desc_turno LIKE '%$Buscar%';";
$Resultado = pg_query ($Query) or die("Error en la consulta sentencia");

         while($Fila=pg_fetch_array($Resultado)){
          ?>
         <tr style="cursor:pointer" onclick="turno_id_modificar('<?php echo $Fila[0]; ?>','<?php echo $Fila[1]; ?>');">
         <td> <?php echo $Fila[1]; ?></td>
        </tr>
       <?php 
       }
       ?>
</tbody>
</table>
</body>
</html>