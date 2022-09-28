import styled from 'styled-components';

export const Main = styled.main`
  padding: 40px 0;
`;
export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 10px 0 10px;
  & > p {
    font-family: 'Bangers', sans-serif;
    color: #ffd700;
    font-weight: 700;
  }
`;
export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-bottom: 40px;

  font-size: 5em;
  -webkit-text-stroke: 7px #0057b8;
  color: #ffd700;
`;

export const MoviesList = styled.ul`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin: -15px;
  padding-bottom: 40px;
`;
export const MoviesItem = styled.li`
  height: 100%;
  box-shadow: 3px 3px 9px black;
  width: 294px;
  margin: 15px;
  border-radius: 20px;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 20px 3px var(--accentColor);
  }
`;
export const Poster = styled.img`
  height: 441px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  object-fit: cover;
  transition: all 300ms var(--timingFn);
`;
export const MovieTitle = styled.span`
  display: block;
  flex-basis: 82%;
  margin-top: 5px;
  font-family: 'Bangers', sans-serif;
  font-size: 18px;
  letter-spacing: 0.14em;
  color: var(--accentColor);
  margin-right: 10px;
`;
export const Rating = styled.p`
  display: inline-block;
  text-align: center;
  font-weight: 800;
  color: #ffd700;
  background-color: #0057b8;
  border-radius: 10px;
  min-width: 40px;
  margin: 5px auto;
`;
