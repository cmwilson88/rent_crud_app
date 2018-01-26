import userReducer from '../reducer';
import { GET_ALL_USERS } from '../constants';

describe('userReducer', () => {
  const userData = {
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

  it('fetches and sets the users data', () => {
    const response = userReducer({}, { type: GET_ALL_USERS, users: userData.users });
    expect(response.users).toEqual(userData.users);
  })
});

