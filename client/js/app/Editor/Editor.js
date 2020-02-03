import React, { Component } from 'react';
import AceEditor from 'react-ace';
import { withFirebase } from './../Firebase';
import { withStore } from './../Store';

import languages from './../data/languages.json';

import 'ace-builds/src-min-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';

import Browser from './Browser';

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
    console.log("Props", this.props);
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
              className='btn btn-success btn-sm mr-2'
              onClick={() => this.fileInput.click()}
              >
              Upload File
            </button>
            <button
              className='btn btn-success btn-sm mr-2'
              onClick={this.onRun}
              >
              Run
            </button>
          </div>
        </div>
        <div className="row">
          <div id="file-browser" className="col-sm-3 no-padding">
            <Browser firebase={this.props.firebase} store={this.props.store}/>
          </div>
          <div className="col-sm-9">
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
          </div>
        </div>
      </React.Fragment>
    );
  }

  handleFile = e => {
    var input = e.target;
    var reader = new FileReader();
    reader.onload = () => {
      var code = reader.result;
      this.setState({code});
    };
    reader.readAsText(input.files[0]);
  }

  readTextFile = (file) => {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
      if(rawFile.readyState === 4)
      {
        if(rawFile.status === 200 || rawFile.status == 0)
        {
          var allText = rawFile.responseText;
          alert(allText);
        }
      }
    }
    rawFile.send(null);
  }

  onRun = () => {
    let data = {
      content: this.state.code,
      mode: this.state.lang.mode
    };
    axios.post('https://compiler.bhaktijkoli.com/compile', data).then(res => {
      $('.ace-output').append(`<p>${res.data.output}</p>`);
    });
  }
}

export default withStore(withFirebase(Editor));
