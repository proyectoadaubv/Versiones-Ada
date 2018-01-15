<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <script type="text/javascript" src="../js/aspecto-elementos.js"></script>
  <link rel="stylesheet" href="../css/estilo_css.css" />
  <script type="text/javascript">
   $(document).ready(function(){



   });
   function capturar_docente(cedula, nombre, apellido){

     $('#lista').text('').slideUp('fast');
     $('#cedula').text(cedula);
     $('#nombre').text(nombre);
     $('#apellido').text(apellido);
   }
  </script>
</head>
<body>
<table class="tabla_general">
   <thead>
   <th style='width:20%;'>C&eacutedula</th>
   <th style='width:40%;'>Nombre</th>
   <th style='width:40%;'>Apellido</th>
   </thead>
   <tbody>
  <?php
include_once('conexion-bd.php');
$desc_buscar=$_POST['valorBusquedaDocente'];

$query_docente="SELECT tp.ced_persona, tp.nom_persona, tp.ape_persona FROM reg.tbl_persona tp
          INNER JOIN reg.tbl_cargo_persona tcp ON(tp.ced_persona = tcp.ced_persona)
          INNER JOIN rec.tbl_cargos tc ON(tcp.cod_cargo = tc.cod_cargo) 
          INNER JOIN rec.tbl_tipo_persona ttp ON(tcp.cod_tipop = ttp.cod_tipo_persona)
           WHERE ttp.descripcion = 'DOCENTE' ";
 
$resultado_docente = pg_query ($query_docente) or die("Error en la consulta sentencia");
$datos_docente= pg_num_rows($resultado_docente);

         for ($i=0;$i<$datos_docente;$i++)
         {
         $fila_docente = pg_fetch_array ($resultado_docente,$i);
          ?>
         <tr style='cursor:pointer' onclick="capturar_docente('<?php echo $fila_docente[0]; ?>',
         '<?php echo $fila_docente[1]; ?>','<?php echo $fila_docente[2]; ?>');">
         <td> <?php echo $fila_docente[0]; ?></td>
         <td> <?php echo $fila_docente[1]; ?></td>
         <td> <?php echo $fila_docente[2]; ?></td>
        </tr>
       <?php } ?>
</tbody>
</table>
</body>
</html>
