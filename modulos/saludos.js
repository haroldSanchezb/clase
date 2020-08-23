const saludo = (datos) => `Hola ${datos}`;

const buenosDias = (datos) => `Buenos días ${datos}`;

// para convertir un archivo js en un modulo 
// hay que exportarlo
// cuando tiene multiples variables, funciones, etc.

export {
  saludo,
  buenosDias,
};