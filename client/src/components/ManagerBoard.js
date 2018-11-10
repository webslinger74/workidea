import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { getManagerMessages, deleteMessage } from '../actions/managerActions';
import ManagerImg from '../images/featured/manager.jpg';

class ManagerBoard extends Component {
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
        //    this.props.getMessagesByDate(this.state.selectedDate)
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
                                   <img className="messageBoardImg" src={image.url} key={index}></img>
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
            <div onClick={()=> this.props.deleteMessage({id:mess._id})} className="delete">Delete Message</div>
             </div>
              
         ))
        )

    componentDidMount(){
        this.props.getManagerMessages();
      }


    render() { 
       const {messages}  =  this.props;
        return ( 

 <div className="user_container">
            <div className="user_left_nav">
            <img src={ManagerImg} style={{height:'200px', width:'200px'}}/>
            <div className="hello">
            <h2>Your Manager's Message:</h2>
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
        
                     <div className="centred">Manager Monthly Message - 
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
    getManagerMessages,
    deleteMessage
}

const mapStateToProps = (state) => ({
    message:state.manager.message,
    messages:state.manager.allMessages


})

export default connect(mapStateToProps, actions)(ManagerBoard);
                






   