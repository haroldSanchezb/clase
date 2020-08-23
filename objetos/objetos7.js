function Prueba(parametro) {
  this.parametro = parametro;

  this.miMetodo = function(){
    return this.parametro;
  }
};
const miObjeto = new Prueba('hola');

console.log(miObjeto);

const objeto2 = {
  propiedad1: 'hola',

  set hola(valor) {
    this.propiedad1 = valor;
  },

  miMetodo() {
    return this.propiedad1;
  }
};
objeto2.hola = 'mundo';
console.log(objeto2);

// Objeto tipo clase
// que tiene las ventajas de una funcion tipo objeto (porque usamos el constructor directamente)
// tiene las ventajas de un objeto nativo
// podemos usar los set y get que queramos
// podemos usar propiedades privadas
// si una propiedad no tiene un set y un get creado por ustedes, usara el nativo o viceversa
class Persona {
  #datos = { // propiedad privada
    nombre: '',
    apellido: '',
    sexo: '',
  }

  #prefijo = { // nombres que no se repitan en alguna propiedad o metodo o set
    Femenina: 'Sra',
    Masculino: 'Sr',
  }

  constructor(nombre, apellido, sexo) { // este es el constructor
    this.nombre = nombre; // aca estamos invocando el set y get creado por nosotros
    this.apellido = apellido; // aca estamos invocando el set y el get nativo
    this.sexo = sexo;
  }

  set nombre(valor) { // solo es el que puede repetir su nombre pero en el get
    this.#datos.nombre = valor;
  }

  get nombre() {
    return this.#datos.nombre;
  }

  set sexo(valor) {
    this.#datos.sexo = valor;
  }

  get sexo() {
    return this.#datos.sexo;
  }

  nombreApellido() {
    return `${this.#prefijo[this.sexo]} ${this.nombre} ${this.apellido}`;
  }
};

console.log(new Persona('Harold', 'Sanchez', 'Masculino').nombreApellido());
console.log(new Persona('Giova', 'Urrego', 'Femenina').nombreApellido());
console.log(new Persona('Lina', 'Callejas', 'Femenina').nombreApellido());
console.log(new Persona('Danilson', 'Bornachera', 'Masculino').nombreApellido());

const lala = new Persona('David', 'Urrego', 'Masculino');
console.log(lala);

