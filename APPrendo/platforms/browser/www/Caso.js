
$(document).ready(function(){ 

    $("#sidenav").load("SideNavLeccion.html");
    //localStorage.setItem("leccion","ddl");  
    var leccion = localStorage.getItem("leccion");
    var selector ="."+leccion; 
    $(selector).show();

    $(selector).click(function(){
        var respuesta = prompt("Por favor ingrese el enlace de SQL Fiddle", "http://sqlfiddle.com/#!9/dcb16/1");

        if (respuesta != null) {
            document.getElementById("demo").innerHTML =
                "Hello " + person + "! How are you today?";
        }
    });

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