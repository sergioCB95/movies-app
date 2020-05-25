import React from 'react';
import { shallow } from 'enzyme';
import { MovieFilteredList } from './movie-filtered-list';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useLocation: jest.fn().mockReturnValue({
    pathname: '/another-route',
    search: '',
    hash: '',
    state: null,
    key: '5nvxpbdafa',
  }),
  withRouter: jest.fn(),
  useHistory: jest.fn().mockReturnValue({
    push: jest.fn()
  }),
}));

describe('<MovieFilteredList />', () => {
  let wrapper;

  const movie = {
    id: 1,
    name: 'test',
    genres: ['romance'],
    watched: true
  };

  let props = {
    getMovies: jest.fn(),
    movies:  [movie],
    filteredMovies: jest.fn(() => [movie]),
    isFetching: false
  };

  beforeEach(() => {
    props = {
      getMovies: jest.fn(),
      movies:  [movie],
      filteredMovies: jest.fn(() => [movie]),
      isFetching: false
    }
  });

  test('Filter by genre', () => {
    const value = 'test';
    wrapper = shallow(<MovieFilteredList { ...props}/>);
    const input = wrapper.find('input').first();
    input.simulate('change', {
      preventDefault: () => {},
      target: {
        value
      }
    });

    expect(props.getMovies.mock.calls.length).toBe(1);
    expect(props.filteredMovies.mock.calls.length).toBe(2);
    expect(props.filteredMovies.mock.calls[1][1]).toBe(value);
  });

  test('Filter by name', () => {
    const value = 'test';
    wrapper = shallow(<MovieFilteredList { ...props}/>);
    const input = wrapper.find('input').last();
    input.simulate('change', {
      preventDefault: () => {},
      target: {
        value
      }
    });

    expect(props.getMovies.mock.calls.length).toBe(1);
    expect(props.filteredMovies.mock.calls.length).toBe(2);
    expect(props.filteredMovies.mock.calls[1][0]).toBe(value);
  });
});