import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CommentItemContainer from './CommentItemContainer';
import CommentNewForm from './CommentNewForm';

// Redux Actions
import { postComment } from '../../../../redux/comments/actions';

export class CommentListContainer extends Component {
  constructor() {
    super();

    this.state = {
      newComment: {
        name: '',
        email: '',
        body: ''
      }
    };
  }

  // Local methods for redux actions
  addComment = (comment) => {
    this.props.postComment({
      ...comment,
      userId: 1,
      id: Math.floor(Math.random() * 500) + 501
    });
    this.cancelAddComment();
  }
  cancelAddComment = () => {
    this.setState({
      newComment: {
        name: '',
        email: '',
        body: ''
      }
    });
  }

  handleInputChange = (event) => {
    this.setState({
      newComment: {
        ...this.state.newComment,
        [event.target.name]: event.target.value
      }
    });
  }
  render() {
    const { comments } = this.props;
    const { newComment } = this.state;
    const commentList = comments ? comments.map(comment =>
      <CommentItemContainer key={comment.id} comment={comment} />)
      : null;
    
    return comments ? (
      <div>
        {commentList}
        <CommentNewForm
          addComment={this.addComment}
          cancelAddComment={this.cancelAddComment}
          handleInputChange={this.handleInputChange}
          comment={newComment} />
      </div>
    ) : <CommentNewForm
          addComment={this.addComment}
          cancelAddComment={this.cancelAddComment}
          handleInputChange={this.handleInputChange}
          comment={newComment} />;
  }
}

CommentListContainer.propTypes = {
  comments: PropTypes.array.isRequired,
  postComment: PropTypes.func.isRequired
};

export default connect(null, { postComment })(CommentListContainer);
