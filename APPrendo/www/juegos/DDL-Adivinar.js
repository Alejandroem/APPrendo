var palabras;
var leccion = localStorage.getItem("leccion");

if(leccion=="ddl"){
    palabras = {0:"create",1:"alter",2:"drop",3:"unique",4:"table",5:"database",6:"unique",7:"column",8:"primary-key",9:"foreign-key"}
}else if(leccion=="conexion"){
    palabras ={0:"string",1:"framework",2:"connection",3:"server",4:"database",5:"integrated",6:"security",7:"command",8:"execute",9:"reader"}
}else if (leccion =="funciones"){
    palabras = {
         0:"round",1:"avg",2:"count",3:"max",4:"min",5:"sum",6:"group by",7:"having",8:"ucase",9:"lcase"
    }
}

nivel = 0;
errores=0;
function startAdivinaDDL(){
    document.getElementById("Nivel").textContent = nivel+1;
    var palabra = palabras[nivel];
    errores = 0;
    document.getElementById('intentos').innerHTML = (13-nivel-errores)+"";
    document.getElementById('incorrectas').innerHTML ="";
    document.getElementById("adivina-DDL").style.display = 'block';
    /*
    var newdiv = document.createElement('div');
    newdiv.innerHTML = "Entry " + (counter + 1) + " <br><input type='text' maxlength="1" size="1" name='myInputs[]'>";
    document.getElementById(divName).appendChild(newdiv);
    */
    var input = "";
    var i;
    for(i=0; i<palabra.length;i++){
        input = input + "_ ";
    }
    document.getElementById('palabra').innerHTML = input;

}
$( document ).ready(function() {
    $("#letra").on('keyup', function (e) {
        if (e.keyCode == 13) {
            var palabra = palabras[nivel];

            var letra = document.getElementById('letra').value;
            if(palabra.toUpperCase().includes(letra.toUpperCase())){
                var i;
                var input = document.getElementById('palabra').innerHTML;

                for(i=0; i< palabra.length;i++){
                    console.log(palabra.charAt(i).toUpperCase()+" "+letra.toUpperCase());
                    if(palabra.charAt(i).toUpperCase()==letra.toUpperCase()){

                        input = input.substr(0, i*2)+letra+input.substr(i*2 + 1);
                    }
                }
                document.getElementById('palabra').innerHTML = input;

                if(!input.includes('_')){
                    if(nivel<9){
                        alert("Exito, siguiente nivel!");
                        nivel++;
                        document.getElementById("Nivel").textContent = nivel+1;
                        startAdivinaDDL();
                    }else{
                        alert("Ganaste!");
                    }
                }
            }else{
                errores++;
                document.getElementById('intentos').innerHTML = (13-nivel-errores)+"";
                document.getElementById('incorrectas').innerHTML = document.getElementById('incorrectas').innerHTML + letra+" ";

                if(13-nivel-errores==0){
                    alert(":( perdiste!");
                    errores=0;
                    nivel=0;
                    startAdivinaDDL();
                }
            }
            document.getElementById('letra').value="";
        }
    });
});



