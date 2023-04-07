import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './Element.css'

const Element = (props) => {
   return (
         <li><Link to={'sub' + props.sub.id.toString()} smooth={true} duration={300} className='text-decoration-none text-light lista btn'>{props.sub.nombre}</Link></li>
   );
};

export default Element;