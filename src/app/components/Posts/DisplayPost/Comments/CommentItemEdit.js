import React from 'react';
import PropTypes from 'prop-types';


const CommentItemEdit = (props) => {
  const { 
    comment,
    updateComment,
    deleteComment,
    handleInputChange,
    errors,
    cancelEditComment } = props;
  return (
    <div>
      <button onClick={() => deleteComment(comment.id)}>Delete</button>
      <button onClick={cancelEditComment}>Cancel</button>
      <button onClick={() => updateComment(comment)}>Save</button>
      <label htmlFor="name">Title</label>
      <input
        name="name"
        type="text"
        value={comment.name}
        onChange={handleInputChange} />
      <label htmlFor="body">Body</label>
      <textarea
        name="body"
        value={comment.body}
        onChange={handleInputChange} />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        value={comment.email}
        onChange={handleInputChange} />
    </div>
  );
};

CommentItemEdit.propTypes = {
  comment: PropTypes.object.isRequired,
  updateComment: PropTypes.func.isRequired,
  cancelEditComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default CommentItemEdit;
