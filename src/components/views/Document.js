import React, { useEffect, useState } from 'react';
import Titulos from './Docs/Titulos';
import Navigate from './Docs/Navigate';
import CodeEditor from '../others/CodeEditor';
import { Form, Button } from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';
import Options from './Select/OptionSub';
import TituloSelect from './Select/TituloSelect';

import './Document.css';
import { set } from 'lodash';

const Document = () => {
   const [temas , setTemas] = useState({});
   const [text, setText] = useState('');
   const [code, setCode] = useState('');
   const [editar, setEditar] = useState(false);
   const [subtitulo, setSubtitulo] = useState('')
   const [stateSelect, setStateSelect] = useState(true)

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


   // MODIFICAR!!!!! EL temmas.titulo[0] para que se modifique el titulo a escribir, analizar el mejor metodo para seleccionar titulos
   const handleSubmit = async (e) => {
      e.preventDefault();


      if(subtitulo !== ''){
         let id;
         if (temas.titulo[0].subtitulo.length === 0) {
            id = 1;
         } else {
            id = temas.titulo[0].subtitulo[temas.titulo[0].subtitulo.length - 1].id + 1
         }
         const nuevoSubtitulo = {
            id: id,
            nombre: subtitulo,
            parrafos:[]
         };
         const nuevoObjeto = { ...temas };
         nuevoObjeto.titulo[0].subtitulo.push(nuevoSubtitulo);
         console.log(nuevoObjeto)
         try {
            const respuesta = await fetch("http://localhost:4000/tema/", {
               method: "PUT",
               headers: { "Content-Type": "application/json", },
               body: JSON.stringify(nuevoObjeto),
            });
            setSubtitulo('');
            setText('');
            setCode('');
            setStateSelect(true)
            consultarTemas();
         } catch (error) {
            console.log(error);
         }
      }else if((text !== '') || (code !== '')){
         let id;
         if (temas.titulo[0].subtitulo[idS - 1].parrafos.length === 0){
            id = 1;
         } else {
            id = temas.titulo[0].subtitulo[idS - 1].parrafos[temas.titulo[0].subtitulo[idS - 1].parrafos.length - 1].id + 1
         }
         const nuevoParrafo = {
            linea: text,
            code: code,
            id: id
         };
         const nuevoObjeto = {...temas};
         nuevoObjeto.titulo[0].subtitulo[idS - 1].parrafos.push(nuevoParrafo);
         try {
            const respuesta = await fetch("http://localhost:4000/tema/", { 
               method: "PUT", 
               headers: { "Content-Type": "application/json", },
               body: JSON.stringify(nuevoObjeto),
            });
            setText('');
            setCode('');
            consultarTemas();
         } catch (error) {
            console.log(error);
         }
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

   const updateIdSub = (id) =>{
      let idInt = parseInt(id,10)
      setIdS(idInt)
   }

   return (
      <div>
         {temas.titulo === undefined ? '' : (temas.titulo.map((titulo) => (<h1 key={titulo.id} className='text-center titulo display-5'>{titulo.nombre} </h1>)))}
         <div id="navegador" className='my-5 fixed-top mx-5 navegacion d-none d-lg-block'>
               {temas.titulo === undefined ? '' : (temas.titulo.map((titulo) => (<Navigate titulo={titulo} key={titulo.id} />)))}
         </div>
         <div className='my-5 documento'>
            {temas.titulo === undefined ? '' : (temas.titulo.map((titulo) => (<Titulos titulo={titulo} key={titulo.id} idTitulo={titulo.id} consultarTemas={consultarTemas} handleDelete={handleDelete} handleUpdate={handleUpdate}/>)))}
            <Form onSubmit={editar!== true ? handleSubmit : handleUpdateParams} className='my-5 row p-3 rounded border border-dark'>
               <h5 className='text-center' id="form">Ingrese lo que desea agregar</h5>
               {(temas.titulo === undefined) ? '' : (temas.titulo.map((titulo) => (<TituloSelect titulo={titulo} key={titulo.id} idTitulo={titulo.id} consultarTemas={consultarTemas} updateIdSub={updateIdSub} idS={idS} stateEditar={editar} setSubtitulo={setSubtitulo} subtitulo={subtitulo} setStateSelect={setStateSelect} stateSelect={stateSelect} setCode={setCode} setText={setText}/>)))} 
               {stateSelect !== false ?
                  <Form.Group className="my-3" controlId="text">
                     <Form.Control type='text' value={text} rows={3}  className="background-form border border-dark text-light" placeholder='Ingrese el parrafo' onChange={(e) => setText(e.target.value)}></Form.Control>
                  </Form.Group>: ''
               }
               {stateSelect !== false ?
                  <Form.Group className="my-3" controlId="code">
                     <CodeEditor setCode={setCode} code={code}></CodeEditor>
                  </Form.Group>: ''
               }
               
               <div className='text-center mb-3 mt-2'>
                  <button type='submit' variant='dark' className='w-25 btn btn-outline-info text-light'>{editar!== true ? "Enviar" : "Editar"}</button>
               </div>
            </Form>
         </div>
      </div>
   );
};

export default Document;