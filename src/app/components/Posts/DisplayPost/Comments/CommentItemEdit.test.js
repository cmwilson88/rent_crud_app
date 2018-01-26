import React from 'react';
import { shallow } from 'enzyme';
import CommentItemEdit from './CommentItemEdit';

describe('CommentItemEdit', () => {
  const initialProps = {
    comment: {},
    errors: {},
    handleInputChange: jest.fn(),
    cancelEditComment: jest.fn(),
    updateComment: jest.fn(),
    deleteComment: jest.fn()
  };
  const component = shallow(<CommentItemEdit {...initialProps} />);

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
