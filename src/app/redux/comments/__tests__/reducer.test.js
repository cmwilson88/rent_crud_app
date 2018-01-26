import commentReducer from '../reducer';
import { GET_COMMENTS_BY_POST } from '../constants';

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
    ]
  };

  it('fetches and sets the comments data', () => {
    const response = commentReducer({}, { type: GET_COMMENTS_BY_POST, comments: commentData.comments });
    expect(response.comments).toEqual(commentData.comments);
  })
});
