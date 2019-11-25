import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';
import Container from 'components/Container';
import Counter from 'components/Counter';
import CommentsList from 'components/CommentsList';

class App extends Component {
    render() {
        return (
            <div>
                <Header size="big" color="magenta"/>
                <Header size="small" color="magenta"/>
                <Container>
                    <div>Hello world</div>
                    <Counter/>
                    <CommentsList/>
                </Container>
            </div>
        );
    }
}

ReactDom.render(
    <App />, //что передаем
    document.getElementById('root'),//куда передаем
)