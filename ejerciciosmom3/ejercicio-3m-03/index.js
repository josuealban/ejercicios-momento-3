// Crear un array
// Crear el array con los números
const numbs = [0, 2, 4, 8];

// Crear un array para almacenar las combinaciones
const alter = [];

// Generar combinaciones de dos dígitos
for (let i = 0; i < numbs.length; i++) {
    for (let j = 0; j < numbs.length; j++) {
        // Formar la combinación y agregarla al array
        alter.push(`${numbs[i]}${numbs[j]}`);
    }
}

// Mostrar las combinaciones en un alert
alert(alter.join(", "));