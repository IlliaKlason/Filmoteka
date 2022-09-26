import styled from 'styled-components';

export const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(
    to bottom,
    #0057b8,
    #0057b8 50%,
    #ffd700 50%,
    #ffd700
  );
  box-shadow: var(--boxShadow);
  z-index: 1200;
`;
