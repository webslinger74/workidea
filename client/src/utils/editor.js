import React, { Component } from 'react';
import ReactQuill, {Quill} from 'react-quill';

var Font = Quill.import('formats/font');
Font.whitelist = ['Ubuntu', 'Raleway', 'Roboto'];
Quill.register(Font, true);

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
   // this.handleChange = this.handleChange.bind(this)
  }
  
 
  handleChange = (value) => {
    this.setState({ text: value })
    this.props.getStateValue(this.state.text)
  }
 
  render() {
      
    return (
      <div>
       
        <div className="label_inputs">Message</div>
        <div>{this.props.error ? this.props.error : null }</div>
      <ReactQuill value={this.state.text}
                  onChange={this.handleChange}
                  theme="snow"
                  modules={MyComponent.modules}
                  formats={MyComponent.formats}
                  style={{marginTop:'10px', marginBottom:'10px'}}
                   />
           </div>
    )
  }
}

MyComponent.modules = {
  toolbar: [
    
    [{ 'header': '1'}, {'header': '2'}, { 'font': Font.whitelist }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote',],
    [{ 'color': [] }, { 'background': [] }],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}]
  ]
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
MyComponent.formats = [
  'header','font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote', 'color', 'background',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]


export default MyComponent;