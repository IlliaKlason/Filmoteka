import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getTrending } from '../../TheMovieAPI';
import STATUS from '../../helpers/requestSTATUS';
import Loader from '../../components/Loader';
import ErrorView from '../../components/ErrorMassage';
import PaginationPage from 'components/Pagination';

import defMovieImgUK from '../../images/defMovieImgUK.jpg';
import {
  Main,
  MoviesItem,
  MoviesList,
  MovieTitle,
  Poster,
  Title,
  Rating,
  Div,
} from './HomePage.styled';

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  const page = new URLSearchParams(location.search).get('Klason') ?? 1;

  useEffect(() => {
    setStatus(STATUS.PENDING);
    getTrending(page)
      .then(({ results, total_pages }) => {
        setMovies(results);
        setTotalPages(total_pages);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong, please try again.');
        setStatus(STATUS.REJECTED);
      });
  }, [page]);

  const onHandlePage = (_, page) => {
    navigate({ ...location, search: `Klason=${page}` });
  };
  return (
    <Main>
      <Title>Today on top</Title>

      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.REJECTED && <ErrorView message={error.message} />}
      {status === STATUS.RESOLVED && (
        <>
          <MoviesList>
            {movies.map(
              ({
                id,
                name,
                title,
                vote_average,
                poster_path,
                release_date,
              }) => (
                <MoviesItem key={id}>
                  <Link to={`/movies/${id}`}>
                    <Poster
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
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

export default HomePage;
