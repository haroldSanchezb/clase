// Arrays o Arreglos
// guardar un valor en una posicion => posicion en la memoria de la maquina
// basicamente es tener muchas variables almacenadas en conjunto
// que cada posicion se parece a una variable o se comporta como tal
 
const miFuncionArrow = () => 'hola';
const miFuncionExpresiva = function() {
  return 'hola';
};
const miArray = []; // ya estamos declarando la variable tipo array;
// son como variables pero que permite guardar n valores, puede ser infinito o hasta que el disco aguante jeje
// lo que podemos guardar en cada posicion es lo mismo que podemos guardar en una variable
// a pesar de que declaramos la variable como constate, al ser un array podemos editar las posiciones
// y cada posicion se comporta como un let

console.log(miArray.length);
// push, el push permite añadir valores a un array infinitamente, no me debo preocupar por la posicion en que queda el valor
// porque ese valor siempre quedara de ultimo en el array
miArray.push('Hola Mundo');
console.log(miArray.length);
console.log(miArray);
miArray.push(10);
miArray.push(() => 'hola 2');
miArray.push(miFuncionExpresiva);
miArray.push(miFuncionExpresiva());
miArray.push(['hola', 10]);
console.log(miArray);

//como leo o modifico
console.log(miArray[1] === 10);
console.log(miArray[4]);
console.log(miArray[2]());
miArray[5] = "he sido modificado";
miArray[4] = miArray[5];
console.log(miArray[5]);

const miArray2 = new Array(5);
console.log(miArray2);
miArray2.push('hola');
miArray2[2] = 15;
console.log(miArray2);

const miArray3 = ['hola', 'mundo', '!!'];
miArray3.push('lalala');
miArray3[2] = 15;
console.log(miArray3);

// shift, permite eliminar la primera posicion de un array;
const miArray4 = ['el que se va', 'los que quedan'];
miArray4.shift();
console.log(miArray4);

// contador de 10
// donde dentro van a llamar a esta variable llamada miRandom
// esta variable tipo funcion arrow devuelve un numero del 0 al 20;
// van a guardar en un array los numeros que sean mayores a 10 pero menores de 15
// luego de que termine el contador, fuera del ciclo van a imprimir el array
const miRandom = () => parseInt(Math.random() * 20);
