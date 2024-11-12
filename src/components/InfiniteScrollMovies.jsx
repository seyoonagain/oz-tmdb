import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import TmdbApi from '../api/TmdbApi';
import MovieCard from './MovieCard';

const InfiniteScrollMovies = ({ setPage, movieList, lastPage }) => {
  const { ref, inView } = useInView({ threshold: 0 });
  useEffect(() => {
    setPage((prev) => {
      return prev < lastPage ? prev + 1 : prev;
    });
  }, [inView]);
  return (
    <div className='overflow-auto'>
      <section className='max-w-screen-3xl place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5'>
        {movieList &&
          movieList.map((movie) => (
            <MovieCard
              poster={movie.poster_path}
              id={movie.id}
              key={movie.id}
            />
          ))}
      </section>
      <div className='h-5' ref={ref}></div>
    </div>
  );
};

export default InfiniteScrollMovies;
