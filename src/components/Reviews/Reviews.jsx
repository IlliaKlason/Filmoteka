import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../TheMovieAPI';
import STATUS from '../../helpers/requestSTATUS';
import Loader from '../Loader';
import ErrorView from '../ErrorMassage';

import {
  Author,
  Description,
  DescriptionReadMore,
  Item,
  ReadMore,
} from './Reviews.styled';
import { ReadMoreDiv } from 'components/MovieDetails/MovieDetails.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);
  useEffect(() => {
    setStatus(STATUS.PENDING);
    getMovieReviews(id)
      .then(({ results }) => {
        setReviews(results);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong, please try again.');
        setStatus(STATUS.REJECTED);
      });
  }, [id]);

  const reviewsMSB = reviews.filter(item => item.author !== 'MSB');
  function readMoreMaker(content) {
    let prikol;
    let prikolEnd;
    let prikolStr;
    if (content.length > 1000) {
      prikol = content.split(' ');
      prikolEnd = prikol.splice(0, prikol.length / 2).join(' ');
      prikolStr = prikol.join(' ');
    }
    return [prikolEnd, prikolStr];
  }
  return (
    <>
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.REJECTED && <ErrorView message={error} />}
      {status === STATUS.RESOLVED && (
        <ul>
          {reviewsMSB.length < 1 ? (
            <p>Sorry, there are no reviews for this video</p>
          ) : (
            reviewsMSB.map(({ id, author, content }) => {
              const readMore = readMoreMaker(content);
              return (
                <Item key={id}>
                  <Author>Author:{author}</Author>
                  {content.length > 1000 ? (
                    <ReadMoreDiv>
                      <Description>{readMore[0] + '...'}</Description>
                      <ReadMore>
                        <summary>
                          <span id="open">read more</span>
                          <span id="close">close</span>
                        </summary>
                        <DescriptionReadMore>{readMore[1]}</DescriptionReadMore>
                      </ReadMore>
                    </ReadMoreDiv>
                  ) : (
                    <Description>{content}</Description>
                  )}
                </Item>
              );
            })
          )}
        </ul>
      )}
    </>
  );
};

export default Reviews;
