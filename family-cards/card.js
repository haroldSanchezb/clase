import React from 'react';
import Image from './image';

const Card = ({ foto, retrato, nombre, contacto, descripcion }) => (
  <div className="column card familia">
    <div className="card-image">
      <Image
        className={foto.className}
        src={foto.src}
        alt={foto.alt}
      />
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <Image
            className={retrato.className}
            src={retrato.src}
            alt={retrato.alt}
          />
        </div>
        <div className="media-content">
          <p className="title is-4">{nombre}</p>
          <p className="subtitle is-6">{contacto}</p>
        </div>
      </div>
      <div className="content">{descripcion}</div>
    </div>
  </div>
);

export default Card;