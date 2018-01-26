import { GET_ALL_USERS } from './constants';
import { status, json } from '../../utils/fetch';

export const getAllUsers = () =>
  dispatch =>
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(status)
      .then(json)
      .then(response => dispatch({ type: GET_ALL_USERS, users: response }))
      .catch(err => console.log(err));
