
import './CommentsList.css';

import React, { PureComponent } from 'react';
import CommentsForm from 'components/CommentsForm';
import { Link } from 'react-router-dom';


export default class CommentsList extends PureComponent {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         comments: [],
    //     }
    // }

    // handleComment = (comment) => {
    //     this.setState((prevState) => ({
    //         comments: prevState.comments.concat([comment]),
    //     }));
    // }

    render() {
        const { comments, loading, onLoadMore } = this.props;
        return (
            <div className="CommentsList">
                <ul>
                    {comments.map((comment) => <li key={comment.id}><Link to={`/comments/${comment.id}`}>{comment.name}</Link>: {comment.body}</li>)}
                </ul>
                {/* <CommentsForm onComment={this.handleComment} /> */}
                <button onClick={onLoadMore} disabled={loading}>LoadMore</button>
            </div>
        )
    }
}
