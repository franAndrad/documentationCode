import React, { useEffect, useState } from 'react';
import Titulos from './Docs/Titulos';
import Navigate from './Docs/Navigate';
import CodeEditor from '../others/CodeEditor';
import { Form, Button } from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';

import './Document.css';

const Document = () => {
   const [temas , setTemas] = useState({});
   const [text, setText] = useState('');
   const [code, setCode] = useState('');
   const [editar, setEditar] = useState(false);

   const [idT, setIdT] = useState(0);
   const [idS, setIdS] = useState(0);
   const [idP, setIdP] = useState(0);

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
            code: code,
            id: temas.titulo[0].subtitulo[0].parrafos[temas.titulo[0].subtitulo[0].parrafos.length - 1].id + 1
         };
         const nuevoObjeto = {...temas};
         nuevoObjeto.titulo[0].subtitulo[0].parrafos.push(nuevoParrafo);
         try {
            const respuesta = await fetch("http://localhost:4000/tema/", { 
               method: "PUT", 
               headers: { "Content-Type": "application/json", },
               body: JSON.stringify(nuevoObjeto),
            });
            setText('')
            consultarTemas();
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
         consultarTemas();
      } catch (error) {
         console.log(error);
      }
   }

   const handleUpdate = (idTitulo, idSubtitulo, idParrafo) => {
      setEditar(true);
      setCode(temas.titulo[idTitulo - 1].subtitulo[idSubtitulo - 1].parrafos[idParrafo - 1].code);
      setText(temas.titulo[idTitulo - 1].subtitulo[idSubtitulo - 1].parrafos[idParrafo - 1].linea); 
      setIdT(idTitulo)    
      setIdS(idSubtitulo)    
      setIdP(idParrafo)    
      
   }

   const handleUpdateParams = async (e) => {
      e.preventDefault();
      if((text!== '') || (code!== '') || (editar ==  true)){
         const nuevoObjeto = {...temas};
         nuevoObjeto.titulo[idT-1].subtitulo[idS-1].parrafos[idP-1].code = code;
         nuevoObjeto.titulo[idT-1].subtitulo[idS-1].parrafos[idP-1].linea = text;
         try {
            const respuesta = await fetch("http://localhost:4000/tema/", { 
               method: "PUT", 
               headers: { "Content-Type": "application/json", },
               body: JSON.stringify(nuevoObjeto),
            });
            setEditar(false);
            setCode('');
            setText('');
            consultarTemas();
         } catch (error) {
            console.log(error);
         }
      }
      else{
         console.log('enviar alerta');
      }
   }

   return (
      <div>
         {temas.titulo === undefined ? '' : (temas.titulo.map((titulo) => (<h1 key={titulo.id} className='text-center titulo'>{titulo.nombre} </h1>)))}
         <div id="navegador" className='my-5 fixed-top mx-5 navegacion d-none d-lg-block'>
               {temas.titulo === undefined ? '' : (temas.titulo.map((titulo) => (<Navigate titulo={titulo} key={titulo.id} />)))}
         </div>
         <div className='my-5 documento'>
            {temas.titulo === undefined ? '' : (temas.titulo.map((titulo) => (<Titulos titulo={titulo} key={titulo.id} idTitulo={titulo.id} consultarTemas={consultarTemas} handleDelete={handleDelete} handleUpdate={handleUpdate} />)))}
            <Form onSubmit={editar!== true ? handleSubmit : handleUpdateParams} className='my-5 row p-3 rounded border border-dark'>
               <h5 className='text-center' id="form">Ingrese lo que desea agregar</h5>
               <Form.Group className="my-3" controlId="text">
                  <input type='text' value={text} rows={3} className="background-form border border-dark text-light" placeholder='Ingrese el parrafo' onChange={(e) => setText(e.target.value)}></input>
               </Form.Group>
               <Form.Group className="mb-3" controlId="code">
                  <CodeEditor setCode={setCode} code={code}></CodeEditor>
               </Form.Group>
               <div className='text-center mb-3 mt-2'>
                  <Button type='submit' variant='dark' className='w-25'>{editar!== true ? "Enviar" : "Editar"}</Button>
               </div>
            </Form>
         </div>
      </div>
   );
};

export default Document;