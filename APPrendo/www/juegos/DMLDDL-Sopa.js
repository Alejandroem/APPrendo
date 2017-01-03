var nivel = ["create","alter","drop","table","database","unique","column","primarykey","foreignkey","varchar"];
function startDDLSopa(){
    // start a word find game
    var gamePuzzle = wordfindgame.create(nivel, '#puzzle', '#words');
    $('#solve').click( function() {
        wordfindgame.solve(gamePuzzle, words);
    });
    //alert(nextlevel);
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


$( document ).ready(function() {


});
