import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock/es5/server';
import { GET_ALL_USERS } from '../constants';
import * as actions from '../actions';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ });
const mockGetAll = {
  users: [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    }
  ]
};

fetchMock.get('https://jsonplaceholder.typicode.com/users', mockGetAll);

describe('User Actions', () => {
  it('creates an async action to fetch all of the users', () => {
    return store.dispatch(actions.getAllUsers()).then(() => {
      expect(store.getActions()[0]).toEqual({ type: GET_ALL_USERS, users: mockGetAll });
    });
  });
});
