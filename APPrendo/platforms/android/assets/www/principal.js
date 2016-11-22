$(document).ready(function(){
    $("#sidenav").load("SideNav.html");
    $("#introduccion").on('click',function(){
       localStorage.setItem("leccion","introduccion");
      
       
    });
    localStorage.setItem("usuario","admin");     
    var usuario = localStorage.getItem("usuario");
        $.ajax({

            url: 'http://192.168.1.15:8081/obtenerAvance.php',

            data: {user:usuario},
            type:'post',
            success: function(response){
                var obj = JSON.parse(response);
                var i = 0;
                var experiencia = 0;
                for(i = 0; i < 2; i++){
                    $("#barra"+(i+1)).css({"width":+obj.avances[i].avance+"%"});
                    experiencia += parseInt(obj.avances[i].avance);    
                }
                var promedioExperiencia = experiencia/2;
                switch (promedioExperiencia) {
    case 0:
        $("#experiencia").attr("src","images/badge0.png");
        break;
    case 10:
         $("#experiencia").attr("src","images/badge10.png");
        break;
    case 20:
         $("#experiencia").attr("src","images/badge20.png");
        break;
    case 30:
         $("#experiencia").attr("src","images/badge30.png");
        break;
    case 40:
         $("#experiencia").attr("src","images/badge40.png");
        break;
    case 50:
         $("#experiencia").attr("src","images/badge50.png");
        break;
    case 60:
         $("#experiencia").attr("src","images/badge60.png");
        break;
    case 70:
         $("#experiencia").attr("src","images/badge70.png");
        break;
    case 80:
         $("#experiencia").attr("src","images/badge80.png");
        break;
    case 90:
         $("#experiencia").attr("src","images/badge90.png");
        break;
    case 100:
        $("#experiencia").attr("src","images/badge100.png");
        break;
}
                
            }
        });
       
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