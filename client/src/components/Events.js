import React, { Component } from 'react';
import { getEvents, deleteEvent } from '../actions/sportsActions';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import Sports from './Sports';
import { withRouter } from 'react-router-dom';

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

         componentDidMount(){
            this.props.getEvents();
        }

        convertStringMessageToHtml = (string) => {
            const html = string;
            return <div>{ReactHtmlParser(html)}</div>
    }

    showMessages = (events) => (

        
       events && events.map(event => (
             <div className="indMessageMain" key={event._id}>
           <div>
                <h3 className="sportEventTitle"> {event.title} </h3> </div>
                
                    {event.images && event.images.length > 0 ?
                           <div>
                               {event.images.map((image, index) => (
                                   <img key={index} className="eventBoardImg" src={image.url}></img>
                               ))                 }
                               </div> : null
                    }
                  
                
                
           {event.message ? 
                this.convertStringMessageToHtml(event.message):
                null}                    
            
                <div>
                <h3 className="authorStamp"> {event.author} - {event.createdAt}  </h3>
            </div>

            {this.props.auth ?
            <div style={{paddingRight:"25px", width:"150px", fontSize:"20px", backgroundColor:"black", color:"white"}} onClick={()=> this.props.deleteEvent({id:event._id}, this.props.history, event.images)} className="delete">Delete Event</div>
            : null }
            </div>
              
         ))
      
        )

      render(){
        const { events } = this.props;

    return (
        <Sports>
        <div>

        <div className="centredLatest" style={{backgroundColor:'gold'}}>Events</div>

            
                             {this.showMessages(events)}
    
      </div>
      </Sports>
      )
    }
}

const actions = {
    getEvents,
    deleteEvent
}

const mapStateToProps = (state) => ({
    events:state.sports.events,
    auth:state.auth.isAuthenticated
})
 
export default connect(mapStateToProps, actions)(withRouter(Events));