import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock/es5/server';
import { GET_ALL_POSTS } from '../constants';
import * as actions from '../actions';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ });
const mockResponse = {
  posts: [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architect'
    }
  ]
};

fetchMock.get('https://jsonplaceholder.typicode.com/posts', mockResponse);

describe('Posts Actions', () => {
  it('creates an async action to fetch all of the posts', () => {
    const expectedActions = [{ posts: mockResponse, type: GET_ALL_POSTS }];

    return store.dispatch(actions.getAllPosts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
