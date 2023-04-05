import React from 'react';
import SubTitulos from './SubTitulos';

const Titulos = (props) => {
   return (
      <div>
         <h2 className='display-3 text-center'>{props.titulo.nombre}</h2>
         {props.titulo.subtitulo.map((subtitulo) =>(
            <SubTitulos subtitulo={subtitulo} key={subtitulo.id} />
         ))}
      </div>
   );
};

export default Titulos;