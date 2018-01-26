import React from 'react';
import PropTypes from 'prop-types';


const PostListItem = (props) => {
  const { post } = props;
  return (
    <div className="post-list-item">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

PostListItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostListItem;
