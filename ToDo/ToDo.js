class Task{ 
    constructor (titulo, descripcion, puntos, next){ 

        this.titulo = titulo; 
        this.descripcion = descripcion; 
        this.puntos = puntos;
        this.next = next;
    }
}

class List_ToDo{
    constructor (){

        this.head = null;
        this.tail = null; 
    }


append(Task) {

    const newTask = new Task (task)

    if (!this.head){
        this.head = newTask; 

    }else{ 
        this.tail.next = newTask; 
    }

    this.tail = newTask
}

}

// Datos de prueba: 

const listaTareas = new List_ToDo();

// Tarea 1
const tarea1 = new Task("Comprar víveres", "Ir al supermercado y comprar frutas, verduras y productos básicos.", 10);
listaTareas.append(tarea1);

// Tarea 2
const tarea2 = new Task("Hacer ejercicio", "Realizar una rutina de ejercicios en casa durante 30 minutos.", 5);
listaTareas.append(tarea2);

// Tarea 3
const tarea3 = new Task("Leer un libro", "Leer al menos un capítulo de un libro de tu elección.", 8);
listaTareas.append(tarea3);

// Tarea 4
const tarea4 = new Task("Llamar a mamá", "Hacer una llamada a tu madre para preguntar cómo está.", 3);
listaTareas.append(tarea4);

// Tarea 5
const tarea5 = new Task("Organizar el escritorio", "Ordenar los papeles, bolígrafos y otros objetos en tu escritorio.", 6);
listaTareas.append(tarea5);

