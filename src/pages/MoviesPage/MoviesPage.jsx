import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { getMovies } from '../../TheMovieAPI';
import STATUS from '../../helpers';
import Loader from '../../components/Loader';
import ErrorView from '../../components/ErrorMassage';
import SearchBar from '../../components/SearchBar';
import defMovieImgUK from '../../images/defMovieImgUK.jpg';
// import { Pagination } from '@mui/material';
import PaginationPage from 'components/Pagination';
import {
  Div,
  Main,
  MoviesItem,
  MoviesList,
  MovieTitle,
  Poster,
  Rating,
} from '../HomePage/HomePage.styled';
// import { style } from '@mui/system';

const MoviesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  const page = new URLSearchParams(location.search).get('Klason') ?? 1;

  useEffect(() => {
    if (location.search === '') {
      return;
    }
    const newSearch = new URLSearchParams(location.search).get('query');
    setQuery(newSearch, page);
  }, [location.search, page]);

  useEffect(() => {
    if (!query) return;
    setStatus(STATUS.PENDING);
    getMovies(query, page)
      .then(({ results, total_pages }) => {
        if (results.length === 0) {
          setError(`No results for ${query}!`);
          setStatus(STATUS.REJECTED);
          return;
        }
        setMovies(results);
        setTotalPages(total_pages);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong. try again.');
        setStatus(STATUS.REJECTED);
      });
  }, [query, page]);

  const searchTitle = newSearch => {
    if (query === newSearch) return;
    setQuery(newSearch);
    setMovies(null);
    setError(null);
    setStatus(STATUS.IDLE);
    navigate({ ...location, search: `query=${newSearch}&Klason=1` });
  };

  const onHandlePage = (_, page) => {
    navigate({ ...location, search: `query=${query}&Klason=${page}` });
  };
  console.log(movies);
  return (
    <Main>
      <SearchBar onHandleSubmit={searchTitle} />

      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.REJECTED && <ErrorView message={error} />}
      {status === STATUS.RESOLVED && (
        <>
          <MoviesList>
            {movies.map(
              ({
                id,
                poster_path,
                title,
                name,
                vote_average,
                release_date,
              }) => (
                <MoviesItem key={id}>
                  <Link to={`/movies/${id}`}>
                    <Poster
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w500/${poster_path}` ||
                            defMovieImgUK
                          : defMovieImgUK
                      }
                      alt={title || name}
                    />
                  </Link>
                  <Div>
                    {title ? (
                      <MovieTitle>{title}</MovieTitle>
                    ) : (
                      <MovieTitle>{name}</MovieTitle>
                    )}
                    <p>{release_date && release_date.slice(0, 4)}</p>
                  </Div>
                  <Rating>
                    {vote_average === 0 ? (
                      <>&#10026;</>
                    ) : (
                      vote_average.toFixed(1)
                    )}
                  </Rating>
                </MoviesItem>
              )
            )}
          </MoviesList>
          {totalPages > 1 && (
            <PaginationPage
              count={totalPages}
              onChange={onHandlePage}
              page={Number(page)}
            />
          )}
        </>
      )}
    </Main>
  );
};

export default MoviesPage;
