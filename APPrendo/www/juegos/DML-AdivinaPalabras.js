palabrasAdivina = {
    0:"insert",1:"delete",2:"select",3:"update",4:"manipulation",5:"data",6:"language",7:"value",8:"order",9:"trigger"
}
var nivelAdivinaPalabras = 0;
var hint=0;
function startDMLAdivinaPalabras(){
    //alert(palabrasAdivina[nivelAdivinaPalabras]);
    var texthint="";
    
    switch(hint){
        case 0:
            texthint = "La palabra inicia con la letra: "
                +palabrasAdivina[nivelAdivinaPalabras].charAt(0);
            break;
        case 1:       
            texthint = "La palabra termina con la letra: "
                +palabrasAdivina[nivelAdivinaPalabras].charAt(palabrasAdivina[nivelAdivinaPalabras].length-1);
            break;
        case 2: 
            texthint = "La palabra tiene "+palabrasAdivina[nivelAdivinaPalabras].length +" letras";
            break;
    }
    
    document.getElementById("pista").innerHTML=texthint;
    
    
}

$( document ).ready(function() {
    $("#palabra").on('keyup', function (e) {
        alert("a");
        if (e.keyCode == 13) {
            alert(document.getElementById("palabra").value);
        }
    });
});



