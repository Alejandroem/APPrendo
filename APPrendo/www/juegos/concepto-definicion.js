var nivelesConceptoDefinicion = {
    0:{
        conceptos:[
            "securityadmin",
            "backupoperator",
            "ddladmin",
            "owner"
        ],
        definiciones:[
            "pueden modificar la pertenencia a roles y administrar permisos.",
            "pueden realizar todas las actividades de configuración y mantenimiento en la base de datos y también pueden quitar la base de datos en SQL Server.",
            "pueden ejecutar cualquier comando del lenguaje de definición de datos (DDL) en una base de datos."
        ],
        acept:[
            "#con1",
            "#con4",
            "#con3"
        ]
    },
    1:{
        conceptos:[
            "denydatareader",
            "datareader",
            "datawriter",
            "denydatawriter"
        ],
        definiciones:[
            "pueden agregar, eliminar o cambiar datos en todas las tablas de usuario",
            "no pueden leer datos de las tablas de usuario dentro de una base de datos",
            "pueden leer todos los datos de todas las tablas de usuario"
        ],
        acept:[
            "#con3",
            "#con1",
            "#con2"
        ]
    },
    2:{
        conceptos:[
            "usuarios",
            "roles fijos",
            "permisos",
            "roles definidos"
        ],
        definiciones:[
            "roles que el usuario puede crear y asignarle permisos específicos",
            "sirven para brindar seguridad a la base de datos",
            "roles ya definidos en las bases de datos"
        ],
        acept:[
            "#con4",
            "#con3",
            "#con2"
        ]
    },
    3:{
        conceptos:[
            "alter",
            "execute",
            "delete",
            "control"
        ],
        definiciones:[
            "Dispone de todos los permisos definidos para el elemento protegible.",
            "Permite ejecutar scripts externos, procedimientos, funciones escalares y de agregado",
            "Permite cambiar las propiedades de un elemento determinado"
        ],
        acept:[
            "#con4",
            "#con2",
            "#con1"
        ]
    },
    4:{
        conceptos:[
            "deny",
            "revoke",
            "grant",
            "references"
        ],
        definiciones:[
            "revoca un permiso de manera que no pueda ser heredado",
            "Concede un permiso",
            "Revoca un permiso"
        ],
        acept:[
            "#con1",
            "#con3",
            "#con2"
        ]
    }

}
var nivelConceptoDefinicion = 0;
var avance=0;
function startConceptoDefinicion(){
    document.getElementById("concepto-definicion").style.display = 'block';
    document.getElementById("Nivel").textContent = nivelConceptoDefinicion+1;
    document.getElementById("concepto-definicion").innerHTML="";
    document.getElementById("concepto-definicion").innerHTML = `<div id="concepto-definicion" style="width:100%">
<div style="float:left">
<div id="con1" class="square"></div>                  
</div>
<div style="float:left">
<div id="con2" class="square"></div>              
</div>
<div style="float:left">
<div id="con3" class="square"></div>              
</div>
<div style="float:left">
<div id="con4" class="square"></div>              
</div>
<div style="float:left;margin-left:50px;">
<div id="def1" class="squaredotted"></div> 
</div>
<div style="float:left;margin-left:50px;">
<div id="def2" class="squaredotted"></div> 
</div>
<div style="float:left;margin-left:50px;">
<div id="def3" class="squaredotted"></div> 
</div>
</div>`;
    var nivelActual = nivelesConceptoDefinicion[nivelConceptoDefinicion];
    var i;
    for(i=0;i<4;i++){
        $("#con"+(i+1)).html(nivelActual.conceptos[i]);
    }
    $(".square").draggable({
        revert: "invalid",
        /*snap: ".squaredotted",
        snapMode: "inner",
*/        drag: function (event, ui) {
            //alert("Error!!");
            //$("#info").html("<font color=red>This square will go back to it`s original position, unless it`s dropped in target zone.</font> ");
        }
    });

    for(i=0;i<3;i++){
        /*       alert("#def"+(i+1));
        alert(nivelActual.acept[i]);*/
        $("#def"+(i+1)).html(nivelActual.definiciones[i]);
        $("#def"+(i+1)).droppable({
            accept: nivelActual.acept[i],
            drop: function (event, ui) {
                $(this).css("background-color", "lightgreen")
                avance++;
                if(avance==3){
                    if(nivel==4){
                        alert("Ganaste!!!");
                    }else{ 
                        alert("Siguiente Nivel");
                        nivelConceptoDefinicion++;
                        avance =0;
                        startConceptoDefinicion();
                    }
                }
            },
            out: function (event, ui) {
                $(this).css("background-color", "")
                avance--;
            }
        });
    }

    /*document.getElementById("Nivel").textContent = nivelConceptoDefinicion+1;
    iniciarTextoConceptoDefinicion();
    var i=0;
    for(i;i<4;i++){
        document.getElementById("definicion"+(1+i)).addEventListener("click", function(){
            if(this.textContent ==nivelesConceptoDefinicion[nivelConceptoDefinicion].respuesta){
                if(nivelConceptoDefinicion<5){
                    alert("Siguiente nivel!!");
                    nivelConceptoDefinicion++;
                    document.getElementById("Nivel").textContent = nivelConceptoDefinicion+1;
                    iniciarTextoConceptoDefinicion();
                }
                else{
                    alert("Ganaste!!");
                }
            }
            else{
                alert("Error concepto incorrecto!!");
            }

        });
    }*/
}/*

function iniciarTextoConceptoDefinicion(){
    concepto = nivelesConceptoDefinicion[nivelConceptoDefinicion];
    document.getElementById("concepto").textContent = concepto.concepto;
    document.getElementById("definicion1").textContent = concepto.definicion1;
    document.getElementById("definicion2").textContent = concepto.definicion2;
    document.getElementById("definicion3").textContent = concepto.definicion3;
    document.getElementById("definicion4").textContent = concepto.definicion4;
}
*/