<html lang="es">
 <head>
  <meta charset="utf-8"/>
   <link rel="stylesheet" href="../css/estilo_css.css" />
    <script type="text/javascript" src="../jQuery/herramientas.js"></script> 
     <!-- *****Función para eliminar el parpadeo de la carga de esta página*****-->
     <script type="text/javascript" src="../js/jquery-3.1.0.js"></script> 

      <script type="text/javascript">
        $(document).ready(function(){
     	$('body').hide();
     	$('body').fadeIn(0);
        of_mod($("#panel-control"));
        of_mod($("#proyectos"));
        of_mod($("#usuarios"));
        of_mod($("#proyectos"));
        on_mod($("#horarios"));

        $('#div_uc').addClass('tipografia_horario_of');
        $('#div_dia').addClass('tipografia_horario_of');
        $('#div_hora').addClass('tipografia_horario_of');
        $('#div_tramo').addClass('tipografia_horario_of');
        $('#div_docente').addClass('tipografia_horario_of');
        $('#div_seccion').addClass('tipografia_horario_of');


        $('#id_dia').on('click', function(){
         if ($('#id_dia').val() ==0){
            $('#div_dia').removeClass('tipografia_horario_on');
             $('#div_dia').addClass('tipografia_horario_of');
           }else{
             $('#div_dia').addClass('tipografia_horario_on');
              $('#div_dia').removeClass('tipografia_horario_of');
           }
        });

        $('#id_hora').on('click', function(){
         if ($('#id_hora').val() ==0){
            $('#div_hora').removeClass('tipografia_horario_on');
             $('#div_hora').addClass('tipografia_horario_of');
           }else{
             $('#div_hora').addClass('tipografia_horario_on');
              $('#div_hora').removeClass('tipografia_horario_of');
           }
        });
        $('#id_tramo').on('click', function(){
         if ($('#id_tramo').val() ==0){
            $('#div_tramo').removeClass('tipografia_horario_on');
             $('#div_tramo').addClass('tipografia_horario_of');
           }else{
             $('#div_tramo').addClass('tipografia_horario_on');
              $('#div_tramo').removeClass('tipografia_horario_of');
           }
        });
        $('#id_seccion').on('click', function(){
         if ($('#id_seccion').val() ==0){
            $('#div_seccion').removeClass('tipografia_horario_on');
             $('#div_seccion').addClass('tipografia_horario_of');
           }else{
             $('#div_seccion').addClass('tipografia_horario_on');
              $('#div_seccion').removeClass('tipografia_horario_of');
           }
        });



     	});
 /*##########################################FUNCIONES#############################################*/
  /*##########################################MALLA CURRICULAR#####################################*/
         function abrir_modal_horario(){
          $('.modal').slideDown('slide');
          $("#mostrar_malla_curricular").load('../procesos-php/gestion-horarios/uc_buscar.html');

         }





















         function cerrar_modal_horario(){
          $('.modal').slideUp('fast');
          }
         function mostrar_uc(codigo_uc, desc_uc){
             $('#desc_uc_seleccion').text(desc_uc);
             $('#div_uc').addClass('tipografia_horario_on');
             $('#div_uc').removeClass('tipografia_horario_of');
             $('.modal').slideUp('fast');
         }
/*##########################################DOCENTE#####################################*/
         function abrir_modal_docente(){
          $('.modal_docente').slideDown('slide');
          $("#mostrar_datos_docente").load('../procesos-php/gestion-horarios/docente_buscar.html');

         }
         function cerrar_modal_docente(){
          $('.modal_docente').slideUp('fast');
          }
         function mostrar_docente(cedula, nombres, apellidos){
             $('#desc_docente_seleccion').text(cedula+'   '+nombres+'   '+apellidos);
             $('#div_docente').addClass('tipografia_horario_on');
             $('#div_docente').removeClass('tipografia_horario_of');
             $('.modal_docente').slideUp('fast');
         }

          

    </script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head> 
  <body>
   <br>
    <div class="Div_FondoTitulos">Gesti&oacuten horarios</div>
     <div class="contenedor-tabla"><!-- **************CONTENEDORA DE TABLAS*************-->

