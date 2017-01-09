
$(document).ready(function(){
    $("#sidenav").load("SideNav.html");
    localStorage.setItem("usuario","admin");     
    var usuario = localStorage.getItem("usuario");
       
  $.ajax({
            url: 'https://apprendo.000webhostapp.com/perfil.php',
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