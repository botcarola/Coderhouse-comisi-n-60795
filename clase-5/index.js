// LOS OBJETOS SON UN TIPO DE DATO QUE CONTIENE COLECCIONES DE DATOS RELACIONES ENTRE SÍ

let edad = 50

// sintaxis de objeto

// objeto literal, en donde utilizamos llaves para instanciarlo

let auto = {}

// constructor de objeto
// NO SE USA

let persona = new Object()

// objeto mesa 
// lo que contienen los objetos son propiedades, que puedne ser expresadas como "clave" "valor"
// las claves expresan el contenido alojado en ellas, por ello deben expresarlo
// las propiedades de un objeto son arbitrarias, NO IMPORTA EL ORDEN

let mesa = {
    patas: 4,
    material: "metal",
    color: "negro",
    altura: 100,
    largo: 200,
    ancho: 100,
    visualizarInfo: () => console.log(`La mesa de ${ mesa.patas } es del material: ${ mesa.material }`),
    calcularAreaDeLaMesa: () => {}   
}

console.log(mesa)

// sintaxis para obtner el valro de una propiedad
// utilizamos notación de punto para llegar al valor encapsulado en el objeto
// todos los métodos y propiedades del objeto son accesibles a través del punto

console.log(mesa.material)

console.log(mesa.patas)

// los métodos son las "funciones" de los objetos

mesa.visualizarInfo()

// el método de un objeto no existe fuera de ese objeto

// visualizarInfo()

// se pueden añadir nuevas propiedades
// se debe llamar al identificador del objeto y a través de la notación de punto, ligarle una nueva prop y asignarle su valor

mesa.precio = 100000

// también se puede reasignar el valor

// si yo intento reasignar el valor de una prop, reasignando todo el objeto, estoy generando un nuevo objeto que no es el mismo que el anterior

// mesa = {
//     precio: 120000
// }

// console.log(mesa)

// reasignamos con notación de punto
// todas las propiedades pueden ser reasignadas

mesa.precio = 120000

console.log(mesa)

// borrar

delete mesa.calcularAreaDeLaMesa

// FUNCIÓN CONSTRUCTORA
// es una función que se utiliza para crear objetos
// LLEVAN LA PRIMERA LETRA DEL IDENTIFICADOR EN MAYÚSCULA 

function Cliente ( nombre, apellido, dni, telefono, direccion, estadoCivil, codigoPostal, cuil ) {

    // propiedades del objeto
    this.nombre = nombre
    this.apellido = apellido
    this.dni = dni
    this.telefono = telefono
    this.direccion = direccion
    this.estadoCivil = estadoCivil
    this.codigoPostal = codigoPostal
    this.cuil = cuil

    // métodos (funciones del objeto)
    this.nombreCompleto = ( caracter ) => caracter + " " + this.nombre + " " + this.apellido

}

// así se instancian estos nuevos objetos

const cliente1 = new Cliente("Matias", "Fernandez", 40111222, 11221122, "Calle Falsa 123", "Soltero", "1111", 27401112222)

console.log(cliente1.nombreCompleto("-"))

const cliente2 = new Cliente()

// SI NO LE PASAMOS LOS ARGUMENTOS, TODO EL OBJETO SERÁ ASIGNADO CON VALORES UNDEFINED

console.log(cliente2)

// class constructor
// Una sintaxis introducida en la actualización 2015 ES6
// TAMBIÉN PERMITE INSTANCIAR OBJETOS

class Pokemon {

    constructor ( nombre, tipo, vida, ataque, danio, pocion ) {

        this.nombre = nombre
        this.tipo = tipo
        this.vida = vida
        this.ataque = ataque
        this.danio = danio
        this.pocion = pocion

    }

    mostrarInfo() {
        console.log(`El pokemon: ${this.nombre}, tiene una vida de: ${this.vida} y su ataque ${this.ataque} de ${this.danio}`)
    }

    usarPocion() {
        if ( this.vida <= this.vida - this.vida / 2 ) {
            this.vida = this.vida + 30
        }
     }
}

