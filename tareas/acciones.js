const listado = tareas => {
  let contenido = '';
  // span es una etiqueta de html que sirve para colocar texto
  // div es una etiqueta de html que permite sumar cualquier etiqueta dentro
  tareas.forEach(tarea => {
    contenido += `
      <div>
        <span>${tarea.id}</span>
        <span>${tarea.texto}</span>
        <button data-id="${tarea.id}" class="eliminar item-${tarea.id}">Eliminar</button>
      </div>
    `;
  });

  return contenido;
};

const eliminar = (tareas, id) => {
  return tareas.filter(tarea => tarea.id != id);
};

export {
  listado,
  eliminar,
};
