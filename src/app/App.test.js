import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

it('renders without crashing', () => {
  const initialProps = {
    getAllPosts: jest.fn()
  };
  const app = shallow(<App {...initialProps} />);
  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });
});
