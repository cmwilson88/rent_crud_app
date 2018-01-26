import React from 'react';
import PropTypes from 'prop-types';

const CommentItemEdit = (props) => {
  const { comment, toggleEditing, updateComment } = props;
  return (
    <div>COMMENT FORM</div>
  );
};

CommentItemEdit.propTypes = {
  comment: PropTypes.object.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired
};

export default CommentItemEdit;
