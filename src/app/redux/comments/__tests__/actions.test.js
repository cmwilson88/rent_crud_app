import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock/es5/server';
import { 
  GET_COMMENTS_BY_POST,
  POST_COMMENT, 
  DELETE_COMMENT,
  UPDATE_COMMENT } from '../constants';
import * as actions from '../actions';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ });
const mockGetAllByPost = {
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
  ]
};

const mockPostComment = {
  comment: {
    postId: 1,
    id: 101,
    name: 'John Smith',
    email: 'smith@smith.com',
    body: 'This is a new comment'
  }
};

const mockDeleteComment = {
  comments: []
};

const mockUpdateComment = {
  comment: {
    postId: 1,
    id: 101,
    name: 'Updated Name',
    email: 'smith@smith.com',
    body: 'This is an updated new comment'
  }
};

fetchMock.get('https://jsonplaceholder.typicode.com/posts/1/comments', mockGetAllByPost);
fetchMock.post('https://jsonplaceholder.typicode.com/comments', mockPostComment);
fetchMock.delete('https://jsonplaceholder.typicode.com/comments/1', mockDeleteComment);
fetchMock.put('https://jsonplaceholder.typicode.com/comments/1', mockUpdateComment);

describe('Comments Actions', () => {
  it('creates an async actiont o fetch all of the comments', () => {
    return store.dispatch(actions.getCommentsByPost(1)).then(() => {
      expect(store.getActions()[0]).toEqual({ type: GET_COMMENTS_BY_POST, comments: mockGetAllByPost });
    });
  });

  it('creates an async action to post a comment', () => {
    const newComment = {
      postId: 1,
      id: 101,
      name: 'John Smith',
      email: 'smith@smith.com',
      body: 'This is a new comment'
    };
    return store.dispatch(actions.postComment(newComment)).then(() => {
      expect(store.getActions()[1]).toEqual({ type: POST_COMMENT, comment: mockPostComment });
    });
  });

  it('creates an async action to delete a comment', () => {
    return store.dispatch(actions.deleteComment(1)).then(() => {
      expect(store.getActions()[2]).toEqual({ type: DELETE_COMMENT, id: 1 });
    });
  });

  it('creates an async action to update a comment', () => {
    const updatedComment = {
      comment: {
        postId: 1,
        id: 101,
        name: 'Updated Name',
        email: 'smith@smith.com',
        body: 'This is an updated new comment'
      }
    };
    return store.dispatch(actions.updateComment(1, updatedComment)).then(() => {
      expect(store.getActions()[3]).toEqual({ type: UPDATE_COMMENT, id: 1, comment: mockUpdateComment });
    });
  });
});
