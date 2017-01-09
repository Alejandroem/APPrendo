var score =0;
function startIntroduccionCompletar(){
    document.getElementById("Nivel").textContent =1;
    document.getElementById("introduccion-completar").style.display = 'block';

    $('#t1').on('input',function(e){
        if($('#t1').val().toUpperCase()=="consultas".toUpperCase()){
            this.disabled = true;
            score++;
            if(score==11){
                alert("ganaste");
            }
        }

    });
    $('#t2').on('input',function(e){
        if($('#t2').val().toUpperCase()=="informacion".toUpperCase()){
            this.disabled = true;
            score++;
            if(score==11){
                alert("ganaste");
            }
        }

    });
    $('#t3').on('input',function(e){
        if($('#t3').val().toUpperCase()=="insertar".toUpperCase()){
            this.disabled = true;
            score++;
            if(score==11){
                alert("ganaste");
            }
        }

    });
    $('#t4').on('input',function(e){
        if($('#t4').val().toUpperCase()=="registros".toUpperCase()){
            this.disabled = true;
            score++;
            if(score==11){
                alert("ganaste");
            }
        }

    });
    $('#t5').on('input',function(e){
        if($('#t5').val().toUpperCase()=="registros".toUpperCase()){
            this.disabled = true;
            score++;
            if(score==11){
                alert("ganaste");
            }
        }

    });
    $('#t6').on('input',function(e){
        if($('#t6').val().toUpperCase()=="crear".toUpperCase()){
            this.disabled = true;
            score++;
            if(score==11){
                alert("ganaste");
            }
        }

    });
    $('#t7').on('input',function(e){
        if($('#t7').val().toUpperCase()=="tablas".toUpperCase()){
            this.disabled = true;
            score++;
            if(score==11){
                alert("ganaste");
            }
        }

    });
    $('#t8').on('input',function(e){
        if($('#t8').val().toUpperCase()=="procesos".toUpperCase()){
            this.disabled = true;
            score++;
            if(score==11){
                alert("ganaste");
            }
        }

    });
    $('#t9').on('input',function(e){
        if($('#t9').val().toUpperCase()=="crear".toUpperCase()){
            this.disabled = true;
            score++;
            if(score==11){
                alert("ganaste");
            }
        }

    });
    $('#t10').on('input',function(e){
        if($('#t10').val().toUpperCase()=="tablas".toUpperCase()){
            this.disabled = true;
            score++;
            if(score==11){
                alert("ganaste");
            }
        }

    });
    $('#t11').on('input',function(e){
        if($('#t11').val().toUpperCase()=="vistas".toUpperCase()){
            this.disabled = true;
            score++;
            if(score==11){
                alert("ganaste");
            }
        }

    });

}