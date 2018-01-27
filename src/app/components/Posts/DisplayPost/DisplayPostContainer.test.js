import React from 'react';
import { shallow } from 'enzyme';
import { DisplayPostContainer } from './DisplayPostContainer';

describe('DisplayPostContainer', () => {
  const initialProps = {
    getPostById: jest.fn(),
    getCommentsByPost: jest.fn(),
    comments: [],
    post: {},
    match: {
      params: {
        id: '1'
      }
    }
  };
  const component = shallow(<DisplayPostContainer {...initialProps} />);

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
