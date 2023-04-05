import React from 'react';
import CodeEditor from '../../others/CodeEditor';

const Parrafos = (props) => {
   return (
      <div>
         <p>{props.parrafos.linea}</p>
         {props.parrafos.isCode ? <CodeEditor code={props.parrafos.code}/> : ''}
      </div>
   );
};

export default Parrafos;