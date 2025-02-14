document.addEventListener("DOMContentLoaded",function(){


    const boton = document.getElementById("boton"); // Botón para cambiar el color
    const letra = document.getElementById("color"); // Elemento donde se muestra el color y su nombre
    const body = document.getElementById("body"); // El body, para cambiar su color de fondo
    
    // Array con los códigos de colores en formato hexadecimal
    const color = ["#FF0000", "#0000FF", "#008000", "#FFFF00", "#FFA500", "#800080", "#FFC0CB", "#00FFFF", "#40E0D0", "#800000", "#E6E6FA", "#F5F5DC", "#808080", "#000000", "#FFFFFF", "#FFD700", "#C0C0C0", "#808000", "#FF00FF", "#FF7F50"];
    let i = 1;
    
    boton.addEventListener("click", function() { // Asocia un evento de clic al botón
       
        body.style.background = color[i]; // Cambia el color de fondo del body usando el color en el índice 'i'
        letra.innerHTML = color[i]; // Muestra el código del color actual en el elemento 'letra'
        boton.style.background = color[i]; // Cambia el color de fondo del botón al color seleccionado
        let random = Math.floor(Math.random()*color.length); // Genera un índice aleatorio para seleccionar un nuevo color
        letra.style.color = color[random]; // Cambia el color del texto a un color aleatorio del array
        i = random; // Actualiza el índice 'i' con el índice aleatorio para el próximo clic
    });
});