import React from 'react';
import { shallow } from 'enzyme';
import PostList from './PostList';

describe('PostList', () => {
  const initialProps = {
    posts: []
  };
  const component = shallow(<PostList {...initialProps} />);
  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
