
$(document).ready(function(){

    $("#sidenav").load("SideNavLeccion.html");
    //localStorage.setItem("leccion","ddl");  
    var leccion = localStorage.getItem("leccion");
    if(leccion=="introduccion"){
        document.getElementById("tituloJuego").textContent = "Introduccion";
        startGame();
    }else if(leccion=="disenio"){
        document.getElementById("tituloJuego").textContent = "Diseño";
        startDisenoTablas();
    }else if(leccion=="ddl"){
        document.getElementById("tituloJuego").textContent = "DDL(Data Definition Language)";
        startAdivinaDDL();
        //startDDL();
    }else if(leccion=="dml"){
        document.getElementById("tituloJuego").textContent = "DML(Data Manipulation Language)";
        startDMLAdivinaPalabras();
    }
    else if(leccion=="consultas"){
        document.getElementById("tituloJuego").textContent = "Consultas";
        startConsultaOrdena();
    }else if(leccion=="joins"){
        document.getElementById("tituloJuego").textContent = "Joins";
        startConsultasJoins();
    }else if(leccion =="subqueries"){
        document.getElementById("tituloJuego").textContent = "Subqueries";
        startConsultaOrdena();
    }else if(leccion =="funciones"){
        document.getElementById("tituloJuego").textContent = "Funciones";
        startDMLAdivinaPalabras();
    }else if(leccion=="roles"){
        document.getElementById("tituloJuego").textContent = "Roles y Permisos";
        startConceptoDefinicion();
    }else if(leccion=="conexion"){
        document.getElementById("tituloJuego").textContent = "Conexión desde una aplicación externa";
        startAdivinaDDL();

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