import { GET_COMMENTS_BY_POST, POST_COMMENT, DELETE_COMMENT } from './constants';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_COMMENTS_BY_POST:
      return {
        ...state,
        comments: action.comments
      };
    case POST_COMMENT:
      return {
        ...state,
        comments: state.comments ? [...state.comments, action.comment] : [action.comment]
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments ? state.comments.filter(comment => comment.id !== action.id) : []
      }
    default:
      return state;
  }
};

export default reducer;
