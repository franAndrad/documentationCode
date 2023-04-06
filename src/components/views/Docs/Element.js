import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './Element.css'

const Element = (props) => {
   return (
         <li><Link to={'sub' + props.subtitulo.id.toString()} smooth={true} duration={300} className='text-decoration-none text-light lista btn'>{props.subtitulo.nombre}</Link></li>
   );
};

export default Element;