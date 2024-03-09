// ARRAY FUNTIONS 

// At: Es un método utilizado para acceder a un elemento especifico de un arreglo mediante su indice. 

const array = [1, 2, 3, 4, 5];

console.log(array.at(2)); // Imprime: 3

// Concat: Es un método usado para combinar dos o más arrays en uno nuevo. 

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const newArray = array1.concat(array2, array3);

console.log(newArray); // Imprime: [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Constructor: Es una función especial que se utiliza para crear e inicializar objetos. 

// Definición de una clase llamada Persona
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  // Creación de un objeto Persona
  const persona1 = new Persona("Juan", 30);
  persona1.saludar(); // Imprime: Hola, soy Juan y tengo 30 años.


/*copyWithin: es un método disponible en JavaScript para arrays que copia una secuencia de elementos dentro del mismo array, sobrescribiendo los elementos existentes según un rango especificado. Toma tres argumentos: target, start, y end.
target: Índice en el array donde comenzará a copiar los elementos.
start: Índice en el array que especifica el inicio de la secuencia a copiar.
end (opcional): Índice en el array que especifica el final de la secuencia a copiar. Si se omite, copyWithin() copiará hasta el final del array.*/

const array4= [1, 2, 3, 4, 5];

// Copiar los elementos del índice 0 al 2 dentro del array, comenzando en el índice 3
array.copyWithin(3, 0, 2);

console.log(array4); // Imprimirá: [1, 2, 3, 1, 2]

//entries : es un método disponible en JavaScript para arrays que devuelve un nuevo objeto iterador que contiene pares clave/valor para cada índice en el array. Cada par es un array de dos elementos, donde el primer elemento es el índice y el segundo elemento es el valor correspondiente en el array

const array5 = ['a', 'b', 'c'];

const iterador = array.entries();

for (const entrada of iterador) {
  console.log(entrada);
}

// Salida:
// [0, 'a']
// [1, 'b']
// [2, 'c']

// every: es un método disponible en JavaScript para arrays que comprueba si todos los elementos en un array satisfacen una condición determinada. Toma una función de retorno de llamada como argumento, la cual se ejecuta una vez por cada elemento en el array. 
const array6 = [2, 4, 6, 8, 10];

// Comprueba si todos los elementos son pares
const todosSonPares = array.every(elemento => elemento % 2 === 0);

console.log(todosSonPares); // Imprimirá: true

//fill: es un método disponible en JavaScript para arrays que modifica todos los elementos de un array con un valor estático, desde un índice de inicio (por defecto 0) hasta un índice de fin (por defecto la longitud del array).

const array7 = [1, 2, 3, 4, 5];

// Rellenar todos los elementos del array con el valor 0
array.fill(0);

console.log(array); // Imprimirá: [0, 0, 0, 0, 0]

// filter: n método disponible en JavaScript para arrays que crea un nuevo array con todos los elementos que cumplan una condición determinada por una función de retorno de llamada proporcionada. 

const array8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrar los elementos que son pares
const pares = array.filter(elemento => elemento % 2 === 0);

console.log(pares); // Imprimirá: [2, 4, 6, 8, 10]

// findIndex: es un método disponible en JavaScript para arrays que devuelve el índice del primer elemento en el array que cumple con una condición dada por una función de retorno de llamada. Si algun elmento no cumple con la condicion, se retornara -1. 


const array9 = [10, 20, 30, 40, 50];

// Encontrar el índice del primer elemento que sea mayor que 25
const indice = array.findIndex(elemento => elemento > 25);

console.log(indice); // Imprimirá: 2

// flat: es un método disponible en JavaScript para arrays que crea un nuevo array que es una versión plana (sin anidamiento) del array original, extrayendo todos los elementos de subarrays y concatenándolos en un único nivel.

const array10 = [1, 2, [3, 4], [5, [6, 7]]];

const arrayPlano = array.flat();

console.log(arrayPlano); // Imprimirá: [1, 2, 3, 4, 5, [6, 7]]

