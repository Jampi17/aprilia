var index = 1; // Cambiado a 1 para que la primera diapositiva se muestre al cargar
var slider = document.getElementsByClassName("slider");
var line = document.getElementsByClassName("line");
var autoInterval;

function show(o) {
    if (o < 1) {
        index = slider.length;
    } else if (o > slider.length) {
        index = 1;
    }

    for (var i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
    for (var i = 0; i < line.length; i++) {
        line[i].classList.remove("active");
    }

    slider[index - 1].style.display = "block";
    line[index - 1].classList.add("active");
}

function startAutoSlide() {
    stopAutoSlide();
    autoInterval = setInterval(function () {
        index++;
        show(index);
    }, 5000);
}

function stopAutoSlide() {
    clearInterval(autoInterval);
}

function plusSlide(o) {
    stopAutoSlide();
    index += o;
    show(index);
    startAutoSlide();
}

function currentSlide(o) {
    stopAutoSlide();
    index = o;
    show(index);
    startAutoSlide();
}

// Iniciar el carrusel automáticamente al cargar la página
show(index); // Mostrar la primera diapositiva al cargar
startAutoSlide();


/*espec*/
function showContent(contentId) {
    // Ocultar todos los contenidos
    var contents = document.querySelectorAll(".content_descripcion_espec");
    contents.forEach(function (content) {
        content.classList.remove("active");
    });

    // Mostrar el contenido seleccionado
    var selectedContent = document.getElementById("content" + contentId);
    selectedContent.classList.add("active");

    // Cambiar el color de todos los botones a negro
    var buttons = document.querySelectorAll(".buttons_descripcion_espec button");
    buttons.forEach(function (button) {
        button.classList.remove("active");
    });

    // Cambiar el color del texto del botón activo a rojo
    var selectedButton = document.getElementById("button" + contentId);
    selectedButton.classList.add("active");
}

/*doble carrusel*/
var index2 = 1; // Cambiado a 1 para que la primera diapositiva se muestre al cargar
var slider2 = document.querySelectorAll(".slider2");
var line2 = document.querySelectorAll(".line2");
var autoInterval2;

function show2(o) {
    if (o < 1) {
        index2 = slider2.length;
    } else if (o > slider2.length) {
        index2 = 1;
    }

    for (var i = 0; i < slider2.length; i++) {
        slider2[i].style.display = "none";
    }
    for (var i = 0; i < line2.length; i++) {
        line2[i].classList.remove("active2");
    }

    slider2[index2 - 1].style.display = "block";
    line2[index2 - 1].classList.add("active2");
}

function startAutoSlide() {
    stopAutoSlide();
    autoInterval2 = setInterval(function () {
        index2++;
        show2(index2);
    }, 5000);
}

function stopAutoSlide() {
    clearInterval(autoInterval2);
}

function plusSlide2(o) {
    stopAutoSlide();
    index2 += o;
    show2(index2);
    startAutoSlide();
}

function currentSlide2(o) {
    stopAutoSlide();
    index2 = o;
    show2(index2);
    startAutoSlide();
}

// Iniciar el carrusel automáticamente al cargar la página
show2(index2); // Mostrar la primera diapositiva al cargar
startAutoSlide();


/*colores de motos*/
const colores = document.querySelectorAll('.color');
const imagen = document.querySelector('.modelo_imagenes img');

colores.forEach(color => {
    color.addEventListener('click', () => {
        const imagenSrc = color.getAttribute('data-image-src');
        imagen.src = imagenSrc;
    });
});