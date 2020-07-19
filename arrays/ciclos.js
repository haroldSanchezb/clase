const array = [1, 2, 3, 4, 5];
console.log(array);
// forEach => por cada uno, es una funcion que hace parte del array que nos facilita crear un ciclo tipo for
// cuando se usa la funcion forEach, se debe enviar una funcion expresiva o arrow como parametro (callback)
// donde el va a enviarnos por medio de un parametro (otro) el valor en una posicion del array 

for (let index = 0; index < array.length; index++) {
  console.log('estoy en un for', array[index]);
}
const miForEach = (elemento, index) => { //primer parametro es el valor de cada posicion del array, el segundo es el index o la posicion
  console.log(`estoy en un forEach ${index}`, elemento);
};

array.forEach(miForEach);

// callback

function declarado(unaFunc) { // se le dice callback a un parametro que representa a una variable tipo funcion
  const lala = unaFunc();
  console.log(lala);
}

declarado(() => 'hola!');

// Find, es una funcion que recibe una funcion como parametro (callback), en la cual representa una validacion
// nos facilita validar algun valor dentro del array
// siempre nos va a devolver el primer valor que cumpla la validacion que estamos enviando
// findIndex, por su lado devuelve es la posicion del valor

const miFuncionFind = elemento => elemento % 2 === 0;
const retorno = array.find(miFuncionFind);
const retorno2 = array.findIndex(miFuncionFind);

console.log('find', retorno);
console.log('findIndex', retorno2);

// Includes, es una funcion de los arrays, que recibe como parametro el valor a validar;
// devuelve un booleano

const retorno3 = array.includes(5); 
console.log('includes', retorno3);


// Filter, es una funcion del array que recibe como parametro a una funcion (callback)
// esta funcion debe ser una validacion (como el caso del find y el findIndex)
// donde valida dentro de los items del array si se cumplen y
// retorna un nuevo array, si no encuentra nada nos devuelve un array vacio

const newArray = array.filter(miFuncionFind);
console.log('filter', newArray);

// Map, es una funcion del array que recibe como parametro a una funcion (callback)
// donde esta funcion lo que busca es modificar el valor de la posicion del array
// nos modifica el array que estamos usando

const nuevoArray = array.map(elemento => elemento * 2);
console.log('map', nuevoArray);

const multi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tabla5 = multi.map(elemento => `5 x ${elemento} = ${elemento * 5}`);
console.log(tabla5);

// ciclo for que funciona con arrays y objetos
// en que consiste en que solo declaramos una variable que nos va a tomar
// el valor de una posicion del array
// dentro del parentesis solo se declara la variable y se usa la palabra in, en pero dentro
// luego del in va el array, sin mas nada, dentro del ciclo ya podemos usar la variable que declaramos
// de parece un poco al forEach

for (const valor in array) {
  console.log(valor);
}