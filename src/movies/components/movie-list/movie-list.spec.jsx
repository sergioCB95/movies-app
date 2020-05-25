import React from 'react';
import { shallow } from 'enzyme';
import MovieList from './movie-list';
import MovieCard from '../movie-card/movie-card';

describe('<MovieList />', () => {
  let wrapper;
  const movie = {
    id: 1,
    name: 'test',
    genres: ['romance'],
    watched: true
  };

  const props = {
    movies : [
      movie
    ]
  };

  it('Render a movie', () => {
    wrapper = shallow(<MovieList { ...props}/>);

    expect(wrapper.find(MovieCard)).toHaveLength(1);
    expect(wrapper.find(MovieCard).first().props().name).toBe(movie.name);
    expect(wrapper.find(MovieCard).first().props().genres).toBe(movie.genres);
    expect(wrapper.find(MovieCard).first().props().watched).toBe(movie.watched);
  });
});