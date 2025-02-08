// Comprobar si estamos en la página de bebidas
window.onload = function() {
    console.log(window.location.href);
if (window.location.href.includes("bebidas.html")) {
    // Solicitar al usuario el año de nacimiento
    let añoNacimiento = prompt("¿Cuál es tu año de nacimiento?");

    // Validar si el valor ingresado es un número
    if (añoNacimiento && !isNaN(añoNacimiento)) {
        // Calcular la edad del usuario
        let edad = new Date().getFullYear() - parseInt(añoNacimiento);

        // Verificar si es mayor o menor de 18 años
        if (edad >= 18) {
            alert("Puedes escoger también las bebidas con alcohol.");
        } else {
            alert("No puedes escoger bebidas con alcohol.");
        }
    } else {
        alert("Por favor, ingresa un año válido.");
    }
}
}
