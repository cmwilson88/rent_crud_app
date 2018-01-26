import React from 'react';
import PropTypes from 'prop-types';

const CommentItemDisplay = (props) => {
  const { comment, toggleEditing } = props;
  return (
    <div>
      {comment.name} - {comment.email}
      {comment.body}
      <button onClick={toggleEditing}>Edit</button>
    </div>
  );
};

CommentItemDisplay.propTypes = {
  comment: PropTypes.object.isRequired,
  toggleEditing: PropTypes.func.isRequired
};

export default CommentItemDisplay;
