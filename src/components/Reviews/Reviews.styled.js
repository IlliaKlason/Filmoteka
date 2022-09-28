import styled from 'styled-components';

export const Item = styled.li`
  padding: 20px 0;
  text-align: center;
`;

export const Author = styled.h3`
  margin-bottom: 5px;
  font-family: 'Bangers', sans-serif;
  font-size: 18px;
  letter-spacing: 0.2em;
  color: #ffd700;
`;

export const Description = styled.p`
  max-width: 1500px;
  padding: 10px;
  margin: auto;
  border: 2px dashed #0057b8;
  text-align: justify;
  font-family: 'Lobster Two', sans-serif;
  letter-spacing: 0.1em;
  color: var(--secondaryTextColor);
  ::first-letter {
    margin-left: 40px;
  }
`;
