import { addUserToPost } from '../selectors';

describe('Post Selectors', () => {
  const users = [
    {
      id: 1,
      name: 'Leanne Graham',
    },
  ];

  const posts = [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
  ];

  describe('addUserToPost', () => {
    const expectedResult = [
      {
        userId: 1,
        author: 'Leanne Graham',
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      },
    ];

    it('should return the post object with the author included', () => {
      expect(addUserToPost(users, posts)).toEqual(expectedResult)
    });
  });
});
