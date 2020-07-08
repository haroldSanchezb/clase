// Arrays o Arreglos
// guardar un valor en una posicion => posicion en la memoria de la maquina
// basicamente es tener muchas variables almacenadas en conjunto
// que cada posicion se parece a una variable o se comporta como tal

const miArray = []; // ya estamos declarando la variable como un array;
const miArray2 = new Array(5);
const numeros = [10, 15, 20];
const especial = [3 + 2, 'maria' + 20, 20 - 5, () => ('hola')];
// console.log(especial);
// console.log(especial[1]);

const miArray3 = ['Andres', 'Carlos Andres', 'Lina', 'Maria Camila', 'Giovanna', 'Anderson', 'Danilson', 'Luis Enrique', 'David', 'Miguel'];
// console.log('Mi array', miArray3);
// console.log('tamaño del array', miArray3.length);

for (let index = 0; index < miArray3.length; index++) {
  const element = miArray3[index];
  // console.log(element);
}

// push, en los arrays permite sumar mas valores a un array
let arrayHarold = [];
// console.log(arrayHarold);
arrayHarold.push('hola');
arrayHarold.push('mundo');
arrayHarold.push('!!!');
// console.log(arrayHarold);

// shift, en los arrays permite eliminar valores, pero elimina desde el primero en adelante
arrayHarold.shift();
// console.log(arrayHarold);

// sobre escribir un valor de una posicion
arrayHarold[0] = 'Holaaaa';
// console.log(arrayHarold);

// guardar arrays dentro de arrays
arrayHarold = [];
console.log(arrayHarold);
arrayHarold.push([]);
console.log(arrayHarold);
arrayHarold[0].push('desayuno');
arrayHarold[0].push('almuerzo');
arrayHarold[0].push('cena');
console.log(arrayHarold);
console.log(arrayHarold[0]);

arrayHarold.push([]);
console.log(arrayHarold);
arrayHarold[1].push('desayuno ejecutivo');
arrayHarold[1].push('almuerzo ejecutivo');
arrayHarold[1].push('cena ejecutivo');
console.log(arrayHarold);
console.log(arrayHarold[1]);
console.log(arrayHarold[0][2]);
console.log(arrayHarold[1][2]);