// flatmap: primero mapea cada elemento usando una función de mapeo, y luego aplana el resultado en un nuevo array. Esencialmente, combina los pasos de map() y flat() en un solo método.

const array11 = [1, 2, 3];

const resultado = array.flatMap(elemento => [elemento, elemento * 2]);

console.log(resultado); // Imprimirá: [1, 2, 2, 4, 3, 6]

// Foreach: es un método disponible en JavaScript para arrays que itera sobre cada elemento del array y ejecuta una función de retorno de llamada proporcionada una vez por cada elemento. 

const array12 = [1, 2, 3, 4, 5];

array.forEach(function(elemento) {
  console.log(elemento);
});

// Imprimirá:
// 1
// 2
// 3
// 4
// 5

// Includes: es un método disponible en JavaScript para arrays que determina si un array incluye un determinado elemento, devolviendo true o false según corresponda. Este método compara los elementos utilizando el operador de igualdad estricta (===).

const array13 = [1, 2, 3, 4, 5];

console.log(array.includes(3)); // Imprimirá: true
console.log(array.includes(6)); // Imprimirá: false

// Indexof: n método disponible en JavaScript para arrays que devuelve el primer índice en el cual se encuentra un determinado elemento dentro del array, o -1 si el elemento no está presente. Este método utiliza una comparación estricta (===) para encontrar el elemento. 

const array14 = [1, 2, 3, 4, 5];

console.log(array.indexOf(3)); // Imprimirá: 2
console.log(array.indexOf(6)); // Imprimirá: -1

// Join: s un método disponible en JavaScript para arrays que devuelve una cadena de texto que concatena todos los elementos de un array. Puedes especificar un separador opcional que se utilizará para unir los elementos en la cadena resultante

const array15 = ['Manzana', 'Banana', 'Naranja'];

const cadena = array.join(', ');

console.log(cadena); // Imprimirá: "Manzana, Banana, Naranja"

// Keys:  es un método disponible en JavaScript para objetos y arrays. Cuando se llama en un array, devuelve un nuevo objeto iterador que contiene los índices de las claves de los elementos del array. Estos índices son representados como strings.

const array16 = ['a', 'b', 'c'];

const iterador1 = array.keys();

for (const indice of iterador) {
  console.log(indice);
}

// Salida:
// "0"
// "1"
// "2"

// LastIndexOf: es un método disponible en JavaScript para arrays que devuelve el último índice en el cual se encuentra un determinado elemento dentro del array, o -1 si el elemento no está presente. Este método realiza la búsqueda desde el final del array hacia el principio

const array17 = [1, 2, 3, 4, 5, 3];

console.log(array.lastIndexOf(3)); // Imprimirá: 5
console.log(array.lastIndexOf(6)); // Imprimirá: -1

// Map: es un método disponible en JavaScript para arrays que crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array original. 

const array18 = [1, 2, 3, 4, 5];

const nuevoArray = array.map(function(elemento) {
  return elemento * 2;
});

console.log(nuevoArray); // Imprimirá: [2, 4, 6, 8, 10]

// Pop: es un método disponible en JavaScript para arrays que elimina el último elemento del array y devuelve ese elemento eliminado. Este método modifica el array original.

const array19 = [1, 2, 3, 4, 5];

const elementoEliminado = array.pop();

console.log(elementoEliminado); // Imprimirá: 5
console.log(array); // Imprimirá: [1, 2, 3, 4]

// Push: es un método disponible en JavaScript para arrays que añade uno o más elementos al final de un array y devuelve la nueva longitud del array. Este método modifica el array original.

const array20 = [1, 2, 3, 4];

const nuevaLongitud = array.push(5, 6);

console.log(nuevaLongitud); // Imprimirá: 6
console.log(array); // Imprimirá: [1, 2, 3, 4, 5, 6]

