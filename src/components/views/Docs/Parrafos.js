import React from 'react';
import CodeEditor from '../../others/CodeEditor';

const Parrafos = (props) => {
   return (
      <div>
         
         {props.parrafos.linea !== '' ? <p className='my-3'>{props.parrafos.linea}</p> : ''}
         {props.parrafos.code !== '' ? <CodeEditor code={props.parrafos.code} className='my-3' /> : ''}
      </div>
   );
};

export default Parrafos;