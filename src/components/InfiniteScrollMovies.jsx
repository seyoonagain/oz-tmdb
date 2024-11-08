import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import TmdbApi from '../api/TmdbApi';
import MovieCard from './MovieCard';

const InfiniteScrollMovies = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    TmdbApi.getTopRatedMovieList(page).then((res) => {
      if (topRatedMovies.length === 0) setTopRatedMovies(res.results);
      else setTopRatedMovies((prev) => [...prev, ...res.results]);
    });
  }, [page]);
  useEffect(() => {
    topRatedMovies && console.log(topRatedMovies);
    setPage((prev) => prev + 1);
  }, [inView]);

  return (
    <>
      <section className='max-w-screen-xl place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
        {topRatedMovies &&
          topRatedMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </section>
      <div ref={ref}></div>
    </>
  );
};

export default InfiniteScrollMovies;
