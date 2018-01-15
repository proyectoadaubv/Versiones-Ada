<?php
          include_once('../lib-fpdf/fpdf.php');/*Referenciar la libreria fpdf.php*/
          include_once('../procesos/conexion-bd.php');/*Llamar la conexion a la base de datos*/
          $pdf = new FPDF();/*Llamar la clase FPDF*/
          $pdf->AddPage();/*Agregar pagina*/
          $pdf->SetFont('Arial', '', 10);/*Agregar tipografia de la pagina. 3 parametros 1: Nombre 2: tipo 3:tamaño */
          /*10: ALINEAR HACIA LA DERECHA*/
          /*8: ALINEAR HACIA ABAJO*/
          /*10: x LONGITUD*/
          /*13: y ALTURA*/
          /*$pdf->Image('../img/Banner_proyecto.png' , 10 ,8, 10 , 13,'png');*/
          $pdf->Image('../img/banner.png' , 10 ,10, 185, 13,'png');/*Agregar banner*/
          $pdf->Ln(15);/*Salto de linea*/
          $pdf->Cell(153, 6, '', 0);/*Alinear haia la izquierda la descripcion de la fecha actual*/
          $pdf->SetFont('Arial', '', 9);/*Tipografia*/
          $pdf->Cell(40, 6, 'Fecha: '.date('d-m-Y').'', 0);/*Mostrar fecha*/
          $pdf->Ln(5);/*Salto de linea*/
          $pdf->SetFont('Arial', 'B', 11);/*Agregar otro tipo de fuente*/
          $pdf->Cell(45, 8, '', 0);/*Ajustar al centro el titulo, centrar con medidas*/
          $pdf->Cell(100, 8, iconv('UTF-8', 'ISO-8859-1', 'PFG - INFORMÁTICA ZULIA - MALLA CURRICULAR'), 0);/*Mostrar titulo*/
          $pdf->Ln(6);/*Salto de linea*/
          $pdf->SetFont('Arial', 'B', 9);/*Agregar otro tipo de fuente*/
          $pdf->Cell(48, 8, '', 0);/*Espacio*/
          $pdf->Cell(27, 8, 'MODALIDAD:', 0);/*Ajustar al centro el titulo de modalidad, centrar con medidas*/
          $codigo_modalidad = $_GET["modalidad"];
          $modalidad="";
          $query_modalidad="SELECT desc_mod FROM rec.tbl_modalidad_uc WHERE cod_modalidad = $codigo_modalidad";
          $resultado_modalidad = pg_query ($query_modalidad) or die("Error modalidad");
          while($fila_modalidad=pg_fetch_array($resultado_modalidad)){  
                   $modalidad = $fila_modalidad['desc_mod'];
          }
          $pdf->SetFont('Arial', '', 9);/*Agregar otro tipo de fuente*/
          $pdf->Cell(28, 8, $modalidad, 0);/*Mostrar valor modalidad*/
          $pdf->SetFont('Arial', 'B', 9);/*Agregar otro tipo de fuente*/
          $pdf->Cell(35, 8, 'VERSION MALLA:', 0);/*Titulo*/
          $version_malla="";
          $apertura="";
          $cierre="";
          $codigo_version = $_GET["version"];
          $query_detalle_malla="SELECT * FROM rec.tbl_version_malla WHERE cod_version = $codigo_version";
          $resultado_detallle_malla = pg_query ($query_detalle_malla) or die("Error version");
          while($fila_detalle_malla=pg_fetch_array($resultado_detallle_malla)){  
                   $version_malla = $fila_detalle_malla['desc_version'];
                   $apertura = implode("-", array_reverse(explode("-", $fila_detalle_malla['fecha_apertura'])));
                   $cierre = implode("-", array_reverse(explode("-", $fila_detalle_malla['fecha_cierre'])));
          }
          $pdf->SetFont('Arial', '', 9);/*Agregar otro tipo de fuente*/
          $pdf->Cell(20, 8, $version_malla, 0);/*Mostrar valor version*/
          $pdf->Ln(5);/*Salto de linea*/
          $pdf->SetFont('Arial', 'B', 9);/*Agregar otro tipo de fuente*/
          $pdf->Cell(50, 8, '', 0);/*Espacio*/
          $pdf->Cell(25, 8, 'APERTURA:', 0);/*Titulo*/
          $pdf->SetFont('Arial', '', 9);/*Agregar otro tipo de fuente*/
          $pdf->Cell(25, 8, $apertura, 0);/*Mostrar valor apertura*/
          $pdf->SetFont('Arial', 'B', 9);/*Agregar otro tipo de fuente*/
          $pdf->Cell(18, 8, 'CIERRE:', 0);/*Titulo*/
          $pdf->SetFont('Arial', '', 9);/*Agregar otro tipo de fuente*/
          $pdf->Cell(23, 8, $cierre, 0);/*Mostrar valor cierre*/
          $pdf->Ln(10);/*Salto de linea*/
          $pdf->SetFont('Arial', 'B', 8);/*Agregar otro tipo de fuente*/
          /*$pdf->Cell(ancho, altura, 'Nombre', borde);*/
          $pdf->Cell(25, 8, iconv('UTF-8', 'ISO-8859-1', 'CÓDIGO'), 1);/*Primer titulo*/
          $pdf->Cell(82, 8, iconv('UTF-8', 'ISO-8859-1', 'DESCRIPCIÓN'), 1);/*2do titulo*/
          $pdf->Cell(7, 8, 'HR', 1);/*3er titulo*/
          $pdf->Cell(15, 8, 'TRAY', 1);/*4to titulo*/
          $pdf->Cell(15, 8, 'TRAM INI', 1);/*5to titulo*/
          $pdf->Cell(15, 8, 'TRAM FIN', 1);/*6to titulo*/
          $pdf->Cell(25, 8, 'TIPO', 1);/*7to titulo*/
          $pdf->Ln(8);/*Salto de linea*/
          $pdf->SetFont('Arial', '', 8);/*Agregar otro tipo de fuente para la descripcion de cada uno de las
          unidades curriculares que se van a mostrar*/
          /*Diseñar sql de consulta*/
          $query_unidadc="SELECT uc.cod_unidadc, uc.desc_unidadc, uc.horas_uc, tpuc.tipo_uc, muc.desc_mod, vuc.desc_version, tuc.desc_tramo AS inicio, tuc2.desc_tramo AS fin, tray.desc_trayecto  
 FROM reg.tbl_unidad_curricular uc INNER JOIN reg.tbl_detalles_uc duc 
 ON(duc.cod_uc = uc.cod_unidadc) INNER JOIN rec.tbl_tipounidadc tpuc 
 ON(duc.cod_tipouc = tpuc.cod_tipo_unidadc) INNER JOIN rec.tbl_modalidad_uc muc
 ON(duc.cod_modalidad = muc.cod_modalidad) INNER JOIN rec.tbl_version_malla vuc
 ON(duc.cod_version = vuc.cod_version) INNER JOIN rec.tbl_tramo tuc
 ON(duc.cod_tramoini = tuc.cod_tramo) INNER JOIN rec.tbl_tramo tuc2
 ON(duc.cod_tramofin = tuc2.cod_tramo) INNER JOIN rec.tbl_trayecto tray
 ON(tuc.cod_trayecto = tray.cod_trayecto) WHERE vuc.cod_version =$codigo_version AND muc.cod_modalidad = $codigo_modalidad";
 
          $resultado_unidadc = pg_query ($query_unidadc) or die("Error consulta general");
          while($fila_unidadc=pg_fetch_array($resultado_unidadc)){

          $pdf->Cell(25, 8,$fila_unidadc["cod_unidadc"], 1);/*1er valor*/
          $pdf->Cell(82, 8,iconv('UTF-8', 'ISO-8859-1', $fila_unidadc['desc_unidadc']), 1);/*2do valor*/
          $pdf->Cell(7, 8,$fila_unidadc['horas_uc'], 1);/*3er valor*/
          $pdf->Cell(15, 8,$fila_unidadc['desc_trayecto'], 1);/*4to valor*/
          $pdf->Cell(15, 8,$fila_unidadc['inicio'], 1);/*5to valor*/
          $pdf->Cell(15, 8,$fila_unidadc['fin'], 1);/*6to valor*/
          $pdf->Cell(25, 8,$fila_unidadc['tipo_uc'], 1);/*7mo valor*/
          $pdf->Ln(8);/*Salto de linea*/
            
         }
         $pdf->Output();/*Mostrar el reporte*/



  ?>