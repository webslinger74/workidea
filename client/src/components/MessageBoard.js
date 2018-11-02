import React, { Component } from 'react';
import { getMessages, getMessagesByDate, getMessagesBySearch } from '../actions/messageActions';
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
            selectedDate:moment(),
            search:''
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

    onChangeSearch = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        },() => {
            this.props.getMessagesBySearch(this.state.search)
        })
    }


    convertStringMessageToHtml = (string) => {
            const html = string;
            return <div>{ReactHtmlParser(html)}</div>
    }

    showMessages = (messages) => (

        
       messages && messages.map(mess => (
             <div className="indMessage" key={mess._id}>
           <div>
                <h3 className="waterTitle"> {mess.title} </h3> </div>
                
                    {mess.images && mess.images.length > 0 ?
                           <div>
                               {mess.images.map((image, index) => (
                                   <img key={index} className="messageBoardImg" src={image.url}></img>
                               ))                 }
                               </div> : null
                    }
                  
                
                    <div>
           {mess.message ? 
                this.convertStringMessageToHtml(mess.message):
                null}                    
                </div>
                <div>
                <h3 className="authorStamp"> {mess.author} - {mess.createdAt}  </h3>
            </div>
        
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
            <div className="latestMessages" onClick={this.props.getMessages}>Click - Latest Messages</div>
            <div>Search by Sender
                <input className="inpSearch" type="text" name="search" value={this.state.search} onChange={this.onChangeSearch} style={{width:'60%', marginLeft:'5px', marginBottom:'10px'}} />
            </div>
            <div onClick={() => this.props.getMessagesByDate(this.state.selectedDate)}>Select By Date - Click Below to Change Date</div>
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

                <div className="messRight">
                {this.showMessages(messages)}

                </div>
           
            

            
            </div>
            
               
              </div>
          )
    }
}
          


const actions = {
    getMessages,
    getMessagesByDate,
    getMessagesBySearch
}

const mapStateToProps = (state) => ({
    messages: state.messages.allMessages
})

export default connect(mapStateToProps, actions)(MessageBoard);