import React from 'react';
import CodeEditor from '../../others/CodeEditor';
import './Parrafos.css'

const Parrafos = (props) => {
   return (
      <div className='row'>
         <div className='col-12 col-sm-11 col-lg-11'>
            {props.parrafos.linea !== '' ? <p className='my-3'>{props.parrafos.linea}</p> : ''}
            {props.parrafos.code !== '' ? <CodeEditor code={props.parrafos.code} className='my-3' /> : ''}
         </div>
         <div className='d-flex col-12 col-sm-1- col-lg-1 justify-content-around'>
            <button className='btn button'><i className="bi bi-trash3-fill"></i></button>
            <button className='btn button'><i className="bi bi-pencil-square"></i></button>
         </div>
      </div>
   );
};

export default Parrafos;