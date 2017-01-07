var nivelesConsultasComplejas = {
    0:{
        "tablaI":"juegos/img/tabla-salarios.png",
        "tablaD":"juegos/img/tabla-salarios.png",
        "tablaR":"juegos/img/tabla-salarios.png",
        "respuesa":"inner"

    }

}

var nivelConsultasComplejas = 0;
function reiniciarTextoCS(){
    nivelCJ = nivelesConsultasComplejas[nivelConsultasComplejas];
    document.getElementById("tablaicc").src = nivelCJ.tablaI;
    document.getElementById("tabladcc").src = nivelCJ.tablaD;
    document.getElementById("tablarcc").src = nivelCJ.tablaR;
}

function startConsultasJoins(){
    reiniciarTextoCS();
    $(".draggable").draggable({
        revert: "invalid",
        stack: ".squaredotted",
        /*snap: ".squaredotted",
        snapMode: "inner",*/
        drag: function (event, ui) {
        }
    });
    $(".squaredotted").droppable({
//      accept: ".draggable",
        drop: function (event, ui) {
            $(this).css("background-color", "lightgreen")
            alert($(ui.draggable).attr("id"));
            if(nivelesConsultasComplejas[nivelConsultasComplejas].respuesa==$(ui.draggable).attr("id")){
                
            }
        },
        out: function (event, ui) {
            $(this).css("background-color", "")
            
        }
    });
    
    
}

