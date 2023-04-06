import React from 'react';
import Element from './Element';
import { Link, animateScroll as scroll } from "react-scroll";

const Navigate = (props) => {
   return (
      <div>

      <ol>
         {
            props.titulo.subtitulo.map((sub)=>(
               <Element subtitulo={sub} key={sub.id}/>
               ))
            }
      </ol>
         <Link to={'form'} smooth={true} duration={300} className='text-decoration-none text-light mx-4 btn btn-outline-info'>Agregar</Link>
         </div>
   );
};

export default Navigate;