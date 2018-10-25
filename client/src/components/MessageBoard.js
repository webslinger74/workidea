import React, { Component } from 'react';
import { getMessages } from '../actions/messageActions';
import { connect } from 'react-redux';
import MyComponent from '../utils/editor';

export class MessageBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    showMessages = (messages) => (
        messages && messages.map(mess => (
             <div className="ste" key={mess._id}>
           
                <h3> {mess.title} </h3>
                <h5> {mess.message} </h5>
                <h3> {mess.author} </h3>
               <h4>  {mess.createdAt} </h4>
      
             </div>
         ))
      
)


    componentDidMount(){
        this.props.getMessages();
    }

    


    render() { 
        const {messages}  =  this.props;

        return (
            <div className="">
                MessageBoard
                {this.showMessages(messages)}
            

            </div>
          );
    }
}


const actions = {
    getMessages
}

const mapStateToProps = (state) => ({
    messages: state.messages.allMessages
})

export default connect(mapStateToProps, actions)(MessageBoard);