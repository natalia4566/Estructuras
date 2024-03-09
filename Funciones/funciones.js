// FUNCIONES DE FLECHA Y REGULARES. 

/*Las funciones de flecha (arrow functions) y las funciones regulares (function declarations o function expressions) en JavaScript tienen algunas diferencias clave en su sintaxis y comportamiento. Aquí hay una comparación:

Sintaxis:
Las funciones de flecha se definen utilizando una sintaxis más concisa con una flecha =>.
Las funciones regulares se definen utilizando la palabra clave function. */

// Ejemplo con las funciones de flecha: 

const arrowFunction = (param1, param2) => {
    // Cuerpo de la función
  };

// Ejemplo con las funciones regulares: 
function regularFunction(param1, param2) {
    // Cuerpo de la función
  }

/*this vinculado:
En las funciones de flecha, el valor de this se determina en el momento de la definición de la función y no puede ser cambiado.
En las funciones regulares, el valor de this depende de cómo se invoca la función y puede cambiar dinámicamente.

No pueden ser constructoras:
Las funciones de flecha no pueden ser utilizadas como constructores para crear objetos nuevos utilizando el operador new.
Las funciones regulares pueden ser utilizadas como constructores para crear objetos utilizando el operador new.

No tienen arguments:
Las funciones de flecha no tienen su propio objeto arguments. Si necesitas acceder a los argumentos de la función, puedes hacerlo utilizando el objeto arguments del contexto exterior.
Las funciones regulares tienen su propio objeto arguments que contiene los argumentos pasados a la función.*/

// Ejemplo de clase: 

// Función de flecha: 

const esPar = (numero) => {
    if (numero % 2 === 0) {
      return `${numero} es un número par.`;
    } else {
      return `${numero} no es un número par.`;
    }
  };
  
// Función regular: 

function esPar(numero) {
    if (numero % 2 === 0) {
      return `${numero} es un número par.`;
    } else {
      return `${numero} no es un número par.`;
    }
  }
  
 