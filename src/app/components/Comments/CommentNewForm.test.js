import React from 'react';
import { shallow } from 'enzyme';
import CommentNewForm from './CommentNewForm';

describe('CommentNewForm', () => {
  const initialProps = {
    comment: {
      name: '',
      email: '',
      body: ''
    },
    addComment: jest.fn(),
    handleInputChange: jest.fn(),
    cancelAddComment: jest.fn()
  };
  const component = shallow(<CommentNewForm {...initialProps} />);

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
