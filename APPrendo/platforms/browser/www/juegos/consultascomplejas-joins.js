var nivelesConsultasComplejas = ["right","inner","full","left"];

var nivelConsultasComplejas = 0;
var innerHTMLCC="";
function reiniciarTextoCS(){
    document.getElementById("Nivel").textContent = nivelConsultasComplejas+1;
    document.getElementById("consultasComplejas-joins").innerHTML = innerHTMLCC;

    switch(nivelesConsultasComplejas[nivelConsultasComplejas]){
        case "right": 
            document.getElementById("tablarcc").src ="juegos/img/tabla-right-join.png";
            break;
        case "inner":
            document.getElementById("tablarcc").src ="juegos/img/tabla-inner-join.png";
            break;
        case "full":
            document.getElementById("tablarcc").src ="juegos/img/tabla-full-join.png";
            break;
        case "left":
            document.getElementById("tablarcc").src ="juegos/img/tabla-left-join.png";
            break;
    }
}

function startConsultasJoins(){
    document.getElementById("consultasComplejas-joins").style.display = "block";
    innerHTMLCC = document.getElementById("consultasComplejas-joins").innerHTML;
    reiniciarTextoCS();
    setDraggableCJ();

}

function setDraggableCJ(){
    $(".draggable").draggable({
        revert: "invalid",
        stack: ".squaredotted",
        /*snap: ".squaredotted",
        snapMode: "inner",*/
        drag: function (event, ui) {
        }
    });
    $(".squaredotted").droppable({
        accept: "#"+nivelesConsultasComplejas[nivelConsultasComplejas],
        drop: function (event, ui) {
            $(this).css("background-color", "lightgreen")
            /*alert($(ui.draggable).attr("id"));
            alert(nivelesConsultasComplejas[nivelConsultasComplejas]);*/
            if(nivelesConsultasComplejas[nivelConsultasComplejas]==$(ui.draggable).attr("id")){
                nivelConsultasComplejas++;
                if(nivelConsultasComplejas==4){
                    alert("Ganaste!!!");
                }else{
                    alert("Siguiente nivel");
                    reiniciarTextoCS();
                    setDraggableCJ();
                }
            }
        },
        out: function (event, ui) {
            $(this).css("background-color", "")

        }
    });
}