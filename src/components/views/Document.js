import React, { useEffect, useState } from 'react';
import Titulos from './Docs/Titulos';
import CodeEditor from '../others/CodeEditor';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Document = () => {

   const [temas , setTemas] = useState({});
   const [text, setText] = useState('');
   const [code, setCode] = useState('');

   const navegacion = useNavigate();

   useEffect(()=>{
      consultarTemas();
   },[])

   const consultarTemas = async () => {
      const respuestaJson = await fetch('http://localhost:4000/tema');
      const respuesta = await respuestaJson.json();
      setTemas(respuesta);
   }

   const handleSubmit = async (e) => {
      e.preventDefault();

      if((text !== '') || (code !== '')){
         const nuevoParrafo = {
            linea: text,
            code: code
         };

         const nuevoObjeto = {...temas};
         nuevoObjeto.titulo[0].subtitulo[0].parrafos.push(nuevoParrafo);
         
         try {
            const respuesta = await fetch("http://localhost:4000/tema/", {
               method: "PUT",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(nuevoObjeto),
            });
            navegacion('/document')
         } catch (error) {
            console.log(error);
         }
      }
      else{
         console.log('enviar alerta')
      }
   }


   return (
      <div className='container my-5'>
            {
               temas.titulo === undefined ? '' :  
               (temas.titulo.map((titulo,key) => (<Titulos titulo={titulo} key={key} />)))
            }
         <Form onSubmit={handleSubmit} className='my-5 row'>
            <h5 className='text-center'>Ingrese lo que desea agregar</h5>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               <Form.Label>Ingrese el parrafo</Form.Label>
               <Form.Control type='text' rows={3} onChange={(e) => setText(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               <Form.Label>Ingrese el codigo</Form.Label>
               <CodeEditor setCode={setCode}></CodeEditor>
            </Form.Group>
            <Button type='submit' variant='dark'>Enviar</Button>
         </Form>
      </div>
   );
};

export default Document;