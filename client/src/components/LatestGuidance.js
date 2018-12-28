import React, { Component } from 'react';
import { getGuidance } from '../actions/guidanceActions';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { text } from '@fortawesome/fontawesome-svg-core';


class LatestGuidance extends Component {
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
                       (<div>
                            
                               <img className="imgGuidance" src={messages[0].images[0].url}></img>
                       </div>) : null
                }
              
              
            <div className="cssAnimationGuidance">
                <div className="cssAnimationGuidanceInner">
       {messages[0].message ? 
            this.convertStringMessageToHtml(messages[0].message):
            null}                    
            </div>
            <div>
            <h3 className="authorStamp"> {messages[0].author} - {messages[0].createdAt}  </h3>
        </div>


               
                </div>
                <div id="btnView">Read More</div>
         </div>
          
     )
  
       } else {
           return (
               <div>No Messages are currently Listed, Try again later</div>
           )
       }
    }

       componentDidMount(){
    this.props.getGuidance();
      

       }

       componentDidUpdate(){
            let btnView = document.getElementById("btnView");
            btnView.innerText = "Read More";
            btnView.addEventListener("click", (e) => toggleMessage(e));
               
            const toggleMessage = (e) => {           
                let messageToBring = document.getElementsByClassName("cssAnimationGuidance");
                messageToBring[0].classList.toggle("bringIn");
                let txt = e.target;
                if(messageToBring[0].classList.contains("bringIn")){
                    txt.innerText = "Close"; 
                } else {
                    txt.innerText = "Read More";
                }
                let imgToBring = document.getElementsByClassName("imgGuidance");
                imgToBring[0].classList.toggle("imgAdd");
    
                var elmnt = document.getElementById("imgGuidance");
                elmnt.scrollIntoView();
                window.scrollBy(0,-50)
                               
               /*
                if(!imgToBring[0].classList.contains("imgAdd")){
                setTimeout(() => {
                    window.scrollBy(100,-600);
                }, 1);
              }
              */
            }
                }
            

    render() { 
      
        const { guidance } = this.props;
        return ( 
            <div id="imgGuidance">
              <div className="centredLatest">GUIDANCE UPDATE
                     </div>

                
                {this.showMessages(guidance)}
        
           
            

                </div>
         );
    }
}

const actions = {
    getGuidance
}

const mapStateToProps = (state) => ({
    guidance: state.guidance.allGuidance
})


export default connect(mapStateToProps, actions)(LatestGuidance);