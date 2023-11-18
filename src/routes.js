import React from 'react';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './pages/Errorpage';

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/movie/:id",
    element: <Movie />
  },
  {
    path: "/directors",
    element: <Directors />
  },
  {
    path:"/actors",
    element: <Actors />
  }
]

export default routes