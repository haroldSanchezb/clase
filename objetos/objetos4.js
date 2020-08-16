const persona = {
  nombre: 'Harold', // internamente esta creando un set y un get
  apellido: 'Sanchez',
  nombreCompleto() { // metodos, son como funciones pero que acceden a las propiedades del objeto
    return `${this.nombre} ${this.apellido}`;
  },

  escribirNombre(valor) { // recibo un parametro
    this.nombre = valor; // modifico la propiedad del objeto
    return `${this.nombre} ${this.apellido}`;
  },

  set nombreYApellido(objeto) { // son metodos nativos, un solo parametro
    this.nombre = objeto.nombre; // ambos acceden a las propiedades del objeto
    this.apellido = objeto.apellido;
  },

  get nombreYApellido() { // comparten nombre, quiere decir que puede haber un set y un get con el mismo nombre
    return `${this.nombre} ${this.apellido}`;
  }
};
console.log(persona.nombreYApellido = {nombre: 'Andres', apellido: 'Sanchez'});
console.log(persona.nombreYApellido);

// Metodos set y get
// son metodos nativos que pueden haber n de estos
// se comportan como una propiedad
// podemos tener un set y un get con el mismo nombre
// los metodos set solo reciben un parametro
// los metodos get no reciben parametros y necesitan un return
// no podemos setear una propiedad que no existe