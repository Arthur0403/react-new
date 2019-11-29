
import './Timer.css';

import React, { PureComponent } from 'react';

export default class Timer extends PureComponent {
   constructor(props){
       super(props);

       this.timeStart = Date.now();
       this.timerId = null;

       this.state = {
            currentTime: this.timeStart,
       }
   }

   componentDidMount() {
       this.timerId = setInterval(()=>{
            this.setState({ currentTime: Date.now() });
            console.log('Fired');
       }, 1000);
   }

   componentWillUnmount(){
        clearInterval(this.timerId);
   }

    render() {
        const { currentTime } = this.state;
        return (
        <div className="Timer">{
            currentTime - this.timeStart
        }</div>
        )
    }
}
