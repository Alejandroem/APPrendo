var texto;
var score;
var botones = [];
var nivelIntroduccionPalabras=0;

var leccion = localStorage.getItem("leccion");
var oraciones;
if(leccion=="introduccion"){
    oraciones = ["SQL puede manipular informacion de una DB",
                 "Una tabla esta formada por filas y columnas",
                 "SQL significa lenguaje estructurado de consultas",
                 "SQL puede colocar permisos en tablas procesos y vistas",
                 "La informacion de un RDBMS se guarda en objetos llamados tablas"];
}
else if(leccion =="dml"){
    oraciones =[
        "DELETE FROM customers;",
        "SELECT * FROM customers;",
        "DELETE FROM customers WHERE CustomerName= Alfreds;",
        "INSERT INTO Customers (CustomerName) VALUES ('Cardinal');",
        "UPDATE Customers SET ContactName= Alfred WHERE CustomerID=1;"
    ];
}
var palabras = [];
var avance=0;
var rect;
var finish = false;
function startGame() {
    document.getElementById("juegoIntroduccion-Palabras").style.display = 'block';
    document.getElementById("Nivel").textContent = nivelIntroduccionPalabras+1;
    botones = [];
    console.log("Botones.lenght "+botones.length);
    palabras = [];
    palabras = oraciones[nivelIntroduccionPalabras].split(' ');
    var pos = 10;
    var posY = 200;
    var i;
    var tPalabras = [];
    for(i =0;i<palabras.length;i++){
        tPalabras.push(palabras[i]);
    }
    var tamanioX = document.getElementById("contenidoleccion").offsetWidth / 8;
<<<<<<< HEAD
    console.log("tamanioX "+tamanioX);
=======
>>>>>>> master
    tPalabras = shuffle(tPalabras);
    for(i=0; i<tPalabras.length;i++){
        if(i == 7){
            pos = 10;
            posY += 60;
        }
        console.log("PosX "+ pos +"posy "+posY);
        botones.push(new component(tamanioX, 30, "#0B6138", pos, posY));
        botones[i].palabra = tPalabras[i];	
        pos+=tamanioX + tamanioX * 0.03;
    }


    var posTexto = document.getElementById("contenidoleccion").offsetWidth/3;
    texto = new component("30px", "Consolas", "#0B3B2E", posTexto,50, "text");
    score = new component("30px", "Consolas", "black", 50,150, "text");
    score.text=avance;
    texto.text ="";
    myGameArea.start();

}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {

        this.canvas.width = document.getElementById("Introduccion-palabras").offsetWidth * 0.98;
        this.canvas.height = 300;
        this.context = this.canvas.getContext("2d");
        var contenido = document.getElementById("Introduccion-palabras");
        contenido.insertBefore(this.canvas,contenido.childNodes[0]);
//        rect = contenido.getBoundingClientRect();
        console.log(rect);
        //alert(rect.top+" "+rect.left);
        this.interval = setInterval(updateGameArea, 20);
        /*
        window.addEventListener('mousedown', function (e) {
            myGameArea.x = e.pageX;
            myGameArea.y = e.pageY;
        })*//*
        window.addEventListener('mouseup', function (e) {
            myGameArea.x = false;
            myGameArea.y = false;
        })*/
        var posi = $("#Introduccion-palabras").position();
        
        window.addEventListener('click', function(e){
            //alert(e.pageX+ " "+e.pageY);
            myGameArea.x = e.pageX-posi.left;
            //myGameArea.x = e.pageX-rect.left;
            myGameArea.y = e.pageY-posi.top;
            console.log("click myGameArea.x "+myGameArea.x+" myGameArea.y "+myGameArea.y);
            //myGameArea.y = e.pageY-rect.top;
        })
        /*
        window.addEventListener('touchstart', function (e) {
            myGameArea.x = e.pageX;
            myGameArea.y = e.pageY;
        })
        window.addEventListener('touchend', function (e) {
            myGameArea.x = false;
            myGameArea.y = false;
        })*/
    },
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
function component(width, height, color, x, y, type) {
    this.palabra ="";
    this.type = type;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.clicked = function() {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var clicked = true;
        if ((mybottom < myGameArea.y) || (mytop > myGameArea.y) || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
            clicked = false;
        }
        return clicked;
    }
}
function updateGameArea() {
    myGameArea.clear();

    if (myGameArea.x && myGameArea.y) {
        var i;
        for(i=0; i<botones.length;i++){
            if(botones[i].clicked())
            {
                texto.text = botones[i].palabra;
                if(botones[i].palabra==palabras[avance]){
                    avance++;
                }else{
                    avance=0;	
                }
                score.text =avance +" " +botones[i].palabra+" "+palabras[avance];

            }
        }   
        myGameArea.x =false;
        myGameArea.y = false;


    }

    var i;
    for(i=0; i<botones.length;i++){
        botones[i].update();
    }

    //score.update();
    texto.update();

    if(avance==palabras.length &&!finish){
        nivelIntroduccionPalabras++;
        if(nivelIntroduccionPalabras==5){
            alert("Ganaste!!");
            finish=true;
        }else{
            alert("Siguiente Nivel");
            avance = 0;
            document.getElementById("Nivel").textContent = nivelIntroduccionPalabras+1;
            startGame();
        }
    }
}
