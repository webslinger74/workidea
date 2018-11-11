import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sports from './Sports';
import ReactHtmlParser from 'react-html-parser';
import { getChristmasParty, deleteChristmasParty } from '../actions/sportsActions';

class ChristmasParty extends Component {
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
         <div className="latestSportsMessage" key={messages[0]._id}>
       <div>
            <h3 className="latestMessageTitle"> {messages[0].title} </h3> </div>
            
            {messages[0].images && messages[0].images.length > 0 ?
                       (<div className="imgHolder">
                            
                               <img className="messageBoardImgFront" src={messages[0].images[0].url}></img>
                       </div>) : null
                }
              
              
            
                <div>
       {messages[0].message ? 
            this.convertStringMessageToHtml(messages[0].message):
            null}                    
            </div>
            <div>
            <h3 className="authorStamp"> {messages[0].author} - {messages[0].createdAt}  </h3>
        </div>
          <div onClick={()=> this.props.deleteChristmasParty({id:messages[0]._id})} className="delete">Delete Christmas Party</div>
         </div>
          
     )
  
       } else {
           return (
               <div>No Christmas Party is scheduled currently, Try again later</div>
           )
       }
    }

       componentDidMount(){
          this.props.getChristmasParty();
        }

       

      render(){
        const { party } = this.props;
    return (
            <Sports>
        
        <div className="sportsItem2"> 
        <div id="christmasBackground">   
            <div className="centredLatest">Christmas Party 2018</div>
            
                {this.showMessages(party)}
                 
            </div>
        <div className="dividers2"></div>
        <div className="sportsItem">
    
        </div>
      
      
        </div>
        </Sports>
      )
    }
}

const actions = {
    getChristmasParty,
    deleteChristmasParty
}

const mapStateToProps = (state) => ({
    party:state.sports.christmasParty
})
 
export default connect(mapStateToProps, actions)(ChristmasParty);