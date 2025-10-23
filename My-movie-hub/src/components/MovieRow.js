import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { fetchMovies } from '../tmdb';

function MovieRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies(fetchUrl).then((data) => setMovies(data.results));
  }, [fetchUrl]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">{title}</h2>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;