import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.main`
  padding: 40px 20px;
  text-align: left;
`;
export const Wrapper = styled.div`
  text-align: center;
  @media screen and (min-width: 768px) {
    & {
      display: flex;
    }
  }
`;
export const Img = styled.img`
  max-width: 320px;
  height: 500px;
  margin-bottom: 20px;
  border-radius: 5px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    & {
      margin-right: 30px;
      margin-bottom: 0;
    }
  }
`;
export const Description = styled.div`
  text-align: left;
`;
export const MainTitle = styled.h1`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.1667;
  letter-spacing: 0.03em;
  text-shadow: var(--textShadow);
  text-align: center;
  @media screen and (min-width: 768px) {
    & {
      text-align: left;
    }
  }
`;
export const SecondTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.1667;
  letter-spacing: 0.03em;
  text-shadow: var(--textShadow);
  text-align: center;
  font-weight: 600;
  font-size: 25px;
  @media screen and (min-width: 768px) {
    & {
      text-align: left;
    }
  }
`;
export const Vote = styled.div`
  margin-bottom: 30px;
  font-size: 18px;
  color: #c3beba;
`;
export const Genre = styled.p`
  margin-bottom: 30px;
  font-size: 18px;
  color: #c3beba;
  display: flex;
  align-items: center;
`;
export const SubTitle = styled.h3`
  font-family: 'Bangers', sans-serif;
  letter-spacing: 0.2em;
  color: var(--accentColor);
`;
export const AdditionalTitle = styled.h2`
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 40px;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.1667;
  letter-spacing: 0.03em;
  text-shadow: var(--textShadow);
  text-align: center;
  border-top: 2px solid var(--accentColor);
  border-bottom: 2px solid var(--accentColor);
  background-image: linear-gradient(
    to bottom,
    #0057b8,
    #0057b8 50%,
    #ffd700 50%,
    #ffd700
  );
  box-shadow: var(--boxShadow);
`;
export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
`;
export const LinkItem = styled(Link)`
  display: inline-block;
  text-align: center;
  padding: 12px;
  font-weight: 800;
  color: yellow;
  font-size: 18px;
  &:hover,
  &:focus {
    color: #0057b8;
  }
`;
export const Button = styled.button`
  height: 47px;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #0057b8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: none;
  outline: none;
  opacity: 1;
  transition: opacity 250ms var(--timingFn);
  cursor: pointer;
  border-radius: 4px;
  color: #ffd700;
  font-weight: 500;
  font-size: 20px;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
