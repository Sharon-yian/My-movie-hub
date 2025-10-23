import { useEffect, useState } from 'react';
import MovieRow from '../components/MovieRow';
import HeroBanner from '../components/HeroBanner';
import { fetchMovies } from '../tmdb';

function Home() {
  return (
    <div>
      <HeroBanner />
      <MovieRow title="Popular Movies" fetchUrl="/movie/popular?page=1" />
      <MovieRow title="Now Playing" fetchUrl="/movie/now_playing?page=1" />
      <MovieRow title="Top Rated" fetchUrl="/movie/top_rated?page=1" />
    </div>
  );
}

export default Home;