import React, { Fragment } from 'react';

const Description = ({ texto }) => {
  return (
    <Fragment> {/* reemplaza los divs */}
      <p>mi texto</p>
      <p>{texto}</p>
    </Fragment>
  );
};

// todo componentede react tiene un solo parametro que se llama props
// props es un objeto por ende podemos destructurar

export default Description;
