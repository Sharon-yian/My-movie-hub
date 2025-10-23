import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

function TrendingList() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=YOUR_TMDB_API_KEY&language=en-US')
      .then((response) => response.json())
      .then((data) => setTrending(data.results));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-6">Trending This Week</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {trending.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default TrendingList;