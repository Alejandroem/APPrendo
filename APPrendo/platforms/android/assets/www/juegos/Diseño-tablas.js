usuario = {"nombret":"Usuario",
           "tipo":[{"tipo":"int"},{"tipo":"varchar"},{"tipo":"varchar"},{"tipo":"int"},{"tipo":"double"},{"tipo":"binary"}],
           "atr":[{"atr":"id"},{"atr":"Indice"},{"atr":"Nombre"},{"atr":"Apellido"},{"atr":"cantidad"},{"atr":"Telefono"}],
           "size":4,
           "id":"int",
           "Nombre":"varchar",
           "Apellido":"varchar",
           "Telefono":"int"}

Articulo = {"nombret":"Articulo",
            "tipo":[{"tipo":"int"},{"tipo":"varchar"},{"tipo":"double"},{"tipo":"real"},{"tipo":"varchar"},{"tipo":"binary"}],
            "atr":[{"atr":"Apellido"},{"atr":"Codigo"},{"atr":"Descripcion"},{"atr":"Telefono"},{"atr":"varchar"},{"atr":"Nombre"}],
            "size":3,
            "Codigo":"int",
            "Descripcion":"varchar",
            "Nombre":"varchar"}  
Musico = {"nombret":"Musico",
          "tipo":[{"tipo":"int"},{"tipo":"date"},{"tipo":"varchar"},{"tipo":"date"},{"tipo":"varchar"},{"tipo":"real"},{"tipo":"varchar"},{"tipo":"binary"},{"tipo":"varchar"}],
          "atr":[{"atr":"nombre"},{"atr":"Codigo"},{"atr":"id"},{"atr":"fechanacimiento"},{"atr":"Telefono"},{"atr":"fechamuerte"},{"atr":"varchar"},{"atr":"lugarnacimiento"},{"atr":"instrumento"}],
          "size":6,
          "id":"int",
          "nombre":"varchar",
          "instrumento":"varchar",
          "lugarnacimiento":"varchar",
          "fechanacimiento":"date",
          "fechamuerte":"date"
         }
Complejo = {"nombret":"Complejo Deportivo",
            "tipo":[{"tipo":"int"},{"tipo":"bigint"},{"tipo":"varchar"},{"tipo":"real"},{"tipo":"double"},{"tipo":"real"},{"tipo":"varchar"},{"tipo":"binary"}],
            "atr":[{"atr":"estado"},{"atr":"Codigo"},{"atr":"telefono"},{"atr":"nombre"},{"atr":"Descripcion"},{"atr":"areaTotalOcupada"},{"atr":"real"},{"atr":"direccion"}],
            "size":4,
            "direccion":"varchar",
            "telefono":"int",
            "areaTotalOcupada":"double",
            "estado":"varchar"}
Cine = {"nombret":"Cine",
        "tipo":[{"tipo":"int"},{"tipo":"varchar"},{"tipo":"double"},{"tipo":"real"},{"tipo":"int"},{"tipo":"varchar"},{"tipo":"real"},{"tipo":"datetime"},{"tipo":"binary"}],
        "atr":[{"atr":"ubicacion"},{"atr":"Codigo"},{"atr":"cantidadSalas"},{"atr":"telefono"},{"atr":"varchar"},{"atr":"nombre"},{"atr":"horario"},{"atr":"varchar"},{"atr":"horainicio"}],
        "size":5,
        "ubicacion":"varchar",
        "cantidadSalas":"int",
        "nombre":"varchar",
        "horario":"datetime",
        "telefono":"int"}

niveles = {0:usuario,1:Articulo,2:Musico,3:Complejo,4:Cine}

var ratr =[]
var rtipo =[]          
var nivel=0;
function startDisenoTablas(){
    document.getElementById("Diseño-palabras").style.display = 'block';
    document.getElementById("Nivel").textContent = nivel+1;

    var tabla = niveles[nivel];

    iniciaTexto();
    var i;
    for(i=0; i<10; i++){

        document.getElementById("tipo"+(1+i)).addEventListener("click", function(){
            if(rtipo.length < niveles[nivel].size){
                rtipo.push(this.textContent);
                this.style.visibility = 'hidden';
            }
            refresca();

        });
    }
    for(i=0; i<10; i++){

        document.getElementById("atr"+(1+i)).addEventListener("click", function(){
            if(ratr.length < niveles[nivel].size){
                ratr.push(this.textContent);
                this.style.visibility = 'hidden';
            }
            refresca();

        });
    }

    document.getElementById("enviardt").addEventListener("click", function(){
        enviar();
    });
    document.getElementById("resetdt").addEventListener("click", function(){
        iniciaTexto();
    });

}
function enviar(){
    if(!(ratr.length == rtipo.length&&rtipo.length == niveles[nivel].size)){
        alert("Debe llenar todos los campos");
        return;
    }
    var correcto = true;
    var i;
    for(i=0;i < niveles[nivel].size;i++){
        if(niveles[nivel][ratr[i]]!=rtipo[i])
        {
            correcto=false;
            alert("Error intenta de nuevo");
            iniciaTexto();
            break;
        }
    }
    if(correcto)
    {
        if(nivel==4){
            alert("Ganaste");
            document.getElementById("enviardt").style.display = 'none';
            document.getElementById("resetdt").style.display = 'none';
        }else{
            alert("Exito avanza al siguiente nivel")
            nivel++;
            document.getElementById("Nivel").textContent = nivel+1;
            iniciaTexto();
        }
    }
}
function iniciaTexto(){
    tabla = niveles[nivel];
    ratr.splice(0,ratr.length);
    rtipo.splice(0,rtipo.length);
    for(i=0; i<10; i++){
        document.getElementById("ratr"+(1+i)).style.display = 'none';
        document.getElementById("rtipo"+(1+i)).style.display = 'none';
    }
    for(i=0; i<tabla.size; i++){
        document.getElementById("ratr"+(1+i)).style.display = 'inline';
        document.getElementById("rtipo"+(1+i)).style.display = 'inline';
    }
    for(i=0; i<tabla.size; i++){
        document.getElementById("ratr"+(1+i)).value="";
        document.getElementById("rtipo"+(1+i)).value="";
    }
    document.getElementById("tableName").textContent=tabla.nombret;
    for(i=0; i<tabla.tipo.length; i++){
        document.getElementById("tipo"+(1+i)).textContent=tabla.tipo[i].tipo;
        document.getElementById("tipo"+(1+i)).style.visibility = 'visible';
    }
    for(i=0; i<tabla.atr.length; i++){
        document.getElementById("atr"+(1+i)).textContent = tabla.atr[i].atr;
        document.getElementById("atr"+(1+i)).style.visibility = 'visible';
    }

}
function refresca(){
    var i=0; 
    for(i=0; i<ratr.length; i++){
        document.getElementById("ratr"+(1+i)).value = ratr[i];
    }
    for(i=0; i<rtipo.length; i++){
        document.getElementById("rtipo"+(1+i)).value = rtipo[i];
    }
}