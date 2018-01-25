import { GET_ALL_POSTS, GET_POST } from './constants';
import { status, json } from '../../utils/fetch';

export const getAllPosts = () =>
  dispatch =>
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(status)
      .then(json)
      .then(response => dispatch({ type: GET_ALL_POSTS, posts: response.posts }))
      .catch(error => console.log(error));

export const getPostById = id =>
  dispatch =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(status)
      .then(json)
      .then(response => dispatch({ type: GET_POST, selectedPost: response.post }))
      .catch(error => console.log(error));

