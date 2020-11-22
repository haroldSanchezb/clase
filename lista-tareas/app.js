import React from 'react';
import Panel from './panel';
import NuevaTarea from './nueva-tarea';

const App = () => {
  return (
    <Panel>
      <p className="panel-heading">Mi lista de tareas</p>
      <NuevaTarea />
      <div />
    </Panel>
  );
}

export default App;
