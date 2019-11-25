
import './CommentsForm.css';

import React, { Component } from 'react';

export default class CommentsForm extends Component {
    static defaultProps = {}

    constructor(props) {
        super(props);

        this.state = {
            author: '',
            message: '',
        };
    }

    // handleAuthor = (event) => {
    //     this.setState({ author: event.target.value });
    // }

    // handleMessage = (event) => {
    //     this.setState({ message: event.target.value });
    // }

    // handleField = (fieldName) => (event) => {
    //     this.setState({ author: event.target.value });
    // }

    handleFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSend = () => {
        const { onComment } = this.props;
        onComment(this.state);
        this.setState({ message: '' });
    }

    render() {
        const { author, message } = this.state;
        return (
            <div className="CommentsForm">
                <input name="author" onChange={this.handleFieldChange} value={author} placeholder="Author" type="text"/><br/>
                <textarea name="message" onChange={this.handleFieldChange} value={message} placeholder="Message"></textarea><br/>
                <button onClick={this.handleSend}>Send</button>
            </div>
        )
    }
}
