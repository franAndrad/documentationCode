import React from 'react';
import Parrafos from './Parrafos';

const SubTitulos = (props) => {
   return (
      <div>
         <h3 className='px-3'>{props.subtitulo.nombre}</h3>
         {props.subtitulo.parrafos.map((parrafo,key)=>(
            <Parrafos parrafos={parrafo} key={key}/>
         ))}
      </div>
   );
};

export default SubTitulos;