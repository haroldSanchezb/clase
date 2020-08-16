console.log('lalal');
// Vamos a hablar de metodos en los objetos y del "this"

for (let index = 0; index < 3; index++) {
  const variableTemp = 'Hola'; // variables temporales
  console.log(variableTemp, index); // lo que se ejecuta en cada ciclo se le llama instancia
}

const superObjeto = {
  nombre: 'Harold',// propiedades
  apellido: 'Sanchez',
  hola: () => 'hola', // las propiedades no pueden acceder al this

  misDatos() { // un metodo es una funcion declarativa sin el function dentro de un objeto, puede acceder al universo del objeto
    return `${this.nombre} ${this.apellido}`; // por medio del "this", que es una forma de acceder a las propiedades del objeto en un metodo
  }
};

console.log(superObjeto.misDatos());
console.log(superObjeto.hola());


const variable1 = 'hola';

function miFuncion() {
  console.log(variable1, 'mundo');
}

miFuncion();