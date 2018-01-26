import React from 'react';
import { shallow } from 'enzyme';
import CommentItemEdit from './CommentItemEdit';

describe('CommentItemEdit', () => {
  const initialProps = {
    comment: {},
    toggleEditing: jest.fn(),
    updateComment: jest.fn(),
  };
  const component = shallow(<CommentItemEdit {...initialProps} />);

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
