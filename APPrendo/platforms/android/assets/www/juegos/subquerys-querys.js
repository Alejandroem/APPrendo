
var nivelessubquerysQuery = {
    0:{
        "consulta":`SELECT Name FROM Customers WHERE ID IN (SELECT ID FROM Customers WHERE salary > 4000);`,
        "tabla":"juegos/img/tabla-salarios.png",
        "resultados":["1 | Ramesh","2 | Carlos","3 | Khilian","4 | Maria"],
        "respuesta":["3 | Khilian","4 | Maria"]
    },
    1:{
        "consulta":`SELECT name,continent FROM world
WHERE population >
(SELECT population FROM world
WHERE name='Russia');`,
        "tabla":"juegos/img/tabla-ciudades.png",
        "resultados":["Brazil","Argentina","Russia","China","Pakistan","Nigeria","Bangladesh"],
        "respuesta":["Brazil","China"]
    },
    2:{
        "consulta":`SELECT name FROM employees WHERE DeptId IN (SELECT DeptId FROM departments WHERE DeptId='IT');`,
        "tabla":"juegos/img/tabla-emp-dept.png",
        "resultados":["Ben","Louisa","Alexander","Diana","Daniel","Irene","James"],
        "respuesta":["Ben","Daniel","James"]
    },
    3:{
        "consulta":`SELECT name, continent FROM world WHERE continent IN (SELECT continent FROM world WHERE name IN ('Chile', 'Japan'));`,
        "tabla":"juegos/img/tabla-continente.png",
        "resultados":["Francia|Europe","India|Asia","Paraguay|South America","Japan|Asia","Italy|Europe","Mexico|North America","Chile|South America","Brazil|South America","Fiji|Oceania","Burundi,Africa"],
        "respuesta":["Paraguay|South America","India|Asia","Japan|Asia","Chile|South America","Brazil|South America"]
    },
    4:{
        "consulta":`SELECT name FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);`,
        "tabla":"juegos/img/tabla-salarios2.png",
        "resultados":["Ben","Louisa","Alexander","Diana","Daniel","Irene","James"],
        "respuesta":["Louisa","Alexander","Irene"]
    }
}
var r =[]
var nivelsubquerysQuery=0;
function subquerysQuerys(){
    document.getElementById("Nivel").textContent = nivelsubquerysQuery+1;
    var nivelSS = nivelessubquerysQuery[nivelsubquerysQuery];
    document.getElementById("subquerys-querys").style.display = 'block';
    

    iniciaTextoSS();

    for(i=0; i<10; i++){
        document.getElementById("rp"+(1+i)).addEventListener("click", function(){
            if(r.length <  nivelessubquerysQuery[nivelsubquerysQuery].respuesta.length){
                r.push(this.textContent);
                this.style.visibility = 'hidden';
            }
            refrescaSS();
        });
    }

    document.getElementById("enviarSS").addEventListener("click", function(){
        enviarSS();
    });
    document.getElementById("resetSS").addEventListener("click", function(){
        iniciaTextoSS();
    });


}


function iniciaTextoSS(){
    document.getElementById("enunciado-SS").innerHTML =  nivelessubquerysQuery[nivelsubquerysQuery].consulta;
    document.getElementById("tabla-SS").src =  nivelessubquerysQuery[nivelsubquerysQuery].tabla;
    r.splice(0,r.length);
    resultados = nivelessubquerysQuery[nivelsubquerysQuery].resultados;
    respuesta = nivelessubquerysQuery[nivelsubquerysQuery].respuesta;
    for(i=0; i<10; i++){
        document.getElementById("r"+(1+i)).style.display = 'none';
        document.getElementById("rp"+(1+i)).style.display = 'none';
    }
    for(i=0; i<resultados.length; i++){
        document.getElementById("rp"+(1+i)).style.display = 'inline';
    }
    for(i=0; i<respuesta.length; i++){
        document.getElementById("r"+(1+i)).style.display = 'inline';
    }

    for(i=0; i<resultados.length; i++){
        document.getElementById("rp"+(1+i)).textContent=resultados[i];
        document.getElementById("rp"+(1+i)).style.visibility = 'visible';
    }
    for(i=0; i<respuesta.length; i++){
        document.getElementById("r"+(1+i)).value = "";
        document.getElementById("r"+(1+i)).style.visibility = 'visible';
    }

}
function refrescaSS(){
    var i=0; 
    for(i=0; i<r.length; i++){
        document.getElementById("r"+(1+i)).value = r[i];
    }
}

function enviarSS(){
    var flag = true;
    var i;
    var nivelSS = nivelessubquerysQuery[nivelsubquerysQuery];

    if(r.length < nivelSS.respuesta.length){
        alert("Debe llenar todos los campos");
        return;
    }

    for (i=0; i < r.length; i++)
        if(nivelSS.respuesta.indexOf(r[i])<0)
            flag = false;

    if(flag){
        nivelsubquerysQuery++;
        document.getElementById("Nivel").textContent = nivelsubquerysQuery+1;
        if(nivelsubquerysQuery==5){
            alert("Ganaste");
        }else{
            alert("Siguiente Nivel!!");
            iniciaTextoSS();
        }   
    }else{
        alert("Error!!");
        iniciaTextoSS();
    }



}