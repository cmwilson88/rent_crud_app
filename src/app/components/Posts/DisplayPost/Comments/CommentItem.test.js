import React from 'react';
import { shallow } from 'enzyme';
import CommentItem from './CommentItem';

describe('Comment', () => {
  const initialProps = {
    comment: {}
  };
  const component = shallow(<CommentItem {...initialProps} />);
  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
