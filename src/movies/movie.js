/**
 * Movie model
 * @type {{watched: boolean, genres: [], name: StringConstructor, id: NumberConstructor}}
 */
const Movie = {
  id: Number,
  name: String,
  genres: [],
  watched: false,
};

/**
 * Predefined genres
 * @type {{ROMANCE: string, HORROR: string, COMEDY: string}}
 */
const Genres = {
  ROMANCE: "Romance",
  HORROR: "Horror",
  COMEDY: "Comedy"
};

/**
 * List of predefined genres
 * @type {(string)[]}
 */
const GenreList = [
  Genres.ROMANCE,
  Genres.HORROR,
  Genres.COMEDY,
];

export default Movie;
export { Genres, GenreList };