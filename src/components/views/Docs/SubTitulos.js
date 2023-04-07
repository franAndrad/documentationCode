import React from 'react';
import Parrafos from './Parrafos';

const SubTitulos = (props) => {
   return (
      <div>
         <h3 id={'sub' + props.sub.id.toString()} className='fw-normal mb-3 mt-5'>{props.sub.nombre}</h3>
         <hr className='border-info'/>
         {props.sub.parrafos.map((parrafo,key)=>(
            <Parrafos parrafos={parrafo} idSub={props.idSub} key={key} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} />
         ))}
      </div>
   );
};

export default SubTitulos;