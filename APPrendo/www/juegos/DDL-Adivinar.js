palabras = {0:"create",1:"alter",2:"drop",3:"unique",4:"table",5:"database",6:"unique",7:"column",8:"primary-key",9:"foreign-key"}
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
            if(palabra.includes(letra)){
                var i;
                var input = document.getElementById('palabra').innerHTML;
                
                for(i=0; i< palabra.length;i++){
                    if(palabra.charAt(i)==letra){
                        
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



