import commentReducer from '../reducer';
import { 
  GET_COMMENTS_BY_POST,
  POST_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT } from '../constants';

describe('commentReducer', () => {
  const commentData = {
    comments: [
      {
        postId: 1,
        id: 1,
        name: 'id labore ex et quam laborum',
        email: 'Eliseo@gardner.biz',
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantiu'
      },
      {
        postId: 1,
        id: 2,
        name: 'quo vero reiciendis velit similique earum',
        email: 'Jayne_Kuhic@sydney.com',
        body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis e',
      },
    ],
    comment: {
      postId: 1,
      id: 101,
      name: 'John Smith',
      email: 'smith@smith.com',
      body: 'This is a new comment'
    }
  };

  it('fetches and sets the comments data', () => {
    const response = commentReducer({}, { type: GET_COMMENTS_BY_POST, comments: commentData.comments });
    expect(response.comments).toEqual(commentData.comments);
  });

  it('Adds a new comment', () => {
    const response = commentReducer({}, { type: POST_COMMENT, comment: commentData.newComment });
    expect(response.comments.length).toEqual(1);
  });

  it('Deletes a comment', () => {
    const state = {
      comments: [{ id: 1 }]
    };
    const response = commentReducer(state, { type: DELETE_COMMENT, id: 1 });
    expect(response.comments.length).toEqual(0);
  });

  it('Updates a comment', () => {
    const state = {
      comments: [
        {
          id: 1,
          name: 'John Smith',
          email: 'john@john.com',
          body: 'asdf'
        }
      ]
    };

    const updatedComment = {
      id: 1,
      name: 'George McFly',
      email: 'john@john.com',
      body: 'updated body'
    };
    const response = commentReducer(state, { type: UPDATE_COMMENT, id: 1, comment: updatedComment });
    expect(response.comments[0]).toEqual(updatedComment);
    expect(response.comments[0] === state.comments[0]).toBe(false);
    
    const emptyState = commentReducer({}, { type: UPDATE_COMMENT, id: 1, comment: updatedComment });
    expect(emptyState.comments).toEqual(null);
  });
});
