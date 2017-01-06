palabrasAdivina = {
    0:"insert",1:"delete",2:"select",3:"update",4:"manipulation",5:"data",6:"language",7:"value",8:"order",9:"trigger"
}
var nivelAdivinaPalabras = 0;
var intentosadivina =0;
var hint=0;
function startDMLAdivinaPalabras(){
    document.getElementById("DML-AdivinaPalabras").style.display = 'block';
    document.getElementById("palabraAdivina").value="";
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
    document.getElementById("Nivel").textContent = nivelAdivinaPalabras+1;

}

$( document ).ready(function() {
    //alert(Object.keys(palabrasAdivina).length);
    $("#palabraAdivina").on('keyup', function (e) {
        if (e.keyCode == 13) {
            if(document.getElementById("palabraAdivina").value == palabrasAdivina[nivelAdivinaPalabras]){
                if(nivelAdivinaPalabras<Object.keys(palabrasAdivina).length-1){
                    alert("Exito, Siguiente palabra!!");
                    hint=0;
                    intentosadivina=0;
                    nivelAdivinaPalabras++;
                    startDMLAdivinaPalabras();
                    
                }else{
                    alert("Ganaste!! ");
                }
            }
            else{
                if(intentosadivina>9){
                    alert("Perdiste, inicia de nuevo");
                    nivelAdivinaPalabras=0;
                    hint=0;
                    startDMLAdivinaPalabras();
                }else{
                    intentosadivina++;  
                }

                alert("Error intentos restantes: "+(10-intentosadivina));
                if(hint<2){
                    hint++;
                }
                else{
                    hint=0;
                }
                startDMLAdivinaPalabras();
            }
            document.getElementById("Nivel").textContent = nivelAdivinaPalabras+1;
        }
    });
});



