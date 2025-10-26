var sandwich = {
    pan: "masa madre",
    proteína: "asado",
    queso: "queso suizo lacey",
    salsas: ["lechuga romana", "tomates reliquia", "salsa de rábano"]
};
    
console.log(sandwich);

function sandwichFactory(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteína = proteína;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}
    
var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
console.log(s1);



function pizzaOver(tipocorteza, tiposalsas, quesos, ingredientes) {
    var chicago = {};
        chicago.tipocorteza = tipocorteza;
        chicago.tiposalsas = tiposalsas;
        chicago.quesos = quesos;
        chicago.ingredientes = ingredientes;
        return chicago;
    }
    // estilo Chicago”, “tradicional”, [“mozzarella”] y [“pepperoni”, “salchicha”]
    var pizza1 = pizzaOver("estilo chicago","tradicional", "mozzarella",["pepperoni", "salchicha"]);
    console.log(pizza1);

   
// “lanzada a mano”, “marinara”, [“mozzarella”, “feta”] y [“champiñones”, “aceitunas”, “cebollas”]
    var pizza2 = pizzaOver("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"])
    console.log(pizza2)