import React from 'react';

const OptionSubs = (props) => {
   return (
      <option value={props.sub.id} >{props.sub.nombre}</option>
   );
};

export default OptionSubs;