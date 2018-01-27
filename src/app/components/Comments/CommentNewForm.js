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
    <div className="comment-form">
      <h3>New Comment</h3>
      <div className="comment-form__input-group">
        <label htmlFor="name">Title</label>
        <input
          name="name"
          type="text"
          value={comment.name}
          onChange={handleInputChange} />
        {errors && <span className="error">{errors.name}</span>}
      </div>
      <div className="comment-form__input-group">
        <label htmlFor="body">Body</label>
        <textarea
          name="body"
          value={comment.body}
          onChange={handleInputChange} />
        {errors && <span className="error">{errors.body}</span>}
      </div>
      <div className="comment-form__input-group">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={comment.email}
          onChange={handleInputChange} />
        {errors && <span className="error">{errors.email}</span>}
      </div>
      <div className="comment-form__button-group">
        <button className="btn-reset btn btn--square btn--green"onClick={() => addComment(comment)}>Post</button>
        <button className="btn-reset btn btn--square"onClick={cancelAddComment}>Cancel</button>
      </div>
    </div>
  );
};

CommentNewForm.propTypes = {
  comment: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired,
  cancelAddComment: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default CommentNewForm;
