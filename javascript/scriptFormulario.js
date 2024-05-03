
        document.addEventListener("DOMContentLoaded", function () {

        const formulario = document.getElementById('data_form');
        const errorMessages= document.getElementById('resultado');

        formulario.addEventListener("submit", function(event){
            event.preventDefault();

            var nombreInput = document.getElementById("nombre");
            var apellidoInput = document.getElementById("apellido");
            var correoE = document.getElementById("email").value;

    // VALIDAR NOMBRE Y APELLIDOS--------------------------------------
            if(!soloLetras(nombreInput.value)){
                errorMessages.innerText= "*El nombre debe contener solo letras.";
                return;
            }
            if(!soloLetras(apellidoInput.value)){
                errorMessages.innerText= "*El apellido debe contener solo letras.";
                return;
            }


            function soloLetras(cadena){
                return /^[a-zA-Z]+$/.test(cadena);
            }


    // VALIDA EMAIL-----------------------------------------------
            if(!validarEmail(correoE)){
                errorMessages.innerText= "*Correo electrónico inválido.";
            }

        });

        function validarEmail(correoE) {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(correoE).toLowerCase());
             }
    })
  