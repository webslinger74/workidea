import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import song from './videos/disco.mov';
import song2 from './videos/launch.mp4';
 
class App extends Component {

    componentDidMount(){
       const vid = document.getElementById("outVid");


    }


  render () {
    return (
        <div>
            
         <ReactPlayer url={song2} playing={true} controls={false} loop={true} height={'100%'} width={'100%'}/>
            <div className="videoTitle">Chorlton Performance Takes Off!</div>
            
        </div>
    )
}
}

export default App;