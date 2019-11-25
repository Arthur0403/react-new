
import './Container.css';

import React, { Component } from 'react';

export default class Container extends Component {
    static defaultProps = {
       
    }
    render() {
        const { children } = this.props;
        return (
        <div className="Container">
            <h2>Content</h2>
            { children }
        </div>
        )
    }
}
