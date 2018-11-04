import React, { Component } from 'react';
import { getBingoNumbers } from '../actions/sportsActions';
import { connect } from 'react-redux';
import Sports from './Sports';

class Bingo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

         componentDidMount(){
            this.props.getBingoNumbers();
         }

      render(){
        const { bingo } = this.props;
        console.log(bingo, "bingo");

    return (
            <Sports>
        <div>    
        <div className="sportsItem">
        <h1>Pay Day Bingo</h1>
            <p>Come and Play Bingo Every Pay Day on Site. £1 a ticket with Cash prizes to be Won every Month</p>  
            <p>Local reps will be selling tickets near you in the lead up to Pay day</p>
            <p>Rules - Email BST as soon as you have all the numbers on  your purchased ticket</p>
            <p>Email with the number that you completed your card with !</p>
            <p>GOOD LUCK</p>  
            <div id="bingocard">               
                   <div className="cont">
                   { bingo && bingo.map(element => {
                    
                    return (<div id={`bingoCardInner${element.number}`} key={element._id}> {element.number}
                    </div> )
                   })
                   }
                    
                    
        </div>
        
        </div>
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
    getBingoNumbers
}

const mapStateToProps = (state) => ({
    bingo:state.sports.bingoNumbers
})
 
export default connect(mapStateToProps, actions)(Bingo);