// POO => Para Java o para los lenguajes que soportan este formato, todo es un objeto
// Contructor, Metodos, son clases, variables 
// PS => linea a linea, donde existen funciones, variables, ciclos

const miObjeto = {}; // aca es mas acotado a su propiedad, quiere decir que cada nuevo valor esta asociado a una llave/propiedad
const miArray = []; // dinamicamente llenar y leer por posicion
const miObjetoNew = new Object();
const migue = {
  nombre: 'Miguel', // cada propiedad no es necesario encapsular en comillas, pero debe llevar dos puntos para declarar el valor y luego de su valor, cerrar con coma
  apellido: 'Mosquera',
  edad: 22,
  saludo: () => 'hola', // expresiva como arrow
  hombre: true,
  'ciudad-colombia': 'Bogota', // cuando la propiedad puede ser un numero, llega guion o espacios, caracteres especiales
};

const migueArray = ['Miguel', 'Mosquera', 22];

console.log(migue);
console.log(migueArray);
console.log(miObjetoNew);

console.log(migue.nombre); // para llamar a una propiedad dentro de un objeto se usa el punto y luego el nombre de la propiedad
console.log(migue['ciudad-colombia']); // si la propiedad es de caracteres especiales, se usa corchetes y se coloca el nombre en comillas
console.log(migue.saludo());
console.log(migue['edad']);

migue.nombre = 'Miguel Angel';
console.log(migue.nombre);
migue.novia = true;
console.log(migue);
migue["ciudad-colombia"] = 'Santa Marta';


const calculadora = (valor1, valor2, operacion) => {
  const operaciones = {
    suma: (valor1, valor2) => valor1 + valor2,
    resta: (valor1, valor2) => valor1 - valor2,
    multi: (valor1, valor2) => valor1 * valor2,
    div: (valor1, valor2) => valor1 / valor2,
  };

  return operaciones[operacion](valor1, valor2);
};

console.log(calculadora(1, 2, 'suma'));

const miArray2 = [() => 'hola'];
console.log(miArray2[0]());

const casas = {
  apartamento: 'grande',
  casa: 'amplia',
  lote: 'pequeño',
}
const tipo = 'lote';
console.log(casas);
console.log(casas.apartamento); // lectura directa, cuando no tiene caracteres especiales
console.log(casas['casa']); // lectura por medio de corchetes, cuando se tiene caracteres especiales o si se desea leer una propiedad normal
console.log(casas[tipo]); // el mismo caso de corchetes donde se aprovecha que lo que va dentro del corchete debe ser un text para enviarle una variable tipo texto
