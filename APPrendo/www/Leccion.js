
$(document).ready(function(){
    
    $("#sidenav").load("SideNavLeccion.html");
    
    $('.animacionQueEsSQLTitulo').textillate({ 
  in: { effect: 'splat' },
  out: { effect: 'foldUnfold', sync: true },
        loop: false
});
    localStorage.setItem("usuario","admin");     
    var usuario = localStorage.getItem("usuario");
       
  $.ajax({
            url: 'http://localhost:8081/perfil.php',
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