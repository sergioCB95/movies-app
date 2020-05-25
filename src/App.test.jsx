import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Layout from './main/layout/layout';

describe('<App />', () => {
  let wrapper;

  it('Renders App', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find(Layout)).toHaveLength(1);
  });
});


