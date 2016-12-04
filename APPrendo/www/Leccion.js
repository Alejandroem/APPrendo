function cargaContenido(){
    if(localStorage.getItem("leccion")=="introduccion"){
        $("#introduccion").show();
    }
    if(localStorage.getItem("leccion")=="disenio"){
        $("#objetivos").show();
        $("#tituloDisenio").show();

        $("#tema2").on('click',function(){ //de objetivos a paso1
            $("#tituloDisenio").show();
            $("#objetivos").hide();
            $("#paso2").hide();
            $("#paso1").show();
            $("#relaciones").hide();
            $("#tiposDatos").hide();
            $("#llavePrimaria").hide();
        });
        $("#tema1Anterior").on('click',function(){//de paso1 a objetivos
            $("#tituloDisenio").show();
            $("#objetivos").show();
            $("#paso1").hide();
            $("#paso2").hide();
            $("#llavePrimaria").hide();
            $("#relaciones").hide();
            $("#tiposDatos").hide();
        });
        $("#tema3Siguiente").on('click',function(){//de paso1 a paso2
            $("#tituloDisenio").show();
            $("#objetivos").hide();
            $("#paso1").hide();
            $("#llavePrimaria").hide();
            $("#paso2").show();
            $("#relaciones").hide();
            $("#tiposDatos").hide();
        });
        $("#tema2Anterior").on('click',function(){//de paso2 a paso1
            $("#tituloDisenio").show();
            $("#objetivos").hide();
            $("#paso2").hide();
            $("#llavePrimaria").hide();
            $("#paso1").show();
            $("#relaciones").hide();
            $("#tiposDatos").hide();
        });
        $("#tema4Siguiente").on('click',function(){
            $("#tituloDisenio").show();
            $("#objetivos").hide();
            $("#paso2").hide();
            $("#llavePrimaria").show();
            $("#paso1").hide();
            $("#relaciones").hide();
            $("#tiposDatos").hide();
        });
        $("#tema3Anterior").on('click',function(){
            $("#tituloDisenio").show();
            $("#objetivos").hide();
            $("#paso2").show();
            $("#llavePrimaria").hide();
            $("#paso1").hide();
            $("#relaciones").hide();
            $("#tiposDatos").hide();
        });
        $("#tema5Siguiente").on('click',function(){
            $("#tituloDisenio").show();
            $("#objetivos").hide();
            $("#paso2").hide();
            $("#llavePrimaria").hide();
            $("#paso1").hide();
            $("#relaciones").show();
            $("#tiposDatos").hide();
        });
        $("#tema4Anterior").on('click',function(){
            $("#tituloDisenio").show();
            $("#objetivos").hide();
            $("#paso2").hide();
            $("#llavePrimaria").show();
            $("#paso1").hide();
            $("#relaciones").hide();
            $("#tiposDatos").hide();
        });
        $("#tema6Siguiente").on('click',function(){
            $("#tituloDisenio").show();
            $("#objetivos").hide();
            $("#paso2").hide();
            $("#llavePrimaria").hide();
            $("#paso1").hide();
            $("#relaciones").hide();
            $("#tiposDatos").show();
        });
        $("#tema5Anterior").on('click',function(){
            $("#tituloDisenio").show();
            $("#objetivos").hide();
            $("#paso2").hide();
            $("#llavePrimaria").hide();
            $("#paso1").hide();
            $("#relaciones").show();
            $("#tiposDatos").hide();
        });
    }
    if(localStorage.getItem("leccion")=="ddl"){
        $("#tituloDDL").show();
        $("#introDDL").show();
        $("#CrearDBLink").on('click',function(){
            $("#introDDL").hide();
            $("#createDB").show();
            $("#Constraints").hide();
            $("#CreateTable").hide();
            $("#AlterTable").hide();
            $("#DropTable").hide();
            $("#DropDB").hide();
        });
        $("#regresarIntroDDL").on('click',function(){
            $("#introDDL").show();
            $("#createDB").hide();
            $("#Constraints").hide();
            $("#CreateTable").hide();
            $("#AlterTable").hide();
            $("#DropTable").hide();
            $("#DropDB").hide();
        });
        $("#irConstraints").on('click',function(){
            $("#introDDL").hide();
            $("#createDB").hide();
            $("#Constraints").show();
            $("#CreateTable").hide();
            $("#AlterTable").hide();
            $("#DropTable").hide();
            $("#DropDB").hide();
        });
        $("#regresarCrearBD").on('click',function(){
            $("#introDDL").hide();
            $("#createDB").show();
            $("#Constraints").hide();
            $("#CreateTable").hide();
            $("#AlterTable").hide();
            $("#DropTable").hide();
            $("#DropDB").hide();
        });
        $("#irCrearTabla").on('click',function(){
            $("#introDDL").hide();
            $("#createDB").hide();
            $("#Constraints").hide();
            $("#CreateTable").show();
            $("#AlterTable").hide();
            $("#DropTable").hide();
            $("#DropDB").hide();
        });
        $("#regresarConstraints").on('click',function(){
            $("#introDDL").hide();
            $("#createDB").hide();
            $("#Constraints").show();
            $("#CreateTable").hide();
            $("#AlterTable").hide();
            $("#DropTable").hide();
            $("#DropDB").hide();
        });
        $("#irAlterTable").on('click',function(){
            $("#introDDL").hide();
            $("#createDB").hide();
            $("#Constraints").hide();
            $("#CreateTable").hide();
            $("#AlterTable").show();
            $("#DropTable").hide();
            $("#DropDB").hide();
        });
        $("#regresarCreateTable").on('click',function(){
            $("#introDDL").hide();
            $("#createDB").hide();
            $("#Constraints").hide();
            $("#CreateTable").show();
            $("#AlterTable").hide();
            $("#DropTable").hide();
            $("#DropDB").hide();
        });
        $("#irDropTable").on('click',function(){
            $("#introDDL").hide();
            $("#createDB").hide();
            $("#Constraints").hide();
            $("#CreateTable").hide();
            $("#AlterTable").hide();
            $("#DropTable").show();
            $("#DropDB").hide();
        });
        $("#regresarAlter").on('click',function(){
            $("#introDDL").hide();
            $("#createDB").hide();
            $("#Constraints").hide();
            $("#CreateTable").hide();
            $("#AlterTable").show();
            $("#DropTable").hide();
            $("#DropDB").hide();
        });
        $("#irDropDatabase").on('click',function(){
            $("#introDDL").hide();
            $("#createDB").hide();
            $("#Constraints").hide();
            $("#CreateTable").hide();
            $("#AlterTable").hide();
            $("#DropTable").hide();
            $("#DropDB").show();
        });
        $("#regresarDropTable").on('click',function(){
            $("#introDDL").hide();
            $("#createDB").hide();
            $("#Constraints").hide();
            $("#CreateTable").hide();
            $("#AlterTable").hide();
            $("#DropTable").show();
            $("#DropDB").hide();
        });
    }
    if(localStorage.getItem("leccion")=="dml"){
        $("#tituloDML").show();
        $("#introDML").show();
        $("#irInsertarDatos").on('click',function(){
            $("#introDML").hide();
            $("#insertarDatos").show();
            $("#eliminarDatos").hide();
            $("#ActualizarDatos").hide();
            $("#seleccionarDatos").hide();
        });
        $("#regresarIntroDML").on('click',function(){
            $("#introDML").show();
            $("#insertarDatos").hide();
            $("#eliminarDatos").hide();
            $("#ActualizarDatos").hide();
            $("#seleccionarDatos").hide();
        });
        $("#irEliminarDatos").on('click',function(){
            $("#introDML").hide();
            $("#insertarDatos").hide();
            $("#eliminarDatos").show();
            $("#ActualizarDatos").hide();
            $("#seleccionarDatos").hide();
        });
        $("#regresarInsertarDatos").on('click',function(){
            $("#introDML").hide();
            $("#insertarDatos").show();
            $("#eliminarDatos").hide();
            $("#ActualizarDatos").hide();
            $("#seleccionarDatos").hide();
        });
        $("#irActualizarDatos").on('click',function(){
            $("#introDML").hide();
            $("#insertarDatos").hide();
            $("#eliminarDatos").hide();
            $("#ActualizarDatos").show();
            $("#seleccionarDatos").hide();
        });
        $("#regresarDelete").on('click',function(){
            $("#introDML").hide();
            $("#insertarDatos").hide();
            $("#eliminarDatos").show();
            $("#ActualizarDatos").hide();
            $("#seleccionarDatos").hide();
        });
        $("#irSelect").on('click',function(){
            $("#introDML").hide();
            $("#insertarDatos").hide();
            $("#eliminarDatos").hide();
            $("#ActualizarDatos").hide();
            $("#seleccionarDatos").show();
        });
        $("#regresarEliminarDatos").on('click',function(){
            $("#introDML").hide();
            $("#insertarDatos").hide();
            $("#eliminarDatos").show();
            $("#ActualizarDatos").hide();
            $("#seleccionarDatos").hide();
        });
    }
    if(localStorage.getItem("leccion")=="consultas"){
        $("#tituloConsultas").show();
        $("#introConsultas").show();
        $("#irSelectEspecifico").on('click',function(){
            $("#introConsultas").hide();
            $("#irSelectEspecifico").show();
        });
    }
}

