import React from 'react';

const Tarea = ({ id, texto, completado, onComplete, onDelete }) => {
  const onChange = (event) => {
    onComplete({ id, completado: event.target.checked });
  };
  const onClick = () => {
    onDelete(id);
  }

  return (
    <div className="panel-block tarea">
      <input className="tarea__completado" type="checkbox" checked={completado} onChange={onChange}/>
      <span className="tarea__texto">{texto}</span>
      <span className="icon is-small has-text-danger is-right" onClick={onClick}>
        <i className="fas fa-trash-alt" />
      </span>
    </div>
  );
};

export default Tarea;
