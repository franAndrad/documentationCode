import React from 'react';
import CodeEditor from '../others/CodeEditor';

const Linea = (props) => {
   return (
      <div>
         <p className='my-3'>{props.linea.linea}</p>
         <CodeEditor code={props.linea.code}/>         
      </div>
   );
};

export default Linea;