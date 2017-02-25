

var palabrasOrdena;

var leccion = localStorage.getItem("leccion");

if(leccion=="consultas"){
    palabrasOrdena = [
        "select name from customers where CustomerID =1;",
        "select distinct city from customers;",
        "select name from customers where Country= 'Germany' and City= 'Berlin';",
        "select name from customers where City= 'London' or City= 'Berlin';",
        "select name from customers where City in ('Berlin', 'London');",
        "select name from customers where City like '%n'"
    ];
}else if(leccion=="subqueries"){
    palabrasOrdena = [
        "No se puede utilizar between con la subquery",
        "Deben ir encerradas entre parentesis",
        "Solo puede tener una columna en la clausula select",
        "no puede ser utilizada directamente en una funcion set (update)",
        "No se puede utilizar order by",
        "Subqueries que devuelven multiples filas solo pueden ser utilizados por operadores que soportan multiples resultados"
    ];
}
var nivelPalabrasOrdena = 0;

function startConsultaOrdena(){
    document.getElementById("consultas-ordenaPalabras").style.display = 'block';
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
            if(palabra.toUpperCase()==respuesta.toUpperCase()){
                nivelPalabrasOrdena++;
                if(nivelPalabrasOrdena<5){
                    alert("Correcto siguiente nvel!!");
                    startConsultaOrdena();
                    document.getElementById("respuesta-op").value = "";
                }else{
                    alert("Ganaste!!");
                }
            }else{
                alert("Frase incorrecta intenta de nuevo");
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