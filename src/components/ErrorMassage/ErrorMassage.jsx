import PropTypes from 'prop-types';
import errorImage from '../../images/error.jpg';
import { Img, Text, Wrapper } from './ErrorMassage.styled';

function ErrorView({ message }) {
  return (
    <Wrapper role="alert">
      <Text>{message}</Text>
      <Img src={errorImage} width="650" alt="error" />
    </Wrapper>
  );
}

ErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorView;
