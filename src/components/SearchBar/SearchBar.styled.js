import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;
export const Input = styled.input`
  width: 250px;
  height: 47px;
  padding: 0 10px;
  border: none;
  font-size: 15px;
  border-radius: 0 10px 10px 0;
  outline: invert;
  cursor: pointer;
  color: #0057b8;
  :focus {
    outline-color: #0057b8;
  }
  background-color: #ffd700;
  ::placeholder {
    color: #0057b8;
  }
`;
export const Label = styled.label`
  color: var(--primaryTextColor);
  font-weight: 500;
  font-size: 20px;
`;
export const Button = styled.button`
  font-weight: 700;
  color: #ffd700;
  height: 50px;
  padding: 12px 20px;
  background-color: #0057b8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: none;
  outline: none;
  opacity: 1;
  transition: opacity 250ms var(--timingFn);
  cursor: pointer;
  border-radius: 10px 0 0 10px;
  :hover,
  :focus {
    opacity: 0.8;
  }
`;
