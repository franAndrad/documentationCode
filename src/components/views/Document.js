import React, { useEffect, useState } from 'react';
import Titulos from './Docs/Titulos';
import { Form, Button } from 'react-bootstrap';

const Document = () => {

   const [temas , setTemas] = useState({});
   const [text, setText] = useState('')

   useEffect(()=>{
      consultarTemas();
   },[])

   const consultarTemas = async () => {
      const respuestaJson = await fetch('http://localhost:4000/tema');
      const respuesta = await respuestaJson.json();
      console.log('resp',respuesta)
      setTemas(respuesta);
   }

   const handleSubmit = async (e) => {
      e.preventDefault();

      const nuevoParrafo = {
         linea: text,
         isCode: false,
         code: ""
      };

      const nuevoObjeto = {...temas};
      console.log(temas)
      nuevoObjeto.titulo[0].subtitulo[0].parrafos.push(nuevoParrafo);
      console.log(nuevoObjeto)
      
      try {
         const respuesta = await fetch("http://localhost:4000/tema/", {
            method: "PUT",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoObjeto),
         });
      } catch (error) {
         console.log(error);
      }
   }


   return (
      <div className='container my-5'>
            {
               temas.titulo === undefined ? '' :  
               (temas.titulo.map((titulo,key) => (<Titulos titulo={titulo} key={key} />)))
            }
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               <Form.Label>Example textarea</Form.Label>
               <Form.Control as="textarea" rows={3} onChange={(e) => setText(e.target.value)} />
            </Form.Group>
            <Button type='submit' variant='dark'>Enviar</Button>
         </Form>
      </div>
   );
};

export default Document;