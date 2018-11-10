import React, { Component } from 'react';
import { getWellBeingEvents, deleteEvent } from '../actions/wellbeingActions';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import WellBeing from './WellBeing';

class WellBeingEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

         componentDidMount(){
            this.props.getWellBeingEvents();
        }
        componentDidUpdate(){

        }

        convertStringMessageToHtml = (string) => {
            const html = string;
            return <div>{ReactHtmlParser(html)}</div>
    }

    showMessages = (events) => (

        
       events && events.map(event => (
             <div className="indMessageMain" key={event._id}>
           <div>
                <h3 className="waterTitle"> {event.title} </h3> </div>
                
                    {event.images && event.images.length > 0 ?
                           <div>
                               {event.images.map((image, index) => (
                                   <img key={index} className="eventBoardImg" src={image.url}></img>
                               ))                 }
                               </div> : null
                    }
                  
                
                    <div>
           {event.message ? 
                this.convertStringMessageToHtml(event.message):
                null}                    
                </div>
                <div>
                <h3 className="authorStamp"> {event.author} - {event.createdAt}  </h3>
            </div>
            <div onClick={()=> this.props.deleteEvent({id:event._id})} className="delete">Delete Event</div>
             </div>
              
         ))
      
        )

      render(){
        const { events } = this.props;

    return (
        <WellBeing>
        <div>
        <div className="sportsItem">
        <h1 styles={{textAlign:'centre'}}>UpComing Events</h1>
            
                             {this.showMessages(events)}
    
        </div>
      </div>
      </WellBeing>
      )
    }
}

const actions = {
    getWellBeingEvents,
    deleteEvent
}

const mapStateToProps = (state) => ({
    events:state.wellbeing.allEvents
})
 
export default connect(mapStateToProps, actions)(WellBeingEvents);