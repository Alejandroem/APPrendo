var palabrasNivelSOpa;
//var nivel = ["create","alter"];

var leccion = localStorage.getItem("leccion");

if(leccion=="ddl"){
    palabrasNivelSOpa = ["create","alter","drop","table","database","unique","column","primary","foreing","key"];
}else if(leccion=="funciones"){
    palabrasNivelSOpa = ["round","avg","count","max","min","sum","groupby","having","ucase","lcase","mid"];
}

function startDDLSopa(){
    document.getElementById("Nivel").textContent = 1;
    document.getElementById("DDL-sopa").style.display = 'block';
    // start a word find game
    var gamePuzzle = wordfindgame.create(palabrasNivelSOpa, '#puzzle', '#words');
    /*$('#solve').click( function() {
        wordfindgame.solve(gamePuzzle, words);
    });*/
    //alert(nextlevel);
    $("#iniciarSopa").click(function(){
        alert("Bla");
        $("body").css("overflow","hidden");
        $("body").css("position","relative");
        $("html").css("overflow","hidden");
        $(document).scrollTop($("#DDL-sopa").position().top);
    });
    $("#detenerSopa").click(function(){
        
    });
    $("#puzzle").mouseup(function() {

        if(nextlevel ==true){
            nextlevel = false;
            alert("Ganaste!!! :D");
        }
    });

    // create just a puzzle, without filling in the blanks and print to console
    var puzzle = wordfind.newPuzzle(words, {height: 18, width:18, fillBlanks: false}
                                   );
    wordfind.print(puzzle);

}

