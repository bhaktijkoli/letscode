import React, { Component } from 'react';
import AceEditor from 'react-ace';

import "ace-builds/src-min-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";

function onChange(newValue) {
  console.log("change", newValue);
}

class Editor extends Component {
  render() {
    return(
      <div>
        Code editor comes here
        <AceEditor
          mode="java"
          theme="monokai"
          onChange={onChange}
          name="c_editor"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableLiveAutocompletion: true,
            tabSize: 2,
          }}
        />
      </div>
    );
  }
}

export default Editor;