<!-- ########################DISEÑO PANTALLAS MODALES#################################################-->
<!-- #######################################################################################-->
<!-- **************PANTALLA MODAL 1 (MOSTRAR UC)*************-->
    <div class="modal">
        <div class="div_ventana">
             <div class="cerrar_m1" onclick="javascript:cerrar_modal_horario();" style="cursor:pointer">Cerrar</div>
              <div id="mostrar_malla_curricular"></div>
        </div>
    </div>





    
<!-- **************PANTALLA MODAL 1 (MOSTRAR UC)*************-->
<!-- #######################################################################################-->
<!-- **************PANTALLA MODAL 2 (MOSTRAR DOCENTE)*************-->
    <div class="modal_docente">
        <div class="div_ventana_docente">
             <div class="cerrar_m2" onclick="javascript:cerrar_modal_docente();" style="cursor:pointer">Cerrar</div>
              <div id="mostrar_datos_docente"></div>
        </div>
    </div>
<!-- **************PANTALLA MODAL 2 (MOSTRAR DOCENTE)*************-->
<!-- ######################################################################################-->







     <form id="form_horario" autocomplete="off">
        <table class="tabla_horario">
        	<tr>
        		<td style="width:100%;" colspan="2" class="desc_periodo">
                 <div>Periodo acad&eacutemico actual<div id="desc-periodo"></div></div>
        		</td>
        	</tr>
        	<tr>
        		<td style="width:50%;">
                         <div id="div_dia">Seleccionar dia</div>
                         <div class="selector-dia">
                         <select style="width:90%;" id="id_dia"></select>
                         </div>
        		</td>
        		<td style="width:50%;">
                         <div id="div_hora">Seleccionar hora</div>
                         <div class="selector-hora">
                         <select style="width:90%;" id="id_hora"></select>
                         </div>
        		</td>
        	</tr>
        	<tr>
        		<td style="width:50%;">
        			
                         <div id="div_tramo">Seleccionar semestre</div>
                         <div class="selector-tramo">
                         <select style="width:90%;" id="id_tramo"></select>
                         </div>
        		</td>

        		<td style="width:50%;">
                    <div id="div_uc" onclick="javascript:abrir_modal_horario();" style="cursor:pointer">Unidad curricular</div>
                    <div id="desc_uc_seleccion"></div>
        		</td>
        	</tr>
        	<tr>
        		<td style="width:50%;">
                         <div id="div_docente" onclick="javascript:abrir_modal_docente();" style="cursor:pointer">Seleccionar docente</div>
                         <div id="desc_docente_seleccion"></div>
        		</td>
        		<td style="width:50%;">
                         <div id="div_seccion">Seleccionar secci&oacuten</div>
                         <div class="selector-seccion">
                         <select style="width:90%;" id="id_seccion"></select>
                         </div>
        		</td>
        	</tr>
        	<tr>
        		<td style="width:50%;">
        			
                         <div class="tipografia_horario_of">Seleccionar Edificio</div>
                         <div class="selector-edificio">
                         <select style="width:90%;" id="id_edificio"></select>
                         </div>
        		</td>
        		<td style="width:50%;">
        			
                         <div class="tipografia_horario_of">Seleccionar aula/laboratorio</div>
                         <div class="selector-au-lab">
                         <select style="width:90%;" id="id_au-lab"></select>
                         </div>
        		</td>
        	</tr>
        	<tr>
        	<td colspan="2">
       		   <div class="Div_ContenedorBoton">
                    <table align="center" border="0">
                        <tr>
                          <td style="width:30%;">
                           <button type="submit" class="Estilo_boton" id="boton-enviar-horario">
                           <div id="texto-guardar-horario">Crear horario</div>
                           </button>
                           </td>
                           <td style="width:30%;">
                           <div id="mensaje-horario" style="display:none;"><label class="Estilo_letra">Registrado</label>
                           <img width="15px" src="../img/ico8.png"></div>
                         </td>
                        </tr>
                     </table>
                  </div>
        		</td>
        	</tr>
        </table>
    </form>

    </div><!-- **************CIERRE DE LA CONTENEDORA DE TABLAS*************-->
  </body>
</html>
