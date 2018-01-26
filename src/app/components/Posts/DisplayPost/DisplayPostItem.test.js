import React from 'react';
import { shallow } from 'enzyme';
import DisplayPostItem from './DisplayPostItem';

describe('DisplayPostItem', () => {
  const initialProps = {
    post: {}
  };
  const component = shallow(<DisplayPostItem {...initialProps} />);
  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  })
})