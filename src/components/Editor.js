import React, { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

function onChange(newValue) {
  console.log("change", newValue);
}
export default function Editor(props) {
  const [text, setText] = useState("");
  // Render editor
  return (
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
  );
}
