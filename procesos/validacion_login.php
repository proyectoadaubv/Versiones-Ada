<?php
  include_once('conexion-bd.php');
  
  $usuario = $_POST['user'];
  $clave = $_POST['pass'];
 
  if(empty($usuario) || empty($clave)){
  header("Location: ../index.php");
  exit();
  }
  
  $consulta_user = pg_query("SELECT * FROM reg.tbl_usuario WHERE nom_usuario ='$usuario';");
   
   if( $consultar_pass = pg_fetch_array($consulta_user)){

      if( $consultar_pass['clave_usuario'] == $clave){
      	session_start();
      	$_SESSION['usuario'] == $usuario;
      	header("Location: ../vista/principal.html");

      }else{

      	header("Location: ../index.php");
      	exit();

      }

   }else{

           	header("Location: ../index.php");
      	exit();
   }
  



?>