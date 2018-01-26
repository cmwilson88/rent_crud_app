import React from 'react';
import PropTypes from 'prop-types';

const CommentItem = (props) => {
  const { comment } = props;
  return (
    <div>
      {comment.name} - {comment.email}
      {comment.body}
    </div>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired
};

export default CommentItem;
