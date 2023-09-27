// PARA CADA PUNTO, QUIERO QUE SE EVALÚEN TODOS LOS CASOS POSIBLES PRESENTADOS EN LA EJEMPLIFICACIÓN, ASÍ VERIFICAMOS QUE NUESTROS ALGORITMOS FUNCIONAN EN LA TOTALIDAD DE COMPARACIONES POSIBLES.
// COMO TODAVÍA NO SABEMOS HACER CÓDIGO REUTILIZABLE, VAMOS A TENER QUE HACER LA CANTIDAD DE VARIABLES Y ESTRUCTURAS NECESARIAS PARA PODER COMPROBAR TODOS LOS CASOS.
// VAN A TENER QUE CREAR MUCHAS VARIABLES, CON RESPECTO A SUS IDENTIFICADORES, USEN LOS NOMBRES QUE QUIERAN, PERO QUE TENGAN SENTIDO
// LES RECOMIENDO QUE NO COPIEN Y PEGUEN <3

// 1) Crear una estructura condicional que compare el valor de una variable con un color del semáforo (rojo, verde o amarillo) y devuelva un mensaje en consola en true si puede avanzar o false si no. Si no se ingresa un color válido, se debe devolver un mensaje en consola que diga: Error: color de semáforo inválido.

// EJEMPLIFICACIÓN DE CASOS
//     "Rojo" --> false
//     "Verde" --> true
//     "Amarillo" --> false
//     "SALKDASD" --> Error: color de semáforo inválido

// 2) Crear una estructura condicional que compare el valor de una variable con las vocales y devuelva un mensaje en consola "Es una vocal" si letra es una vocal o "No es una vocal" si no lo es.

// EJEMPLIFICACIÓN DE CASOS
//     'a' // true
//     'n' // false
//     '1' // false

// 3) Crear una estructura condicional que compare el valor de una variable con las consonantes y devuelva true si letra es una consonante o false si no lo es.

// 4) Crear una estructura condicional que compare tres valores booleanos: pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva un mensaje en consola que sea true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos.

// EJEMPLIFICACIÓN DE CASOS
// (true, true, true)    // false
// (true, true, false)   // false
// (true, false, true)   // true
// (true, false, false)  // false
// (false, true, true)   // false
// (false, true, false)  // false
// (false, false, true)  // false
// (false, false, false) // false


// 5) Crear una estructura condicional que tome como valor un numero y devuelva un mensaje en consola "Es par" si el numero es par, o "Es impar" si el numero es impar. (AVERIGUAR SOBRE OPERADOR RESTO EN JAVASCRIPT, googlear es parte de nuestro trabajo)

// 6) Crear una estructura condicional que tome como valor un numero y devuelva un mensaje en consola "Es positivo" si el número es positivo o "Es negativo" si el número es negativo

// EJEMPLIFICACIÓN DE CASOS
// esPositivoONegativo(3)  // 'Es positivo'
// esPositivoONegativo(-5) // 'Es negativo'

// 7) ¿Se visualiza este if? ¿Por qué? -me interesa el porqué-
// if ("0") {
//     alert('Hello');
// }

// 8) Usando el constructor if..else, escribe el código que pregunta: ‘¿Cuál es el nombre “oficial” de JavaScript?’
// Si el visitante escribe “ECMAScript”, entonces muestra: “¡Correcto!”, de lo contrario muestra: “¿No lo sabes? ¡ECMAScript!”

// 9) Usando el constructor if..else, escribe un código que obtenga a través de un prompt un número y entonces muestre en un alert:

// 1, si el valor es mayor que cero,
// -1, si es menor que cero,
// 0, si es igual a cero.
// En la tarea asumimos que siempre el usuario introduce un número.

// 10) **Mayor o Menor**: Pide al usuario dos números y muestra un mensaje en un `alert` que indique cuál de los dos números es mayor o si son iguales.

// 11) **Operaciones Aritméticas**: Solicita tres números al usuario y realiza las cuatro operaciones aritméticas básicas (suma, resta, multiplicación y división) con ellos, luego muestra los resultados en `alert`.

// 12) **Validación de Usuario y Contraseña**: Pide al usuario que ingrese un nombre de usuario y una contraseña a través de `prompt`. Luego, verifica si el nombre de usuario es igual al valor de la variable username y la contraseña es igual al valor de la variable password. Si es así, muestra un mensaje de bienvenida; de lo contrario, muestra un mensaje de error.

// 13) **Descuento de Compra**: Pide al usuario que ingrese el precio de un producto y su edad. Si el usuario es mayor de 65 años, aplica un descuento del 10% al precio y muestra el precio final en un `alert`.

// 14) **Conversión de Unidades**: Solicita al usuario que ingrese una cantidad en metros y conviértela a pies (1 metro = 3.281 pies). Muestra el resultado en un `alert`.

// 15)  **Comparación de Edades**: Pide al usuario que ingrese su edad y la edad de un amigo. Luego, muestra en un `alert` quién es mayor o si tienen la misma edad.

// 16) **Cálculo de Descuento**: Pide al usuario que ingrese el precio original de un producto y la cantidad de descuento en porcentaje. Calcula el precio final después del descuento y muéstralo en un `alert`.

// 17) **Día de la Semana**: Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana correspondiente. Por ejemplo, si el usuario ingresa 1, muestra "Lunes"; si ingresa 2, muestra "Martes", y así sucesivamente.

// 18) **Calculadora de Descuento Avanzada**: Pide al usuario que ingrese el precio original de un producto y la cantidad de descuento en porcentaje. Si el descuento es mayor al 50%, muestra un mensaje en un `alert` que diga "Descuento demasiado grande, ¡intente nuevamente!". De lo contrario, calcula el precio final después del descuento y muéstralo en un `alert`.

// 19) **Año Bisiesto**: Pide al usuario que ingrese un año y verifica si es un año bisiesto o no. Muestra el resultado en un `alert`.

// 20) **Calificación Escolar**: Pide al usuario que ingrese una calificación numérica (por ejemplo, 85) y muestra en un `alert` la calificación equivalente (por ejemplo, "A" para calificaciones entre 90 y 100, "B" para calificaciones entre 80 y 89, y así sucesivamente).

// 21) **Número Primo**: Pide al usuario que ingrese un número y verifica si es un número primo. Muestra un mensaje en un `alert` indicando si es primo o no.

// 22) **Días en un Mes**: Pide al usuario que ingrese el nombre de un mes y muestra en un `alert` la cantidad de días que tiene ese mes. Puedes asumir que el usuario ingresará el nombre de un mes válido.

// 23) **Calculadora de Costo de Envío**: Pide al usuario que ingrese el peso de un paquete y la distancia de envío. Calcula el costo de envío según la siguiente regla: $1 por kilogramo de peso por cada 100 kilómetros de distancia. Muestra el costo de envío en un `alert`.

// 24) **Conversión de Grados Fahrenheit a Celsius**: Pide al usuario que ingrese una temperatura en grados Fahrenheit y conviértela a grados Celsius. Muestra el resultado en un `alert`.

