import React, { Component } from 'react';
import { getMessages } from '../actions/messageActions';
import { connect } from 'react-redux';
import MyEditor from '../utils/draft';
import 'draft-js/dist/Draft.css';

class MessageBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    componentDidMount(){
        this.props.getMessages();
    }

    


    render() { 
        const { messages } =  this.props;

        const showMessages = (messsages) => (
                   messages && messages.map(mess => (
                        <div className="" key={mess._id}>
                      
                           <h3> {mess.title} </h3>
                           <h5> {mess.message} </h5>
                           <h3> {mess.author} </h3>
                          <h4>  {mess.createdAt} </h4>
                  <MyEditor/>
                        </div>
                    ))
        )

        return (
            <div className="">
                MessageBoard
                {showMessages()}
       
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