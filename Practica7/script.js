/*------------------------------------------------------------
    PRÁCTICA BÁSICA DE JAVASCRIPT

    Temas:
    ✓ alert
    ✓ Variables
    ✓ Funciones
    ✓ Eventos
    ✓ DOM
    ✓ Validación de formulario
------------------------------------------------------------*/

// Mostrar un mensaje al cargar la página
alert("Bienvenido a la práctica 7 de JavaScript 💀");

// Variables
const titulo = document.getElementById("titulo");
const botonTitulo = document.getElementById("btnTitulo");
const botonColor = document.getElementById("btnColor");
const botonMenu = document.getElementById("btnMenu");
const botonImagen = document.getElementById("btnImagen");
const menu = document.getElementById("menu");
const imagen = document.getElementById("imagen");

// Cambiar el encabezado
botonTitulo.onclick = function () {

    titulo.textContent = "BIENVENIDO A JAVASCRIPT";
    titulo.style.color = "#8B5CF6";

}

// Cambiar color del fondo (alterna entre dos colores)
botonColor.onclick = function () {

    if (document.body.style.backgroundColor == "rgb(26, 11, 46)") {
        document.body.style.backgroundColor = "#0B0B0F";
    } else {
        document.body.style.backgroundColor = "#1A0B2E";
    }

}

// Mostrar y ocultar el menú
botonMenu.onclick = function () {

    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }

}

// Cambiar imagen (alterna entre las dos imágenes)
botonImagen.onclick = function () {

    if (imagen.src.includes("imagen1.png")) {
        imagen.src = "imagenes/imagen2.png";
    } else {
        imagen.src = "imagenes/imagen1.png";
    }

}

// Validar formulario
const formulario = document.getElementById("formulario");

formulario.onsubmit = function (event) {

    // Evita que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtiene los valores de los controles
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let date = document.getElementById("date").value;
    let rol = document.getElementById("rol").value;
    let checkbox = document.getElementById("checkbox").checked;

    // Valida el nombre
    if (nombre == "") {
        alert("Debe escribir su nombre.");
        return;
    }

    // Valida el correo
    if (email == "") {
        alert("Debe escribir un correo electrónico.");
        return;
    }

    // Valida la contraseña
    if (password == "") {
        alert("Debe escribir una contraseña.");
        return;
    }

    // Valida la fecha
    if (date == "") {
        alert("Debe seleccionar una fecha.");
        return;
    }

    // Valida el área de interés
    if (rol == "") {
        alert("Debe seleccionar un área de interés.");
        return;
    }

    // Verifica el checkbox
    if (checkbox == false) {
        alert("Debe aceptar términos y condiciones");
        return;
    }

    // Muestra el mensaje de confirmación
    document.getElementById("mensaje").innerHTML =
        "Bienvenido " + nombre +
        "<br>Correo: " + email +
        "<br>Fecha de nacimiento: " + date +
        "<br>Área: " + rol;

}