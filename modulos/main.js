// Modulos nos permite crear funciones, clases lo que queramos en javascript
// Disponibilizarlos en cualquier archivo de javascript
// los modulos nos permite organizar nuestro codigo en diferentes archivos
// eso eprmite que cada archivo se encargue de algo en particular
// y evitamos tener todo el codigo en un solo arhivo
// que a la final nos costara leer

// para importar un modulo que solo tiene una funcion, variable, etc.
import Persona from './persona';
// para importar un modulo que tiene multiples variables, funciones, etc.
import { saludo, buenosDias } from './saludos';
// para importar un modulo que tiene un principal y multiples 
import adios, { chao, buenasNoches } from './despedidas';

const harold = new Persona('Harold', 'Sanchez', 'Masculino');
console.log(saludo(harold.nombreApellido()));
console.log(buenosDias(harold.nombreApellido()));
console.log(adios(harold.nombreApellido()));
console.log(chao(harold.nombreApellido()));
console.log(buenasNoches(harold.nombreApellido()));