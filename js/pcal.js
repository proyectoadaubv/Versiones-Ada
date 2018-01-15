/*<== Calendario versión 1.0==>*/
/*<== Desarrollado en: Enero 2017==>*/
/*<== Desarrollador: Pirela Adalberto==>*/
/*<== Universidad Bolivariana de Venezuela==>*/
/*<== Sede - Zulia ==>*/
 $(document).ready(function(){
       
       $('.boton').text('Fecha');
       $('.boton-aceptar').text('Aceptar');
      
    var id_campo;
    $(".contenedor-calendario").on('click', function(){

             id_campo = $("#"+($(this).attr("id"))+" div").attr('id');
    });
      $('.boton').on('click', function(){
                abrir_modal();
                cargar_dia();
                cargar_mes();
                cargar_anio();
      });
      
      $('.cerrar-calendario').on('click', function(){
                 cerrar_modal();
            });

    $("#mes").on('click', function(){

    var mes = document.getElementById('mes').options.selectedIndex;
       var Fecha_actual = new Date();
       var anio_actual =  Fecha_actual.getFullYear();
           var dias7=[31,29,31,30,31,30,31,31,30,31,30,31]; 
            ultimo=0; 
            if (mes==1){ 
             fecha=new Date(anio_actual,1,29);
             vermes=fecha.getMonth(); 
             if(vermes!=mes){ultimo=28} 
             } 
             if(ultimo==0){ultimo=dias7[mes]} 
               if($('#dia').val() > ultimo){    
                   $('#mes').prop('selectedIndex',0);
            }
       });
            $('.boton-aceptar').click(function(){

           var mes_mostrar;
           var valor_dia=document.getElementById('dia').options.selectedIndex; //valor_dia
           var valor_mes=document.getElementById('mes').options.selectedIndex; //valor_mes
           var valor_anio=document.getElementById('anio').options.selectedIndex; //valor_año

           if(valor_mes == 0){ mes_mostrar = '01'}
           if(valor_mes == 1){ mes_mostrar = '02'}
           if(valor_mes == 2){ mes_mostrar = '03'}
           if(valor_mes == 3){ mes_mostrar = '04'}
           if(valor_mes == 4){ mes_mostrar = '05'}
           if(valor_mes == 5){ mes_mostrar = '06'}
           if(valor_mes == 6){ mes_mostrar = '07'}
           if(valor_mes == 7){ mes_mostrar = '08'}
           if(valor_mes == 8){ mes_mostrar = '09'}
           if(valor_mes == 9){ mes_mostrar = '10'}
           if(valor_mes == 10){ mes_mostrar = '11'}
           if(valor_mes == 11){ mes_mostrar = '12'}

           $("#" + id_campo + "").text(document.getElementById('dia').options[valor_dia].text
            +'-'+mes_mostrar+'-'+document.getElementById('anio').options[valor_anio].text);
                 cerrar_modal();
                });
          });

 var dias=['01'
 ,'02'
 ,'03'
 ,'04'
 ,'05'
 ,'06'
 ,'07'
 ,'08'
 ,'09'
 ,'10'
 ,'11'
 ,'12'
 ,'13'
 ,'14'
 ,'15'
 ,'16'
 ,'17'
 ,'18'
 ,'19'
 ,'20'
 ,'21'
 ,'22'
 ,'23'
 ,'24'
 ,'25'
 ,'26'
 ,'27'
 ,'28'
 ,'29'
 ,'30'
 ,'31'];
  var meses = [];
    var meses = new Array();
  meses[0] = 'Enero';
    meses[1] = 'Febrero';
      meses[2] = 'Marzo';
        meses[3] = 'Abril';
          meses[4] = 'Mayo';
            meses[5] = 'Junio';
              meses[6] = 'Julio';
                meses[7] = 'Agosto';
                  meses[8] = 'Septiembre';
                    meses[9] = 'Octubre';
                      meses[10] = 'Noviembre';
                        meses[11] = 'Diciembre';
function abrir_modal(){
    $('.modal-calendario').slideDown('slide');
}

function cerrar_modal(){
     $('.modal-calendario').slideUp('fast');
      meses.length=0;
      dias.length=0;
     $('#dia').prop('selectedIndex',0);
     $('#mes').prop('selectedIndex',0);
     $('#anio').prop('selectedIndex',0);
}
function cargar_dia(){

var dia = document.getElementById("dia");
for(var index = 0; index < dias.length; index++) {
    dia.options[dia.options.length] = new Option(dias[index], index);
  }
}
function cargar_mes(){

      var mes = document.getElementById("mes");
      for(var index = 0; index < meses.length; index++) {
       mes.options[mes.options.length] = new Option(meses[index], index);
    }
}

function cargar_anio(){
  var myDate = new Date(); 
   var year = myDate.getFullYear();
     for(var i = year+1; i >= 1900; i--){
      $("#anio").append(new Option(i,i));
    }
}