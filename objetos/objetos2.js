// Manejo de Referencia y copias de objetos
// Repaso en Arrays tambien

const miObjeto = {}; // inicializamos un objeto vacio
const miObjeto2 = new Object(); // iniicalizamos un objeto vacio

console.log(miObjeto, miObjeto2);

const miObjeto3 = {
  clase: 'Cualquier tipo de variable',
  hoario: 11,
};

let variable1 = 'hola';
const variable2 = variable1;
variable1 = 'lala';

console.log(variable1, variable2);

const miArray = [];
let miArray2 = []; 
miArray.push('hola');
miArray2 = miArray; // no estamos copiando su valor, sino su referencia
miArray.push('lalaa');
const miArray3 = Array.from(miArray); // hacemos una copia exacta, no una referencia;
miArray.push('lala2');
// console.log(miArray, miArray2, miArray3);

const objeto1 = {
  nombre: 'Harold',
};

const objeto2 = objeto1; // estoy copiando la referencia
objeto1.nombre = 'Monica';
const objeto3 = Object.assign({}, objeto1); // estoy copiando el valor exacto
objeto1.nombre = 'Maria C';
console.log(objeto1, objeto2, objeto3);

let objeto4 = {};
Object.assign(objeto4, objeto1); // otra forma de copiar el valor de un objeto
objeto1.nombre = 'Lina';
console.log(objeto1, objeto2, objeto3, objeto4);

const familiar = {
  nombre: '',
  apellido: '',
  edad: 0,
  sexo: '',
};
const familia = [];

familiar.nombre = 'Korben';
familiar.apellido = 'Urrego';
familiar.edad = 4;
familiar.sexo = 'Macho';
familia.push(Object.assign({}, familiar));

familiar.nombre = 'Giovanna';
familiar.apellido = 'Urrego';
familiar.edad = 36;
familiar.sexo = 'Mujer';
familia.push(Object.assign({}, familiar));

familiar.nombre = 'Harold';
familiar.apellido = 'Sanchez';
familiar.edad = 33;
familiar.sexo = 'Hombre';
familia.push(Object.assign({}, familiar));

console.log(familia);

const objeto5 = Object.assign({
  apellido: 'Callejas',
}, objeto1);

console.log(objeto5);
const objeto6 = {
  nombre: 'Javier',
};

console.log('merge 1', Object.assign({}, objeto5, objeto6)); // como el objeto5 viene de primero, si el objeto6 tiene propiedades repetidas, se borran del 5 y quedan del 6
console.log('merge 2', Object.assign({}, objeto6, objeto5)); // como el objeto6 viene de primero, si el objeto5 tiene propiedades repetidas, se borran del 6 y quedan del 5

// Object.assign
// su primer parametro es el target, es el objeto donde va a quedar todo el resultado
// es importante que si no queremos actualizar la referencia de un objeto es recomedable mandar un objeto vacio
// los siguientes parametros van separados por coma y son todos los objetos que quiero mezclar
// ahora bien el orden de como los voy añadiendo es importante ya que afecta las propiedades de esos objetos