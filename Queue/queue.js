// Definir una clase para las personas
class Persona {
    constructor(nombre, hora) {
      this.nombre = nombre;
      this.hora = hora;
    }
  
    // Devolver una cadena con la información de la persona
    toString() {
      return `${this.nombre} llegó a las ${this.hora}`;
    }
  }
  
  // Crear una cola de personas vacía
  let cola = [];
  
  // Definir una función para agregar una nueva persona a la cola
  function agregarPersona(persona) {
    cola.push(persona); // Agregar la persona al final del arreglo
    console.log(`Se agregó ${persona} a la cola`);
  }
  
  // Definir una función para quitar una persona de la cola
  function quitarPersona() {
    if (cola.length > 0) {
      let persona = cola.shift(); // Quitar la persona del principio del arreglo
      console.log(`Se quitó ${persona} de la cola`);
      return persona;
    } else {
      console.log("La cola está vacía");
      return null;
    }
  }
  
  // Crear algunos objetos de personas
  let persona1 = new Persona("Ana", "10:00");
  let persona2 = new Persona("Beto", "10:05");
  let persona3 = new Persona("Carlos", "10:10");
  
  // Agregar las personas a la cola
  agregarPersona(persona1);
  agregarPersona(persona2);
  agregarPersona(persona3);
  
  // Quitar las personas de la cola
  quitarPersona();