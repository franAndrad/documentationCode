import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Documents = () => {
   const [temas, setTemas] = useState({});

   useEffect(() => {
      consultarTemas();
   }, [])

   const consultarTemas = async () => {
      const respuestaJson = await fetch('http://localhost:4000/tema');
      const respuesta = await respuestaJson.json();
      setTemas(respuesta);
   }
   return (
         <div>
            <h1>Temas</h1>
            <ul>
               {temas.titulo === undefined ? '' : temas.titulo.map((tit,key) => (<Link to={`/documents/title/`+tit.id}><li key={tit.id} >{tit.nombre}</li></Link>))}
            </ul>
         </div>
      )
};

export default Documents;