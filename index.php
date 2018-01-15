<!DOCTYPE html>
<html lang="es">
 <head>
  <!-- ***************************************LOGIN******************************-->
	 <title>Login</title>
    <link rel="shortcut icon" href="img/ico-ubv.png"/>
	  <meta charset="iso-8859-1"/><!--para los tildes, esto dependerá del navegador-->
    <link rel="stylesheet" href="css/estilo_css.css" />
    <link rel="stylesheet" href="css/sweetalert.css" />
    <!-- ************************************************************************-->
    <script type="text/javascript" src="lib-jQuery/jquery-3.1.0.js"></script>
    <script type="text/javascript" src="lib-jQuery/sweetalert.min.js"></script> 
    <script type="text/javascript" src="js/herramientas.js"></script>
    <script type="text/javascript" src="js/aspecto-elementos.js"></script>

	  <!-- Esta etiqueta le dice al navegador que use una determinada anchura,
     desactivando la escala inicial. -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- ************************************************************************-->
     <script type="text/javascript">
     $(document).ready(function(){
       $('body').hide();
       $('body').fadeIn(0);
      });
     </script>
    </head> 
     <body>
     <br>
     <br>

     <div id="contenedor-login"><!-- CONTENEDOR PRINCIPAL-->
       <br><div class="titulo-modulo">INICIO DE SESI&OacuteN</div> <br>
         <div id="login-estilo"><!-- APERTURA DIV CONTENEDOR TABLA LOGIN -->
          <form action="procesos/validacion_login.php" method="POST" autocomplete="off"><!-- APERTURA FORM LOGIN -->
           <table><!-- APERTURA TABLA LOGIN -->
                 <tr>
                    <td>
                      <label>Usuario</label><br>
                      <input type="text" maxlength="40" name="user" id="usuario" value="ADMIN">
                     </td>
                 </tr>
                 <tr>
                    <td>
                     <label>Contrase&ntildea</label><br>
                     <input type="password" maxlength="50" name="pass" id="clave" value="123">
                   </td>
               </tr>
               <tr>
                     <td>
                     <div class="contenedor-boton">
                      <button type="submit" id="boton-login-user">Entrar</button>
                      </div>
                     </td>
               </tr>
            </table><!-- CIERRE TABLA LOGIN -->
          </form><!-- CIERRE FORM LOGIN --> 
       </div>
       <br>
       <br>
       <footer>
        © 2017 - Universidad Bolivariana de Venezuela<br>Eje Geopolitico Regional Cacique Mara
         <script>
             $(window).scroll(function(){

             if( $(this).scrollTop() > 0 ){
             $('.ir-arriba').slideDown(300);
             } else {
             $('.ir-arriba').slideUp(300);
             }
            });
          });
       </script> 
     </footer>
    </div> <!--CIERRE DEL CONTENEDOR PRINCIPAL-->
  </body><!-- CIERRE DEL CUERPO DE LA PÁGINA-->
</html>