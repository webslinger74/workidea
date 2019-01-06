import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGuidance, deleteGuidance } from '../actions/guidanceActions';
import ReactHtmlParser from 'react-html-parser';
import HeaderHidden from './HeaderHidden';

class Guidance extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        this.props.getGuidance();
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
        {this.props.auth ?
        <div style={{paddingRight:"25px", width:"150px", fontSize:"20px", backgroundColor:"black", color:"white"}}  onClick={()=> this.props.deleteGuidance({id:event._id}, this.props.history, event.images)} className="delete">Delete Guidance</div>
         : null }
         </div>
          
     ))
  
    )


      render(){
            const { guidance } = this.props;
    return (
            
        <div>  
            <HeaderHidden />  
        <div className="sportsItem">
         
 <div>

<div className="centredLatest" style={{backgroundColor:'gold', marginTop:'10px'}}>Latest Guidance</div>
              {guidance && guidance.length === 0 ?
                (
                <div>
              <p>KEEP POSTED FOR LATEST GUIDANCE</p> 
              </div>
                )
              : null }
    
                     {this.showMessages(guidance)}

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
    getGuidance,
    deleteGuidance
}

const mapStateToProps = (state) => ({
        guidance:state.guidance.allGuidance,
        auth:state.auth.isAuthenticated
})
 
export default connect(mapStateToProps, actions)(Guidance);