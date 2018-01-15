<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
    <script type="text/javascript" src="jQuery/detalles_elementos.js"></script>
  <link rel="stylesheet" href="css/estilo_css.css" />
</head>
<body>
<table class="tabla_general" id="tabla-mostrar-parroquia">
   <thead>
   <th style='width:40%;'>Municipio</th>
   <th style='width:40%;'>Parroquia</th>
   </thead>
   <tbody>
  <?php

include_once('conexion-bd.php');
$Buscar=$_POST['valorBusquedaParroquia'];
$Query="SELECT * FROM rec.tbl_parroquia tp INNER JOIN rec.tbl_municipio tm ON(tp.cod_municipio = tm.cod_municipio)  WHERE desc_parroquia LIKE '%$Buscar%';";
$Resultado = pg_query ($Query) or die("Error en la consulta sentencia");

         while($Fila=pg_fetch_array($Resultado)){
          ?>
         <tr style="cursor:pointer" onclick="parroquia_id_modificar('<?php echo $Fila['cod_parroquia']; ?>','<?php echo $Fila['desc_parroquia']; ?>','<?php echo $Fila['desc_municipio']; ?>');">
         <td> <?php echo $Fila['desc_municipio']; ?></td>
         <td> <?php echo $Fila['desc_parroquia']; ?></td>
        </tr>
       <?php 
       }
       ?>
</tbody>
</table>
</body>
</html>