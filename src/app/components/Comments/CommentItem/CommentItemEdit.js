import React from 'react';
import PropTypes from 'prop-types';


const CommentItemEdit = (props) => {
  const {
    comment,
    updateComment,
    deleteComment,
    handleInputChange,
    errors,
    cancelEditComment
  } = props;
  
  return (
    <div className="comment-item">
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
        <button className="btn-reset btn btn--square btn--red" onClick={() => deleteComment(comment.id)}>Delete</button>
        <button className="btn-reset btn btn--square" onClick={cancelEditComment}>Cancel</button>
        <button className="btn-reset btn btn--square btn--green" onClick={() => updateComment(comment)}>Save</button>
      </div>
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
