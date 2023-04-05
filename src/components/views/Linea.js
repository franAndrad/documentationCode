import CodeEditor from '../others/CodeEditor';

const Linea = (props) => {

console.log(props.linea.linea.isCode)
   return (
      <div>
         <p className='my-3'>{props.linea.linea}</p>
         {props.linea.isCode ? <CodeEditor code={props.linea.code} /> : '' }
                 
      </div>
   );
};

export default Linea;