// contructores de un objeto
// la forma chevere de crear objetos custom
// function tipo objeto para los amigos
// contructor es que va a tener una base de propiedades, metodos, etc.
// por nomenclatura para diferenciar de una funcion declarativa se deja en mayuscula inicial el nombre de la funcion
// siempre hay que usar el this si queremos que esa propiedad se pueda leer desde afuera
// los metodos se usan como una funcion expresiva o arrow
// nos permite tener un objeto personalizado

function Persona(nombre = '', apellido = '') {
  const edad = 0;
  this.nombre = nombre;
  this.apellido = apellido;

  this.nombreYApellido = function() {
    return `${this.nombre} ${this.apellido}`;
  }

  this.soloNombre = () => {
    return this.nombre;
  }
}

//prototype es parte de los objetos y nos permite entrar tanto a sus set, gets, metodos y propiedades, nos permite crear nuevos metodos

Persona.prototype.sexo = function(sexo) {
  this.sexo = sexo; // pueden generar nuevas propiedades cuando los llamamos o solo nos sirve para capturar algun valor
};

const harold = new Persona('Harold', 'Sanchez'); // estamos instanciando esa function tipo objeto
const giova = new Persona('Giovanna', 'Urrego'); // estamos instanciando esa function tipo objeto
const vacio = new Persona();
giova.sexo('Femenino')
console.log(giova);
console.log(harold);
