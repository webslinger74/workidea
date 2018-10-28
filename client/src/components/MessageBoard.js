import React, { Component } from 'react';
import { getMessages, getMessagesByDate } from '../actions/messageActions';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


export class MessageBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
            selectedDate:moment()
          }
    }

    handleChange = (date) => {
        console.log(date, "the date")
        this.setState({
          
            startDate: date,
            selectedDate:date
        }, () => {
            console.log(this.state.startDate, "startdate")
            this.props.getMessagesByDate(this.state.selectedDate)
        })  
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
            <div onClick={this.props.getMessages}>Latest</div>
            <div>Select by Sender</div>
            <div onClick={() => this.props.getMessagesByDate(this.state.selectedDate)}>Select By Date</div>
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                placeholderText="Click to select a date" 
            />
                
            </div>
          
             </div>
             </div>
            <div className="user_right">
                     {this.props.children}
        
                     <div className="centred">MessageBoard - 
                    <span className="messageBoardDate">{this.state.selectedDate.toString().slice(0,16)}</span>
                     </div>


                {this.showMessages(messages)}
            

            
            </div>
            
               
              </div>
          )
    }
}
          


const actions = {
    getMessages,
    getMessagesByDate
}

const mapStateToProps = (state) => ({
    messages: state.messages.allMessages
})

export default connect(mapStateToProps, actions)(MessageBoard);