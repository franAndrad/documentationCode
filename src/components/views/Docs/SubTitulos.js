import React from 'react';
import Parrafos from './Parrafos';

const SubTitulos = (props) => {
   return (
      <div>
         <h3 id={'sub' + props.subtitulo.id.toString()} className='fw-normal'>{props.subtitulo.nombre}</h3>
         {props.subtitulo.parrafos.map((parrafo,key)=>(
            <Parrafos parrafos={parrafo} idTitulo={props.idTitulo} idSubtitulo={props.idSubtitulo} key={key} handleDelete={props.handleDelete} />
         ))}
      </div>
   );
};

export default SubTitulos;