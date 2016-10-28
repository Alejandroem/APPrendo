
$(document).ready(function(){
    $("#pregunta2").hide();
    $("#pregunta3").hide();
    $("#pregunta4").hide();
    $("#pregunta5").hide();
    var punteo=0;
     $("#pregunta1").on("submit",function(){
        if( $('#p1r1').prop('checked') ) {
            alert('Correcto');
            $("#pregunta1").hide();
            $("#pregunta2").show();
            punteo++;
        }else{
            alert('Incorrecto');
            $("#pregunta1").hide();
            $("#pregunta2").show();
        } 
        return false;
    });
    $("#pregunta2").on("submit",function(){
        if( $('#p2r1').prop('checked') ) {
            alert('Correcto');
            punteo++;
            $("#pregunta2").hide();
            $("#pregunta3").show(); 
        }else{
            alert('Incorrecto');
            $("#pregunta2").hide();
            $("#pregunta3").show();
        } 
        return false;
    });
    $("#pregunta3").on("submit",function(){
        if( $('#p3r1').prop('checked') ) {
            alert('Correcto');
            punteo++;
            $("#pregunta3").hide();
            $("#pregunta4").show(); 
        }else{
            alert('Incorrecto');
            $("#pregunta3").hide();
            $("#pregunta4").show();
        } 
        return false;
    });
     $("#pregunta4").on("submit",function(){
        if( $('#p4r1').prop('checked') ) {
            alert('Correcto');
            punteo++;
            $("#pregunta4").hide();
            $("#pregunta5").show(); 
        }else{
            alert('Incorrecto');
            $("#pregunta4").hide();
            $("#pregunta5").show();
        } 
        return false;
    });
     $("#pregunta5").on("submit",function(){
        if( $('#p5r1').prop('checked') ) {
            alert('Correcto');
            punteo++;
        }else{
            alert('Incorrecto');
        } 
        alert("Su resultado es: "+punteo); 
         
        return false;
    });
    
    
 $("#sidenav").load("SideNavLeccion.html");
    
    
localStorage.setItem("usuario","admin");     
var usuario = localStorage.getItem("usuario");
       
  $.ajax({
            url: 'http://192.168.43.144:8081/perfil.php',
            data: {usuario:usuario},
            type:'post',
            success: function(response){
                var perfil = JSON.parse(response);
                //{"idUsuario":"1","nombre":"admin","apellido":"admin","correo":"admin","password":"admin","carnet":"admin","imagen":"admin"}
               
                $("#NombreUsuario").text(perfil.carnet);
                
                $("#imagenPerfil").attr("src", perfil.imagen);
                
                
                
            }
        });
    
    
});