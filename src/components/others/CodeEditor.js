import React from 'react';
import Code from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { githubDark } from '@uiw/codemirror-theme-github';

const CodeEditor = (props) => {
   const onChange = React.useCallback((value, viewUpdate) => {
      props.setCode(value.replace(/\n/g, '\n').replace(/\t/g, '\t'))
   }, []);

   return (
      <Code
         theme={githubDark}
         value={props.code}
         extensions={[javascript({ jsx: true })]}
         onChange={onChange}
         placeholder={"console.log('Hola Mundo!)"}
         height='auto'
      />
   );
};

export default CodeEditor;