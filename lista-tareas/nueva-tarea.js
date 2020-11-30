import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const NuevaTarea = ({ onClick }) => {
  const onClickButton = () => {
    const texto = document.querySelector('.nueva-tarea__input').value;

    if(texto) {
      // si van a setear un valor de una key en un objeto y la variable que tiene ese valor se llama igual que la key, con que dejen el nombre de la key es6 hace la conversion
      onClick({
        id: uuidv4(),
        texto,
        completado: false,
      })
      document.querySelector('.nueva-tarea__input').value = '';
    }
  };

  return (
    <div className="panel-block">
      <div className="field nueva-tarea has-addons">
        <div className="control is-expanded">
          <input className="input nueva-tarea__input" type="text" placeholder="Ingresa una nueva tarea" />
        </div>
        <div className="control">
          <button className="button is-success" onClick={onClickButton}>
            <span className="icon is-small">
              <i className="fas fa-plus" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NuevaTarea;
