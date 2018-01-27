import React from 'react';

const DisplayPostItem = (props) => {
  const { post } = props;
  return (
    <div className="post-item">
      <h1 className="post-item__title">{post.title}</h1>
      <p className="post-item__body">{post.body}</p>
    </div>
  );
};

export default DisplayPostItem;