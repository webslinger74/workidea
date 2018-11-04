import React, { Component } from 'react';
import { getMessages } from '../actions/messageActions';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class LatestMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    convertStringMessageToHtml = (string) => {
        const html = string;
        return <div>{ReactHtmlParser(html)}</div>
}

showMessages = (messages) => {

    
   if(messages && messages[0]) {
   return (
         <div className="latestMessage" key={messages[0]._id}>
       <div>
            <h3 className="latestMessageTitle"> {messages[0].title} </h3> </div>
            
                {messages[0].images && messages[0].images.length > 0 ?
                       <div>
                           {messages[0].images.map((image, index) => (
                               <img key={index} className="messageBoardImg" src={image.url}></img>
                           ))                 }
                           </div> : null
                }
              
            
                <div>
       {messages[0].message ? 
            this.convertStringMessageToHtml(messages[0].message):
            null}                    
            </div>
            <div>
            <h3 className="authorStamp"> {messages[0].author} - {messages[0].createdAt}  </h3>
        </div>
    
         </div>
          
     )
  
       } else {
           return (
               <div>No Messages are currently Listed, Try again later</div>
           )
       }
    }

       componentDidMount(){
    this.props.getMessages();
}

    render() { 
        const { messages } = this.props;
        return ( 
            <div>
              <div className="centredLatest">News Update
                     </div>

                <div className="messRight">
                {this.showMessages(messages)}

                </div>
           
            

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


export default connect(mapStateToProps, actions)(LatestMessage);