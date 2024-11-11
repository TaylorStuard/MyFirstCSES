// Función para hacer que la barra de navegación sea sticky
window.onscroll = function () { stickyNavbar() };

var navbar = document.querySelector('.navbar'); // Seleccionamos la barra de navegación
var sticky = navbar.offsetTop; // Obtenemos la posición superior de la barra

// Función que se activa cuando se hace scroll
function stickyNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky"); // Añadimos la clase sticky cuando se pasa de la posición inicial
    } else {
        navbar.classList.remove("sticky"); // Elimina la clase sticky cuando se vuelve al principio
    }
}
