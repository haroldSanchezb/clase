import React from 'react';
import Layout from './layout';
import Card from './card';
import * as images from './images/*.jpg'; // permite importar todas nuestras imagenes y guardar el nombre de la imagen en un objeto

const App = () => {
  const familia = [
    {
      foto: {
        className: 'is-4by3',
        src: 'https://instagram.fscl28-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/117536351_612093013047789_807089988470265665_n.jpg?_nc_ht=instagram.fscl28-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=LGa6RuhU06cAX-TR6I2&_nc_tp=15&oh=04da50a4458eb43e5a9d5a1b83c9f167&oe=5FD0389B',
        alt: 'lalala',
      },
      retrato: {
        className: 'is-48x48',
        src: 'https://instagram.fscl28-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/117536351_612093013047789_807089988470265665_n.jpg?_nc_ht=instagram.fscl28-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=LGa6RuhU06cAX-TR6I2&_nc_tp=15&oh=04da50a4458eb43e5a9d5a1b83c9f167&oe=5FD0389B',
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
        src: images.foto,
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
