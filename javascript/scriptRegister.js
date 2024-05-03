


// GALERIA DE IMÁGENES---------------------------------------------------------------------

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("demo");
let captionText = document.getElementById("caption");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
captionText.innerHTML = dots[slideIndex-1].alt;
}



// VALIDACION DE REGISTRO DE USUARIO---------------------------

document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById('data_form');
    const errorMessages= document.getElementById('resultado');

    formulario.addEventListener("submit", function(event){
        event.preventDefault();

        var nombreInput = document.getElementById("nombre");
        var apellidoInput = document.getElementById("apellido");

        var nacimientoInput = document.getElementById("fechaNacimiento").value;
        var nacimientoDate = new Date(nacimientoInput);
        var fechaActual = new Date();
        var edad = fechaActual.getFullYear() - nacimientoDate.getFullYear();


        var correoE = document.getElementById("email").value;

        var dniInput = document.getElementById("numeroDNI").value.trim();








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

// FECHA,MAYORIA DE EDAD-------------------------------------
        if(new Date(fechaActual.getFullYear(), nacimientoDate.getMonth(), nacimientoDate.getDate()) < fechaActual){
            edad--;
        }if(edad < 18){
            errorMessages.innerText= "*Debes ser mayor de 18 años";
        }

// VALIDA EMAIL-----------------------------------------------
        if(!validarEmail(correoE)){
            errorMessages.innerText= "*Correo electrónico inválido.";
        }


// VALIDA NUMERO DNI-------------------------------------------
        if(dniInput !==8 || isNaN(dniInput)){
            errorMessages.innerText="*El número de DNI bebe contener 8 dígitos numéricos.";
            return;
        }
    });

    function validarEmail(correoE) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(correoE).toLowerCase());
         }
})
