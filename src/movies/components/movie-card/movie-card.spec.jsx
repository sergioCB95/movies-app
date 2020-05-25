import React from 'react';
import { shallow } from 'enzyme';
import { MovieCard } from './movie-card';
import GenreTag from '../genre-tag/genre-tag';

describe('<MovieCard />', () => {
  let wrapper;

  const props = {
    deleteMovie : jest.fn(),
    toggleWatchedMovie : jest.fn(),
    editMovie : jest.fn(),
    id: 1,
    name: 'test',
    genres: ['romance'],
    watched: true
  };

  test('Render info', () => {
    wrapper = shallow(<MovieCard { ...props}/>);

    expect(wrapper.find('.ma-movie-card__name').first().text()).toBe('test');
    expect(wrapper.find(GenreTag)).toHaveLength(1);
    expect(wrapper.find(GenreTag).first().props().value).toBe('romance');
    expect(wrapper.find('.ma-movie-card__watched').props().checked).toBe(true);
  });

  test('Delete movie', () => {
    wrapper = shallow(<MovieCard { ...props}/>);

    wrapper.find('.ma-movie-card__button-delete').first().simulate('click');

    expect(props.deleteMovie.mock.calls.length).toBe(1);
    expect(props.deleteMovie.mock.calls[0][0]).toBe(props.id);
  });

  test('Edit movie', () => {
    wrapper = shallow(<MovieCard { ...props}/>);

    wrapper.find('.ma-movie-card__button-edit').first().simulate('click');
    expect(wrapper.find('.ma-movie-card__input-name')).toHaveLength(1);


    wrapper.find('.ma-movie-card__button-edit').first().simulate('click');
    expect(props.editMovie.mock.calls.length).toBe(1);
    expect(props.editMovie.mock.calls[0][0]).toBe(props.id);
    expect(props.editMovie.mock.calls[0][1]).toBe(props.name);
  });

  test('Toggle watched', () => {
    wrapper = shallow(<MovieCard { ...props}/>);

    wrapper.find('.ma-movie-card__watched').first().simulate('change', { target: { value: props.watched } });

    expect(props.toggleWatchedMovie.mock.calls.length).toBe(1);
    expect(props.toggleWatchedMovie.mock.calls[0][0]).toBe(props.id);
    expect(props.toggleWatchedMovie.mock.calls[0][1]).toBe(props.watched);
  });
});