import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import validateInput from '../../utils/validations/comments';
import './CommentList.css';

// Component Imports
import CommentItemContainer from './CommentItem/CommentItemContainer';
import CommentNewForm from './CommentNewForm';

// Redux Imports
import { postComment } from '../../redux/comments/actions';

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
    // Create list of comments if comments exists on props
    const commentList = comments ? comments.map(comment =>
      <CommentItemContainer key={comment.id} comment={comment} />)
      : null;
    
    return comments ? (
      <div className="comment-list">
        <h3 className="comment-list__title">Comments:</h3>
        {commentList}
        <CommentNewForm
          addComment={this.addComment}
          cancelAddComment={this.cancelAddComment}
          handleInputChange={this.handleInputChange}
          comment={newComment}
          errors={errors} />
      </div>
    ) :
      <div className="comment-list">
        <h3 className="comment-list__title">Add A Comment</h3>
        <CommentNewForm
              addComment={this.addComment}
              cancelAddComment={this.cancelAddComment}
              handleInputChange={this.handleInputChange}
              comment={newComment}
              errors={errors} />;
      </div>;
  }
}

CommentListContainer.propTypes = {
  comments: PropTypes.array,
  postComment: PropTypes.func.isRequired
};

export default connect(null, { postComment })(CommentListContainer);
