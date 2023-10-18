// **Punto 1: Creación de un array y objetos de clientes**

// El usuario debe generar un array llamado `segmento`. A través de una función constructora, se deben crear 10 potenciales clientes. Cada objeto debe tener las siguientes propiedades: `id`, `nombre`, `apellido`, `segmento` (que será un array que puede tener uno o más de los siguientes valores: "Préstamo personal", "Plazo fijo", "Seguro de incendio", "Seguro de auto", "Seguro de moto"). Otras propiedades deben ser `edad`, `numeroDeTelefono`, `contacto` (que es un booleano, donde `true` significa que el usuario ha sido contactado), `fechaDeContacto` (una fecha entre un rango del último mes para aquellos usuarios que hayan sido contactados. En el caso de que contacto sea false, el valor de fechaDeContacto debe ser null).

// **Punto 2: Ordenar clientes por apellido**

// Los clientes deben ser ordenados de manera alfabética (A-Z) por su apellido, sin modificar el array original.

// **Punto 3: Filtrar clientes no contactados**

// Se debe filtrar a los clientes que no hayan sido contactados. Es decir, se debe crear un nuevo array que contenga solo los clientes para los cuales la propiedad `contacto` sea `false`.

// **Punto 4: Usando el método `reduce` para contar clientes no contactados**

// Mediante el método `reduce`, se debe calcular cuántos clientes no han sido contactados en el array de clientes. Luego, mostrar el resultado en la consola.

// **Punto 5: Recorrer el array de cada cliente y mostrar los segmentos**

// Recorrer el array de cada cliente y mostrar en la consola cuáles son los segmentos en los que se puede ubicar al usuario. Esto se debe hacer para cada cliente en el array.