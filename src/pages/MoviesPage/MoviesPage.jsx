import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { getMovies } from '../../TheMovieAPI';
import STATUS from '../../helpers';
import Loader from '../../components/Loader';
import ErrorView from '../../components/ErrorMassage';
import SearchBar from '../../components/SearchBar';
import defMovieImgUK from '../../images/defMovieImgUK.jpg';
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

const MoviesPage = () => {
  // const navigate = useNavigate();
  const [statuS, setStatuS] = useSearchParams();
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  const page = statuS.get('Klason') ?? '1';
  useEffect(() => {
    const newSearch = statuS.get('query');
    setQuery(newSearch, page);
  }, [page, statuS]);

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
    setStatuS({ query: newSearch, Klason: 1 });
  };

  const onHandlePage = (_, page) => {
    setStatuS({ query: query, Klason: page });
  };
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
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <MoviesItem key={id}>
                    <Poster
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w500/${poster_path}` ||
                            defMovieImgUK
                          : defMovieImgUK
                      }
                      alt={title || name}
                    />

                    <Div>
                      {title ? (
                        <MovieTitle>{title}</MovieTitle>
                      ) : (
                        <MovieTitle>{name}</MovieTitle>
                      )}
                      <p>{release_date && release_date.slice(0, 4)}</p>
                      <Rating>
                        {vote_average === 0 ? (
                          <>&#10026;</>
                        ) : (
                          vote_average.toFixed(1)
                        )}
                      </Rating>
                    </Div>
                  </MoviesItem>
                </Link>
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
