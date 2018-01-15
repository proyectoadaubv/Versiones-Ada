<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <script type="text/javascript" src="../jQuery/detalles_elementos.js"></script>
  <link rel="stylesheet" href="../css/estilo_css.css" />
</head>
<body>
<table class="tabla_general" id="tabla-mostrar-uc">
   <thead>
   <th style='width:15%;'>C&oacutedigo</th>
   <th style='width:30%;'>Descripción</th>
   <th style='width:3%;'>Horas</th>
   <th style='width:10%;'>Tipo</th>
   <th style='width:10%;'>Modalidad</th>
   <th style='width:5%;'>Versi&oacuten malla</th>
   <th style='width:5%;'>Tray</th>
   <th style='width:5%;'>Tram inicio</th>
   <th style='width:5%;'>Tram fin</th>
   </thead>
   </thead>
   <tbody>
  <?php
include_once('../conexion-bd.php');
$desc_buscar=$_POST['valorBusqueda'];

$query_unidadc="SELECT uc.cod_unidadc, uc.desc_unidadc, uc.horas_uc, tpuc.tipo_uc, muc.desc_mod, vuc.desc_version, tuc.desc_tramo AS inicio, tuc2.desc_tramo AS fin, tray.desc_trayecto  
 FROM reg.tbl_unidad_curricular uc INNER JOIN reg.tbl_detalles_uc duc 
 ON(duc.cod_uc = uc.cod_unidadc) INNER JOIN rec.tbl_tipounidadc tpuc 
 ON(duc.cod_tipouc = tpuc.cod_tipo_unidadc) INNER JOIN rec.tbl_modalidad_uc muc
 ON(duc.cod_modalidad = muc.cod_modalidad) INNER JOIN rec.tbl_version_malla vuc
 ON(duc.cod_version = vuc.cod_version) INNER JOIN rec.tbl_tramo tuc
 ON(duc.cod_tramoini = tuc.cod_tramo) INNER JOIN rec.tbl_tramo tuc2
 ON(duc.cod_tramofin = tuc2.cod_tramo) INNER JOIN rec.tbl_trayecto tray
 ON(tuc.cod_trayecto = tray.cod_trayecto) WHERE uc.desc_unidadc  LIKE '%$desc_buscar%';";
 
$resultado_unidadc = pg_query ($query_unidadc) or die("Error en la consulta sentencia");
$datos_unidadc= pg_num_rows($resultado_unidadc);

         for ($i=0;$i<$datos_unidadc;$i++)
         {
         $fila_unidadc = pg_fetch_array ($resultado_unidadc,$i);
          ?>
         <tr style='cursor:pointer' onclick="mostrar_uc('<?php echo $fila_unidadc[0]; ?>',
         '<?php echo $fila_unidadc[1]; ?>');">
         <td> <?php echo $fila_unidadc[0]; ?></td>
         <td> <?php echo $fila_unidadc[1]; ?></td>
         <td> <?php echo $fila_unidadc[2]; ?></td>
         <td> <?php echo $fila_unidadc[3]; ?></td>
         <td> <?php echo $fila_unidadc[4]; ?></td>
         <td> <?php echo $fila_unidadc[5]; ?></td>
         <td> <?php echo $fila_unidadc['desc_trayecto']; ?></td>
         <td> <?php echo $fila_unidadc['inicio']; ?></td>
         <td> <?php echo $fila_unidadc['fin']; ?></td>
        </tr>
       <?php } ?>
</tbody>
</table>
</body>
</html>
