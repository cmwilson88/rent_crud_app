import React from 'react';
import PropTypes from 'prop-types';

import PostListItem from './PostListItem';

const PostList = (props) => {
  const { posts } = props;
  const postList = posts.map(post =>
      <PostListItem key={post.id} post={post} />);

  return (
    <div>{postList}</div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
