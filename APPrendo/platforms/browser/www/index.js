//JQuery
// $(elemento a buscar). accion (accion a ejecutar)
//cuando el documento este cargado por completo que ejecute la funcion
var felizAniversario = "Feliz primer aniversario mi amada preciosa, te adoro gracias por todos los lindos momentos y te prometo que me voy a casar contigo, te amo mi cielo lindo me encantas, juntos por siempre y para siempre. Att. Tu novio lindo.";
$(document).ready(function(){
    //cuando el formulario con class login, realice la accion submit ejecute la funcion.
    $('.LogIn').on('submit', function () {
        //guardando el valor de el input con id email
        var correo = $("#Email").val();
        // guardo el valor del input con el id password
        var contrasena =$("#Password").val();
        //
        //http://192.168.43.144/login.php?email=email
        //alert (correo);
        //alert(contrasena);
        //alert("llamando a ws");
        $.ajax({
            url: 'https://apprendo.000webhostapp.com/login.php',
            data: {email:correo, password:contrasena},
            type:'get',
            beforeSend: function(){
                window.plugins.spinnerDialog.show("Ingresando","Espere un momento mientras contactamos con los servidores", true);
            },
            success: function(response){
                //alert (response);
                if(response == "exito"){
                    localStorage.setItem("usuario", correo);
                    window.plugins.spinnerDialog.hide();
                    window.location.replace("principal.html");
                }else{
                    alert("Error en el Nombre de Usuario o contreseña, por favor intente de nuevo");
                }
            }
        });

        return false;
    });

    $('.Account').on('submit', function () {
        var nombre = $("#NombreRegistro").val();
        var apellido =$("#ApellidoRegistro").val();
        var correo = $("#CorreoRegistro").val();
        var carnet =$("#CarnetRegistro").val();
        var contrasenia = $("#PasswordRegistro").val();
        $.ajax({
            url: 'https://apprendo.000webhostapp.com/registro.php',
            data: {n:nombre, a:apellido, co:correo, ca:carnet, con:contrasenia},
            type:'get',
            beforeSend: function(){
                window.plugins.spinnerDialog.show("Registrando","Espere un momento mientras contactamos con los servidores", true);
            },
            success: function(response){
                localStorage.setItem("usuario", carnet);
                window.plugins.spinnerDialog.hide();
                window.location.replace("principal.html");

            },error: function(response){
                window.plugins.spinnerDialog.hide();
                alert("Error al registrar el usuario");
            }
        });

        return false;
    });
});