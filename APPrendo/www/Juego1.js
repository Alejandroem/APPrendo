
$(document).ready(function(){

    $("#sidenav").load("SideNavLeccion.html");
    //localStorage.setItem("leccion","ddl");  
    var leccion = localStorage.getItem("leccion");
    if(leccion=="introduccion"){
        document.getElementById("tituloJuego").textContent = "Introduccion";
        document.getElementById("instrucciones-juego").innerHTML = "Completa la oracion oculta detrás de los botones:";
        startGame();
    }else if(leccion=="disenio"){
        document.getElementById("tituloJuego").textContent = "Diseño";
        document.getElementById("instrucciones-juego").innerHTML = "Coloca los campos adecuados a la tabla:";
        startDisenoTablas();
    }else if(leccion=="ddl"){
        document.getElementById("tituloJuego").textContent = "DDL(Data Definition Language)";
        document.getElementById("instrucciones-juego").innerHTML = "Adivina la palabra oculta, una letra a la vez:";
        startAdivinaDDL();
        //startDDL();
    }else if(leccion=="dml"){
        document.getElementById("tituloJuego").textContent = "DML(Data Manipulation Language)";
        document.getElementById("instrucciones-juego").innerHTML = "Adivina la palabra descrita por las pistas:";
        startDMLAdivinaPalabras();
    }
    else if(leccion=="consultas"){
        document.getElementById("tituloJuego").textContent = "Consultas";
        document.getElementById("instrucciones-juego").innerHTML = "Ordena las letras de las palabras en las siguientes consultas:";
        startConsultaOrdena();
    }else if(leccion=="joins"){
        document.getElementById("tituloJuego").textContent = "Joins";
        document.getElementById("instrucciones-juego").innerHTML = "Arrastra el join adecuado al recuadro para avanzar:";
        startConsultasJoins();
    }else if(leccion =="subqueries"){
        document.getElementById("instrucciones-juego").innerHTML = "Ordena las letras de las palabras en las siguientes reglas:";
        document.getElementById("tituloJuego").textContent = "Subqueries";
        startConsultaOrdena();
    }else if(leccion =="funciones"){
        document.getElementById("tituloJuego").textContent = "Funciones";
        document.getElementById("instrucciones-juego").innerHTML = "Adivina la palbra descrita por las pistas:";
        startDMLAdivinaPalabras();
    }else if(leccion=="roles"){
        document.getElementById("instrucciones-juego").innerHTML = "Arrastra los conceptos con su definición correcta:";
        document.getElementById("tituloJuego").textContent = "Roles y Permisos";
        startConceptoDefinicion();
    }else if(leccion=="conexion"){
        document.getElementById("tituloJuego").textContent = "Conexión desde una aplicación externa";
        document.getElementById("instrucciones-juego").innerHTML = "Adivina la palabra oculta, una letra a la vez:";
        startAdivinaDDL();

    }

    //localStorage.setItem("usuario","admin");     
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