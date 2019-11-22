import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <div>
                <Header size="big" color="magenta"/>
                <Header size="small" color="magenta"/>
            </div>
        );
    }
}

ReactDom.render(
    <App />, //что передаем
    document.getElementById('root'),//куда передаем
)