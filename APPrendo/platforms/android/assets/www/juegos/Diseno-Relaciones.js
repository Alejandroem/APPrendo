nivelesDisenoRelaciones = {
    0:{
        "Tderecha":"juegos/img/tabla-casa.PNG",
        "Tizquierda":"juegos/img/tabla-direccion.PNG",
        "Respuesta":"uno-uno"
    },
    1:{"Tderecha":"juegos/img/tabla-casa.PNG",
       "Tizquierda":"juegos/img/tabla-direccion.PNG",
       "Respuesta":"muchos-muchos"
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
    $('#uno-uno').draggable();
    $('#uno-muchos-d').draggable();
    $('#uno-muchos-i').draggable();
    $('#muchos-muchos').draggable();
    $('#tabla-intermedia').draggable();
    $( "#well1" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "isDropped" );
            estado = true;
            //alert($(ui.draggable).attr("id"));
            estadoTablero.well1 = $(ui.draggable).attr("id");
            chequeaNivel(nivelesDisenoRelaciones[nivelDisenhoRelaciones].Respuesta);

        }
    });    
    $( "#well2" ).droppable({
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

function startDisenoRelaciones(){
    document.getElementById("Diseno-relaciones").style.display = 'block';
    reiniciarTablero();


    document.getElementById("enviardr").addEventListener("click", function(){

    });
    document.getElementById("resetdr").addEventListener("click", function(){

        reiniciarTablero();
    });

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
        case "unos-muchos-i":
            if(estadoTablero.well1 == "uno-muchos-i"){
                nextLevel=true;
            }
            break;
        case "muchos-muchos":
            if(estadoTablero.well2 == "uno-muchos-i"
               && estadoTablero.well3 == "tabla-intermedia"
               && estadoTablero.well4 == "uno-muchos-d"){
                nextLevel=true;
            }
            break;
    }
    if (nextLevel){
        nivelDisenhoRelaciones++;
        alert("Correcto!! siguiente nivel!!");
        reiniciarTablero();
    }else if(relacion!="muchos-muchos"){
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
    document.getElementById("herramientas").innerHTML="";
    document.getElementById("herramientas").innerHTML= `<div id="1well">
<img id="uno-uno" class="ui-widget-content" style="width:100%; margin: 2%;" src="juegos/img/uno-uno.png">
<img id="uno-muchos-d" style="width:100%; margin: 2%;" class="ui-widget-content" src="juegos/img/uno-muchos-d.png">
<img id="uno-muchos-i" style="width:100%; margin: 2%;" class="ui-widget-content" src="juegos/img/uno-muchos-i.png">
<img id="muchos-muchos" style="width:100%; margin: 2%;" class="ui-widget-content"src="juegos/img/muchos-muchos.png">
</div>
<div id="3well">
<img id="tabla-intermedia" style="width:100%; margin: 2%;" class="ui-widget-content" src="juegos/img/tabla-intermedia.png" style="padding:0.5%">
</div>`;
    document.getElementById("panelJuego").innerHTML ="";
    document.getElementById("panelJuego").innerHTML =`<div class="row">
<div class="col-xs-4 col-md-3 ">
<img id="tizquierda" style="width:100%;" >
</div>
<div id="1wells" hidden>
<div id="well1" class="col-xs-3 col-md-2 padding-0" style="height:50px; border: 1px solid black;">
</div>
</div>
<div id="3wells" hidden>
<div class="col-xs-4 col-md-5">
<div class="row">
<div id="well2" class="col-xs-4 col-md-4 padding-0" style="border: 1px solid black;">
<br>

</div>
<div id="well3" class="col-xs-4 col-md-4 padding-0" style="border: 1px solid black;">
<br>

</div>
<div id="well4" class="col-xs-4 col-md-4 padding-0" style="border: 1px solid black;">
<br>

</div>
</div>
</div>
</div>
<div class="col-xs-4 col-md-3 ">
<img id="tderecha" style="width:100%" >
</div>
</div>`;

    document.getElementById("tizquierda").src = nivelesDisenoRelaciones[nivelDisenhoRelaciones].Tizquierda;
    document.getElementById("tderecha").src =  nivelesDisenoRelaciones[nivelDisenhoRelaciones].Tderecha;
    document.getElementById("3well").addEventListener("mouseover", function(){
        if(!estado){
            document.getElementById("3wells").style.display = 'block';
            document.getElementById("1wells").style.display = 'none';
        }

    });
    document.getElementById("1well").addEventListener("mouseover", function(){
        if(!estado){
            document.getElementById("1wells").style.display = 'block';
            document.getElementById("3wells").style.display = 'none';
        }
    });
    estado = false;

    colocarDraggable();

}
/*
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    estado = true;
    ev.target.appendChild(document.getElementById(data));
}*/