
import './Comment.css';

import React, { PureComponent } from 'react';

export default class Comment extends PureComponent {
    static defaultProps = {
       
    }
    render() {
        const { name, body } = this.props;
        return (
            <div className="Comment">
                <h3>{name}</h3>
                <p>{body}</p>
            </div>
        )
    }
}
