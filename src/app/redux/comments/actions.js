import { GET_COMMENTS_BY_POST } from './constants';
import { status, json } from '../../utils/fetch';

export const getCommentsByPost = id =>
  dispatch =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(status)
      .then(json)
      .then(response => dispatch({ type: GET_COMMENTS_BY_POST, comments: response }))
      .catch(err => console.log(err));