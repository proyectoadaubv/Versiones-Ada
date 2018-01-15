<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
    <script type="text/javascript" src="jQuery/detalles_elementos.js"></script>
  <link rel="stylesheet" href="css/estilo_css.css" />
</head>
<body>
<table class="tabla_general" id="tabla-mostrar-municipio">
   <thead>
   <th style='width:20%;'>Estado</th>
   <th style='width:70%;'>Municipio</th>
   </thead>
   <tbody>
  <?php

include_once('conexion-bd.php');
$Buscar=$_POST['valorBusquedaMunicipio'];
$Query="SELECT * FROM rec.tbl_estado te INNER JOIN rec.tbl_municipio tm ON(te.cod_estado = tm.cod_estado)  WHERE desc_municipio LIKE '%$Buscar%';";
$Resultado = pg_query ($Query) or die("Error en la consulta sentencia");

         while($Fila=pg_fetch_array($Resultado)){
          ?>
         <tr style="cursor:pointer" onclick="municipio_id_modificar('<?php echo $Fila['cod_municipio']; ?>','<?php echo $Fila['desc_municipio']; ?>','<?php echo $Fila['desc_estado']; ?>');">
         <td> <?php echo $Fila['desc_estado']; ?></td>
         <td> <?php echo $Fila['desc_municipio']; ?></td>
        </tr>
       <?php 
       }
       ?>
</tbody>
</table>
</body>
</html>