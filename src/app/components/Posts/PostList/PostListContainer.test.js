import React from 'react';
import { shallow } from 'enzyme';
import { PostListContainer } from './PostListContainer';

describe('PostListContainer', () => {
  const initialProps = {
    getAllPosts: jest.fn(),
    getAllUsers: jest.fn()
  };
  const component = shallow(<PostListContainer {...initialProps} />);
  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
