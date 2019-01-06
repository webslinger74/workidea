import React, { Component } from 'react';
import App from './MediaPlayer';

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <div><App /></div>
            </div>
          );
    }
}
 
export default Feedback;