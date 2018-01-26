import React from 'react';
import { shallow } from 'enzyme';
import CommentItemDisplay from './CommentItemDisplay';

describe('CommentItemDisplay', () => {
  const initialProps = {
    comment: {},
    toggleEditing: jest.fn()
  };
  const component = shallow(<CommentItemDisplay {...initialProps} />);
  
  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
