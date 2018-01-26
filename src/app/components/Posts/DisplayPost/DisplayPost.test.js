import React from 'react';
import { shallow } from 'enzyme';
import DisplayPost from './DisplayPost';

describe('DisplayPost', () => {
  const initialProps = {
    post: {},
    comments: []
  }
  const component = shallow(<DisplayPost {...initialProps} />);
  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
})