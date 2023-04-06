import React from 'react';
import Parrafos from './Parrafos';

const SubTitulos = (props) => {
   return (
      <div>
         <h3 id={'sub' + props.subtitulo.id.toString()} className='fw-normal mb-3 mt-5'>{props.subtitulo.nombre}</h3>
         <hr className='border-info'/>
         {props.subtitulo.parrafos.map((parrafo,key)=>(
            <Parrafos parrafos={parrafo} idTitulo={props.idTitulo} idSubtitulo={props.idSubtitulo} key={key} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} />
         ))}
      </div>
   );
};

export default SubTitulos;