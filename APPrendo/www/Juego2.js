$(document).ready(function(){

    $("#sidenav").load("SideNavLeccion.html");
    //localStorage.setItem("leccion","ddl");  
    var leccion = localStorage.getItem("leccion");
    if(leccion=="introduccion"){
        document.getElementById("tituloJuego").textContent = "Introduccion";
        startIntroduccionCompletar();
    }else if(leccion=="disenio"){
        document.getElementById("tituloJuego").textContent = "Diseño";
        startDisenoRelaciones();
    }else if(leccion=="ddl"){
        document.getElementById("tituloJuego").textContent = "DDL(Data Definition Language)";
        startDDLSopa();
    }else if(leccion=="dml"){
        document.getElementById("tituloJuego").textContent = "DML(Data Manipulation Language)";
        /*cambio a consultas startEscribePalabras();*/
        startGame();
    }else if(leccion=="consultas"){
        document.getElementById("tituloJuego").textContent = "Consultas";
        /*Cambio a consultas complejas startConsultasMemoria();*/
        startEscribePalabras();
    } 
    else if(leccion=="joins"){
        document.getElementById("tituloJuego").textContent = "Joins";
         startConsultasMemoria();
    }else if(leccion =="subqueries"){
        document.getElementById("tituloJuego").textContent = "Subqueries";
        subquerysQuerys();
    }else if(leccion =="funciones"){
        document.getElementById("tituloJuego").textContent = "Funciones";
        startDDLSopa();
    }else if(leccion=="roles"){
        document.getElementById("tituloJuego").textContent = "Roles y Permisos";
        startEscribePalabras();
    }else if(leccion=="conexion"){
        document.getElementById("tituloJuego").textContent = "Conexión desde una aplicación externa";
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