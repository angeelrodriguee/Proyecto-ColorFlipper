document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("boton"); // Botón para cambiar el color
    const letra = document.getElementById("color"); // Elemento donde se muestra el color y su nombre
    const body = document.getElementById("body"); // El body, para cambiar su color de fondo

    // Array de códigos de colores en formato hexadecimal
    const color = [
        "#FF0000", "#0000FF", "#008000", "#FFFF00", "#FFA500", "#800080",
        "#FFC0CB", "#00FFFF", "#40E0D0", "#800000", "#E6E6FA", "#F5F5DC",
        "#808080", "#000000", "#FFFFFF", "#FFD700", "#C0C0C0", "#808000",
        "#FF00FF", "#FF7F50"
    ];
    
    
    // Diccionario con nombres de colores asociados a sus códigos 
    const colorNames = {
        "#FF0000": " Rojo",
        "#0000FF": " Azul",
        "#008000": " Verde",
        "#FFFF00": " Amarillo",
        "#FFA500": " Naranja",
        "#800080": " Morado",
        "#FFC0CB": " Rosa",
        "#00FFFF": " Cian",
        "#40E0D0": " Turquesa",
        "#800000": " Burdeos",
        "#E6E6FA": " Lavanda",
        "#F5F5DC": " Beige",
        "#808080": " Gris",
        "#000000": " Negro",
        "#FFFFFF": " Blanco",
        "#FFD700": " Oro",
        "#C0C0C0": " Plata",
        "#808000": " Oliva",
        "#FF00FF": " Fucsia",
        "#FF7F50": " Coral"
    };

    let i = 1;

    boton.addEventListener("click", function () { // Registra un evento de clic en el botón
        body.style.background = color[i]; // Modifica el color de fondo del body
        boton.style.background = color[i]; // Cambia el color de fondo del botón
        letra.innerHTML = colorNames[color[i]] || "Desconocido"; // Inserta el nombre del color correspondiente en el DOM
        let random = Math.floor(Math.random() * color.length); // Genera un índice aleatorio dentro del rango de colores disponibles
        letra.style.color = color[random]; // Cambia el color del texto a un color aleatorio
        i = random; // Asigna el nuevo índice para la siguiente iteración
    });
});