import { useEffect, useRef } from 'react';
import s from './ScrollUp.module.css';

export default function ScrollUp() {
  const myButton = useRef(null);

  useEffect(() => {
    window.onscroll = () => scrollFunction();
    myButton.current.classList.add('visually-hidden');

    function scrollFunction() {
      if (document.documentElement.scrollTop > 140) {
        myButton.current.classList.remove('visually-hidden');
      } else {
        myButton.current.classList.add('visually-hidden');
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
