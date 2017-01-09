$(document).ready(function(){
    $("#sidenav").load("SideNav.html");
    $("#introduccion").on('click',function(){
        localStorage.setItem("leccion","introduccion");   
    });
    $("#disenio").on('click',function(){
        localStorage.setItem("leccion","disenio");   
    });
    $("#ddl").on('click',function(){
        localStorage.setItem("leccion","ddl");   
    });
    $("#dml").on('click',function(){
        localStorage.setItem("leccion","dml");   
    });
    $("#consultas").on('click',function(){
        localStorage.setItem("leccion","consultas");   
    });
    $("#joins").on('click',function(){
        localStorage.setItem("leccion","joins");   
    });
    $("#subqueries").on('click',function(){
        localStorage.setItem("leccion","subqueries");   
    });
    $("#funciones").on('click',function(){
        localStorage.setItem("leccion","funciones");   
    });
    $("#roles").on('click',function(){
        localStorage.setItem("leccion","roles");   
    });
    $("#conexion").on('click',function(){
        localStorage.setItem("leccion","conexion");   
    });
    var usuario = localStorage.getItem("usuario");
    $.ajax({

        url: 'http://192.168.1.15:8081/obtenerAvance.php',

        data: {user:usuario},
        type:'post',
        success: function(response){
            var obj = JSON.parse(response);
            var i = 0;
            var experiencia = 0;
            for(i = 0; i < 10; i++){
                $("#barra"+(i+1)).css({"width":+obj.avances[i].avance+"%"});
                experiencia += parseInt(obj.avances[i].avance);    
            }
            var promedioExperiencia = experiencia/10;
            if(promedioExperiencia < 10)
                $("#experiencia").attr("src","images/badge0.png");
            else if(promedioExperiencia < 20)
                $("#experiencia").attr("src","images/badge10.png");
            else if(promedioExperiencia < 30)
                $("#experiencia").attr("src","images/badge20.png");
            else if(promedioExperiencia < 40)
                $("#experiencia").attr("src","images/badge30.png");
            else if(promedioExperiencia < 50)
                $("#experiencia").attr("src","images/badge40.png");
            else if(promedioExperiencia < 60)
                $("#experiencia").attr("src","images/badge50.png");
            else if(promedioExperiencia < 70)
                $("#experiencia").attr("src","images/badge60.png");
            else if(promedioExperiencia < 80)
                $("#experiencia").attr("src","images/badge70.png");
            else if(promedioExperiencia < 90)
                $("#experiencia").attr("src","images/badge80.png");
            else if(promedioExperiencia < 100)
                $("#experiencia").attr("src","images/badge90.png");
            else
                $("#experiencia").attr("src","images/badge100.png");
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