import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  min-height: 450px;
  margin: -15px;
`;
export const CastItem = styled.li`
  width: 200px;
  margin: 15px;
`;
export const CastImage = styled.img`
  height: 300px;
  border-radius: 30px;
  overflow: hidden;
  object-fit: cover;
`;
export const CastName = styled.h3`
  font-family: 'Bangers', sans-serif;
  font-size: 18px;
  letter-spacing: 0.2em;
  color: var(--accentColor);
`;
export const CastCharacter = styled.p`
  font-size: 15px;
  color: #c3beba;
`;
