
import './CommentsList.css';

import React, { Component } from 'react';
import CommentsForm from 'components/CommentsForm';


export default class CommentsList extends Component {
    static defaultProps = {}

    constructor(props) {
        super(props);

        this.state = {
            comments: [],
        }
    }

    handleComment = (comment) => {
        this.setState((prevState) => ({
            comments: prevState.comments.concat([comment]),
        }));
    }

    render() {
        const { comments } = this.state;
        return (
            <div className="CommentsList">
                <ul>
        {comments.map((comment, idx) => <li key={idx}>{comment.author}: {comment.message}</li>)}
                </ul>
                <CommentsForm onComment={this.handleComment} />
            </div>
        )
    }
}
