const chao = (datos) => `Chao ${datos}`;

const adios = (datos) => `Adios ${datos}`;

const buenasNoches = (datos) => `Buenas noches ${datos}`;

// para convertir un archivo js en un modulo 
// hay que exportarlo
// cuando quieres tener un principal y multiples

export default adios;

export {
  chao,
  buenasNoches,
};