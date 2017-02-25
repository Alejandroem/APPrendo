
$(document).ready(function(){ 

    $("#sidenav").load("SideNavLeccion.html");
    //localStorage.setItem("leccion","ddl");  
    var leccion = localStorage.getItem("leccion");
    var selector ="."+leccion; 
    $(selector).show();

    $(".enviarRespuesta").click(function(){
        var resp = prompt("Por favor ingrese el enlace", "http://sqlfiddle.com/#!9/dcb16/1");

        if (resp != null) {
            $.ajax({
                url: 'https://apprendo.000webhostapp.com/guardarRespuesta.php',
                data: {usuario:localStorage.getItem("usuario"),leccion:localStorage.getItem("leccion"), respuesta: resp},
                type:'get',
                success: function(response){
                    alert("Respuesta guardada con exito.");
                }
                ,error: function(response){
                    alert("Ocurrió un error por favor intente de nuevo");
                }
            });   
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