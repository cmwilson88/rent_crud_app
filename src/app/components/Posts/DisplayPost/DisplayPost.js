import React from 'react';
import PropTypes from 'prop-types';

import CommentListContainer from './Comments/CommentListContainer';
import DisplayPostItem from './DisplayPostItem';

const DisplayPost = (props) => {
  const { post, comments } = props;
  return (
    <div>
      <DisplayPostItem post={post} />
      { comments ?
        <CommentListContainer comments={comments} />
        : null}
    </div>
  )
}


DisplayPost.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array
};

export default DisplayPost;
