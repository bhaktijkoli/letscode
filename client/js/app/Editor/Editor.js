import React, { Component } from 'react';
import AceEditor from 'react-ace';

import languages from './../data/languages.json';

import 'ace-builds/src-min-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';

class Editor extends Component {
  constructor(props) {
    super(props);
    let lang = null;
    languages.forEach(l => {
      if (l.slug == this.props.match.params.slug) lang = l;
    });
    this.state = {
      lang,
      code: '',
      selectedFile: null
    };
    document.title = `${lang.name} Editor`;
  }
  render() {
    return (
      <React.Fragment>
        <div id='editor-nav'>
          <div className='editor-title'>
            <h1>{this.state.lang.name}</h1>
          </div>
          <div className='editor-action'>
            <input
              type='file'
              name='file'
              id='file'
              style={{ display: 'none' }}
              onChange={this.handleFile}
              ref={fileInput => (this.fileInput = fileInput)}
            />
            <button
              className='btn btn-success btn-sm'
              onClick={() => this.fileInput.click()}
            >
              Pick File
            </button>
            <button
              className='btn btn-success btn-sm'
              onClick={this.fileUploadHandler}
            >
              Upload File
            </button>
            <button className='btn btn-success btn-sm' onClick={this.onRun}>
              RUN
            </button>
          </div>
        </div>
        <AceEditor
          mode={this.state.lang.mode}
          theme='monokai'
          onLoad={this.onLoad}
          onChange={code => this.setState({ code })}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={this.state.code}
          className='ace-editor'
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2
          }}
        />
        <div className='ace-output'></div>
      </React.Fragment>
    );
  }

  handleFile = e => {
    this.setState({
      selectedFile: e.target.files[0].name
    });
  };

  fileUploadHandler = () => {
    const fd = new FormData();

    fd.append('file', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('', fd).then(res => {
      console.log(res);
    });
  };
  onRun = () => {
    let data = {
      content: this.state.code,
      mode: this.state.lang.mode
    };
    axios.post('https://compiler.bhaktijkoli.com/compile', data).then(res => {
      $('.ace-output').append(`<p>${res.data.output}</p>`);
    });
  };
}

export default Editor;
