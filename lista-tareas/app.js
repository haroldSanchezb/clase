import React, { useState } from 'react';
import Panel from './panel';
import NuevaTarea from './nueva-tarea';
import Tarea from './tarea';

const App = () => {
  // lo que va dentro del useState es el valor inicial con que queremos que arranque nuestra app
  // el nos da dos cosas, una variable que tiene el valor inicial y es el que se actualizara a medida de que hagamos con ese valor
  // una funcion que nos ayuda a actualizar esa variable
  const [lista, setLista] = useState([]);
  const nuevaTarea = (tarea) => {
    setLista([...lista, tarea]);
  };
  const completarTarea = ({ id, completado }) => {
    const nuevaLista = lista.map(tarea => {
      if(tarea.id === id) {
        return {
          ...tarea,
          completado,
        }
      }

      return tarea;
    });
    setLista(nuevaLista);
  };
  const eliminarTarea = (id) => {
    const nuevaLista = lista.filter(tarea => tarea.id !== id);
    setLista(nuevaLista);
  };

  return (
    <Panel>
      <p className="panel-heading">Mi lista de tareas</p>
      <NuevaTarea onClick={nuevaTarea} />
      {/* usar el concepto de spread de objetos para enviar todas las props al componente de react */}
      {lista.map(tarea => (
        <Tarea
          key={tarea.id}
          onComplete={completarTarea}
          onDelete={eliminarTarea}
          {...tarea}
        />
      ))}
    </Panel>
  );
}

export default App;
