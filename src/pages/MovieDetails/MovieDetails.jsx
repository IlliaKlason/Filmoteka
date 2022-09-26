import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorView from '../../components/ErrorMassage/ErrorMassage';
import Loader from '../../components/Loader';
import MovieDetails from '../../components/MovieDetails';
import { getMovieDetails } from '../../TheMovieAPI';
import STATUS from '../../helpers';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    getMovieDetails(id, setMovie)
      .then(setMovie)
      .then(setStatus(STATUS.RESOLVED))
      .catch(error => {
        console.log(error);
        setError(error.message);
        setStatus(STATUS.REJECTED);
      });
  }, [id]);

  return (
    <>
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.REJECTED && <ErrorView message={error} />}
      {status === STATUS.RESOLVED && (
        <MovieDetails movie={movie} status={status} />
      )}
    </>
  );
};

export default MovieDetailsPage;
