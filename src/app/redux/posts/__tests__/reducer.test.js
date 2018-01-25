import postReducer from '../reducer';
import { GET_ALL_POSTS, GET_POST } from '../constants';

describe('postReducer', () => {
  const postData = {
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
    ],
    selectedPost: {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architect'
    }
  };

  it('fetches and sets the posts data', () => {
    expect(postReducer({}, { type: GET_ALL_POSTS, posts: postData.posts }))
      .toEqual(postData.posts);
  });

  it('fetches and sets the selectedPost data', () => {
    expect(postReducer({}, { type: GET_POST, selectedPost: postData.selectedPost }))
      .toEqual(postData.selectedPost);
  })
});
