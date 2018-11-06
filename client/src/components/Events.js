import React, { Component } from 'react';
import { getEvents } from '../actions/sportsActions';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import Sports from './Sports';

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
             <div className="indMessage" key={event._id}>
           <div>
                <h3 className="waterTitle"> {event.title} </h3> </div>
                
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
        
             </div>
              
         ))
      
        )

      render(){
        const { events } = this.props;

    return (
        <Sports>
        <div>
        <div className="sportsItem">
        {this.props.children}
        <h1 styles={{textAlign:'centre'}}>UpComing Events</h1>
            
                             {this.showMessages(events)}
    
        </div>
      </div>
      </Sports>
      )
    }
}

const actions = {
    getEvents
}

const mapStateToProps = (state) => ({
    events:state.sports.events
})
 
export default connect(mapStateToProps, actions)(Events);