$(document).ready(function(){
    localStorage.setItem("usuario","admin");
    var txusuario = localStorage.getItem("usuario");
    $.ajax({
            url: 'http://192.168.1.9/perfil.php',
            data: {usuario:txusuario},
            type:'post',
            success: function(response){
                var perfil = JSON.parse(response);
                //{"idUsuario":"1","nombre":"admin","apellido":"admin","correo":"admin","password":"admin","carnet":"admin","imagen":"admin"}
               
                $("#NombreUsuario").text(perfil.carnet);
                $("#inputNombre").val(perfil.nombre);
                $("#inputApellido").val(perfil.apellido);
                $("#inputEmail").val(perfil.correo);
                $("#imagenPerfil").attr("src", perfil.imagen);
                
            }
        });
    
    
});