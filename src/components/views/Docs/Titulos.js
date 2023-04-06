import React from 'react';
import SubTitulos from './SubTitulos';

const Titulos = (props) => {
   return (
      <div>
         {props.titulo.subtitulo.map((subtitulo) =>(
            <SubTitulos subtitulo={subtitulo} key={subtitulo.id} consultarTemas={props.consultarTemas} />
         ))}
      </div>
   );
};

export default Titulos;