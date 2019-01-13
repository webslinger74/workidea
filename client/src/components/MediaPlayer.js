import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import song2 from './videos/launch.mp4';
 
class App extends Component {

    componentDidMount(){
       const vid = document.getElementById("outVid");


    }


  render () {
    return (
        
        <div className="outerVid">
         <div className="outertitle">
            <div className="videoTitle">PERFORMANCE TAKE OFF!</div>
            </div>
          <div className="innerVid">
             <ReactPlayer url={song2} playing={true} controls={false} loop={true} height="100%" width="100%"/>
             </div>
           
        </div>
    )
}
}

export default App;