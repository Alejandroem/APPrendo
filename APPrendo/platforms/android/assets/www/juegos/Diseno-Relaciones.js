nivelesDisenoRelaciones = {
    0:{
        "Tderecha":"juegos/img/tabla-estudiante.png",
        "Tizquierda":"juegos/img/tabla-direccion.png",
        "Respuesta":"uno-uno"
    },
    1:{"Tderecha":"juegos/img/tabla-categoria.png",
       "Tizquierda":"juegos/img/tabla-producto.png",
       "Respuesta":"uno-muchos-i"
      },
    2:{"Tderecha":"juegos/img/tabla-estudiante.png",
       "Tizquierda":"juegos/img/tabla-curso.png",
       "Respuesta":"muchos-muchos"
      },
    3:{"Tderecha":"juegos/img/tabla-telefono.png",
       "Tizquierda":"juegos/img/tabla-usuario.png",
       "Respuesta":"uno-muchos-d"
      }
}

var estado= false;
var nivelDisenhoRelaciones = 0;

function EstadoTablero (){
    this.well1 = "";
    this.well2 = "";
    this.well3 = "";
    this.well4 = "";
}
var estadoTablero = new EstadoTablero   ();

function colocarDraggable(){
    stack: ".well1"
    $('#uno-uno').draggable({
        revert: "invalid",
        /*snap: ".squaredotted",
        snapMode: "inner",*/
        drag: function (event, ui) {
<<<<<<< HEAD
//            $(this).css("width", "50%")
=======
            $(this).css("width", "50%")
>>>>>>> master
        }/*,
        stop: function(event, ui){
            $(this).css("width", "50%")
        }*/
    });
    $('#uno-muchos-d').draggable({
        revert: "invalid",
        /*snap: ".squaredotted",
        snapMode: "inner",*/
        drag: function (event, ui) {
<<<<<<< HEAD
//            $(this).css("width", "50%")
=======
            $(this).css("width", "50%")
>>>>>>> master
        }
    });
    $('#uno-muchos-i').draggable({
        revert: "invalid",
        /*snap: ".squaredotted",
        snapMode: "inner",*/
        drag: function (event, ui) {
<<<<<<< HEAD
//            $(this).css("width", "50%")
=======
            $(this).css("width", "50%")
>>>>>>> master
        }
    });
    $('#muchos-muchos').draggable({
        revert: "invalid",
        /*snap: ".squaredotted",
        snapMode: "inner",*/
        drag: function (event, ui) {
<<<<<<< HEAD
//            $(this).css("width", "50%")
=======
            $(this).css("width", "50%")
>>>>>>> master
        }
    });
    $('#tabla-intermedia').draggable({
        revert: "invalid",
        /*snap: ".squaredotted",
        snapMode: "inner",*/
        drag: function (event, ui) {
<<<<<<< HEAD
//            $(this).css("width", "50%")
=======
            $(this).css("width", "50%")
>>>>>>> master
        }
    });
    $( "#well1" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "isDropped" );
            /*$(this).css("background-color", "lightgreen")*/
            //alert($(ui.draggable).attr("id"));
            estado = true;
            estadoTablero.well1 = $(ui.draggable).attr("id");
            chequeaNivel(nivelesDisenoRelaciones[nivelDisenhoRelaciones].Respuesta);

        }
    });    
    $( "#well2" ).droppable({
        //        accept:"#uno-uno" ,
        drop: function( event, ui ) {
            $( this )
                .addClass( "isDropped" );
            estado = true;
            estadoTablero.well2 = $(ui.draggable).attr("id");
            chequeaNivel(nivelesDisenoRelaciones[nivelDisenhoRelaciones].Respuesta);
        }
    });   
    $( "#well3" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "isDropped" );
            estado = true;
            estadoTablero.well3 = $(ui.draggable).attr("id");
            chequeaNivel(nivelesDisenoRelaciones[nivelDisenhoRelaciones].Respuesta);
        }
    });    
    $( "#well4" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "isDropped" );
            estado = true;
            estadoTablero.well4 = $(ui.draggable).attr("id");
            chequeaNivel(nivelesDisenoRelaciones[nivelDisenhoRelaciones].Respuesta);
        }
    });
}
var panelHerramientas ="";
var panelJuego="";
function startDisenoRelaciones(){
    document.getElementById("Nivel").textContent = nivelDisenhoRelaciones+1;
    document.getElementById("Diseno-relaciones").style.display = 'block';
    panelHerramientas = document.getElementById("herramientas").innerHTML;
    panelJuego = document.getElementById("panelJuego").innerHTML;
    reiniciarTablero();

}

function chequeaNivel(relacion){
    var nextLevel=false;
    switch(relacion){
        case "uno-uno":
            if(estadoTablero.well1 == "uno-uno"){
                nextLevel=true;
            }
            break;
        case "uno-muchos-d":
            if(estadoTablero.well1 == "uno-muchos-d"){
                nextLevel=true;
            }
            break;
        case "uno-muchos-i":
            if(estadoTablero.well1 == "uno-muchos-i"){
                nextLevel=true;
            }
            break;
        case "muchos-muchos":
            if(estadoTablero.well2 == "uno-muchos-d"
               && estadoTablero.well3 == "tabla-intermedia"
               && estadoTablero.well4 == "uno-muchos-i"){
                nextLevel=true;
            }
            break;


    }
    if (nextLevel){
        nivelDisenhoRelaciones++;
        if(nivelDisenhoRelaciones==4){
            alert("Ganaste!!");
            return;
        }

        document.getElementById("Nivel").textContent = nivelDisenhoRelaciones+1;
        alert("Correcto!! siguiente nivel!!");
        reiniciarTablero();
    }	
    else if(relacion!="muchos-muchos"){
        alert("Error!!");
        reiniciarTablero();
    }else if(estadoTablero.well2.length >0
             && estadoTablero.well3.length >0
             && estadoTablero.well4.length >0){
        reiniciarTablero();
        alert("Error!!");

    }


}

function reiniciarTablero(){
    estadoTablero = new EstadoTablero();
    document.getElementById("herramientas").innerHTML="";
    document.getElementById("herramientas").innerHTML= panelHerramientas;
    document.getElementById("panelJuego").innerHTML ="";
    document.getElementById("panelJuego").innerHTML =panelJuego;

    document.getElementById("tizquierda").src = nivelesDisenoRelaciones[nivelDisenhoRelaciones].Tizquierda;
    document.getElementById("tderecha").src =  nivelesDisenoRelaciones[nivelDisenhoRelaciones].Tderecha;
    document.getElementById("3well").addEventListener("mouseover", function(){
        if(!estado){
            document.getElementById("3wells").style.display = 'block';
            document.getElementById("1wells").style.display = 'none';
            document.getElementById("uno-muchos-d").src = "juegos/img/uno-muchos-d-a.png";
            document.getElementById("uno-muchos-i").src = "juegos/img/uno-muchos-i-a.png";
        }

    });
    document.getElementById("1well").addEventListener("mouseover", function(){
        if(!estado){
            document.getElementById("1wells").style.display = 'block';
            document.getElementById("3wells").style.display = 'none';
            document.getElementById("uno-muchos-d").src = "juegos/img/uno-muchos-d.png";
            document.getElementById("uno-muchos-i").src = "juegos/img/uno-muchos-i.png";
        }
    });
    estado = false;

    colocarDraggable();

}
