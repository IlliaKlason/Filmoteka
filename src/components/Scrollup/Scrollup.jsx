import { useEffect, useRef } from 'react';
import s from './ScrollUp.module.css';

export default function ScrollUp() {
  const myButton = useRef(null);

  useEffect(() => {
    window.onscroll = () => scrollFunction();

    function scrollFunction() {
      if (
        document.body.scrollTop > 4 - 0 ||
        document.documentElement.scrollTop > 40
      ) {
        myButton.current.classList.remove('btn-hidden');
      } else {
        myButton.current.classList.add('btn-hidden');
      }
    } // eslint-disable-next-line
  }, []);

  const onUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      id="myBtn"
      type="button"
      className={s.ScrollUp}
      onClick={onUp}
      ref={myButton}
    ></button>
  );
}
