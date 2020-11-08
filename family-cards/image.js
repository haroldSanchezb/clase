import React from 'react';

const Image = ({ className, src, alt }) => (
  <figure className={`image ${className}`}>
    <img
      src={src}
      alt={alt}
    />
  </figure>
);

export default Image;