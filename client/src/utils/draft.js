/*
import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import {RichUtils} from 'draft-js';


class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.setEditor = (editor) => {
      this.editor = editor;
    };
    this.focusEditor = () => {
      if (this.editor) {
        this.editor.focus();
      }
    };
  } 
handleKeyCommand(command, editorState) {
  const newState = RichUtils.handleKeyCommand(editorState, command);
  if (newState) {
    this.onChange(newState);
    return 'handled';
  }
  return 'not-handled';
}

  _onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  _onUnderlineClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }


  componentDidMount() {
    this.focusEditor();
  }
      
      
    
  

  render() {

  
    return (
      <div>
      
      <div onClick={() => this._onBoldClick()}>Bold</div>
      <div onClick={() => this._onUnderlineClick()}>Underline</div>
      <div style={styles.editor} onClick={this.focusEditor}>
        <Editor
          ref={this.setEditor}
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
        />
      </div>
      </div>
    );
  }
}

const styles = {
  editor: {
    border: '4px solid gray',
    minHeight: '0.6em',
    marginBottom:'30px',
    maxWidth:'400px'
  }
};

export default MyEditor;

*/