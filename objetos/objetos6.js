// destructuring
// para lectura y para enviar valores, si o si la variable debe llamarse como la propiedad
// lectura: puedo usar una variable diferente usando los dos puntos y definiendo el nuevo nombre
// en lectuta, los tres puntos seguidos de un nombre de variable representa el resto de las propiedades de un objeto
const persona = {
  nombre: 'Harold',
  apellido: 'Sanchez',
  sexo: 'Masculino',
  edad: '33',
  ciudad: 'Lo Barnechea'
};

const { nombre, apellido, ...resto } = persona; // lectura
const persona1 = {...persona}; // copia exacta de mi objeto
persona1.nombre = 'Monica';
const { nombre: nombre1, apellido: apellido1 } = persona1;

console.log(`${persona.nombre} ${persona.apellido}`);
console.log(`${nombre} ${apellido}`, resto);
console.log(persona1);

const miFuncion = ({ nombre1 , apellido1 }) => { // destructuring directo en los parametros de una funcion
  return `${nombre1} ${apellido1}`;
};

console.log(miFuncion({ nombre1, apellido1 })); // para enviar datos si la propiedad y la variable son identicas se manda directo

// destructuring en arrays
const miArray = ['1', '2', '3', '4', '5'];

const [ uno, dos, ...rest ] = miArray;

console.log(uno, dos, rest);
const miArray2 = [...miArray];
miArray2[0] = '9';
console.log(miArray, miArray2);