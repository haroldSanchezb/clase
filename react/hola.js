// modulo que se llama hola
// va a alojar un componente de React
// un componente de react es el js mas html y probablemente css
// basicamente encapsula toda una funcion en un solo modulo
import React from 'react'; // modulo de react

const Hola = ({ nombre }) => { // todo componente de react debe comenzar con mayuscula inicial
  return <h1>Hola!!!!! {nombre}</h1>; // jsx: al html que esta dentro de un componente react
  // las propiedades se imprimen solo con {}
};

// todo componentede react tiene un solo parametro que se llama props
// props es un objeto por ende podemos destructurar

export default Hola;
