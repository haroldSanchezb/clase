import React from 'react';
import Image from './image';

const Card = ({ foto, retrato, nombre, contacto, descripcion, onClick }) => {
  const onClickImage = () => {
    if (onClick) {
      onClick(nombre);
    }
  };

  return (
    <div className="column card familia">
      <div className="card-image" onClick={onClickImage}>
        <Image
          className={foto.className}
          src={foto.src}
          alt={foto.alt}
        />
      </div>
      <div className="card-content">
        <div className="media">
          {retrato && (
            <div className="media-left">
              <Image
                className={retrato.className}
                src={retrato.src}
                alt={retrato.alt}
              />
            </div>
          )}
          <div className="media-content">
            <p className="title is-4">{nombre}</p>
            {contacto ? <p className="subtitle is-6">{contacto}</p> : <span className="tag is-danger">Sin datos de contacto</span>}
          </div>
        </div>
        {descripcion && <div className="content">{descripcion}</div>}
      </div>
    </div>
  );
};

export default Card;