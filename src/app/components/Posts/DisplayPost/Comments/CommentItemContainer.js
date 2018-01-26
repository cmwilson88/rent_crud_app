import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CommentItemDisplay from './CommentItemDisplay';
import CommentItemEdit from './CommentItemEdit';

import {
  updateComment,
  deleteComment
} from '../../../../redux/comments/actions';

export class CommentItemContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: this.props.comment,
      isEditing: false,
      errors: {}
    };
  }

  // CommentItemDisplay methods
  toggleEditing = () => this.setState({ isEditing: !this.state.isEditing })
  
  // CommentItemEdit methods
  cancelEditComment = () => this.setState({ comment: this.props.comment, isEditing: false })
  handleInputChange = (event) => {
    this.setState({
      comment: {
        ...this.state.comment,
        [event.target.name]: event.target.value
      }
    });
  }
  updateComment = (comment) => {
    this.setState({
      errors: {},
      isEditing: false
    });
    this.props.updateComment(comment.id, comment);
  }
  deleteComment = id => this.props.deleteComment(id);
  
  render() {
    const { isEditing, comment, errors } = this.state;

    return isEditing ?
      <CommentItemEdit
        handleInputChange={this.handleInputChange}
        cancelEditComment={this.cancelEditComment}
        updateComment={this.updateComment}
        deleteComment={this.deleteComment}
        comment={comment}
        errors={errors} />
      :
      <CommentItemDisplay
        toggleEditing={this.toggleEditing}
        comment={comment} />;
  }
}

CommentItemContainer.propTypes = {
  comment: PropTypes.object.isRequired,
  updateComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default connect(null, { updateComment, deleteComment })(CommentItemContainer);
