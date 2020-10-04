import React from 'react';
import Hola from './hola';
import Apellido from './apellido';
import Description from './description';
import Layout from './layout';
import Animal from './animal';

const App = () => {
  const data = {
    nombre: 'Harold',
    apellido: 'Sanchez',
    edad: 33,
    animal: {
      tipo: 'perro',
      nombre: 'Korben',
    },
  };

  return ( // cuando queremos usar mas etiquetas de htlm o componentes
    <Layout> {/* Si queremos usar varios componentes y o elementos de html es bueno encerrar en un div */}
      <Hola nombre={data.nombre} />
      <Apellido apellido={data.apellido} edad={data.edad} />
      <Animal animal={data.animal} />
      <p>mi gente</p>
      <Hola nombre="Giova" />
      <Hola nombre="Lina" />
      <Description texto="lalala" />
    </Layout>
  );
}

export default App;


// componente App donde ahi se crea la data
// componente Layout para aplicar el concepto de children
// componente Nombre
// componente Apellido
// componente Mascota dentro de mascota usar fragment

