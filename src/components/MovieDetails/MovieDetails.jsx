import React from 'react';
import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import defMovieImgUK from '../../images/defMovieImgUK.jpg';
import Loader from '../Loader';
import STATUS from '../../helpers/requestSTATUS';
import {
  AdditionalTitle,
  Button,
  Description,
  Genre,
  Img,
  LinkItem,
  List,
  Main,
  MainTitle,
  SecondTitle,
  SubTitle,
  Vote,
  Wrapper,
} from './MovieDetails.styled';

const MovieDetails = ({ movie, status }) => {
  const {
    production_countries,
    release_date,
    id,
    title,
    overview,
    vote_average,
    genres,
    name,
    poster_path,
    original_title,
    original_name,
  } = movie;
  const location = useLocation();

  if (vote_average === undefined) return;

  const pathnameBase = `/movies/${id}`;
  const pathnameCast = `/movies/${id}/cast`;
  const pathnameReviews = `/movies/${id}/reviews`;

  const genresName = () => {
    if (genres?.length === 1) {
      return genres?.map(({ name }) => name);
    } else {
      return genres?.map(({ name }) => name + ', ');
    }
  };

  const productionName = () => {
    if (production_countries?.length === 1) {
      return production_countries?.map(({ name }) => name);
    } else {
      return production_countries?.map(({ name }) => name + ', ');
    }
  };

  const changePathCast = () => {
    if (location.pathname === pathnameCast) {
      return pathnameBase;
    } else {
      return pathnameCast;
    }
  };
  const changePathReviews = () => {
    if (location.pathname === pathnameReviews) {
      return pathnameBase;
    } else {
      return pathnameReviews;
    }
  };

  return (
    <Main>
      <Button to={location.state?.from ?? '/'}>&larr; Back</Button>

      {status === STATUS.PENDING && <Loader />}

      <Wrapper>
        {poster_path ? (
          <Img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={`${title} || ${name} `}
          />
        ) : (
          <Img src={`${defMovieImgUK}`} alt="Poster" />
        )}
        <Description>
          <MainTitle>Title: {title}</MainTitle>
          <SecondTitle>Release date: {release_date}</SecondTitle>
          <SecondTitle>
            Original title: <em>{original_title || original_name}</em>
          </SecondTitle>
          <SubTitle>Rating</SubTitle>
          <Vote>
            {vote_average === 0 ? <>&#10026;</> : vote_average.toFixed(1)}
          </Vote>
          <SubTitle>Description</SubTitle>
          <Genre>{overview}</Genre>
          <SubTitle>Film genre</SubTitle>
          <Genre>{genresName()}</Genre>
          <SubTitle>Production countries</SubTitle>
          <Genre>{productionName()}</Genre>
        </Description>
      </Wrapper>
      <div>
        <AdditionalTitle>Additional information</AdditionalTitle>
        <List>
          <li>
            <LinkItem
              to={changePathCast()}
              state={{ from: location.state?.from }}
            >
              Cast
            </LinkItem>
          </li>
          <li>
            <LinkItem
              to={changePathReviews()}
              state={{ from: location.state?.from }}
            >
              Reviews
            </LinkItem>
          </li>
        </List>
        <Outlet />
      </div>
    </Main>
  );
};

MovieDetails.propTypes = {
  status: PropTypes.string.isRequired,
  optionalObjectWithShape: PropTypes.shape({
    production_countries: PropTypes.array.isRequired,
    release_date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
    name: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    original_name: PropTypes.string.isRequired,
  }),
};
export default MovieDetails;
