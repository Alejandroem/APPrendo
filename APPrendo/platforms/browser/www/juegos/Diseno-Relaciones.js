nivelesDisenoRelaciones = {
    0:{
        "Tderecha":"juegos/img/tabla-casa.PNG",
        "Tizquierda":"juegos/img/tabla-direccion.PNG",
        "Respuesta":"uno-uno"},
    1:{}
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

$("document").ready(function(){
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
            alert();
        }
    });    
    $( "#well2" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "isDropped" );
            estado = true;
        }
    });   
    $( "#well3" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "isDropped" );
            estado = true;
        }
    });    
    $( "#well4" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "isDropped" );
            estado = true;
        }
    });
});


function startDisenoRelaciones(){
    document.getElementById("tizquierda").src = nivelesDisenoRelaciones[nivelDisenhoRelaciones].Tizquierda;
    document.getElementById("tderecha").src =  nivelesDisenoRelaciones[nivelDisenhoRelaciones].Tderecha;
    
    document.getElementById("Diseno-relaciones").style.display = 'block';
    
    document.getElementById("3well").addEventListener("mouseover", function(){
        if(!estado){
            document.getElementById("3wells").style.display = 'block';
            document.getElementById("1wells").style.display = 'none';
        }

    });document.getElementById("1well").addEventListener("mouseover", function(){
        if(!estado){
            document.getElementById("1wells").style.display = 'block';
            document.getElementById("3wells").style.display = 'none';
        }
    });
    document.getElementById("enviardr").addEventListener("click", function(){
        
    });
    document.getElementById("resetdr").addEventListener("click", function(){
        
    });

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