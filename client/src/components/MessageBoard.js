import React, { Component } from 'react';
import { getMessages } from '../actions/messageActions';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export class MessageBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    convertStringMessageToHtml = (string) => {
            const html = string;
            return <div>{ReactHtmlParser(html)}</div>
    }

    showMessages = (messages) => (
        messages && messages.map(mess => (
             <div className="indMessage" key={mess._id}>
           
                <h3 className="waterTitle"> {mess.title} </h3>


           {mess.message ? 
                this.convertStringMessageToHtml(mess.message):
                null}                    
                
                <h3 className="authorStamp"> {mess.author} - {mess.createdAt}  </h3>
        
        
             </div>
              
         ))
      
)


    componentDidMount(){
        this.props.getMessages();
    }

    


    render() { 
        const {messages}  =  this.props;

        return (

           
            <div className="user_container">
            <div className="user_left_nav">
            <div className="hello">
            <h2>Find Messages by:</h2>
            <div className="links">
            <Link to="/">Latest</Link>
            <Link to="/">Most Popular</Link>
            <Link to="/">Select by Date</Link>
                
            </div>
          
             </div>
             </div>
            <div className="user_right">
                     {this.props.children}
        
                     <div className="centred">MessageBoard</div>


                {this.showMessages(messages)}
            

            
            </div>
            
               
              </div>
          )
    }
}
          


const actions = {
    getMessages
}

const mapStateToProps = (state) => ({
    messages: state.messages.allMessages
})

export default connect(mapStateToProps, actions)(MessageBoard);