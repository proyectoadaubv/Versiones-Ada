<?php

  include_once('funciones-sql.php');
 //Variable que recibe un ID desde jQuery
 $identificador = $_POST['id_proceso'];

switch ($identificador) {/*switch encargado de definir, cuál de las opciones está utilizando el usuario*/
    case '0':
        # code...
         seleccion_busqueda();
        break;
    case '1':
        # code...
        validacion_periodo();
        break;
    case '1.2':
        # code...
        validacion_actividades_academicas();
        break;
    case '1.3':
        # code...
        modificar_actividades_academicas();
        break;
    case '2':
        # code...
        modificar_periodo();
        break;
    case '3':
        # code...
        registrar_seccion();
        break;
    case '3.1':
        # code...
        modificar_seccion();
        break;
    case '4':
        # code...
        registrar_turno();
        break;
    case '4.1':
        # code...
        modificar_turno();
        break;
    case '9':
        # code...
        registrar_uc();
        break;
    case '10':
        # code...
        modificar_uc();
        break;
    case '11':
        # code...
        validar_persona();
        break;
    case '12':
        # code...
        modificar_persona();
        break;
    case '13':
        # code...
        registrar_trayecto();
        break;
    case '14':
        # code...
        modificar_trayecto();
        break;
    case '15':
        # code...
        registrar_tramo();
        break;
    case '16':
        # code...
        modificar_tramo();
        break;
    case '17':
        # code...
         registrar_aula();
        break;
    case '18':
        # code...
         modificar_aula();
        break;
    case '19':
        # code...
         registrar_lab();
        break;
    case '20':
        # code...
         modificar_lab();
        break;
    case '30':
        # code...
         registrar_user();
        break;
    case '31':
        # code...
         registrar_esp();
        break;
    case '31.1':
        # code...
         modificar_esp();
        break;
    case '32':
        # code...
         registrar_edif();
        break;
    case '32.1':
        # code...
         modificar_edif();
        break;
    case '33':
        # code...
         registrar_estado();
        break;
    case '33.1':
        # code...
         modificar_estado();
        break;
    case '34':
        # code...
         registrar_municipio();
        break;
    case '34.1':
        # code...
         modificar_municipio();
        break;
    case '35':
        # code...
         registrar_parroquia();
        break;
    case '35.1':
        # code...
         modificar_parroquia();
        break;
    case '36':
        # code...
         registrar_cargo();
        break;
    case '36.1':
        # code...
         modificar_cargo();
        break;
    case '37':
        # code...
         registrar_tipoper();
        break;
    case '37.1':
        # code...
         modificar_tipoper();
        break;
    case '38':
        # code...
         registrar_profesion();
        break;
    case '38.1':
        # code...
         modificar_profesion();
        break;
    case '39':
        # code...
         registrar_etapro();
        break;
    case '39.1':
        # code...
         modificar_etapro();
        break;
    case '40':
        # code...
         registrar_tiposoft();
        break;
    case '40.1':
        # code...
         modificar_tiposoft();
        break;
    case '41':
        # code...
         registrar_recursos_academicos();
        break;
    case '42':
        # code...
         modificar_recursos_academicos();
        break;


    default:
        # code...
         echo "Error";
        break;
}
 /*#################################################-BUSCAR-ID-BÚSQUEDA-#########################################*/
        function seleccion_busqueda(){//En esta funcion seleccionamos en que tabla vamos a consultar
                
                $id_recibido= $_POST['id_busqueda'];

                $id_busqueda = trim($id_recibido);//eliminar espacios vacios


                if($id_busqueda == 1){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_periodo FROM reg.tbl_periodo WHERE desc_periodo = '$dato_buscar';";
                consultar($query_buscar);

                }
                if($id_busqueda == 1.1){

                $query_buscar ="SELECT cod_periodo FROM reg.tbl_periodo WHERE estatus = 1;";
                busqueda_id($query_buscar);
                }

                if($id_busqueda == 1.4){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_actividad FROM rec.tbl_actividades_acad ta 
                INNER JOIN reg.tbl_fecha_actividad fa ON(fa.cod_actividad = ta.cod_actividad) 
                INNER JOIN reg.tbl_periodo tp ON(tp.cod_periodo = fa.cod_periodo) WHERE  desc_actividad = '$dato_buscar' AND tp.estatus = 1;";
                consultar($query_buscar);

                }
                if($id_busqueda == 3){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_seccion FROM rec.tbl_seccion WHERE desc_seccion = '$dato_buscar';";
                consultar($query_buscar);
                }
                if($id_busqueda == 4){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_turno FROM rec.tbl_turno WHERE desc_turno = '$dato_buscar';";
                consultar($query_buscar);
                }
                if($id_busqueda == 11){

                $buscar = $_POST['busqueda'];

                 $dato_buscar = trim($buscar);//eliminar espacios vacios

                   if (is_numeric($dato_buscar)) {
                   
                   $query_buscar ="SELECT ced_persona FROM reg.tbl_persona WHERE ced_persona = $dato_buscar;";
                   consultar($query_buscar);
                    
                   }else{

                   $query_buscar ="SELECT nom_persona FROM reg.tbl_persona WHERE nom_persona ='$dato_buscar';";
                   consultar($query_buscar);
                   
                   }
                }

                if($id_busqueda == 9){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT cod_unidadc FROM reg.tbl_unidad_curricular WHERE cod_unidadc = '$dato_buscar';";
                consultar($query_buscar);

                }
                if($id_busqueda == 13){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_trayecto FROM rec.tbl_trayecto WHERE desc_trayecto = '$dato_buscar';";
                consultar($query_buscar);

                }
                if($id_busqueda == 15){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_tramo FROM rec.tbl_tramo WHERE desc_tramo = '$dato_buscar';";
                consultar($query_buscar);

                }

                if($id_busqueda == 17){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT descripcion FROM rec.tbl_aula WHERE descripcion = '$dato_buscar';";
                consultar($query_buscar);

                }
                if($id_busqueda == 19){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_lab FROM rec.tbl_laboratorio WHERE desc_lab = '$dato_buscar';";
                consultar($query_buscar);

                }
                if($id_busqueda == 30){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT nom_usuario FROM reg.tbl_usuario WHERE nom_usuario = '$dato_buscar';";
                consultar($query_buscar);

                }
                if($id_busqueda == 31){

                $id_ver = $_POST['id_version'];
                $id_mod = $_POST['id_modalidad'];
                $query_buscar ="SELECT count(cod_detalle_uc) FROM reg.tbl_detalles_uc WHERE cod_version = $id_ver AND cod_modalidad =$id_mod";
                busqueda_id($query_buscar);
                }
                if($id_busqueda == 31.1){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_ubicacion FROM rec.tbl_ubicacion_esp WHERE desc_ubicacion = '$dato_buscar';";
                consultar($query_buscar);
                }

                if($id_busqueda == 32.1){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desp_espacio FROM rec.tbl_espacios_acad WHERE desp_espacio = '$dato_buscar';";
                consultar($query_buscar);
                }
                if($id_busqueda == 33){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_estado FROM rec.tbl_estado WHERE desc_estado = '$dato_buscar';";
                consultar($query_buscar);
                }
                if($id_busqueda == 34){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_municipio FROM rec.tbl_municipio WHERE desc_municipio = '$dato_buscar';";
                consultar($query_buscar);
                }
                if($id_busqueda == 35){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_parroquia FROM rec.tbl_parroquia WHERE desc_parroquia = '$dato_buscar';";
                consultar($query_buscar);
                }
                if($id_busqueda == 36){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_cargo FROM rec.tbl_cargos WHERE desc_cargo = '$dato_buscar';";
                consultar($query_buscar);
                }
                if($id_busqueda == 37){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT descripcion FROM rec.tbl_tipo_persona WHERE descripcion = '$dato_buscar';";
                consultar($query_buscar);
                }
                if($id_busqueda == 38){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_profesion FROM rec.tbl_profesion WHERE desc_profesion = '$dato_buscar';";
                consultar($query_buscar);
                }
                if($id_busqueda == 39){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_etapa_p FROM rec.tbl_etapa_proyecto WHERE desc_etapa_p = '$dato_buscar';";
                consultar($query_buscar);
                }
                if($id_busqueda == 40){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_producto FROM rec.tbl_tipo_producto WHERE desc_producto = '$dato_buscar';";
                consultar($query_buscar);
                }
                //Buscar recursos academicos
                if($id_busqueda == 41){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT sigla FROM rec.tbl_prog_acad WHERE sigla = '$dato_buscar';";
                consultar($query_buscar);
                }
                if($id_busqueda == 41.2){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_programa  FROM rec.tbl_desc_programa WHERE desc_programa = '$dato_buscar';";
                consultar($query_buscar);
                }

                if($id_busqueda == 41.3){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_componente FROM rec.tbl_componentes WHERE desc_componente = '$dato_buscar';";
                consultar($query_buscar);
                }
                if($id_busqueda == 41.4){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_dedicacion FROM rec.tbl_dedicacion_doc WHERE desc_dedicacion = '$dato_buscar';";
                consultar($query_buscar);
                }
                if($id_busqueda == 41.5){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_escalafon FROM rec.tbl_escalafon WHERE desc_escalafon = '$dato_buscar';";
                consultar($query_buscar);
                }

                if($id_busqueda == 41.6){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_tipo_tutor FROM rec.tbl_tipo_tutor WHERE desc_tipo_tutor = '$dato_buscar';";
                consultar($query_buscar);
                }
                if($id_busqueda == 41.7){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_mod FROM rec.tbl_modalidad_uc WHERE desc_mod = '$dato_buscar';";
                consultar($query_buscar);
                }
                if($id_busqueda == 41.8){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_version FROM rec.tbl_version_malla WHERE desc_version = '$dato_buscar';";
                consultar($query_buscar);

                }
                if($id_busqueda == 41.9){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_linea_est FROM rec.tbl_linea_estrategica WHERE desc_linea_est = '$dato_buscar';";
                consultar($query_buscar);
                }
                if($id_busqueda == 41.10){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_linea_inv FROM rec.tbl_linea_investigacion WHERE desc_linea_inv = '$dato_buscar';";
                consultar($query_buscar);
                }

                if($id_busqueda == 41.11){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_area_tem FROM rec.tbl_area_tematica WHERE desc_area_tem = '$dato_buscar';";
                consultar($query_buscar);
                }
                if($id_busqueda == 41.12){

                $buscar = $_POST['busqueda'];
                $dato_buscar = trim($buscar);//eliminar espacios vacios
                $query_buscar ="SELECT desc_tipo_organismo FROM rec.tbl_tipo_organismo WHERE desc_tipo_organismo = '$dato_buscar';";
                consultar($query_buscar);
                }

        }
 /*#################################################-EJECUTAR-CONSULTA-#########################################*/
        function busqueda_id($sentencia){
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                echo $resultado =   $sql->buscar_id($sentencia);
        }

 /*#################################################-EJECUTAR-CONSULTA-#########################################*/
        function consultar($sentencia){
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                echo $resultado =   $sql->busqueda_dato($sentencia);
        }
 /*#################################################-MOSTRAR-VALORES-EN-EL-FORMULARIO-######################*/
        function mostrar_formulario(){

                   $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php   
                   
                   $buscar = $_POST['busqueda'];
                   $dato_buscar = trim($buscar);//eliminar espacios vacios

                   $query_buscar ="SELECT * FROM reg.tbl_persona WHERE ced_persona = $dato_buscar;";

        }
 /*#################################################-VALIDACION-PERIODO-#########################################*/
       function validacion_periodo(){

                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php

                $query_busqueda = "SELECT * FROM reg.tbl_periodo";

                $respuesta = $sql->buscar_id($query_busqueda);

                if($respuesta != 0){

                    desactivar_periodo_viejo();/*#-PARA-DESACTIVAR-AL-PERIODO-VIEJO#*/

                }else{

                    registrar_periodo();/*#-PARA-ESTABLECER-PERIODO-POR-PRIMERA-VEZ#*/
                }
       }
 /*#################################################-VALIDAR-ACTIVIDADES-ACADEMICAS-###############################*/
       function validacion_actividades_academicas(){

                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $cod_act = $_POST['cod_actividad'];
                $act_fecha_ini = $_POST['fecha_apertura'];
                $act_fecha_fin = $_POST['fecha_cierre'];
                $cod_p = $_POST['cod_periodo'];

                $query = "INSERT INTO reg.tbl_fecha_actividad(cod_actividad, fecha_apertura, fecha_cierre, cod_periodo)
                 VALUES($cod_act,'$act_fecha_ini', '$act_fecha_fin', $cod_p);";

                $sql->ejecutar_sql($query);
       }
 /*#################################################-MODIFICAR-ACTIVIDADES-ACADEMICAS-###############################*/
       function modificar_actividades_academicas(){
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $cod_act = $_POST['cod_actividad'];
                $act_fecha_ini = $_POST['fecha_apertura'];
                $act_fecha_fin = $_POST['fecha_cierre'];
                $cod_p = $_POST['cod_periodo'];
                $cod_condicion = $_POST['cod_condicion'];

                $query = "UPDATE reg.tbl_fecha_actividad SET cod_actividad=$cod_act,
                fecha_apertura='$act_fecha_ini',
                 fecha_cierre='$act_fecha_fin',
                  cod_periodo=$cod_p WHERE cod_actividad= $cod_condicion";
                $sql->ejecutar_sql($query);

       }

 /*#################################################-ESTABLECER-PERIODO-#########################################*/
        function registrar_periodo(){

                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $periodo_desc = $_POST['desc_periodo'];
                $periodo_fecha_ini = $_POST['fecha_inicio_p'];
                $periodo_fecha_fin = $_POST['fecha_cierre_p'];
                $periodo_tipo = $_POST['tipo_periodo'];

                $query = "INSERT INTO reg.tbl_periodo(desc_periodo, fecha_inicio, fecha_cierre, tipo_periodo, estatus)
                 VALUES('$periodo_desc','$periodo_fecha_ini', '$periodo_fecha_fin', $periodo_tipo, 1);";

                $sql->ejecutar_sql($query);
        }

 /*#################################################-MODIFICAR-ESTATUS-PERIODO-ACTUAL-#########################################*/
        function desactivar_periodo_viejo(){

                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php

                $query = "SELECT cod_periodo FROM reg.tbl_periodo ORDER BY cod_periodo DESC LIMIT 1";
                
                $codigo_periodo_viejo = $sql->buscar_id($query);

                $query = "UPDATE reg.tbl_periodo SET estatus=0 WHERE cod_periodo=$codigo_periodo_viejo";
                
                $sql->ejecutar_sql($query);
                nuevo_periodo();

        }
 /*#################################################-NUEVO-PERIODO-#########################################*/
        function nuevo_periodo(){

                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $periodo_desc = $_POST['desc_periodo'];
                $periodo_fecha_ini = $_POST['fecha_inicio_p'];
                $periodo_fecha_fin = $_POST['fecha_cierre_p'];
                $periodo_tipo = $_POST['tipo_periodo'];
                $query = "INSERT INTO reg.tbl_periodo(desc_periodo, fecha_inicio, fecha_cierre, tipo_periodo, estatus)
                 VALUES('$periodo_desc','$periodo_fecha_ini', '$periodo_fecha_fin', $periodo_tipo, 1);";
                $sql->ejecutar_sql($query);
        }

 /*#################################################-MODIFICAR-PERIODO-#########################################*/
        function modificar_periodo(){

                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $periodo_cod = $_POST['cod_periodo'];
                $periodo_desc = $_POST['desc_periodo'];
                $periodo_fecha_ini = $_POST['fecha_inicio_p'];
                $periodo_fecha_fin = $_POST['fecha_cierre_p'];
                $periodo_tipo = $_POST['tipo_periodo'];

                $query = "UPDATE reg.tbl_periodo SET desc_periodo='$periodo_desc',
                fecha_inicio='$periodo_fecha_ini',
                 fecha_cierre='$periodo_fecha_fin',
                  tipo_periodo=$periodo_tipo,
                   estatus=1 WHERE cod_periodo=$periodo_cod";
                
                $sql->ejecutar_sql($query);

        }

        function registrar_esp(){
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $ubicacion_esp = $_POST['ubicacion_esp'];
                $direccion_esp = $_POST['direccion_esp'];
                $query = "INSERT INTO rec.tbl_ubicacion_esp(desc_ubicacion, direccion_esp) VALUES('$ubicacion_esp', '$direccion_esp');";
                $sql->ejecutar_sql($query);
        }
         function modificar_esp(){
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $ubicacion = $_POST['ubicacion_esp'];
                $direccion = $_POST['direccion_esp'];
                $ubic_cod = $_POST['cod_esp'];

                $query = "UPDATE rec.tbl_ubicacion_esp SET desc_ubicacion='$ubicacion',
                  direccion_esp='$direccion' WHERE cod_ubicacion=$ubic_cod";
                
                $sql->ejecutar_sql($query);
         }

        function registrar_edif(){

                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $ubicacion_cod = $_POST['cod_ubicacion'];
                $desc_edif = $_POST['desc_edif'];
                $query = "INSERT INTO rec.tbl_espacios_acad(cod_ubicacion, desp_espacio) 
                VALUES($ubicacion_cod, '$desc_edif');";
                $sql->ejecutar_sql($query);
        }
         function modificar_edif(){

                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $ubicacion_cod = $_POST['cod_ubicacion'];
                $desc_edif = $_POST['desc_edif'];
                $cod_edif = $_POST['cod_edif'];

                $query = "UPDATE rec.tbl_espacios_acad SET cod_ubicacion=$ubicacion_cod,
                   desp_espacio='$desc_edif' WHERE cod_espacio=$cod_edif";
                $sql->ejecutar_sql($query);
         }