/* Reduce: es un método disponible en JavaScript para arrays que ejecuta una función de reducción sobre cada elemento del array, devolviendo un único valor resultante.

La función de reducción toma cuatro argumentos:

1. Un acumulador, que almacena el valor acumulado de las operaciones anteriores.
2. El valor actual del elemento que se está procesando.
3. El índice del elemento actual en el array.
4. El array sobre el que se está llamando reduce(). */

const array21 = [1, 2, 3, 4, 5];

const suma = array.reduce(function(acumulador, elemento) {
  return acumulador + elemento;
}, 0);

console.log(suma); // Imprimirá: 15

// Reduceright: s similar a reduce(), pero itera sobre los elementos del array en orden inverso, comenzando desde el último elemento hasta el primero. Esto significa que la función de reducción se ejecuta desde el último elemento hasta el primero.

const array22 = ['Hola', ' ', 'mundo', '!'];

const resultado1 = array.reduceRight(function(acumulador, elemento) {
  return acumulador + elemento;
}, '');

console.log(resultado); // Imprimirá: "!mundo Hola"

// Reverse: es un método disponible en JavaScript para arrays que invierte el orden de los elementos del array. El primer elemento pasa a ser el último y el último pasa a ser el primero. Este método modifica el array original y devuelve una referencia al mismo array invertido.

const array23 = [1, 2, 3, 4, 5];

array.reverse();

console.log(array); // Imprimirá: [5, 4, 3, 2, 1]

// Shift: es un método disponible en JavaScript para arrays que elimina el primer elemento del array y lo devuelve. Este método modifica el array original, reduciendo su longitud en uno. 

const array24 = [1, 2, 3, 4, 5];

const primerElemento = array.shift();

console.log(primerElemento); // Imprimirá: 1
console.log(array); // Imprimirá: [2, 3, 4, 5]

// Slice: es un método disponible en JavaScript para arrays que devuelve una copia superficial de una porción del array original. Puedes especificar los índices de inicio y fin para definir qué parte del array deseas copiar. La porción devuelta no incluye el elemento en el índice final.

const array25 = [1, 2, 3, 4, 5];

const subArray = array.slice(1, 4);

console.log(subArray); // Imprimirá: [2, 3, 4]

/* Some: es un método disponible en JavaScript para arrays que verifica si al menos un elemento en el array cumple con cierta condición proporcionada por una función de retorno de llamada. Este método devuelve true si al menos un elemento cumple con la condición, y false si ninguno lo hace.

La función de retorno de llamada proporcionada a some() toma tres argumentos:

1. El valor del elemento actual.
2. El índice del elemento actual en el array.
3. El array sobre el que se está llamando some(). */

const array26 = [5, 8, 12, 3, 7];

const alMenosUnoMayorQue101 = array26.some(function(elemento) {
  return elemento > 10;
});

console.log(alMenosUnoMayorQue101); // Imprimirá: true
const array27 = [5, 8, 12, 3, 7];

const alMenosUnoMayorQue10 = array.some(function(elemento) {
  return elemento > 10;
});

console.log(alMenosUnoMayorQue10); // Imprimirá: true

// Sort:  es un método disponible en JavaScript para arrays que ordena los elementos del array alfabéticamente o en función de un criterio de ordenación específico. Por defecto, sort() ordena los elementos como cadenas de texto alfabéticamente utilizando la codificación Unicode. 

const array28 = ['banana', 'manzana', 'naranja', 'uva'];

array.sort();

console.log(array); // Imprimirá: ["banana", "manzana", "naranja", "uva"]

//Slice: es un método disponible en JavaScript para arrays que permite modificar el contenido de un array eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar. Este método modifica el array original y devuelve un array de los elementos eliminados, o un array vacío si no se eliminan elementos.

const array29 = ['a', 'b', 'c', 'd', 'e'];

const elementosEliminados = array.splice(2, 2);

console.log(elementosEliminados); // Imprimirá: ['c', 'd']
console.log(array); // Imprimirá: ['a', 'b', 'e']
























