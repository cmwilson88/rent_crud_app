import { GET_COMMENTS_BY_POST } from './constants';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_COMMENTS_BY_POST:
      return {
        ...state,
        comments: action.comments
      }
    default:
      return state;
  }
};

export default reducer;