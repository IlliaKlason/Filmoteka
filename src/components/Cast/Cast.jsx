import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../TheMovieAPI';
import actorPlaceholder from '../../images/actorMe.jpg';
import STATUS from '../../helpers';
import Loader from '../Loader';
import ErrorView from '../ErrorMassage';
import {
  CastCharacter,
  CastImage,
  CastItem,
  CastList,
  CastName,
} from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    getMovieCast(id)
      .then(({ cast }) => {
        setAuthors(cast);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong, please try again.');
        setStatus(STATUS.REJECTED);
      });
  }, [id]);

  return (
    <>
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.REJECTED && <ErrorView message={error} />}
      {status === STATUS.RESOLVED && (
        <CastList>
          {authors.length < 1 ? (
            <p>Sorry, no description available</p>
          ) : (
            authors.map(({ character, id, name, profile_path }) => (
              <CastItem key={id}>
                {profile_path === null ? (
                  <CastImage src={actorPlaceholder} alt="Is not available" />
                ) : (
                  <CastImage
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={`${name}`}
                  />
                )}
                <CastName>Actor: {name}</CastName>
                <CastCharacter>Role: {character}</CastCharacter>
              </CastItem>
            ))
          )}
        </CastList>
      )}
    </>
  );
};

export default Cast;
