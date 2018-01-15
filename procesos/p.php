<?php

  include_once('funciones-sql.php');

        $sql = new funciones_sql();//Instanciación de la clase funciones_sql del archivo funciones-sql.php

          $busqueda_tipo  = $sql->buscar_dato_especifico("SELECT tipo.descripcion FROM rec.tbl_tipo_persona tipo
 INNER JOIN reg.tbl_cargo_persona cargo ON(cargo.cod_tipop = tipo.cod_tipo_persona) 
 INNER JOIN reg.tbl_persona tp ON(cargo.ced_persona = tp.ced_persona) where tp.nom_persona='GENESIS' ","descripcion");

         echo  $busqueda_tipo; 
             
?>