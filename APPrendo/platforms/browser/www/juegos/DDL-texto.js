createDb = {"imagen":"juegos/img/database.png",
            "enunciado":"Crear la siguiente base de datos:",
            "respuesta":"CREATE DATABASE amazon-db;"}
createTable ={"imagen":"juegos/img/tabla-usuario.png",
              "enunciado":"Crear la siguiente tabla:",
              "respuesta":`CREATE TABLE Persons(
                                id int,
                                Nombre varchar(255),
                                Apellido varchar(255),
                                e-mail varchar(255),
                                password varchar(255)
                            );`
             }

dropTable = {"imagen":"database.png",
             "enunciado":"Crear la siguiente base de datos:",
             "respuesta":"CREATE DATABASE amazon;"}
alterTable = {"imagen":"database.png",
              "enunciado":"Crear la siguiente base de datos:",
              "respuesta":"CREATE DATABASE amazon;"}


constraints = {"imagen":"database.png",
               "enunciado":"Crear la siguiente base de datos:",
               "respuesta":"CREATE DATABASE amazon;"}

nivelesDDL ={0:createDb,1:createTable}
nivelesDDL2={0:createDb}
var nivel = 0
function updateDDL(n){
    document.getElementById("enunciado").innerHTML = nivelesDDL[n].enunciado;
    document.getElementById("imagen").src = nivelesDDL[n].imagen;
}
function startDDL(numeroJuego){

    if(numeroJuego==1){
        nivelesDDL = nivelesDDL2;
        //acá colocar los otros nivelesDDL
    }

    document.getElementById("DDL-texto").style.display = 'block';
    
    updateDDL(nivel);

    var mime = 'text/x-mariadb';
    // get mime type
    if (window.location.href.indexOf('mime=') > -1) {
        mime = window.location.href.substr(window.location.href.indexOf('mime=') + 5);
    }
    window.editor = CodeMirror.fromTextArea(document.getElementById('code'), {
        mode: mime,
        indentWithTabs: true,
        smartIndent: true,
        //lineNumbers: true,
        matchBrackets : true,
        autofocus: true,
        lineWrapping:true,
        extraKeys: {
            "Enter": function (instance) {

            }
        }
    });

    document.getElementById("enviarddl").addEventListener("click", function(){
        var codigo = window.editor.getValue().toUpperCase()
        codigo = codigo.remove(0);
        alert(codigo);
        codigo.substring(0,codigo.indexOf(";"));
        var respuesta = nivelesDDL[nivel].respuesta.toUpperCase()
        
        if(codigo == respuesta){
            alert("Correcto");
            nivel++;    
            updateDDL(nivel);
        }else{
            alert("Error");
        }

    });
    document.getElementById("resetddl").addEventListener("click", function(){
        
    });
}