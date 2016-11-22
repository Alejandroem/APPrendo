
$(document).ready(function(){
   $("#paso1").hide();
   $("#sidenav").load("SideNavLeccion.html");
    if(localStorage.getItem("leccion")=="introduccion"){
       $("#introduccion").hide();
     }
    $("#tema2").on('click',function(){
        $("#objetivos").hide();
        $("#paso1").show();
    });
   /* if(localStorage.getItem("tema")=="tema2"){
        alert(localStorage.getItem("tema"));
        $("objetivos").hide();
        $("paso1").show();
    }*/
  $('.animacionQueEsSQLTitulo').textillate({ 
  in: { effect: 'splat' },
  out: { effect: 'foldUnfold', sync: true },
        loop: false
});
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