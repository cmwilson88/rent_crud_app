import { 
  GET_COMMENTS_BY_POST,
  POST_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT } from './constants';
import { status, json } from '../../utils/fetch';

export const getCommentsByPost = id =>
  dispatch =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(status)
      .then(json)
      .then(response => dispatch({ type: GET_COMMENTS_BY_POST, comments: response }))
      .catch(err => console.log(err));

export const postComment = comment =>
  dispatch =>
    fetch(`https://jsonplaceholder.typicode.com/comments`, {
      method: 'POST',
      body: JSON.stringify({
        name: comment.name,
        email: comment.email,
        body: comment.body
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(json)
      .then(response => dispatch({ type: POST_COMMENT, comment: response }))
      .catch(err => console.log(err));

export const deleteComment = id =>
  dispatch =>
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: 'DELETE'
    })
      .then(json)
      .then(response => dispatch({ type: DELETE_COMMENT, id }))
      .catch(err => console.log(err));
 
export const updateComment = (id, updatedComment) =>
  dispatch =>
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedComment),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(json)
      .then(response => dispatch({ type: UPDATE_COMMENT, id, comment: response }))
      .catch(err => console.log(err));
