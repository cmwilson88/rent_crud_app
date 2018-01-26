import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock/es5/server';
import { GET_COMMENTS_BY_POST } from '../constants';
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

fetchMock.get('https://jsonplaceholder.typicode.com/posts/1/comments', mockGetAllByPost);

describe('Comments Actions', () => {
  it('creates an async actiont o fetch all of the comments', () => {
    return store.dispatch(actions.getCommentsByPost(1)).then(() => {
      expect(store.getActions()[0]).toEqual({ type: GET_COMMENTS_BY_POST, comments: mockGetAllByPost });
    })
  });
});