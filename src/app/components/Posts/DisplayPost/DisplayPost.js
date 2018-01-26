import React from 'react';
import PropTypes from 'prop-types';

const DisplayPost = props =>
  <div>{props.post.title}</div>;


DisplayPost.propTypes = {
  post: PropTypes.object.isRequired
};

export default DisplayPost;
