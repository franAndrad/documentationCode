import React from 'react';
import SubTitulos from './SubTitulos';

const Titulos = (props) => {
   return (
      <div>
         <h2 className='display-3 text-center'>{props.titulo.nombre}</h2>
         {props.titulo.subtitulo.map((subtitulo,key) =>(
            <SubTitulos subtitulo={subtitulo} key={key}/>
         ))}
      </div>
   );
};

export default Titulos;