$(document).ready(function(){
    $("#tituloConsultas").hide();
    $("#introConsultas").hide();
    $("#seleccionarDatos").hide();
    $("#ActualizarDatos").hide();
    $("#eliminarDatos").hide();
    $("#insertarDatos").hide();
    $("#tituloDML").hide();
    $("#introDML").hide();
    $("#DropDB").hide();
    $("#DropTable").hide();
    $("#AlterTable").hide();
    $("#CreateTable").hide();
    $("#Constraints").hide();
    $("#createDB").hide();
    $("#tituloDDL").hide();
    $("#introduccion").hide();
    $("#tituloDisenio").hide();
    $("#objetivos").hide();
    $("#paso2").hide();
    $("#llavePrimaria").hide();
    $("#paso1").hide();
    $("#relaciones").hide();
    $("#tiposDatos").hide();
    $("#introDDL").hide();
    $("#sidenav").load("SideNavLeccion.html");
    if(localStorage.getItem("leccion")=="menu"){
        $("#introduccion").show();
        $("#tituloDisenio").hide();
        $("#objetivos").hide();
        $("#paso2").hide();
        $("#llavePrimaria").hide();
        $("#paso1").hide();
        $("#relaciones").hide();
        $("#tiposDatos").hide();

    }
    cargaContenido();
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


$("#contenido").on('click',function(){
    cargaContenido();
});
