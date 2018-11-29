import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPeg, deletePeg } from '../actions/pegActions';
import ReactHtmlParser from 'react-html-parser';

class Peg extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        this.props.getPeg();
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
              
            
            
       {event.message ? 
            this.convertStringMessageToHtml(event.message):
            null}                    
        
            <div>
            <h3 className="authorStamp"> {event.author} - {event.createdAt}  </h3>
        </div>
        <div onClick={()=> this.props.deletePeg({id:event._id}, this.props.history, event.images)} className="delete">Delete Event</div>
         </div>
          
     ))
  
    )


      render(){
            const { peg } = this.props;
    return (
            
        <div>    
        <div className="sportsItem">
         
 <div>

<div className="centredLatest" style={{backgroundColor:'gold', marginTop:'10px'}}>Latest PEG News</div>
              {peg && peg.length === 0 ?
                (
                <div>
              <p>KEEP POSTED FOR LATEST PEG NEWS</p> 
              </div>
                )
              : null }
    
                     {this.showMessages(peg)}

</div>
         
        </div>
        <div className="dividers2"></div>
        <div className="sportsItem">
    
        </div>
      
      
        </div>
    
      )
    }
}

const actions = {
    getPeg,
    deletePeg
}

const mapStateToProps = (state) => ({
        peg:state.peg.pegEvents
})
 
export default connect(mapStateToProps, actions)(Peg);