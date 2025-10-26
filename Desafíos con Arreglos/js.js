// ======================
// Desafíos con Arreglos
// ======================

// 😑 Siempre aburrido
// ======================
console.log("😑 Siempre aburrido")

function siempreAburrido(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === "ver TV") {
            console.log("¡Entretenido!");
        }    
        else {
            console.log("¡Estoy Aburrido!");
        }
    }

}

siempreAburrido(["cantar", "correr", "salir", "ver TV"]);

// ✂️ Número de corte:
// ======================
console.log("✂️ Número de corte:")
function numeroDeCorte(arreglo, valorCorte) {
    let resultado = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < valorCorte) {
            resultado.push(arreglo[i]);
        }
    }
    return resultado;
}

console.log(numeroDeCorte([1, 2, 8, 4, 5, 7, 6], 4)); // Salida: [1, 2]

// 📉 Peor que el promedio
// ======================
console.log("📉 Peor que el promedio")
function numerosBajoPromedio(arreglo) {
    let total = 0;
    for (let i = 0; i < arreglo.length; i++) {
        total += arreglo[i];
    }
    const promedio = total / arreglo.length;
    let numerosBajoPromedio = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < promedio) {
            numerosBajoPromedio.push(arreglo[i]);
        }
    }
    return numerosBajoPromedio;
}

// Ejemplo de uso
console.log(numerosBajoPromedio([1, 20, 3, 4, 15, 6, 27])); 


// 2️⃣ Conteo de Pares:
// ======================
console.log("2️⃣ Conteo de Pares:")
function conteoPares(arreglo) {
    let contador = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            contador++;
        }
    }
    return contador;
}

// Ejemplo de uso
console.log(conteoPares([1, 2, 3, 4, 5, 6, 10, 11, 13, 14, 16, 18]));

// 🌀 Arreglo de Fibonacci
// ======================
console.log("🌀 Arreglo de Fibonacci")

function arregloDeFibonacci(n) {
    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}

// Ejemplo de uso
console.log(arregloDeFibonacci(30));

