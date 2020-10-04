import React from 'react';

const Gato = ({ nombre }) => <span> el gato {nombre}</span>;
const Perro = ({ nombre }) => <span> el perro {nombre}</span>;
const DicePerro = () => <span> Guau!!!!</span>;
const DiceGato = () => <span> Miau!!!!</span>;

const Animal = ({ animal }) => {
  // antes del return pueden usar javascript como aprendimos en clase <3
  let sonido = ''
  if (animal.tipo === 'perro') {
    sonido = 'Guau';
  } else {
    sonido = 'Miau';
  }

  return (
    <>
      {/* unico tipo de condicioonales que se usa dentro del JSX */}
      {animal.tipo === 'perro' ? // condicionales en linea/ternarios
      <Perro nombre={animal.nombre} /> : 
      <Gato nombre={animal.nombre} />}
      {animal.tipo === 'perro' && <DicePerro />} {/* condicionales binarios solo el &&*/}
      {animal.tipo === 'gato' && <DiceGato />}
      {sonido}
    </>
  );
}

export default Animal;