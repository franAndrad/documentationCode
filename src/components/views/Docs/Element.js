import React from 'react';

const Element = (props) => {
   return (
         <li><a href={'#' + 'sub' + props.subtitulo.id.toString()} className='text-decoration-none text-light'>{props.subtitulo.nombre}</a></li>
   );
};

export default Element;