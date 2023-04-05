import React from 'react';
import Element from './Element';

const Navigate = (props) => {
   return (
      <ol>
         {
            props.titulo.subtitulo.map((sub)=>(
               <Element subtitulo={sub} key={sub.id}/>
            ))
         }
      </ol>
   );
};

export default Navigate;