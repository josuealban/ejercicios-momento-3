// Crear el array con los números
const numeros = [0, 2, 4, 8];

// Crear un array para almacenar las combinaciones
const combinaciones = [];

// Generar combinaciones de dos dígitos sin repetir números y sin invertir
for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
        // Asegurarse de que los números no se repitan y que no se inviertan
        if (numeros[i] !== numeros[j] && i < j) {
            // Formar la combinación y agregarla al array
            combinaciones.push(`${numeros[i]}${numeros[j]}`);
        }
    }
}

// Mostrar las combinaciones en un alert
alert(combinaciones.join(", "));