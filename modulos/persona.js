class Persona {
  #datos = {
    nombre: '',
    apellido: '',
    sexo: '',
  }

  #prefijo = {
    Femenina: 'Sra',
    Masculino: 'Sr',
  }

  constructor(nombre, apellido, sexo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.sexo = sexo;
  }

  set nombre(valor) {
    this.#datos.nombre = valor;
  }

  set apellido(valor) {
    this.#datos.apellido = valor;
  }

  set sexo(valor) {
    this.#datos.sexo = valor;
  }

  get nombre() {
    return this.#datos.nombre;
  }

  get apellido() {
    return this.#datos.apellido;
  }

  get sexo() {
    return this.#datos.sexo;
  }

  nombreApellido() {
    return `${this.#prefijo[this.sexo]} ${this.nombre} ${this.apellido}`;
  }
};

// para convertir un archivo js en un modulo 
// hay que exportarlo
// cuando solo van exportar una funcion, variable, etc.

export default Persona;