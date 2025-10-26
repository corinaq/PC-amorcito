var hamburguesa = {
    pan: "pan de hamburguesa",
    carne: "carne de res",
    queso: "cheddar",
    ingredientes: ["lechuga", "tomate", "cebolla", "pepinillos"]
}


var hamburguesaClasica = {
    "pan": "pan de hamburguesa",
    "carne": "carne de res",
    "queso": "cheddar",
    "extras": ["lechuga", "tomate", "cebolla", "pepinillos"]
};

console.log("Pan: " + hamburguesaClasica.pan);
console.log("Carne: " + hamburguesaClasica.carne);
console.log("Queso: " + hamburguesaClasica.queso);
console.log("Extras: " + hamburguesaClasica.extras);

var hamburguesaClasica = {
    "pan": "pan con semillas de sésamo",
    "carne": "carne de res 100%",
    "queso": "queso cheddar",
    "extras": ["lechuga", "tomate", "cebolla", "salsa especial"],
    "infoHamburguesa": function() {
        console.log("Pan: " + this.pan);
        console.log("Carne: " + this.carne);
        console.log("Queso: " + this.queso);
        console.log("Extras: " + this.extras.join(", "));
    }
}

// Ahora, con solo una línea, ¡podemos obtener todos los detalles de nuestra hamburguesa clásica!
hamburguesaClasica.infoHamburguesa();