import React, { Component } from 'react';
import AceEditor from 'react-ace';

import languages from './../data/languages.json';

import "ace-builds/src-min-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";

class Editor extends Component {
  constructor(props) {
    super(props);
    let lang = null;
    languages.forEach(l => {
      if(l.slug == this.props.match.params.slug)
      lang = l;
    });
    this.state = {
      lang,
      code: '',
    }
    document.title = `${lang.name} Editor`;
  }
  render() {
    return(
      <React.Fragment>
        <div id="editor-nav">
          <div className="editor-title">
            <h1>{this.state.lang.name}</h1>
          </div>
          <div className="editor-action">
            <button className="btn btn-success btn-sm" onClick={this.onRun}>RUN</button>
          </div>
        </div>
        <AceEditor
          mode={this.state.lang.mode}
          theme="monokai"
          onLoad={this.onLoad}
          onChange={code => this.setState({code})}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={this.state.code}
          className="ace-editor"
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
          }}/>
        <div className="ace-output"></div>
        </React.Fragment>
      );
    }
    onRun = () => {
      let data = {
        content: this.state.code,
        mode: this.state.lang.mode,
      };
      axios.post('https://compiler.bhaktijkoli.com/compile', data)
      .then(res => {
        $('.ace-output').append(`<p>${res.data.output}</p>`);
      })
    }
  }

  export default Editor;
