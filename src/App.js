import React, { useState } from "react";
import AceEditor from "react-ace";
// import ShowHTML from "./components/ShowHTML";
import MarkdownView from 'react-showdown';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import ShowHTML from "./components/ShowHTML";

function App() {
  const [text, setText] = useState("");
  return (
    <>
      <AceEditor
        mode="markdown"
        theme="monokai"
        onChange={(newValue) => setText(newValue)}
        name="editor"
        value={text}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
      <ShowHTML text={text} />
    </>
  );
}

export default App;
