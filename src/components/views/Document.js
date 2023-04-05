import React, { useEffect, useState } from 'react';
import Linea from './Linea'

const Document = () => {

   const [parrafos , setParrafos] = useState([]);

   useEffect(()=>{
      consultarParrafos();
   },[])

   const consultarParrafos = async () => {
      const respuestaJson = await fetch('http://localhost:4000/parrafos');
      const respuesta = await respuestaJson.json();
      setParrafos(respuesta);
   }

   return (
      <div className='container my-5'>
         {
            parrafos.map((linea)=>
            (
            <Linea key={linea.id} linea={linea} />))
         }
      </div>
   );
};

export default Document;