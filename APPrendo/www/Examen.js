
$(document).ready(function(){
    $("#examenIntro").hide();
    $("#examenDisenio").hide();
    $("#examenDDL").hide();
    $("#examenDML").hide();
    $("#examenConsultas").hide();
    $("#examenJoins").hide();
    $("#examenSubqueries").hide(); 
    $("#examenFunciones").hide(); 
    $("#examenRoles").hide();
    $("#examenConexion").hide();
    if(localStorage.getItem("leccion")=="introduccion"){
        $("#examenIntro").show(); 
        $("#pregunta2").hide();
        $("#pregunta3").hide();
        $("#pregunta4").hide();
        $("#pregunta5").hide();
        var punteo=0;
        $("#pregunta1").on("submit",function(){
            if( $('#p1r1').prop('checked') ) {
                alert('Correcto');
                $("#pregunta1").hide();
                $("#pregunta2").show();
                punteo++;
            }else{
                alert('Incorrecto');
                $("#pregunta1").hide();
                $("#pregunta2").show();
            } 
            return false;
        });
        $("#pregunta2").on("submit",function(){
            if( $('#p2r1').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta2").hide();
                $("#pregunta3").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta2").hide();
                $("#pregunta3").show();
            } 
            return false;
        });
        $("#pregunta3").on("submit",function(){
            if( $('#p3r1').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta3").hide();
                $("#pregunta4").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta3").hide();
                $("#pregunta4").show();
            } 
            return false;
        });
        $("#pregunta4").on("submit",function(){
            if( $('#p4r1').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta4").hide();
                $("#pregunta5").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta4").hide();
                $("#pregunta5").show();
            } 
            return false;
        });
        $("#pregunta5").on("submit",function(){
            if( $('#p5r1').prop('checked') ) {
                alert('Correcto');
                punteo++;
            }else{
                alert('Incorrecto');
            } 
            alert("Su resultado es: "+punteo); 

            return false;
        });
    }
    if(localStorage.getItem("leccion")=="disenio"){
        $("#examenDisenio").show();
        $("#pregunta2Disenio").hide();
        $("#pregunta3Disenio").hide();
        $("#pregunta4Disenio").hide();
        $("#pregunta5Disenio").hide();
        var punteo=0;
        $("#pregunta1Disenio").on("submit",function(){
            if( $('#p1r3Disenio').prop('checked') ) {
                alert('Correcto');
                $("#pregunta1Disenio").hide();
                $("#pregunta2Disenio").show();
                punteo++;
            }else{
                alert('Incorrecto');
                $("#pregunta1Disenio").hide();
                $("#pregunta2Disenio").show();
            } 
            return false;
        });
        $("#pregunta2Disenio").on("submit",function(){
            if( $('#p2r4Disenio').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta2Disenio").hide();
                $("#pregunta3Disenio").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta2Disenio").hide();
                $("#pregunta3Disenio").show();
            } 
            return false;
        });
        $("#pregunta3Disenio").on("submit",function(){
            if( $('#p3r2Disenio').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta3Disenio").hide();
                $("#pregunta4Disenio").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta3Disenio").hide();
                $("#pregunta4Disenio").show();
            } 
            return false;
        });
        $("#pregunta4Disenio").on("submit",function(){
            if( $('#p4r1Disenio').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta4Disenio").hide();
                $("#pregunta5Disenio").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta4Disenio").hide();
                $("#pregunta5Disenio").show();
            } 
            return false;
        });
        $("#pregunta5Disenio").on("submit",function(){
            if( $('#p5r2Disenio').prop('checked') ) {
                alert('Correcto');
                punteo++;
            }else{
                alert('Incorrecto');
            } 
            alert("Su resultado es: "+punteo); 

            return false;
        });
    }
    if(localStorage.getItem("leccion")=="ddl"){
        $("#examenDDL").show();
        $("#pregunta2DDL").hide();
        $("#pregunta3DDL").hide();
        $("#pregunta4DDL").hide();
        $("#pregunta5DDL").hide();
        var punteo=0;
        $("#pregunta1DDL").on("submit",function(){
            if( $('#p1r4DDL').prop('checked') ) {
                alert('Correcto');
                $("#pregunta1DDL").hide();
                $("#pregunta2DDL").show();
                punteo++;
            }else{
                alert('Incorrecto');
                $("#pregunta1DDL").hide();
                $("#pregunta2DDL").show();
            } 
            return false;
        });
        $("#pregunta2DDL").on("submit",function(){
            if( $('#p2r2DDL').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta2DDL").hide();
                $("#pregunta3DDL").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta2DDL").hide();
                $("#pregunta3DDL").show();
            } 
            return false;
        });
        $("#pregunta3DDL").on("submit",function(){
            if( $('#p3r1DDL').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta3DDL").hide();
                $("#pregunta4DDL").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta3DDL").hide();
                $("#pregunta4DDL").show();
            } 
            return false;
        });
        $("#pregunta4DDL").on("submit",function(){
            if( $('#p4r1DDL').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta4DDL").hide();
                $("#pregunta5DDL").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta4DDL").hide();
                $("#pregunta5DDL").show();
            } 
            return false;
        });
        $("#pregunta5DDL").on("submit",function(){
            if( $('#p5r4DDL').prop('checked') ) {
                alert('Correcto');
                punteo++;
            }else{
                alert('Incorrecto');
            } 
            alert("Su resultado es: "+punteo); 

            return false;
        });
    }
    if(localStorage.getItem("leccion")=="dml"){
        $("#examenDML").show();
        $("#pregunta2DML").hide();
        $("#pregunta3DML").hide();
        $("#pregunta4DML").hide();
        $("#pregunta5DML").hide();
        var punteo=0;
        $("#pregunta1DML").on("submit",function(){
            if( $('#p1r2DML').prop('checked') ) {
                alert('Correcto');
                $("#pregunta1DML").hide();
                $("#pregunta2DML").show();
                punteo++;
            }else{
                alert('Incorrecto');
                $("#pregunta1DML").hide();
                $("#pregunta2DML").show();
            } 
            return false;
        });
        $("#pregunta2DML").on("submit",function(){
            if( $('#p2r3DML').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta2DML").hide();
                $("#pregunta3DML").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta2DML").hide();
                $("#pregunta3DML").show();
            } 
            return false;
        });
        $("#pregunta3DML").on("submit",function(){
            if( $('#p3r1DML').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta3DML").hide();
                $("#pregunta4DML").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta3DML").hide();
                $("#pregunta4DML").show();
            } 
            return false;
        });
        $("#pregunta4DML").on("submit",function(){
            if( $('#p4r2DML').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta4DML").hide();
                $("#pregunta5DML").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta4DML").hide();
                $("#pregunta5DML").show();
            } 
            return false;
        });
        $("#pregunta5DML").on("submit",function(){
            if( $('#p5r1DML').prop('checked') ) {
                alert('Correcto');
                punteo++;
            }else{
                alert('Incorrecto');
            } 
            alert("Su resultado es: "+punteo); 

            return false;
        });
    }
    if(localStorage.getItem("leccion")=="consultas"){
        $("#examenConsultas").show();
        $("#pregunta2Consultas").hide();
        $("#pregunta3Consultas").hide();
        $("#pregunta4Consultas").hide();
        $("#pregunta5Consultas").hide();
        var punteo=0;
        $("#pregunta1Consultas").on("submit",function(){
            if( $('#p1r3Consultas').prop('checked') ) {
                alert('Correcto');
                $("#pregunta1Consultas").hide();
                $("#pregunta2Consultas").show();
                punteo++;
            }else{
                alert('Incorrecto');
                $("#pregunta1Consultas").hide();
                $("#pregunta2Consultas").show();
            } 
            return false;
        });
        $("#pregunta2Consultas").on("submit",function(){
            if( $('#p2r1Consultas').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta2Consultas").hide();
                $("#pregunta3Consultas").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta2Consultas").hide();
                $("#pregunta3Consultas").show();
            } 
            return false;
        });
        $("#pregunta3Consultas").on("submit",function(){
            if( $('#p3r2Consultas').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta3Consultas").hide();
                $("#pregunta4Consultas").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta3Consultas").hide();
                $("#pregunta4Consultas").show();
            } 
            return false;
        });
        $("#pregunta4Consultas").on("submit",function(){
            if( $('#p4r2Consultas').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta4Consultas").hide();
                $("#pregunta5Consultas").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta4Consultas").hide();
                $("#pregunta5Consultas").show();
            } 
            return false;
        });
        $("#pregunta5Consultas").on("submit",function(){
            if( $('#p5r3Consultas').prop('checked') ) {
                alert('Correcto');
                punteo++;
            }else{
                alert('Incorrecto');
            } 
            alert("Su resultado es: "+punteo); 

            return false;
        });
    }
    if(localStorage.getItem("leccion")=="joins"){
        $("#examenJoins").show();
        $("#pregunta2Joins").hide();
        $("#pregunta3Joins").hide();
        $("#pregunta4Joins").hide();
        $("#pregunta5Joins").hide();
        var punteo=0;
        $("#pregunta1Joins").on("submit",function(){
            if( $('#p1r4Joins').prop('checked') ) {
                alert('Correcto');
                $("#pregunta1Joins").hide();
                $("#pregunta2Joins").show();
                punteo++;
            }else{
                alert('Incorrecto');
                $("#pregunta1Joins").hide();
                $("#pregunta2Joins").show();
            } 
            return false;
        });
        $("#pregunta2Joins").on("submit",function(){
            if( $('#p2r2Joins').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta2Joins").hide();
                $("#pregunta3Joins").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta2Joins").hide();
                $("#pregunta3Joins").show();
            } 
            return false;
        });
        $("#pregunta3Joins").on("submit",function(){
            if( $('#p3r2Joins').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta3Joins").hide();
                $("#pregunta4Joins").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta3Joins").hide();
                $("#pregunta4Joins").show();
            } 
            return false;
        });
        $("#pregunta4Joins").on("submit",function(){
            if( $('#p4r1Joins').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta4Joins").hide();
                $("#pregunta5Joins").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta4Joins").hide();
                $("#pregunta5Joins").show();
            } 
            return false;
        });
        $("#pregunta5Joins").on("submit",function(){
            if( $('#p5r1Joins').prop('checked') ) {
                alert('Correcto');
                punteo++;
            }else{
                alert('Incorrecto');
            } 
            alert("Su resultado es: "+punteo); 

            return false;
        });
    }
    if(localStorage.getItem("leccion")=="subqueries"){
        $("#examenSubqueries").show();
        $("#pregunta2Subqueries").hide();
        $("#pregunta3Subqueries").hide();
        $("#pregunta4Subqueries").hide();
        $("#pregunta5Subqueries").hide();
        var punteo=0;
        $("#pregunta1Subqueries").on("submit",function(){
            if( $('#p1r1Subqueries').prop('checked') ) {
                alert('Correcto');
                $("#pregunta1Subqueries").hide();
                $("#pregunta2Subqueries").show();
                punteo++;
            }else{
                alert('Incorrecto');
                $("#pregunta1Subqueries").hide();
                $("#pregunta2Subqueries").show();
            } 
            return false;
        });
        $("#pregunta2Subqueries").on("submit",function(){
            if( $('#p2r3Subqueries').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta2Subqueries").hide();
                $("#pregunta3Subqueries").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta2Subqueries").hide();
                $("#pregunta3Subqueries").show();
            } 
            return false;
        });
        $("#pregunta3Subqueries").on("submit",function(){
            if( $('#p3r1Subqueries').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta3Subqueries").hide();
                $("#pregunta4Subqueries").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta3Subqueries").hide();
                $("#pregunta4Subqueries").show();
            } 
            return false;
        });
        $("#pregunta4Subqueries").on("submit",function(){
            if( $('#p4r4Subqueries').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta4Subqueries").hide();
                $("#pregunta5Subqueries").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta4Subqueries").hide();
                $("#pregunta5Subqueries").show();
            } 
            return false;
        });
        $("#pregunta5Subqueries").on("submit",function(){
            if( $('#p5r3Subqueries').prop('checked') ) {
                alert('Correcto');
                punteo++;
            }else{
                alert('Incorrecto');
            } 
            alert("Su resultado es: "+punteo); 

            return false;
        });
    }
    if(localStorage.getItem("leccion")=="funciones"){
        $("#examenFunciones").show(); 
        $("#pregunta2Funciones").hide();
        $("#pregunta3Funciones").hide();
        $("#pregunta4Funciones").hide();
        $("#pregunta5Funciones").hide();
        var punteo=0;
        $("#pregunta1Funciones").on("submit",function(){
            if( $('#p1r2Funciones').prop('checked') ) {
                alert('Correcto');
                $("#pregunta1Funciones").hide();
                $("#pregunta2Funciones").show();
                punteo++;
            }else{
                alert('Incorrecto');
                $("#pregunta1Funciones").hide();
                $("#pregunta2Funciones").show();
            } 
            return false;
        });
        $("#pregunta2Funciones").on("submit",function(){
            if( $('#p2r4Funciones').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta2Funciones").hide();
                $("#pregunta3Funciones").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta2Funciones").hide();
                $("#pregunta3Funciones").show();
            } 
            return false;
        });
        $("#pregunta3Funciones").on("submit",function(){
            if( $('#p3r1Funciones').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta3Funciones").hide();
                $("#pregunta4Funciones").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta3Funciones").hide();
                $("#pregunta4Funciones").show();
            } 
            return false;
        });
        $("#pregunta4Funciones").on("submit",function(){
            if( $('#p4r3Funciones').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta4Funciones").hide();
                $("#pregunta5Funciones").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta4Funciones").hide();
                $("#pregunta5Funciones").show();
            } 
            return false;
        });
        $("#pregunta5Funciones").on("submit",function(){
            if( $('#p5r4Funciones').prop('checked') ) {
                alert('Correcto');
                punteo++;
            }else{
                alert('Incorrecto');
            } 
            alert("Su resultado es: "+punteo); 

            return false;
        });
    }
        if(localStorage.getItem("leccion")=="roles"){
        $("#examenRoles").show(); 
        $("#pregunta2Roles").hide();
        $("#pregunta3Roles").hide();
        $("#pregunta4Roles").hide();
        $("#pregunta5Roles").hide();
        var punteo=0;
        $("#pregunta1Roles").on("submit",function(){
            if( $('#p1r3Roles').prop('checked') ) {
                alert('Correcto');
                $("#pregunta1Roles").hide();
                $("#pregunta2Roles").show();
                punteo++;
            }else{
                alert('Incorrecto');
                $("#pregunta1Roles").hide();
                $("#pregunta2Roles").show();
            } 
            return false;
        });
        $("#pregunta2Roles").on("submit",function(){
            if( $('#p2r2Roles').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta2Roles").hide();
                $("#pregunta3Roles").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta2Roles").hide();
                $("#pregunta3Roles").show();
            } 
            return false;
        });
        $("#pregunta3Roles").on("submit",function(){
            if( $('#p3r2Roles').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta3Roles").hide();
                $("#pregunta4Roles").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta3Roles").hide();
                $("#pregunta4Roles").show();
            } 
            return false;
        });
        $("#pregunta4Roles").on("submit",function(){
            if( $('#p4r3Roles').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta4Roles").hide();
                $("#pregunta5Roles").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta4Roles").hide();
                $("#pregunta5Roles").show();
            } 
            return false;
        });
        $("#pregunta5Roles").on("submit",function(){
            if( $('#p5r4Roles').prop('checked') ) {
                alert('Correcto');
                punteo++;
            }else{
                alert('Incorrecto');
            } 
            alert("Su resultado es: "+punteo); 

            return false;
        });
    }
          if(localStorage.getItem("leccion")=="conexion"){
        $("#examenConexion").show(); 
        $("#pregunta2Conexion").hide();
        $("#pregunta3Conexion").hide();
        $("#pregunta4Conexion").hide();
        $("#pregunta5Conexion").hide();
        var punteo=0;
        $("#pregunta1Conexion").on("submit",function(){
            if( $('#p1r2Conexion').prop('checked') ) {
                alert('Correcto');
                $("#pregunta1Conexion").hide();
                $("#pregunta2Conexion").show();
                punteo++;
            }else{
                alert('Incorrecto');
                $("#pregunta1Conexion").hide();
                $("#pregunta2Conexion").show();
            } 
            return false;
        });
        $("#pregunta2Conexion").on("submit",function(){
            if( $('#p2r4Conexion').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta2Conexion").hide();
                $("#pregunta3Conexion").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta2Conexion").hide();
                $("#pregunta3Conexion").show();
            } 
            return false;
        });
        $("#pregunta3Conexion").on("submit",function(){
            if( $('#p3r2Conexion').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta3Conexion").hide();
                $("#pregunta4Conexion").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta3Conexion").hide();
                $("#pregunta4Conexion").show();
            } 
            return false;
        });
        $("#pregunta4Conexion").on("submit",function(){
            if( $('#p4r2Conexion').prop('checked') ) {
                alert('Correcto');
                punteo++;
                $("#pregunta4Conexion").hide();
                $("#pregunta5Conexion").show(); 
            }else{
                alert('Incorrecto');
                $("#pregunta4Conexion").hide();
                $("#pregunta5Conexion").show();
            } 
            return false;
        });
        $("#pregunta5Conexion").on("submit",function(){
            if( $('#p5r2Conexion').prop('checked') ) {
                alert('Correcto');
                punteo++;
            }else{
                alert('Incorrecto');
            } 
            alert("Su resultado es: "+punteo); 

            return false;
        });
    }
    $("#sidenav").load("SideNavLeccion.html");
    localStorage.setItem("usuario","admin");     
    var usuario = localStorage.getItem("usuario");
    $.ajax({
        url: 'http://192.168.43.144:8081/perfil.php',
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