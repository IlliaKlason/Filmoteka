import { Oval } from 'react-loader-spinner';
import { BackdropStyled } from './Loader.styled';

function Loader() {
  return (
    <BackdropStyled>
      <h1>Films loading...</h1>
      <Oval
        height={200}
        width={200}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </BackdropStyled>
  );
}

export default Loader;
