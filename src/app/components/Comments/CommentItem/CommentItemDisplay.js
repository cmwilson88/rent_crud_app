import React from 'react';
import PropTypes from 'prop-types';

const CommentItemDisplay = (props) => {
  const { comment, toggleEditing } = props;
  return (
    <div className="comment-item">
      <div className="comment-item__info">
        <h4 className="comment-item__name">{comment.name}</h4>
        <span className="comment-item__email">-{comment.email}</span>
      </div>
      <div className="comment-item__body">
        {comment.body}
      </div>
      <button className="btn-reset btn btn--square btn--green comment-edit-btn" onClick={toggleEditing}>Edit</button>
    </div>
  );
};

CommentItemDisplay.propTypes = {
  comment: PropTypes.object.isRequired,
  toggleEditing: PropTypes.func.isRequired
};

export default CommentItemDisplay;
