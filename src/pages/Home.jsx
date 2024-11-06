import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import movieListData from '../../data/movieListData.json';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    setMovieList(movieListData.results);
  }, []);
  return (
    <section className='flex flex-wrap gap-7 justify-center px-5'>
      {movieList &&
        movieList.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </section>
  );
};

export default Home;
