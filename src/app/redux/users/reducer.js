import { GET_ALL_USERS } from './constants';

const users = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.users
      }
    default:
      return state;
  }
};

export default users;