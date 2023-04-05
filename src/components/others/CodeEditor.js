import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { githubDark } from '@uiw/codemirror-theme-github';

const CodeEditor = (props) => {

   const onChange = React.useCallback((value, viewUpdate) => {
      console.log('value:', value);
   }, []);

   return (
      <CodeMirror 
         theme={githubDark}
         value={props.code}
         extensions={[javascript({ jsx: true })]}
         onChange={onChange}
      />
   );
};

export default CodeEditor;