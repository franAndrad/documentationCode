import React from 'react';
import CodeEditor from '../../others/CodeEditor';
import './Parrafos.css'
import { Link, animateScroll as scroll } from "react-scroll";

const Parrafos = (props) => {

   return (
      <div className='row'>
         <div className='col-12 col-sm-11 col-lg-11'>
            {props.parrafos.linea !== '' ? <p className='my-3'>{props.parrafos.linea}</p> : ''}
            {props.parrafos.code !== '' ? <CodeEditor code={props.parrafos.code} /> : ''}
         </div>
         <div className='d-flex col-12 col-sm-1- col-lg-1 justify-content-around'>
            <button className='btn button' onClick={() => props.handleDelete(props.idSub,props.parrafos.id)}><i className="bi bi-trash3-fill"></i></button>
            <Link to="form" smooth={true} duration={300} className='btn button' onClick={() => props.handleUpdate(props.idSub, props.parrafos.id)}><i className="bi bi-pencil-square"></i></Link>
         </div>
      </div>
   );
};

export default Parrafos;