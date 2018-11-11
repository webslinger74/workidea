import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sports from './Sports';

class CharityContributions extends Component {
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
        <h1>Money Raised this Year For Charity</h1>
           
            <p>Please Check out how much YOU have helped the S&Social raise through site events this year!</p>  
         
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
 
export default connect(mapStateToProps, actions)(CharityContributions);