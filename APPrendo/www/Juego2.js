$(document).ready(function(){

    $("#sidenav").load("SideNavLeccion.html");
    //localStorage.setItem("leccion","ddl");  
    var leccion = localStorage.getItem("leccion");
    if(leccion=="introduccion"){
        startIntroduccionCompletar();
    }else if(leccion=="disenio"){
        startDisenoRelaciones();
    }else if(leccion=="ddl"){
        startDDLSopa();
    }else if(leccion=="dml"){
        /*cambio a consultas startEscribePalabras();*/
        startGame();
    }else if(leccion=="consultas"){
        /*Cambio a consultas complejas startConsultasMemoria();*/
        startEscribePalabras();
    } 
    else if(leccion=="joins"){
         startConsultasMemoria();
    }else if(leccion =="subqueries"){
        subquerysQuerys();
    }else if(leccion =="funciones"){
        startDDLSopa();
    }else if(leccion=="roles"){
        startEscribePalabras();
    }else if(leccion=="conexion"){
        startConsultasMemoria();
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