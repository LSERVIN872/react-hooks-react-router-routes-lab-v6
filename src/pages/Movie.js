import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => console.error('Error fetching movie:', error));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header><NavBar/>
      </header>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time} minutes</p>
      <p>Genres: {movie.genres.map((genre) => <span key={genre}>{genre} </span>)}</p>
    </div>
  );
}

export default Movie