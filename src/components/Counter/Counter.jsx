
import './Counter.css';

import React, { Component } from 'react';

export default class Counter extends Component {
    static defaultProps = {}
    //initialisation statement
    constructor(props) {
        super(props); //Обязытельно

        //this.handlPlusClick = this.handlPlusClick.bind(this)

        this.state = {
            counter: 1,
        }
    }

    // handlePlusClick = () => {
    //     // this.state.counter = this.state.counter + 1;
    //     // this.forceUpdate(); //пользоваться в случае крайней необходимости
    //     const { counter } = this.state;
    //     this.setState({ counter: counter + 1 });
    // }

    // handleMinusClick = () => {
    //     // this.state.counter = this.state.counter + 1;
    //     // this.forceUpdate(); //пользоваться в случае крайней необходимости
    //     const { counter } = this.state;
    //     this.setState({ counter: counter - 1 });
    // }

    handleClick = (event) => {
        const addition = event.target.name === 'plus' ? 1 : -1;
        //функция которая меняет состояние - просто говорим новое состояние
        this.setState((prevState) => ({
            counter: prevState.counter + addition,
        }));
    }

    render() {
        const { counter } = this.state;
        
        return (
            <div className="Counter">
                <button name="minus" onClick={this.handleClick}>-</button>
                { counter }
                <button name="plus" onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
