import React from 'react';
import { shallow } from 'enzyme';
import PostListItem from './PostListItem';

describe('PostListItem', () => {
  const initialProps = {
    post: {}
  };
  const component = shallow(<PostListItem {...initialProps} />);
  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
