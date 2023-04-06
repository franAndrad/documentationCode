import React from 'react';

const OptionSubs = (props) => {
   return (
      <option value={props.subtitulo.id} >{props.subtitulo.nombre}</option>
   );
};

export default OptionSubs;