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
  padding: 10px 10px 0 10px;
  margin: auto;
  text-align: justify;
  font-family: 'Lobster Two', sans-serif;
  letter-spacing: 0.1em;
  color: white;
  text-shadow: var(--textShadow);
  ::first-letter {
    margin-left: 40px;
  }
`;
export const DescriptionReadMore = styled.p`
  max-width: 1500px;
  padding: 0px 10px 0 10px;
  margin: auto;
  text-align: justify;
  font-family: 'Lobster Two', sans-serif;
  letter-spacing: 0.1em;
  color: white;
  text-shadow: var(--textShadow);
  ::first-letter {
    margin-left: 40px;
  }
`;
export const ReadMore = styled.details`
  position: relative;
  summary {
    position: absolute;
    bottom: -50px;
    display: block;
    padding: 10px 10px;
    cursor: pointer;
    background-color: #0057b8;
    color: #ffd700;
    font-weight: 600;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }
  summary:hover {
    background-color: #ffd700;
    color: #0057b8;
  }
  &[open] {
    display: block;
    animation: open 0.2s linear;
  }
  &[open] summary {
    position: absolute;
    bottom: -50px;
    left: 0;
  }
  #open {
    padding-left: 5px;
    text-align: center;
  }
  &[open] #open {
    display: none;
  }
  #close {
    display: none;
  }
  &[open] #close {
    display: block;
  }

  #open::after {
    display: inline-block;
    position: relative;
    top: -3px;
    padding-left: 8px;
    content: '☟';
  }
  @keyframes open {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  & ::-webkit-details-marker {
    display: none;
  }
`;
