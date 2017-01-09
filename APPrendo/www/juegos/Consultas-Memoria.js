var images = [];
var leccion = localStorage.getItem("leccion");
var nivelMemoria =0;
function startConsultasMemoria(){
    document.getElementById("Nivel").textContent = 1;
    document.getElementById("consultas-memoria").style.display = 'block';


    var inicio =0;
    var final = 8;
    if(leccion=="consultas"){
        inicio =0;
        final =8;
    }else if(leccion=="conexion"){
        inicio =8;
        final = 16;
    }

    /*alert(final);
    alert(inicio);*/
    // get images, place them in an array & randomize the order
    for (var i = inicio; i < final; i++) {
        //var rand = Math.floor(Math.random() * (1200 - 900 + 1) + 900); 
        //var img = 'http://lolcat.com/images/lolcats/' + rand + '.jpg';
        var img = 'juegos/img/' + (i+1) + '.png';
        //var img =  'https://developer.android.com/images/tools/studio/ic_devices_grey.png';
        images.push(img);
        images.push(img);
    }
    randomizeImages();

    // output images then hide them
    var output = "<ol>"; 
    for (var i = 0; i < 16; i++) { 
        output += "<li class=\"col-md-3 col-xs-6 item\"style=\" padding:0px;float: left;list-style: none;outline: solid;height: 150px; background:#79EADB;\">";
        output += "<img class=\"imgMemoria img-responsive\" style=\"width: 100%;height: 100%;\" src = '" + images[i] + "'/>";
        output += "</li>";
    }
    output += "</ol>";
    document.getElementById("containerMemoria").innerHTML = output;

    $(".imgMemoria").hide();



    setOnClick();

}
function setOnClick(){
    var guess1 = "";
    var guess2 = "";
    var count = 0;
    $("li").click(function() {
        $(this).css("background","transparent");
        if ((count < 2) &&  ($(this).children("img").hasClass("face-up")) === false) {

            // increment guess count, show image, mark it as face up
            count++;
            $(this).children("img").show();
            $(this).children("img").addClass("face-up");

            //guess #1
            if (count === 1 ) { 
                guess1 = $(this).children("img").attr("src"); 
            }   

            //guess #2
            else { 
                guess2 = $(this).children("img").attr("src"); 

                // since it's the 2nd guess check for match
                if (guess1 === guess2) { 
                    alert("Pareja!!");
                    nivelMemoria++;

                    $("li").children("img[src='" + guess2 + "']").addClass("match");
                    if(nivelMemoria==8){
                        alert("Felicitaciones haz ganado!");
                    }
                } 

                // else it's a miss
                else { 
                    $('li').off('click');
                    setTimeout(function() {
                        setOnClick();
                        $(".imgMemoria").not(".match").hide();
                        $(".imgMemoria").not(".match").removeClass("face-up");
                        $(".imgMemoria").not(".match").parent().css("background","#8FF1BF");
                    }, 1000);
                    //alert("Error!");
                }

                // reset
                count = 0; 
                setTimeout(function() { console.clear(); }, 60000);      
            }
        }
    });
}
// randomize array of images
function randomizeImages(){
    Array.prototype.randomize = function()
    {
        var i = this.length, j, temp;
        while ( --i )
        {
            j = Math.floor( Math.random() * (i - 1) );
            temp = this[i];
            this[i] = this[j];
            this[j] = temp;
        }
    };

    images.randomize();
}

$(document).ready(function(){
    //$(".item").matchHeight();
});