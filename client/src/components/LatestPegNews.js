import React, { Component } from 'react';
import { getPeg } from '../actions/pegActions';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class LatestPegNews extends Component {
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
    
         </div>
          
     )
  
       } else {
           return (
               <div>No Messages are currently Listed, Try again later</div>
           )
       }
    }

       componentDidMount(){
    this.props.getPeg();
}

    render() { 
        const { peg } = this.props;
        return ( 
            <div>
              <div className="centredLatest">LATEST PEG NEWS
                     </div>

                <Link to="/peg">
                {this.showMessages(peg)}
                </Link>
           
            

                </div>
         );
    }
}

const actions = {
    getPeg
}

const mapStateToProps = (state) => ({
    peg: state.peg.pegEvents
})


export default connect(mapStateToProps, actions)(LatestPegNews);