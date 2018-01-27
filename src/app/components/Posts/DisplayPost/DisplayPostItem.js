import React from 'react';

const DisplayPostItem = (props) => {
  const { post } = props;
  
  return (
    <div>
      {post.title}
    </div>
  );
};

export default DisplayPostItem;