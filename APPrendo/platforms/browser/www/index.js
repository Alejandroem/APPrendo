//JQuery
// $(elemento a buscar). accion (accion a ejecutar)
//cuando el documento este cargado por completo que ejecute la funcion
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
            url: 'http://192.168.1.15:8081/login.php',
            data: {email:correo, password:contrasena},
            type:'post',
            success: function(response){
                //alert (response);
                if(response == "exito"){
                    localStorage.setItem("usuario", correo);
                    window.location.replace("principal.html");
                }
            }
        });
        
       return false;
    });
});