import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import { fetchMovieDetails } from '../tmdb';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <div className="container mx-auto p-4 text-center">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 rounded"
        />
        <div>
          <h1 className="text-3xl mb-2">{movie.title}</h1>
          <p className="mb-4">{movie.overview}</p>
          <p className="mb-2">Release Date: {movie.release_date}</p>
          <p className="mb-4">Rating: {movie.vote_average}/10</p>
          <FavoriteButton movie={movie} />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;