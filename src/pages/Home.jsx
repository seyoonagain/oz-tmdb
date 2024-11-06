import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetch('/data/movieListData.json')
      .then((res) => res.json())
      .then((res) => setMovieList(res.results));
  }, []);
  return (
    <section className='flex flex-wrap gap-7 justify-center px-5'>
      {movieList &&
        movieList.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </section>
  );
};

export default Home;
