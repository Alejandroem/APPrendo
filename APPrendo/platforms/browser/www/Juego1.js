
$(document).ready(function(){
    
    $("#sidenav").load("SideNavLeccion.html");
    localStorage.setItem("leccion","introdusccion");  
    var leccion = localStorage.getItem("leccion");
    if(leccion=="introduccion"){
        startGame();
    }else{
        startDisenoTablas();
    }
    localStorage.setItem("usuario","admin");     
    var usuario = localStorage.getItem("usuario");
       
  $.ajax({
            url: 'http://192.168.1.15:8081/perfil.php',
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