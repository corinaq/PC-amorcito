// ====================
// función de devolución de llamada
// ====================

function mensaje() {
    console.log("¡Mensaje con retraso!");
}
    
console.log("Inicio");
setTimeout(mensaje, 3000);
console.log("¡Final!");