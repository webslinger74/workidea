import React, { Component } from 'react';
import HomeSliderSmall from './Home/Home_sliderSmall';
import { getBingoNumbers } from '../actions/sportsActions';
import { connect } from 'react-redux';

class Sports extends Component {
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

        <div>
            <div id="sliderSmall">
        <HomeSliderSmall/>
        </div>
        <div id="sportsHeader">Sports AND Social</div>
        
        <div className="dividers2"></div>
        <div className="sportsItem" id="bingocard">PayDay Bingo
                   
                   <div className="cont">
                   { bingo && bingo.map(element => {
                    
                    return (<div id={`bingoCardInner${element.number}`} key={element._id}> {element.number}
                    </div> )
                   })
                   }
                    
                    
        </div>
        
        </div>
        <div className="dividers2"></div>
        <div className="sportsItem">Latest Events</div>
        <div className="dividers2"></div>
        <div className="sportsItem">Charitable Contributions</div>
        <div className="dividers2"></div>
        <div className="sportsItem">News</div>
        <div className="dividers2"></div>
        <div className="sportsItem">Contact Us</div>
        </div>
      )
    }
}

const actions = {
    getBingoNumbers
}

const mapStateToProps = (state) => ({
    bingo:state.sports.bingoNumbers
})
 
export default connect(mapStateToProps, actions)(Sports);