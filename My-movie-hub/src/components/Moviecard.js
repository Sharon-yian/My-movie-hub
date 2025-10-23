import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="w-64 m-2 bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-80 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{movie.title}</h3>
        <p className="text-gray-400">{movie.release_date}</p>
        <Link to={`/movie/${movie.id}`} className="mt-2 inline-block bg-blue-600 p-2 rounded">Watch Now</Link>
      </div>
    </div>
  );
}

export default MovieCard;