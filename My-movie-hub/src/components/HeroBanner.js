import { useEffect, useState } from 'react';

function HeroBanner() {
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=YOUR_TMDB_API_KEY&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => setFeaturedMovie(data.results[0]));
  }, []);

  if (!featuredMovie) return <div className="h-96 bg-gray-800"></div>;

  return (
    <div className="relative h-96 bg-gray-900">
      <img
        src={`https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path}`}
        alt={featuredMovie.title}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-2">{featuredMovie.title}</h1>
          <p className="text-lg mb-4">{featuredMovie.overview.substring(0, 150)}...</p>
          <a href={`/movie/${featuredMovie.id}`} className="bg-red-600 px-4 py-2 rounded">Watch Now</a>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;