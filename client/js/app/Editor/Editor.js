import React, { Component } from 'react';
import AceEditor from 'react-ace';

import languages from './../data/languages.json';

import "ace-builds/src-min-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";

function onChange(newValue) {
  console.log("change", newValue);
}

class Editor extends Component {
  constructor(props) {
    super(props);
    let lang = null;
    languages.forEach(l => {
      if(l.slug == this.props.match.params.slug)
        lang = l;
    });
    this.state = {
      lang
    }
    document.title = `${lang.name} Editor`;
  }
  render() {
    return(
      <React.Fragment>
        <div id="editor-nav">
          
        </div>
      </React.Fragment>
    );
  }
}

export default Editor;
