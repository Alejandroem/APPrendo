function startIntroduccionCompletar(){
        document.getElementById("introduccion-completar").style.display = 'block';
}

var score =0;
        $('#t1').on('input',function(e){
            if($('#t1').val()=="consultas"){
                this.disabled = true;
                score++;
                if(score==11){
                    alert("ganaste");
                }
            }

        });
        $('#t2').on('input',function(e){
            if($('#t2').val()=="informacion"){
                this.disabled = true;
                score++;
                if(score==11){
                    alert("ganaste");
                }
            }

        });
        $('#t3').on('input',function(e){
            if($('#t3').val()=="insertar"){
                this.disabled = true;
                score++;
                if(score==11){
                    alert("ganaste");
                }
            }

        });
        $('#t4').on('input',function(e){
            if($('#t4').val()=="registros"){
                this.disabled = true;
                score++;
                if(score==11){
                    alert("ganaste");
                }
            }

        });
        $('#t5').on('input',function(e){
            if($('#t5').val()=="registros"){
                this.disabled = true;
                score++;
                if(score==11){
                    alert("ganaste");
                }
            }

        });
        $('#t6').on('input',function(e){
            if($('#t6').val()=="crear"){
                this.disabled = true;
                score++;
                if(score==11){
                    alert("ganaste");
                }
            }

        });
        $('#t7').on('input',function(e){
            if($('#t7').val()=="tablas"){
                this.disabled = true;
                score++;
                if(score==11){
                    alert("ganaste");
                }
            }

        });
        $('#t8').on('input',function(e){
            if($('#t8').val()=="procesos"){
                this.disabled = true;
                score++;
                if(score==11){
                    alert("ganaste");
                }
            }

        });
        $('#t9').on('input',function(e){
            if($('#t9').val()=="crear"){
                this.disabled = true;
                score++;
                if(score==11){
                    alert("ganaste");
                }
            }

        });
        $('#t10').on('input',function(e){
            if($('#t10').val()=="tablas"){
                this.disabled = true;
                score++;
                if(score==11){
                    alert("ganaste");
                }
            }

        });
        $('#t11').on('input',function(e){
            if($('#t11').val()=="vistas"){
                this.disabled = true;
                score++;
                if(score==11){
                    alert("ganaste");
                }
            }

        });
