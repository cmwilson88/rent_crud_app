import React from 'react';
import PropTypes from 'prop-types';

const CommentNewForm = (props) => {
  const {
    comment,
    errors,
    addComment,
    cancelAddComment,
    handleInputChange
  } = props;

  return (
    <div>
    <label htmlFor="name">Title</label>
    <input
      name="name"
      type="text"
      value={comment.name}
      onChange={handleInputChange} />
    {errors && <span>{errors.name}</span>}
    <label htmlFor="body">Body</label>
    <textarea
      name="body"
      value={comment.body}
      onChange={handleInputChange} />
    {errors && <span>{errors.body}</span>}
    <label htmlFor="email">Email</label>
    <input
      name="email"
      type="email"
      value={comment.email}
      onChange={handleInputChange} />
    {errors && <span>{errors.email}</span>}
    <button onClick={() => addComment(comment)}>Post</button>
    <button onClick={cancelAddComment}>Cancel</button>
  </div>
  );
};

CommentNewForm.propTypes = {
  comment: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired,
  cancelAddComment: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
}

export default CommentNewForm;
