import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CommentItem from './CommentItem';

export class CommentListContainer extends Component {
  render() {
    const { comments } = this.props;
    const commentList = comments.map(comment =>
      <CommentItem key={comment.id} comment={comment} />);
    return comments ? (
      <div>{commentList}</div>
    ) : null;
  }
}

CommentListContainer.propTypes = {
  comments: PropTypes.array.isRequired
};

export default connect(null)(CommentListContainer);
