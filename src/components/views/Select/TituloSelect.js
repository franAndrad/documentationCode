import React from 'react';
import { Form} from 'react-bootstrap';
import Options from './OptionSub';
import './TituloSelect.css';

const TituloSelect = (props) => {
   
   console.log(props.idS)
   return (
      <Form.Group className="my-3" controlId="subtitulo">
         <Form.Select className='border border-dark options' onChange={(e) => props.updateIdSub(e.target.value)} value={props.idS !== '' ? props.idS : '0'}>
            <option value='0'>Seleccione el subtitulo</option>
            {props.titulo.subtitulo.map((sub, key) => (<Options subtitulo={sub} key={sub.id}  />))}
         </Form.Select>
      </Form.Group >
   );
};

export default TituloSelect;