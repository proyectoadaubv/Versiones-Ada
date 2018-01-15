
<?php
$user = 'UBV-INFORMATICA';
$passwd = 'ubv17';
$db = 'bd_ada';
$port = '5432';
$host = 'localhost';
$con = "host=$host port=$port dbname=$db user=$user password=$passwd";
$conexion = pg_connect($con) or die ("Error de conexion.".pg_last_error());
/*echo "Conectado..."; */
?>
