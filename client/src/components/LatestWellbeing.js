import React, { Component } from 'react';
import { getWellBeingEvents } from '../actions/wellbeingActions';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class LatestWellbeing extends Component {
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
                               <img key={index} className="messageBoardImgFront" src={image.url}></img>
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
    this.props.getWellBeingEvents();
}

    render() { 
        const { messages } = this.props;
        return ( 
            <div>
              <div className="centredLatest">WELL BEING UPDATE
                     </div>

            
                {this.showMessages(messages)}

           
            

                </div>
         );
    }

}

const actions = {
    getWellBeingEvents
}

const mapStateToProps = (state) => ({
    messages: state.wellbeing.allEvents
})


export default connect(mapStateToProps, actions)(LatestWellbeing);