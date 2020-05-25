import React from 'react';
import { shallow } from 'enzyme';
import GenreTag from './genre-tag';

describe('<GenreTag />', () => {
  let wrapper;

  test('Renders a genre tag', () => {
    const value = 'test';
    wrapper = shallow(<GenreTag value={value}/>);
    expect(wrapper.find('.ma-genre-tag').first().text()).toEqual(value);
  });
});