$(document).ready(function(){
    $('#guardarDatos').on('submit', function () {
        if($("#inputPassword").val()==""){
            $.ajax({
                url: 'https://apprendo.000webhostapp.com/actualizarPerfil.php',
                data: {carnet:$("#NombreUsuario").text(),nombre:$("#inputNombre").val(), apellido: $("#inputApellido").val(), email:$("#inputEmail").val()},
                type:'post',
                beforeSend: function(){
                    $("#registrarBtn").hide();
                    $("#registrando").show();
                },
                success: function(response){
                    window.location.replace("Perfil.html");
                }
            });     
        }else{
            if($("#inputPassword").val()==$("#inputPasswordConfirm").val()){
                $.ajax({
                    url: 'https://apprendo.000webhostapp.com/actualizarPerfil.php',
                    data: {carnet:$("#NombreUsuario").text(),nombre:$("#inputNombre").val(), apellido: $("#inputApellido").val(), email:$("#inputEmail").val(),password:$("#inputPassword").val()},
                    type:'post',
                    success: function(response){
                        window.location.replace("Perfil.html");
                    }
                });
            }
            else{
                alert("Los passwords no coinciden");
            }
        }

        return false;
    });


    $("#sidenav").load("SideNav.html");
    //    localStorage.setItem("usuario","admin");
    var txusuario = localStorage.getItem("usuario");
    $.ajax({

        url: 'https://apprendo.000webhostapp.com/perfil.php',

        data: {usuario:txusuario},
        type:'post',
        success: function(response){
            var perfil = JSON.parse(response);
            //{"idUsuario":"1","nombre":"admin","apellido":"admin","correo":"admin","password":"admin","carnet":"admin","imagen":"admin"}

            $("#NombreUsuario").text(perfil.carnet);
            $("#inputNombre").val(perfil.nombre);
            $("#inputApellido").val(perfil.apellido);
            $("#inputEmail").val(perfil.correo);
            $("#imagenPerfil").attr("src", perfil.imagen);



        }
    });


});