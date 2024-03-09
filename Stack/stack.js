// Definir una clase para los libros
class Libro {
    constructor(nombre, isbn, autor, editorial) {
      this.nombre = nombre;
      this.isbn = isbn;
      this.autor = autor;
      this.editorial = editorial;
    }
  
    // Devolver una cadena con la información del libro
    toString() {
      return `${this.nombre} de ${this.autor} (${this.isbn}) de ${this.editorial}`;
    }
  }
  
  // Crear una pila de libros vacía
  let libros = [];
  
  // Definir una función para agregar un nuevo libro a la pila
  function agregarLibro(libro) {
    libros.push(libro); // Agregar el libro al final del arreglo
    console.log(`Se agregó ${libro} a la pila`);
  }
  
  // Definir una función para quitar un libro de la pila
  function quitarLibro() {
    if (libros.length > 0) {
      let libro = libros.pop(); // Quitar el libro del final del arreglo
      console.log(`Se quitó ${libro} de la pila`);
      return libro;
    } else {
      console.log("La pila está vacía");
      return null;
    }
  }
  
  // Crear algunos objetos de libros
  let libro1 = new Libro("Cien años de soledad", "978-84-376-0494-7", "Gabriel García Márquez", "Cátedra");
  let libro2 = new Libro("El principito", "978-84-206-6217-8", "Antoine de Saint-Exupéry", "Alianza Editorial");
  let libro3 = new Libro("El código Da Vinci", "978-84-9759-316-3", "Dan Brown", "Umbriel");
  
  // Agregar los libros a la pila
  agregarLibro(libro1);
  agregarLibro(libro2);
  agregarLibro(libro3);
  
  // Quitar los libros de la pila
  quitarLibro();
 