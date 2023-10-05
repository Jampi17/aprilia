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
