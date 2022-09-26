import axios from 'axios';

const API_KEY = 'd5e2f495d9a897516e73276868a4ea37';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

async function TheMovieAPIRequest(url = '', config = {}) {
  const response = await axios.get(url, config);
  return response.data;
}

function getTrending(page) {
  return TheMovieAPIRequest(
    `/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${page}`
  );
}

function getMovies(query, page) {
  return TheMovieAPIRequest(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
  );
}

function getMovieDetails(movieId, setMovie) {
  return TheMovieAPIRequest(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}

function getMovieCast(movieId, setCast) {
  return TheMovieAPIRequest(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

function getMovieReviews(movieId, setReviews) {
  return TheMovieAPIRequest(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
}

export {
  getTrending,
  getMovies,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
};
