import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const PostListItem = (props) => {
  const { post } = props;
  return (
    <Link to={`/post/${post.id}`} className="post-list-item">
      <h3 className="post-list-item__title">{post.title}</h3>
      <p className="post-list-item__author">by {post.author}</p>
    </Link>
  );
};

PostListItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostListItem;
