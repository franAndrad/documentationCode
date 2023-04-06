import React, { useEffect, useState } from 'react';
import Titulos from './Docs/Titulos';
import Navigate from './Docs/Navigate';
import CodeEditor from '../others/CodeEditor';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './Document.css';

const Document = () => {

   const [temas , setTemas] = useState({});
   const [text, setText] = useState('');
   const [code, setCode] = useState('');
   const navegacion = useNavigate();
   const titulo = 'React';

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
               headers: { "Content-Type": "application/json", },
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

   const handleDelete = async (idTitulo,idSubtitulo,idParrafo) => {
      const nuevoObjeto = {...temas};
      nuevoObjeto.titulo[idTitulo-1].subtitulo[idSubtitulo-1].parrafos = nuevoObjeto.titulo[idTitulo-1].subtitulo[idSubtitulo-1].parrafos.filter((parrafo) => parrafo.id !== idParrafo);
      try {
         const respuesta = await fetch("http://localhost:4000/tema/", { 
               method: "PUT", 
               headers: { "Content-Type": "application/json", },
               body: JSON.stringify(nuevoObjeto),
            });
         navegacion('/document')
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <div>
         {temas.titulo === undefined ? '' : (temas.titulo.map((titulo) => (<h1 key={titulo.id} className='text-center titulo'>{titulo.nombre} </h1>)))}
         <div id="navegador" className='my-5 fixed-top mx-5 navegacion d-none d-lg-block'>
               {temas.titulo === undefined ? '' : (temas.titulo.map((titulo) => (<Navigate titulo={titulo} key={titulo.id} />)))}
         </div>
         <div className='my-5 documento'>
            {temas.titulo === undefined ? '' : (temas.titulo.map((titulo) => (<Titulos titulo={titulo} key={titulo.id} idTitulo={titulo.id} consultarTemas={consultarTemas} handleDelete={handleDelete} />)))}
            <Form onSubmit={handleSubmit} className='my-5 row p-3 rounded border border-dark'>
               <h5 className='text-center'>Ingrese lo que desea agregar</h5>
               <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                  <input type='text' rows={3} className="background-form border border-dark text-light" placeholder='Ingrese el parrafo' onChange={(e) => setText(e.target.value)}></input>
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <CodeEditor setCode={setCode}></CodeEditor>
               </Form.Group>
               <div className='text-center mb-3 mt-2'>
                  <Button type='submit' variant='dark' className='w-25'>Enviar</Button>
               </div>
            </Form>
         </div>
      </div>
   );
};

export default Document;