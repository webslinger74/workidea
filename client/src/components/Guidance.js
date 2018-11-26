import React, { Component } from 'react';
import { connect } from 'react-redux';

class Guidance extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

         componentDidMount(){
         }

      render(){

    return (
            
        <div>    
        <div className="sportsItem">
        <h1  style={{backgroundColor:'gold'}}>LATEST GUIDANCE</h1>
           
            <p>KEEP POSTED FOR LATEST GUIDANCE</p>  
         
        </div>
        <div className="dividers2"></div>
        <div className="sportsItem">
    
        </div>
      
      
        </div>
    
      )
    }
}

const actions = {
    
}

const mapStateToProps = (state) => ({

})
 
export default connect(mapStateToProps, actions)(Guidance);