import React from 'react';
import PropTypes from 'prop-types';

import CommentListContainer from '../../Comments/CommentListContainer';
import DisplayPostItem from './DisplayPostItem';

const DisplayPost = (props) => {
  const { post, comments } = props;
  return (
    <div className="post">
      <DisplayPostItem post={post} />
      <hr className="post__hr" />
      <CommentListContainer comments={comments} />
    </div>
  )
}


DisplayPost.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array
};

export default DisplayPost;
