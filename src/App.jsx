import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Loader from './components/Loader/';
import Nav from './components/Navigation/Navigation';
// import { addBackToTop } from 'vanilla-back-to-top';

const HomePage = lazy(() => import('./pages/HomePage'));

const MoviesPage = lazy(() => import('./pages/MoviesPage'));

const MovieDetailsPage = lazy(() => import('./pages/MovieDetails'));

const Cast = lazy(() => import('./components/Cast'));
const Reviews = lazy(() => import('./components/Reviews'));

function App() {
  // useEffect(() => {
  //   addBackToTop({
  //     backgroundColor: '#0057b8',
  //     innerHTML:
  //       '<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>',
  //     textColor: ' #ffd700',
  //     right: '100px',
  //   });
  // }, []);

  return (
    <>
      <Nav />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id/" element={<MovieDetailsPage />}>
            <Route path={`/movies/:id/cast`} element={<Cast />} />
            <Route path={`/movies/:id/reviews`} element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
