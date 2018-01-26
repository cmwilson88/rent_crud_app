import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock/es5/server';
import { GET_ALL_POSTS, GET_POST } from '../constants';
import * as actions from '../actions';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ });
const mockGetAll = {
  posts: [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architect'
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi null'
    }
  ]
};

const mockGetOne = {
  selectedPost: {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architect'
  }
};

fetchMock.get('https://jsonplaceholder.typicode.com/posts', mockGetAll);
fetchMock.get('https://jsonplaceholder.typicode.com/posts/1', mockGetOne);

describe('Posts Actions', () => {
  it('creates an async action to fetch all of the posts', () => {
    return store.dispatch(actions.getAllPosts()).then(() => {
      expect(store.getActions()[0]).toEqual({ type: GET_ALL_POSTS, posts: mockGetAll });
    });
  });

  it('creates an async action to fetch a single post', () => {
    return store.dispatch(actions.getPostById(1)).then(() => {
      expect(store.getActions()[1]).toEqual({ type: GET_POST, selectedPost: mockGetOne });
    });
  });
});
