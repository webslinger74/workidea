import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sports from './Sports';
import { getCharity, deleteCharity } from '../actions/sportsActions';

class CharityContributions extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

         componentDidMount(){
             this.props.getCharity();
         }

         getGrandTotal = () => {
             var grandTotal = 0;
             this.props.charities.map( (charity) => {
                 grandTotal += parseInt(charity.amount)
             })
             return grandTotal;
         }

      render(){
            const { charities } = this.props;
    return (
            <Sports>
        <div className="charityBackground">    
        <div>
        <h1  style={{backgroundColor:'gold'}}>Money Raised this Year For Charity: £{(this.props.charities && this.props.charities) ? this.getGrandTotal() : 0.00}</h1>
           
            <p>Please Check out how much YOU have helped the S&Social raise through site events this year!</p>  

                        {charities && charities ? (
                            <div className="charityContainer">
                                {charities.map((charity) => {
                                  return  (
                                        <div key={charity._id} className="charityItems">
                                         Total Raised for: <span style={{fontSize:'40px', color:'green'}}>{charity.charity}</span> = <strong style={{fontSize:'40px'}}>£{charity.amount}</strong> 
                                            {this.props.auth ?
                                         <div style={{paddingRight:"25px", width:"150px", fontSize:"20px", backgroundColor:"black", color:"white"}} onClick={()=> this.props.deleteCharity({id:charity._id})}><span style={{fontSize:'12px'}}>DELETE</span></div>
                                       : null } </div>
                                    )
                                }

                                )}

                            </div>
                        ):null}





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
    getCharity,
    deleteCharity
}

const mapStateToProps = (state) => ({
    charities:state.sports.charities,
    auth:state.auth.isAuthenticated
})
 
export default connect(mapStateToProps, actions)(CharityContributions);