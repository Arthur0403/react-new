import React, { PureComponent, Fragment } from 'react';

import Comment from 'components/Comment';

export default class CommentContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      comment: [],
    }
  }

  componentDidMount() {
      const { match } = this.props;
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/comments/${match.params.id}`)
      .then((response) => response.json())
      .then((_comment) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            loading: false,
            comment: _comment,
          }
        })
      });
  }


  render() {
    const { comment, loading } = this.state;
    return (
      <Fragment>
        {loading === 0 ? 'Loading...' : <Comment {...comment} />}
      </Fragment>
    )
  }  
}