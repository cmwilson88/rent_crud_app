import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import validateInput from '../../../../utils/validations/comments';

// Component Imports
import CommentItemContainer from './CommentItemContainer';
import CommentNewForm from './CommentNewForm';

// Redux Imports
import { postComment } from '../../../../redux/comments/actions';

export class CommentListContainer extends Component {
  constructor() {
    super();

    this.state = {
      newComment: {
        name: '',
        email: '',
        body: ''
      },
      errors: {}
    };
  }

  // Validate Inputs
  isValid = () => {
    const { errors, isValid } = validateInput(this.state.newComment);
    if (!isValid) {
      this.setState({
        errors
      });
    }
    return isValid;
  }

  // Local methods for redux actions
  addComment = (comment) => {
    if (this.isValid()) {
      this.props.postComment({
        ...comment,
        userId: 1,
        id: Math.floor(Math.random() * 500) + 501
      });
      this.cancelAddComment();
    }
  }
  cancelAddComment = () => {
    this.setState({
      newComment: {
        name: '',
        email: '',
        body: ''
      },
      errors: {}
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
    const { newComment, errors } = this.state;
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
          comment={newComment}
          errors={errors} />
      </div>
    ) : <CommentNewForm
          addComment={this.addComment}
          cancelAddComment={this.cancelAddComment}
          handleInputChange={this.handleInputChange}
          comment={newComment}
          errors={errors} />;
  }
}

CommentListContainer.propTypes = {
  comments: PropTypes.array.isRequired,
  postComment: PropTypes.func.isRequired
};

export default connect(null, { postComment })(CommentListContainer);
