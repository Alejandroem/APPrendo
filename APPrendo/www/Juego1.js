
$(document).ready(function(){
    
    $("#sidenav").load("SideNavLeccion.html");
    //localStorage.setItem("leccion","ddl");  
    var leccion = localStorage.getItem("leccion");
    if(leccion=="introduccion"){
        startGame();
    }else if(leccion=="disenio"){
        startDisenoTablas();
    }else if(leccion=="ddl"){
        startAdivinaDDL();
        //startDDL();
    }else if(leccion=="dml"){
        startDMLAdivinaPalabras();
    }
    else if(leccion=="consultas"){
        startConsultaOrdena();
    }else if(leccion=="joins"){
        startConsultasJoins();
    }else if(leccion =="subqueries"){
        startConsultaOrdena();
    }else if(leccion =="funciones"){
        startDMLAdivinaPalabras();
        
    }else if(leccion=="roles"){
        startConceptoDefinicion();
    }else if(leccion=="conexion"){
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