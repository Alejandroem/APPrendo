const palabrasOrdena = ["drop","alter","create database usuarios"];
nivelPalabrasOrdena = 0;
function startConsultaOrdena(){
    document.getElementById("Nivel").textContent = nivelPalabrasOrdena+1;
    var palabras = palabrasOrdena[nivelPalabrasOrdena].split(" ");
    document.getElementById("Palabra-op").innerHTML ="";
    document.getElementById("Palabra-op").innerHTML = desordenaPalabra(palabras[0]);
    
    var i;
    for (i=1; i < palabras.length; i++){
       // alert(palabras[i]);
        document.getElementById("Palabra-op").innerHTML =document.getElementById("Palabra-op").innerHTML+ " "+desordenaPalabra(palabras[i]);
    }
    
    //document.getElementById("Palabra-op").innerHTML = desordenaPalabra();
}


$( document ).ready(function() {
    //alert(Object.keys(palabrasAdivina).length);
    $("#respuesta-op").on('keyup', function (e) {
        if (e.keyCode == 13) {
            var palabra = palabrasOrdena[nivelPalabrasOrdena];
            var respuesta = document.getElementById("respuesta-op").value;
            if(palabra==respuesta){
                alert("Correcto");
                nivelPalabrasOrdena++;
                startConsultaOrdena();
                document.getElementById("respuesta-op").value = "";
            }
            document.getElementById("Nivel").textContent = nivelPalabrasOrdena+1;
        }
    });
});


function desordenaPalabra(palabra){
     var a = palabra.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}