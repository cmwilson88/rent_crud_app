import { GET_ALL_POSTS, GET_POST } from './constants';

export const getAllPosts = () =>
  dispatch =>
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => dispatch({ type: GET_ALL_POSTS, posts: json }))

export const getPostById = id => ({
  type: GET_POST,
  id
});
