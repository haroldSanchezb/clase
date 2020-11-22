import React from 'react';

const NuevaTarea = () => (
  <div className="panel-block">
    <div className="field nueva-tarea has-addons">
      <div className="control is-expanded">
        <input className="input" type="text" placeholder="Ingresa una nueva tarea" />
      </div>
      <div className="control">
        <button className="button is-success">
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
        </button>
      </div>
    </div>
  </div>
);

export default NuevaTarea;
