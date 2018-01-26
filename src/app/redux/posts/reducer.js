import { GET_ALL_POSTS, GET_POST } from './constants';


const posts = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case GET_POST:
      return {
        ...state,
        selectedPost: action.selectedPost
      };
    default:
      return state;
  }
};

export default posts;
