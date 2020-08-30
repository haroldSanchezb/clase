// Modulos
import Tarea from './tarea'; // ./ para trabajar sobre la misma carpeta
import { listado, eliminar } from './acciones';

// Mi array de tareas
let tareas = [];

// Funcion que imprime en el html
const imprimir = () => document.querySelector('#tareas').innerHTML = listado(tareas);

// Boton que añade una tarea
document.querySelector('#guardar').addEventListener('click', () => {
  const texto = document.querySelector('#texto').value; // value es una propiedad del input que me permite obtener el valor que escribo en la casilla de input
  const tarea = new Tarea((tareas.length + 1), texto);
  //debugger; // breakpoint que permite pausar la funcion para saber que pasa
  tareas.push(tarea);
  document.querySelector('#texto').value = ''; // me permite a su vez editar su valor
  imprimir();
});

document.querySelector('#tareas').addEventListener('click', (event) => {
  const boton = event.target;

  if(boton.classList.contains('eliminar')) {
    tareas = eliminar(tareas, boton.getAttribute('data-id'));
    imprimir();
  }
});

// ejecutar funciones
imprimir();
