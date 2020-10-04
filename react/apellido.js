// modulo que se llama hola
// va a alojar un componente de React
// un componente de react es el js mas html y probablemente css
// basicamente encapsula toda una funcion en un solo modulo
import React from 'react'; // modulo de react

const Apellido = ({ apellido, edad }) => { // todo componente de react debe comenzar con mayuscula inicial
  return (
    <> {/* fragment simplificado */}
      <span>{apellido} </span>
      <span>{edad}</span>
    </>
  ); // jsx: al html que esta dentro de un componente react
  // las propiedades se imprimen solo con {}
};

// todo componentede react tiene un solo parametro que se llama props
// props es un objeto por ende podemos destructurar

export default Apellido;
