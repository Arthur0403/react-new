import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Header from 'components/Header';
import Container from 'components/Container';
// import Counter from 'components/Counter';
// import CommentsList from 'containers/CommentsListContainer';
import Timer from 'components/Timer';

import routes from './routes';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShown: false,
        }
    }

    handleToggleClick = () => {
        this.setState((prevState) => ({ isShown: !prevState.isShown }))
    }

    render() {
        const { isShown } = this.state;
        return (
            <div>
                {/* <Header size="big" color="magenta"/>
                <Header size="small" color="magenta"/>
                <Container>
                    <div>Hello world</div>
                    <Counter/>
                    <CommentsList/>
                </Container>

                <button onClick={this.handleToggleClick}>Toggle</button> */}
                {/* {isShown && <div>Modal window</div>} */}
                {/* {isShown && <Timer/>} */}
                {/* <CommentsList/> */}
                <Link to="/">Home</Link>{ ' ' }
                <Link to="/comments">Comments</Link>
                <Container>
                    <Switch>
                        {/* <Route exact path="/" component={Counter} />
                        <Route exact path="/comments" component={CommentsList} /> */}
                        { routes.map((route, idx) => <Route key={idx} {...route} />) }
                    </Switch>
                </Container>
            </div>
        );
    }
}

ReactDom.render(
    <BrowserRouter><App /></BrowserRouter>, //что передаем
    document.getElementById('root'),//куда передаем
)