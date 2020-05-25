import React from 'react';
import { shallow } from 'enzyme';
import { AddMovie } from './add-movie';
import GenreTag from '../genre-tag/genre-tag';

describe('<AddMovie />', () => {
  let wrapper;

  const props = {
    addMovie: jest.fn()
  };

  test('Add a movie', () => {
    const name = 'test';
    const genre = "romance";
    wrapper = shallow(<AddMovie { ...props}/>);

    const nameInput = wrapper.find('.ma-add-movie__input-field').at(0);
    const genreInput = wrapper.find('.ma-add-movie__input-field').at(1);
    nameInput.simulate('change', { preventDefault: () => {}, target: { value: name } });
    genreInput.simulate('keypress', { preventDefault: () => {}, key: 'Enter', target: { value: genre } });

    wrapper.find('form').first().simulate('submit', { preventDefault: () => {} });

    const addedMovie = props.addMovie.mock.calls[0][0];

    expect(props.addMovie.mock.calls.length).toBe(1);
    expect(addedMovie.name).toBe(name);
    expect(addedMovie.genres.length).toBe(1);
    expect(addedMovie.genres[0]).toBe(genre);
    expect(addedMovie.watched).toBe(false);
  });

  test('Add a tag', () => {
    const value = 'test';
    wrapper = shallow(<AddMovie { ...props}/>);
    const input = wrapper.find('.ma-add-movie__input-field').at(1);
    input.simulate('keypress', { preventDefault: () => {}, key: "Enter", target: { value } });

    expect(wrapper.find(GenreTag)).toHaveLength(1);
    expect(wrapper.find(GenreTag).first().props().value).toBe(value);
  });
});