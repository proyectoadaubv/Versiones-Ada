<?php
  //Archivo de conexión a la base de datos
  include_once('conexion-bd.php');


   class funciones_sql {/*apertura de la clase funciones_sql*/

/*#################################################-BUSCAR ID-#################################################*/
        function buscar_id($sql){/*apertura de la función buscar id*/

           $id;
             //Comprueba si $sql está correcto
              if (isset($sql)) {
       
                  //Ejecuta la sentencia sql enviada desde jQuery
                    $consulta = pg_query($sql);
  
                     //Obtiene la cantidad de filas que hay en la consulta
                      $filas = pg_num_rows($consulta);

                        //Si no existe devuelve 0
                         if($filas == 0) {
            
                               $id = "0";
  
                               } else {
                                 //Obtenemos el id a retornar
                                  while($fila=pg_fetch_array($consulta)){
                  
                                   $id = $fila['0'];

                          }
                       } //Fin else $filas
                   }//Fin isset $id_buscar
               //Devolvemos el id que tomará jQuery
               return $id;
            }/*cierre de la función buscar id*/

/*#################################################-BUSCAR-DATO-#################################################*/
        function busqueda_dato($sql){/*apertura de la función busqueda_dato*/

           $respuesta;
             //Comprueba si $sql está correcto
              if (isset($sql)) {
       
                  //Ejecuta la sentencia sql enviada desde jQuery
                    $consulta = pg_query($sql);
  
                     //Obtiene la cantidad de filas que hay en la consulta
                      $filas = pg_num_rows($consulta);

                        //Si no existe el valor buscado devuelve 0
                         if($filas == 0) {
            
                             $respuesta = "0";
  
                              } else {//Si existe el valor buscado devuelve 1
                              //retornar 1
                             $respuesta = "1";

                       } //Fin else $filas
                   }//Fin isset $id_buscar
               //Devolvemos una respuesta
               return $respuesta;
        }/*cierre de la función busqueda_dato id*/
 /*#################################################-INSERT-#################################################*/
          function ejecutar_sql($sql){/*apertura de la función ejecutar_sql (Para ejecutar sentecias Insert & Update)*/

                   if(isset($sql)) { 
                        //Ejecutar la sentencia insert
                   $result = pg_query($sql) or die('Error al insertar valores'.pg_last_error());
                  }
                  return 1;//Devolver respuesta
          }/*cierre de la función ejecutar_sql*/
 /*#################################################--#################################################*/

 /*#################################################-INSERT-#################################################*/
          function buscar_dato_especifico($sql, $campo){/*apertura de la función ejecutar_sql (Para ejecutar sentecias Insert & Update)*/
                $dato;
                   $consulta = pg_query($sql) or die("error: ".pg_last_error());
                    //Obtenemos el id a retornar
                     while($fila=pg_fetch_array($consulta)){
                           $dato = $fila[$campo];
                    }
                  return $dato;//Devolver respuesta
          }/*cierre de la función ejecutar_sql*/
 /*#################################################--#################################################*/

    }/*cierre de la clase funciones_sql*/
   
?>

