import React, { Component } from 'react';
import HomeSliderSmall from './Home/Home_sliderSmall';
import { getBingoNumbers, getEvents } from '../actions/sportsActions';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
class Sports extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

         componentDidMount(){
            this.props.getBingoNumbers();
            this.props.getEvents();
        }

        convertStringMessageToHtml = (string) => {
            const html = string;
            return <div>{ReactHtmlParser(html)}</div>
    }

    showMessages = (events) => (

        
       events && events.map(event => (
             <div className="indMessage" key={event._id}>
           <div>
                <h3 className="waterTitle"> {event.title} </h3> </div>
                
                    {event.images && event.images.length > 0 ?
                           <div>
                               {event.images.map((image, index) => (
                                   <img key={index} className="eventBoardImg" src={image.url}></img>
                               ))                 }
                               </div> : null
                    }
                  
                
                    <div>
           {event.message ? 
                this.convertStringMessageToHtml(event.message):
                null}                    
                </div>
                <div>
                <h3 className="authorStamp"> {event.author} - {event.createdAt}  </h3>
            </div>
        
             </div>
              
         ))
      
        )

      render(){
        const { bingo, events } = this.props;
        console.log(bingo, "bingo");

    return (

        <div>
            <div id="sliderSmall">
        <HomeSliderSmall/>
        </div>
        <div id="sportsHeader">Sports AND Social</div>
        
        <div className="dividers2"></div>
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
        <h1 styles={{textAlign:'centre'}}>UpComing Events</h1>
            
                             {this.showMessages(events)}
    
        </div>
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
    getBingoNumbers,
    getEvents
}

const mapStateToProps = (state) => ({
    bingo:state.sports.bingoNumbers,
    events:state.sports.events
})
 
export default connect(mapStateToProps, actions)(Sports);