let nums = [2, 3, 2, 3, 5];
let length = nums.length;

// Imprimir los índices ascendente y descendente
for (let i = 0; i < length; i++) {
    let descendingIndex = length - 1 - i; // Calcula el índice descendente
    console.log(i + "\t" + descendingIndex); // Imprime los índices
}