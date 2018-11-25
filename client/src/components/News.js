import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sports from './Sports';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

         componentDidMount(){
         }

      render(){

    return (
            <Sports>
        <div>    
        <div className="sportsItem">
        <h1  style={{backgroundColor:'gold'}}>LATEST NEWS-HEADLINES FROM THE SPORTS & SOCIAL TEAM</h1>
           
            <p>KEEP POSTED FOR LATEST NEWS</p>  
         
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
    
}

const mapStateToProps = (state) => ({

})
 
export default connect(mapStateToProps, actions)(News);