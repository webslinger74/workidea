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
  }
 
  render() {
   
    return (
      <ReactQuill value={this.state.text}
                  onChange={this.handleChange}
                  theme="snow"
                  modules={MyComponent.modules}
                  formats={MyComponent.formats}
                   />
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
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
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