import React from 'react';
import SubTitulos from './SubTitulos';

const Titulos = (props) => {
   return (
      <div>
         {props.titulo.subtitulo.map((subtitulo) =>(
            <SubTitulos subtitulo={subtitulo} key={subtitulo.id} idTitulo={props.idTitulo} idSubtitulo={subtitulo.id} consultarTemas={props.consultarTemas} handleDelete={props.handleDelete} />
         ))}
      </div>
   );
};

export default Titulos;