const pikachu = new Pokemon("Pikachu", "Eléctrico", 60, "Impactrueno", 20, 2)

const mewtwo = new Pokemon("Mewtwo", "Psíquico", 150, "Psicoquemadura", 100, 0)

console.log(pikachu)

for ( let i = 0; i < 3; i++ ) {
    mewtwo.vida -= pikachu.danio 
    pikachu.vida -= mewtwo.danio
}

console.log(mewtwo.vida)
console.log(pikachu.vida)

// ACCEDER A LOS VALORES CON NOTACIÓN DE PUNTO

const garbordor = {
    "id": "swshp-SWSH025",
    "name": "Garbodor",
    "supertype": "Pokémon",
    "subtypes": [
        "Stage 1"
    ],
    "hp": "120",
    "types": [
        "Darkness"
    ],
    "evolvesFrom": "Trubbish",
    "abilities": [
        {
            "name": "Poisonous Puddle",
            "text": "Once during your turn, if a Stadium is in play, you may make your opponent's Active Pokémon Poisoned.",
            "type": "Ability"
        }
    ],
    "attacks": [
        {
            "name": "Sludge Bomb",
            "cost": [
                "Darkness",
                "Colorless",
                "Colorless"
            ],
            "convertedEnergyCost": 3,
            "damage": "80",
            "text": ""
        }
    ],
    "weaknesses": [
        {
            "type": "Fighting",
            "value": "×2"
        }
    ],
    "retreatCost": [
        "Colorless",
        "Colorless"
    ],
    "convertedRetreatCost": 2,
    "set": {
        "id": "swshp",
        "name": "SWSH Black Star Promos",
        "series": "Sword & Shield",
        "printedTotal": 307,
        "total": 304,
        "legalities": {
            "unlimited": "Legal",
            "standard": "Legal",
            "expanded": "Legal"
        },
        "ptcgoCode": "PR-SW",
        "releaseDate": "2019/11/15",
        "updatedAt": "2022/07/23 20:15:00",
        "images": {
            "symbol": "https://images.pokemontcg.io/swshp/symbol.png",
            "logo": "https://images.pokemontcg.io/swshp/logo.png"
        }
    },
    "number": "SWSH025",
    "artist": "tetsuya koizumi",
    "rarity": "Promo",
    "flavorText": "This Pokémon eats trash, which turns into poison inside its body. The main component of the poison depends on what sort of trash was eaten.",
    "nationalPokedexNumbers": [
        569
    ],
    "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
    },
    "regulationMark": "D",
    "images": {
        "small": "https://images.pokemontcg.io/swshp/SWSH025.png",
        "large": "https://images.pokemontcg.io/swshp/SWSH025_hires.png"
    },
    "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/swshp-SWSH025",
        "updatedAt": "2023/10/05",
        "prices": {
            "holofoil": {
                "low": 17.8,
                "mid": 26.24,
                "high": 29.99,
                "market": 17.74,
                "directLow": null
            }
        }
    },
    "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/swshp-SWSH025",
        "updatedAt": "2023/10/05",
        "prices": {
            "averageSellPrice": 4.33,
            "lowPrice": 2.75,
            "trendPrice": 5.83,
            "germanProLow": 0.0,
            "suggestedPrice": 0.0,
            "reverseHoloSell": 0.0,
            "reverseHoloLow": 0.0,
            "reverseHoloTrend": 5.4,
            "lowPriceExPlus": 2.75,
            "avg1": 2.99,
            "avg7": 5.85,
            "avg30": 6.89,
            "reverseHoloAvg1": 4.89,
            "reverseHoloAvg7": 5.36,
            "reverseHoloAvg30": 7.16
        }
    }
}

// creamos elementos que insertamos en el sitio web desde javascript 

document.write(`<h2> Nombre: ${garbordor.name} </h2>`)
document.write(`<h3> Vida: ${garbordor.hp} </h3>`)
document.write(`<p> ${ garbordor.flavorText }</p>`)
document.write(`<img src=${garbordor.images.large}>`)