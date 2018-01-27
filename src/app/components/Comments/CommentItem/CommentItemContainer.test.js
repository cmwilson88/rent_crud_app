import React from 'react';
import { shallow } from 'enzyme';
import { CommentItemContainer } from './CommentItemContainer';

describe('CommentItemContainer', () => {
  const initialProps = {
    comment: { id: 1 },
    updateComment: jest.fn(),
    deleteComment: jest.fn()
  };
  const component = shallow(<CommentItemContainer {...initialProps} />);
  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