/*#################################################-INSERTAR-AULA-#################################################*/
        function registrar_aula(){

                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $identificador = $_POST['id_proceso'];
                $desc_aula = $_POST['desc_aula'];
                $cap = $_POST['cap_aula'];
                $id_edificio = $_POST['id_edificio_aula'];
                $query = "INSERT INTO rec.tbl_aula(descripcion, capacidad) VALUES('$desc_aula', $cap);";  
                $sql->ejecutar_sql($query);
                registrar_espacios_asignados($identificador, $desc_aula, $id_edificio);
         }
 /*#################################################-MODIFICAR-AULA-#################################################*/
        function modificar_aula(){
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $cod_aula = $_POST['cod_aula'];
                $identificador = $_POST['id_proceso'];
                $desc_aula = $_POST['desc_aula'];
                $cap = $_POST['cap_aula'];
                $id_edificio = $_POST['id_edificio_aula'];
                $query = "UPDATE rec.tbl_aula SET descripcion='$desc_aula', capacidad=$cap WHERE cod_aula=$cod_aula";  
                $sql->ejecutar_sql($query);

                modificar_espacios_asignadosAULA($identificador, $id_edificio, $cod_aula);
         }
 /*#################################################-INSERTAR-LABORATORIOS-#######################################*/
        function registrar_lab(){

                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $identificador = $_POST['id_proceso'];
                $desc_lab = $_POST['desc_lab'];
                $cap_lab = $_POST['cap_lab'];
                $cant_equipos = $_POST['cant_eq_lab'];
                $id_edificio = $_POST['id_edificio_lab'];
                $query = "INSERT INTO rec.tbl_laboratorio(desc_lab, cap_lab, equipos_lab) VALUES('$desc_lab', $cap_lab, $cant_equipos);";  
                $sql->ejecutar_sql($query);
                registrar_espacios_asignadosLAB($identificador, $desc_lab, $id_edificio);

         }
 /*#################################################-MODIFICAR-LABORATORIOS-#######################################*/
        function modificar_lab(){
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                
                $identificador = $_POST['id_proceso'];
                $desc_lab = $_POST['desc_lab'];
                $cap_lab = $_POST['cap_lab'];
                $cant_equipos = $_POST['cant_eq_lab'];
                $cod_lab = $_POST['cod_lab'];
                $id_edificio_lab = $_POST['id_edificio_lab'];

                $query = "UPDATE rec.tbl_laboratorio SET desc_lab='$desc_lab', cap_lab=$cap_lab, equipos_lab=$cant_equipos WHERE cod_lab=$cod_lab";
                $sql->ejecutar_sql($query);
                modificar_espacios_asignadosLAB($identificador, $id_edificio_lab, $cod_lab); 
         }
 /*#################################################-ESPACIOS-AULA-#################################################*/
        function registrar_espacios_asignados($identificador, $desc_aula,  $cod_edif){

                if ( $identificador == 17) {//SI ES 17 [REGISTRAR ESPACIO DE AULA]
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query_buscar_id = "SELECT cod_aula FROM rec.tbl_aula WHERE descripcion = '$desc_aula';";
                $cod_aula =   $sql->buscar_id($query_buscar_id);
                $query = "INSERT INTO reg.tbl_espacios_asg(cod_edificio, cod_aula, cod_lab) VALUES($cod_edif, $cod_aula, 1);";
                $sql->ejecutar_sql($query);   
                }
        }
 /*#################################################-ESPACIOS-LAB-#################################################*/
        function registrar_espacios_asignadosLAB($identificador, $desc_lab,  $cod_edif){

               if ( $identificador == 19) {//DE LO CONTRARIO SI ES 19 [REGISTRAR ESPACIO DE LABORATORIO]
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query_buscar_id_lab = "SELECT cod_lab FROM rec.tbl_laboratorio WHERE desc_lab = '$desc_lab';";
                $cod_edif = $_POST['id_edificio_lab'];//recibido directamente desde au_validaciones.js
                $cod_lab =  $sql->buscar_id($query_buscar_id_lab);
                $query = "INSERT INTO reg.tbl_espacios_asg(cod_edificio, cod_aula, cod_lab) VALUES($cod_edif, 1, $cod_lab);";
                $sql->ejecutar_sql($query);
              }
        }
 /*#################################################-ESPACIOS-MODIFICAR-AULA-##########################################*/ 
             function modificar_espacios_asignadosAULA($identificador, $id_edificio_aula, $cod_aula){

                if ( $identificador == 18) {//SI ES 18 [MODIFICAR ESPACIO DE AULA]

                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php

                $query = "UPDATE reg.tbl_espacios_asg SET cod_edificio=$id_edificio_aula, cod_aula=$cod_aula, cod_lab=1 WHERE cod_aula=$cod_aula";

                $sql->ejecutar_sql($query);
                    
                }
             }
 /*#################################################-ESPACIOS-MODIFICAR-LAB-##########################################*/ 
             function modificar_espacios_asignadosLAB($identificador, $id_edificio_lab, $cod_lab){

                if ( $identificador == 18){//SI ES 20 [MODIFICAR ESPACIO DE LABORATORIO]

                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php

                $query = "UPDATE reg.tbl_espacios_asg SET cod_edificio=$id_edificio_lab, cod_aula=1, cod_lab=$cod_lab WHERE cod_lab=$cod_lab";

                $sql->ejecutar_sql($query);
                }
             }

 /*#################################################-REGISTRAR-PERSONA-############################################*/
        function validar_persona(){
                  registrar_persona();
              
        }
        function registrar_persona(){

                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php

                $persona_ced = $_POST['ced_persona'];
                $persona_nom = $_POST['nom_persona'];
                $persona_ape = $_POST['ape_persona'];
                $persona_sexo = $_POST['sexo_persona'];
                $persona_fn = $_POST['fn_persona'];
                $persona_dir = $_POST['dir_persona'];
                $persona_parroq = $_POST['pa_persona'];

                $query_datos = "INSERT INTO reg.tbl_persona(ced_persona, nom_persona, ape_persona, sexo_persona, fn_persona, direccion, cod_parroquia)
                 VALUES($persona_ced,'$persona_nom', '$persona_ape', '$persona_sexo', '$persona_fn', '$persona_dir', $persona_parroq);";
                $sql->ejecutar_sql($query_datos);
                registrar_recursos_p();

        }
 /*###################################-REGISTRAR-RECURSOS-PERSONA-############################################*/
        function registrar_recursos_p(){

                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php

                $tipo= $_POST['tipo'];
                $persona_ced = $_POST['ced_persona'];
                $persona_cargo = $_POST['cargo_persona'];
                $persona_tipo = $_POST['cod_tipo_persona'];
                $persona_prof = $_POST['profesion_persona'];
                
                $persona_telf = $_POST['telefono_persona'];
                $persona_correo = $_POST['correo_persona'];

                $vota = $_POST['vota'];
                $centro_vot = $_POST['centro-vot'];
                $dir_centro_vot = $_POST['dir-centro-vot'];
                $id_estado_votacion = $_POST['id_estado_votacion'];

                $discapacidad = $_POST['discapacidad'];
                $tipo_discapacidad = $_POST['tipo-discapacidad'];
                $desc_discapacidad = $_POST['desc-discapacidad'];

                $habilidades= $_POST['habilidades'];
                $tipo_habilidad = $_POST['tipo-habilidad'];
                $desc_habilidad= $_POST['desc-habilidad'];


                $fecha_egreso_bachiller= $_POST['fecha-egreso'];
                $institu_bachiller= $_POST['institu-bachiller'];
                $titulo_obtenido = $_POST['titulo-obtenido'];

                $beca = $_POST['beca'];
                $espacio= $_POST['desc-espacio-asg'];
                $dias_labor= $_POST['dias_labor'];
                $actividad = $_POST['desc-act-becado'];
                $horas= $_POST['horas-dia-labor'];

                if( $vota  == 1){

                $query_vota = "INSERT INTO reg.tbl_inf_electoral(ced_persona, centro_votacion, direccion_centro_votacion, cod_estado)
                 VALUES($persona_ced, '$centro_vot', '$dir_centro_vot', $id_estado_votacion);";
                $sql->ejecutar_sql($query_vota);

                }

                if( $discapacidad == 1){

                $query_discapacidad = "INSERT INTO reg.tbl_discapacidad(ced_persona, tipo_discapacidad, desc_discapacidad)
                 VALUES($persona_ced, '$tipo_discapacidad', '$desc_discapacidad');";
                $sql->ejecutar_sql($query_discapacidad);
                
                }

                if( $habilidades == 1){

                $query_habilidades = "INSERT INTO reg.tbl_habilidades(ced_persona, tipo_habilidad, descripcion_habilidad)
                 VALUES($persona_ced, '$tipo_habilidad', '$desc_habilidad');";
                $sql->ejecutar_sql($query_habilidades);
               
                }
                if( $tipo == 'ESTUDIANTE'){

                $query_info_bachiller = "INSERT INTO reg.tbl_inf_bachillerato(ced_persona, anio_egreso, institucion, titulo_obtenido)
                 VALUES($persona_ced, '$fecha_egreso_bachiller', '$institu_bachiller', '$titulo_obtenido');";
                $sql->ejecutar_sql($query_info_bachiller);
               
                }

                if( $beca == 1){

                $query_becado = "INSERT INTO reg.tbl_inf_becado(ced_persona, espacio_asg, dias_labor, horas_dia, actividad_beca)
                 VALUES($persona_ced, '$espacio', '$dias_labor', $horas,'$actividad');";
                $sql->ejecutar_sql($query_becado);
               
                }

                $query_cargo = "INSERT INTO reg.tbl_cargo_persona(ced_persona, cod_cargo, cod_tipop, cod_profesion)
                 VALUES($persona_ced, $persona_cargo, $persona_tipo, $persona_prof);";
                $sql->ejecutar_sql($query_cargo);                

                $query_telefono = "INSERT INTO reg.tbl_telefono(ced_persona, desc_telefono)
                 VALUES($persona_ced, '$persona_telf');";
                $sql->ejecutar_sql($query_telefono);

                $query_correo = "INSERT INTO reg.tbl_correo(ced_persona, desc_correo)
                 VALUES($persona_ced, '$persona_correo');";
                $sql->ejecutar_sql($query_correo);

        }
 /*#################################################-MODIFICAR-PERSONA-#############################################*/
        function modificar_persona(){

                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php

                $persona_ced = $_POST['ced_persona'];
                $persona_nom = $_POST['nom_persona'];
                $persona_ape = $_POST['ape_persona'];
                $persona_sexo = $_POST['sexo_persona'];
                $persona_fn = $_POST['fn_persona'];
                $persona_dir = $_POST['dir_persona'];
                $persona_parroq = $_POST['pa_persona'];

                $query_datos = "UPDATE reg.tbl_persona SET nom_persona='$persona_nom', ape_persona='$persona_ape', sexo_persona='$persona_sexo',
                  fn_persona='$persona_fn', direccion='$persona_dir', cod_parroquia=$persona_parroq WHERE ced_persona=$persona_ced";

                $sql->ejecutar_sql($query_datos);
                modificar_recursos_p();

        }
 /*###################################-MODIFICAR-RECURSOS-PERSONA-############################################*/
        function modificar_recursos_p(){

                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $tipo= $_POST['tipo'];
                $persona_ced = $_POST['ced_persona'];
                $persona_cargo = $_POST['cargo_persona'];
                $persona_tipo = $_POST['cod_tipo_persona'];
                $persona_prof = $_POST['profesion_persona'];
                
                $persona_telf = $_POST['telefono_persona'];
                $persona_correo = $_POST['correo_persona'];

                $vota = $_POST['vota'];
                $centro_vot = $_POST['centro-vot'];
                $dir_centro_vot = $_POST['dir-centro-vot'];
                $id_estado_votacion = $_POST['id_estado_votacion'];

                $discapacidad = $_POST['discapacidad'];
                $tipo_discapacidad = $_POST['tipo-discapacidad'];
                $desc_discapacidad = $_POST['desc-discapacidad'];

                $habilidades= $_POST['habilidades'];
                $tipo_habilidad = $_POST['tipo-habilidad'];
                $desc_habilidad= $_POST['desc-habilidad'];

                $fecha_egreso_bachiller= $_POST['fecha-egreso'];
                $institu_bachiller= $_POST['institu-bachiller'];
                $titulo_obtenido = $_POST['titulo-obtenido'];

                $beca = $_POST['beca'];
                $espacio= $_POST['desc-espacio-asg'];
                $dias_labor = $_POST['dias_labor'];
                $horas= $_POST['horas-dia-labor'];
                $actividad = $_POST['desc-act-becado'];

                if( $vota  == 1){

                 $persona_vota =  $sql->busqueda_dato("SELECT * FROM reg.tbl_inf_electoral inf_elc INNER JOIN reg.tbl_persona tp 
                 ON(inf_elc.ced_persona  = tp.ced_persona) WHERE tp.ced_persona = $persona_ced");
                if($persona_vota != 0){
   
                $query_vota = "UPDATE reg.tbl_inf_electoral SET centro_votacion='$centro_vot', direccion_centro_votacion='$dir_centro_vot', cod_estado= $id_estado_votacion WHERE ced_persona = $persona_ced";
                $sql->ejecutar_sql($query_vota);

                }else{

                $query_vota = "INSERT INTO reg.tbl_inf_electoral(ced_persona, centro_votacion, direccion_centro_votacion, cod_estado)
                 VALUES($persona_ced, '$centro_vot', '$dir_centro_vot', $id_estado_votacion);";
                $sql->ejecutar_sql($query_vota);
                }
                }

                if( $discapacidad == 1){

                $persona_discapacidad =  $sql->busqueda_dato("SELECT * FROM reg.tbl_persona tp INNER JOIN reg.tbl_discapacidad dis ON(dis.ced_persona = tp.ced_persona) WHERE tp.ced_persona = $persona_ced");

                if( $persona_discapacidad != 0 ){
                $query_discapacidad = "UPDATE reg.tbl_discapacidad SET tipo_discapacidad='$tipo_discapacidad', desc_discapacidad='$desc_discapacidad' WHERE ced_persona = $persona_ced";
                $sql->ejecutar_sql($query_discapacidad);
                
                }else{
                $query_discapacidad = "INSERT INTO reg.tbl_discapacidad(ced_persona, tipo_discapacidad, desc_discapacidad)
                 VALUES($persona_ced, '$tipo_discapacidad', '$desc_discapacidad');";
                $sql->ejecutar_sql($query_discapacidad);
                }

               }

                if( $habilidades == 1){
            
                 $persona_habilidades =  $sql->busqueda_dato("SELECT * FROM reg.tbl_persona tp  INNER JOIN reg.tbl_habilidades hab ON(hab.ced_persona = tp.ced_persona) WHERE tp.ced_persona = $persona_ced");
                 if( $persona_habilidades!= 0 ){

                   $query_habilidades = "UPDATE reg.tbl_habilidades SET tipo_habilidad='$tipo_habilidad', descripcion_habilidad='$desc_habilidad' WHERE ced_persona = $persona_ced";
                   $sql->ejecutar_sql($query_habilidades);

                 }else{
                
                $query_habilidades = "INSERT INTO reg.tbl_habilidades(ced_persona, tipo_habilidad, descripcion_habilidad)
                 VALUES($persona_ced, '$tipo_habilidad', '$desc_habilidad');";
                $sql->ejecutar_sql($query_habilidades);
                
                 }
                }

                if( $tipo == 'ESTUDIANTE'){

                 $becado= $sql->busqueda_dato("SELECT * FROM reg.tbl_persona tp INNER JOIN reg.tbl_inf_becado infbeca ON(infbeca.ced_persona = tp.ced_persona) WHERE tp.ced_persona = $persona_ced");

                if( $becado != 0 ){

                $query_becado = "UPDATE reg.tbl_inf_becado SET espacio_asg = '$espacio', dias_labor='$dias_labor', horas_dia=$horas, actividad_beca='$actividad' WHERE ced_persona = $persona_ced";
                $sql->ejecutar_sql($query_becado);
               
                }else{
                   $query_becado = "INSERT INTO reg.tbl_inf_becado(ced_persona, espacio_asg, dias_labor, horas_dia, actividad_beca)
                    VALUES($persona_ced, '$espacio', '$dias_labor', $horas,'$actividad');";
                    $sql->ejecutar_sql($query_becado);
                } 
               }

                $query_cargo = "UPDATE reg.tbl_cargo_persona SET cod_cargo=$persona_cargo,
                 cod_tipop=$persona_tipo, cod_profesion=$persona_prof WHERE ced_persona=$persona_ced";
                $sql->ejecutar_sql($query_cargo);                

                $query_telefono = "UPDATE reg.tbl_telefono SET desc_telefono='$persona_telf' WHERE ced_persona=$persona_ced";
                $sql->ejecutar_sql($query_telefono);

                $query_correo = "UPDATE reg.tbl_correo SET desc_correo='$persona_correo' WHERE ced_persona=$persona_ced";
                $sql->ejecutar_sql($query_correo);
        }  

 /*#################################################-REGISTRAR-UC-##########################################*/ 
            function registrar_uc(){
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $uc_cod = $_POST['cod_uc'];
                $uc_desc = $_POST['desc_uc'];
                $uc_id_tramini= $_POST['id_tramoini'];
                $uc_id_tramfin = $_POST['id_tramofin'];
                $uc_id_tipouc = $_POST['id_tipouc'];
                $uc_horas = $_POST['horas_uc'];
                $uc_modalidad = $_POST['modalidad'];
                $uc_version = $_POST['version'];

                $query_uc = "INSERT INTO reg.tbl_unidad_curricular(cod_unidadc, desc_unidadc, horas_uc)
                 VALUES('$uc_cod', '$uc_desc', $uc_horas);";

                $query_detalles = "INSERT INTO reg.tbl_detalles_uc(cod_uc, cod_tipouc, cod_modalidad, cod_version, cod_tramoini, cod_tramofin)
                 VALUES('$uc_cod', $uc_id_tipouc, $uc_modalidad, $uc_version, $uc_id_tramini, $uc_id_tramfin);";
                $sql->ejecutar_sql($query_uc);
                $sql->ejecutar_sql($query_detalles);
           }
 /*#################################################-MODIFICAR-UC-##########################################*/ 
            function modificar_uc(){
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $uc_cod = $_POST['cod_uc'];
                $uc_desc = $_POST['desc_uc'];
                $uc_id_tray = $_POST['id_trayecto'];
                $uc_id_tramini= $_POST['id_tramoini'];
                $uc_id_tramfin = $_POST['id_tramofin'];
                $uc_id_tipouc = $_POST['id_tipouc'];
                $uc_horas = $_POST['horas_uc'];
                $uc_cod_estatico = $_POST['cod_estatico_uc'];
                $uc_modalidad = $_POST['modalidad'];
                $uc_version = $_POST['version'];

                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query_uc = "UPDATE reg.tbl_unidad_curricular SET cod_unidadc='$uc_cod', desc_unidadc='$uc_desc'
                , horas_uc=$uc_horas  WHERE cod_unidadc='$uc_cod_estatico'";

                $detalles_uc = "UPDATE reg.tbl_detalles_uc SET cod_uc='$uc_cod'
                , cod_tipouc=$uc_id_tipouc, cod_modalidad=$uc_modalidad
                , cod_version=$uc_version, cod_tramoini=$uc_id_tramini
                , cod_tramofin=$uc_id_tramfin WHERE cod_unidadc='$uc_cod_estatico'";

                $sql->ejecutar_sql($query_uc);
                $sql->ejecutar_sql($detalles_uc);

            }
 /*#################################################-REGISTRAR-TRAYECTO-##########################################*/
            function registrar_trayecto(){

                $desc_trayecto = $_POST['desc_trayecto'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "INSERT INTO rec.tbl_trayecto(desc_trayecto) VALUES('$desc_trayecto');";
                $sql->ejecutar_sql($query);
            }
/*#################################################-MODIFICAR-TRAYECTO-##########################################*/
            function modificar_trayecto(){

                $desc_trayecto = $_POST['desc_trayecto'];
                $cod_estatico_tray = $_POST['cod_tray_estatico'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "UPDATE rec.tbl_trayecto SET desc_trayecto='$desc_trayecto' WHERE cod_trayecto=$cod_estatico_tray";  
                $sql->ejecutar_sql($query);                
            }
 /*#################################################-REGISTRAR-TRAMO-##########################################*/
            function registrar_tramo(){
                $desc_tramo = $_POST['desc_tram'];
                $cod_tray = $_POST['cod_trayecto'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "INSERT INTO rec.tbl_tramo(desc_tramo, cod_trayecto) VALUES($desc_tramo, $cod_tray);";
                $sql->ejecutar_sql($query);
            }
/*#################################################-MODIFICAR-TRAMO-##########################################*/
            function modificar_tramo(){

                $desc_tramo = $_POST['desc_tram'];
                $cod_tray = $_POST['cod_trayecto'];
                $cod_estatico_tramo = $_POST['cod_tram_estatico'];

                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "UPDATE rec.tbl_tramo SET desc_tramo=$desc_tramo, cod_trayecto=$cod_tray
                 WHERE cod_tramo=$cod_estatico_tramo";  
                $sql->ejecutar_sql($query);  
            }
 /*#################################################-REGISTRAR-SECCION-##########################################*/
            function registrar_seccion(){

                $desc = $_POST['desc_seccion'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "INSERT INTO rec.tbl_seccion(desc_seccion) VALUES($desc);";
                $sql->ejecutar_sql($query);
            }
/*#################################################-MODIFICAR-SECCION-##########################################*/
            function modificar_seccion(){

                $desc = $_POST['desc_seccion'];
                $cod = $_POST['cod_seccion_estatico'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "UPDATE rec.tbl_seccion SET desc_seccion='$desc' WHERE cod_seccion=$cod";  
                $sql->ejecutar_sql($query);                
            }

 /*#################################################-REGISTRAR-TURNO-##########################################*/
            function registrar_turno(){

                $desc = $_POST['desc'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "INSERT INTO rec.tbl_turno(desc_turno) VALUES('$desc');";
                $sql->ejecutar_sql($query);
            }
/*#################################################-MODIFICAR-TURNO-##########################################*/
            function modificar_turno(){

                $desc = $_POST['desc'];
                $cod = $_POST['cod'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "UPDATE rec.tbl_turno SET desc_turno='$desc' WHERE cod_turno=$cod";  
                $sql->ejecutar_sql($query);                
            }

 /*#################################################-REGISTRAR-ESTADO-##########################################*/
            function registrar_estado(){

                $desc = $_POST['desc'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "INSERT INTO rec.tbl_estado(desc_estado) VALUES('$desc');";
                $sql->ejecutar_sql($query);
            }
/*#################################################-MODIFICAR-ESTADO-##########################################*/
            function modificar_estado(){

                $desc = $_POST['desc'];
                $cod = $_POST['cod'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "UPDATE rec.tbl_estado SET desc_estado='$desc' WHERE cod_estado=$cod";  
                $sql->ejecutar_sql($query);                
            }

 /*#################################################-REGISTRAR-MUNICIPIO-##########################################*/
            function registrar_municipio(){

                $desc = $_POST['desc'];
                $cod_estado = $_POST['cod_estado'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "INSERT INTO rec.tbl_municipio(desc_municipio, cod_estado) VALUES('$desc',$cod_estado);";
                $sql->ejecutar_sql($query);
            }
/*#################################################-MODIFICAR-MUNICIPIO-##########################################*/
            function modificar_municipio(){

                $desc = $_POST['desc'];
                $cod_estado = $_POST['cod_estado'];
                $cod = $_POST['cod'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "UPDATE rec.tbl_municipio SET desc_municipio='$desc', cod_estado=$cod_estado WHERE cod_municipio=$cod;";  
                $sql->ejecutar_sql($query);                
            }

 /*#################################################-REGISTRAR-PARROQUIA-##########################################*/
            function registrar_parroquia(){

                $desc = $_POST['desc'];
                $cod_municipio = $_POST['cod_municipio'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "INSERT INTO rec.tbl_parroquia(desc_parroquia, cod_municipio) VALUES('$desc',$cod_municipio);";
                $sql->ejecutar_sql($query);
            }
/*#################################################-MODIFICAR-PARROQUIA-##########################################*/
            function modificar_parroquia(){

                $desc = $_POST['desc'];
                $cod_municipio = $_POST['cod_municipio'];
                $cod = $_POST['cod'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "UPDATE rec.tbl_parroquia SET desc_parroquia='$desc', cod_municipio=$cod_municipio WHERE cod_parroquia=$cod;";  
                $sql->ejecutar_sql($query);                
            }
 /*#################################################-REGISTRAR-CARGO-##########################################*/
            function registrar_cargo(){

                $desc = $_POST['desc'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "INSERT INTO rec.tbl_cargos(desc_cargo) VALUES('$desc');";
                $sql->ejecutar_sql($query);
            }
/*#################################################-MODIFICAR-CARGO-##########################################*/
            function modificar_cargo(){

                $desc = $_POST['desc'];
                $cod = $_POST['cod'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "UPDATE rec.tbl_cargos SET desc_cargo='$desc' WHERE cod_cargo=$cod;";  
                $sql->ejecutar_sql($query);                
            }
 /*#################################################-REGISTRAR-TIPO-PERSONA##########################################*/
            function registrar_tipoper(){

                $desc = $_POST['desc'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "INSERT INTO rec.tbl_tipo_persona(descripcion) VALUES('$desc');";
                $sql->ejecutar_sql($query);
            }
/*#################################################-MODIFICAR-TIPO-PERSONA-##########################################*/
            function modificar_tipoper(){

                $desc = $_POST['desc'];
                $cod = $_POST['cod'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "UPDATE rec.tbl_tipo_persona SET descripcion='$desc' WHERE cod_tipo_persona=$cod;";  
                $sql->ejecutar_sql($query);                
            }

 /*#################################################-REGISTRAR-PROFESION##########################################*/
            function registrar_profesion(){

                $desc = $_POST['desc'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "INSERT INTO rec.tbl_profesion(desc_profesion) VALUES('$desc');";
                $sql->ejecutar_sql($query);
            }
/*#################################################-MODIFICAR-PROFESION-##########################################*/
            function modificar_profesion(){

                $desc = $_POST['desc'];
                $cod = $_POST['cod'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "UPDATE rec.tbl_profesion SET desc_profesion='$desc' WHERE cod_profesion=$cod;";  
                $sql->ejecutar_sql($query);                
            }
 /*#################################################-REGISTRAR-ETAPAS-PROYECTO##########################################*/
            function registrar_etapro(){

                $desc = $_POST['desc'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "INSERT INTO rec.tbl_etapa_proyecto(desc_etapa_p) VALUES('$desc');";
                $sql->ejecutar_sql($query);
            }
/*#################################################-MODIFICAR-ETAPAS-PROYECTO-##########################################*/
            function modificar_etapro(){

                $desc = $_POST['desc'];
                $cod = $_POST['cod'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "UPDATE rec.tbl_etapa_proyecto SET desc_etapa_p='$desc' WHERE cod_etapa_proyecto=$cod;";  
                $sql->ejecutar_sql($query);                
            }
 /*#################################################-REGISTRAR-TIPOS-SOFTWARE##########################################*/
            function registrar_tiposoft(){

                $desc = $_POST['desc'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "INSERT INTO rec.tbl_tipo_producto(desc_producto) VALUES('$desc');";
                $sql->ejecutar_sql($query);
            }
/*#################################################-MODIFICAR-TIPOS-SOFTWARE-##########################################*/
            function modificar_tiposoft(){

                $desc = $_POST['desc'];
                $cod = $_POST['cod'];
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "UPDATE rec.tbl_tipo_producto SET desc_producto='$desc' WHERE cod_tipo_producto=$cod;";  
                $sql->ejecutar_sql($query);                
            }

 /*#################################################-REGISTRAR-RECURSOS-ACADEMICOS-################################*/
            function registrar_recursos_academicos(){
                
                $opcion = $_POST['opcion'];
                $desc = $_POST['desc'];
                $desc2 = $_POST['desc2'];
                $agregado = $_POST['agregado'];

                if( $opcion == 1){

                    registrar("rec.tbl_prog_acad", "sigla, descripcion", "'$desc','$agregado'");
                }
                if( $opcion == 2){

                    registrar("rec.tbl_desc_programa","desc_programa, cod_programa_acad", "'$desc',$agregado");
                }
                if( $opcion == 3){

                    registrar("rec.tbl_componentes","desc_componente, hora_componente", "'$desc',$agregado");
                }
                if( $opcion == 4){

                    registrar("rec.tbl_dedicacion_doc","desc_dedicacion", "'$desc'");
                } 
                if( $opcion == 5){

                    registrar("rec.tbl_escalafon","desc_escalafon", "'$desc'");
                }
                if( $opcion == 6){

                    registrar("rec.tbl_tipo_tutor","desc_tipo_tutor", "'$desc'");
                }
                if( $opcion == 7){

                    registrar("rec.tbl_modalidad_uc","desc_mod", "'$desc'");
                }

                if( $opcion == 8){

                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query_busqueda = "SELECT * FROM rec.tbl_version_malla";

                $respuesta = $sql->buscar_id($query_busqueda);

                if($respuesta != 0){
                /*#-PARA-DESACTIVAR-VERSION-VIEJO#*/
                $query = "SELECT cod_version FROM rec.tbl_version_malla ORDER BY cod_version DESC LIMIT 1";
                
                $codigo_version_viejo = $sql->buscar_id($query);

                $query_establecer = "UPDATE rec.tbl_version_malla SET estatus=0 WHERE cod_version=$codigo_version_viejo";
                
                $sql->ejecutar_sql($query_establecer);
                registrar("rec.tbl_version_malla","desc_version, fecha_apertura, fecha_cierre, estatus", "'$desc','$desc2','$agregado',1");
                 
                }else{
                 /*#-PARA-ESTABLECER-VERSION-POR-PRIMERA-VEZ#*/
                 registrar("rec.tbl_version_malla","desc_version, fecha_apertura, fecha_cierre, estatus", "'$desc','$desc2','$agregado',1");
                }
               }

                if( $opcion == 9){

                    registrar("rec.tbl_linea_estrategica","desc_linea_est", "'$desc'");
                }
                if( $opcion == 10){

                    registrar("rec.tbl_linea_investigacion","desc_linea_inv", "'$desc'");
                }
                if( $opcion == 11){

                    registrar("rec.tbl_area_tematica","desc_area_tem", "'$desc'");
                }
                if( $opcion == 12){

                    registrar("rec.tbl_tipo_organismo","desc_tipo_organismo", "'$desc'");
                }
            }
            /*#################################################-REGISTRAR-################################*/
            function registrar($tabla, $campo, $valor){
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "INSERT INTO $tabla($campo) VALUES($valor);";
                $sql->ejecutar_sql($query);
            }

 /*#################################################-MODIFICAR-RECURSOS-ACADEMICOS-################################*/
            function modificar_recursos_academicos(){

                $opcion = $_POST['opcion'];
                $desc = $_POST['desc'];
                $desc2 = $_POST['desc2'];
                $desc3 = $_POST['desc3'];
                $agregado = $_POST['agregado'];

                if( $opcion == 1){

                    modificar("rec.tbl_prog_acad", "sigla='$desc',descripcion='$desc2'", "cod_prog_acad=$agregado");
                }
                if( $opcion == 2){

                    modificar("rec.tbl_desc_programa","desc_programa='$desc', cod_programa_acad=$desc2", "cod_desc_prog=$agregado");
                }
                if( $opcion == 3){

                    modificar("rec.tbl_componentes","desc_componente='$desc', hora_componente=$desc2", "cod_componente=$agregado");
                }
                if( $opcion == 4){

                    modificar("rec.tbl_dedicacion_doc","desc_dedicacion='$desc'", "cod_dedicacion=$agregado");
                }
                if( $opcion == 5){

                    modificar("rec.tbl_escalafon","desc_escalafon='$desc'", "cod_escalafon=$agregado");
                }
                if( $opcion == 6){

                    modificar("rec.tbl_tipo_tutor","desc_tipo_tutor='$desc'", "cod_tipo_tutor=$agregado");
                }
                if( $opcion == 7){

                    modificar("rec.tbl_modalidad_uc","desc_mod='$desc'", "cod_modalidad=$agregado");
                }
                if( $opcion == 8){

                    modificar("rec.tbl_version_malla","desc_version='$desc', fecha_apertura='$desc2', fecha_cierre='$desc3'", "cod_version=$agregado");
                }
                if( $opcion == 9){

                    modificar("rec.tbl_linea_estrategica","desc_linea_est='$desc'", "cod_linea_estrategica=$agregado");
                }
                if( $opcion == 10){

                    modificar("rec.tbl_linea_investigacion","desc_linea_inv='$desc'", "cod_linea_inv=$agregado");
                }
                if( $opcion == 11){

                    modificar("rec.tbl_area_tematica","desc_area_tem='$desc'", "cod_area_tem=$agregado");
                }
                if( $opcion == 12){

                    modificar("rec.tbl_tipo_organismo","desc_tipo_organismo='$desc'", "cod_tipo_organismo=$agregado");
                }
            }
            /*#################################################-MODIFICAR-################################*/
            function modificar($tabla, $campo, $condicion){
                $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php
                $query = "UPDATE $tabla SET $campo WHERE $condicion";  
                $sql->ejecutar_sql($query);  
            }
?>