import React from 'react';
import Layout from './layout';
import Card from './card';
import * as images from './images/*.jpg'; // permite importar todas nuestras imagenes y guardar el nombre de la imagen en un objeto

const App = () => {
  const familia = [
    {
      foto: {
        className: 'is-4by3',
        src: images.foto,
        alt: 'lalala',
      },
      retrato: {
        className: 'is-48x48',
        src: 'https://bulma.io/images/placeholders/96x96.png',
        alt: 'lalala2',
      },
      nombre: 'Harold Sanchez',
      contacto: 'haroldsanchezb@gmail.com',
      descripcion: 'Me encanta la sopa',
    },
    {
      foto: {
        className: 'is-4by3',
        src: images.foto,
        alt: 'lalala',
      },
      retrato: {
        className: 'is-48x48',
        src: 'https://bulma.io/images/placeholders/96x96.png',
        alt: 'lalala2',
      },
      nombre: 'Giovanna Urrego',
      contacto: 'giovanna.urregob@gmail.com',
      descripcion: 'Amo a mi marido',
    }
  ];

  const onClick = (valor) => alert(valor);

  return (
    <Layout>
      {familia.map((data, index) => (
        <Card
          key={`card-${index}`}
          foto={data.foto}
          retrato={data.retrato}
          nombre={data.nombre}
          contacto={data.contacto}
          descripcion={data.descripcion}
          onClick={onClick}
      />
      ))}
    </Layout>
  );
}

export default App;
