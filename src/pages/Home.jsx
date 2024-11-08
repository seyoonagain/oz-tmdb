import React from 'react';
import MovieBanner from '../components/MovieBanner';
import InfiniteScrollMovies from '../components/InfiniteScrollMovies';

const Home = () => {
  return (
    <section className='flex flex-col items-center gap-10'>
      <MovieBanner />
      <InfiniteScrollMovies />
    </section>
  );
};

export default Home;
