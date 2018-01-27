import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import validateInput from '../../../utils/validations/comments';

// Component Imports
import CommentItemDisplay from './CommentItemDisplay';
import CommentItemEdit from './CommentItemEdit';

// Redux Actions
import { updateComment, deleteComment } from '../../../redux/comments/actions';

export class CommentItemContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: this.props.comment,
      isEditing: false,
      errors: {}
    };
  }

  // Validate Inputs
  isValid = () => {
    const { errors, isValid } = validateInput(this.state.comment);
    if (!isValid) {
      this.setState({
        errors
      });
    }
    return isValid;
  }

  // CommentItemDisplay methods
  toggleEditing = () => this.setState({ isEditing: !this.state.isEditing });

  // CommentItemEdit methods
  cancelEditComment = () => this.setState({ comment: this.props.comment, isEditing: false })
  deleteComment = id => this.props.deleteComment(id);
  handleInputChange = (event) => {
    this.setState({
      comment: {
        ...this.state.comment,
        [event.target.name]: event.target.value
      }
    });
  }
  updateComment = (comment) => {
    if (this.isValid()) {
      this.setState({
        errors: {},
        isEditing: false
      });
      this.props.updateComment(comment.id, comment);
    }
  }

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
