import React, { useState } from 'react';
import { Form} from 'react-bootstrap';
import Options from './OptionSub';
import './TituloSelect.css';

const TituloSelect = (props) => {

   // const [select, setSelect] = useState(false)

   const enviarDatos = (value) => {
      props.setSubtitulo(value);
      props.updateIdSub(props.titulo.subtitulo.length)
   }
   
   const enviarSeleccion = (value) => {
      props.updateIdSub(value);
      props.setSubtitulo('');
   }

   const select = () =>{
      props.setStateSelect(!props.stateSelect)
      props.setCode('');
      props.setText('');
   }

   return (
      <Form.Group className="my-3 d-flex" controlId="subtitulo">
         {props.stateSelect === true ?
            <Form.Select className='border border-dark options' onChange={(e) => enviarSeleccion(e.target.value)} value={props.idS !== '' ? props.idS : '0'}>
            <option value='0'>Seleccione el subtitulo o presione el boton crear para generar uno nuevo</option>
            {props.titulo.subtitulo.map((sub, key) => (<Options subtitulo={sub} key={sub.id}  />))}
         </Form.Select>
         : <Form.Control type='text' value={props.subtitulo} rows={3} className="background-form border border-dark text-light" placeholder='Crear subtitulo o seleccione existente en el boton derecho' onChange={(e) => enviarDatos(e.target.value) }></Form.Control>
      }      
         <button className='btn' onClick={() => { select() }}>{props.stateSelect === true ? 'Crear' : 'Seleccione'}</button>
      </Form.Group >
   );
};

export default TituloSelect;