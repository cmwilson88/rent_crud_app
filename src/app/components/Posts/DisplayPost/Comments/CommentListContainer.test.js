import React from 'react';
import { shallow } from 'enzyme';
import { CommentListContainer } from './CommentListContainer';

describe('CommentListContainer', () => {
  const initialProps = {
    postComment: jest.fn(),
    comments: []
  };
  const component = shallow(<CommentListContainer {...initialProps} />);

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
