import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetch('data/movieListData.json')
      .then((res) => res.json())
      .then((res) => setMovieList(res.results));
  }, []);
  return (
    <>
      {movieList &&
        movieList.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </>
  );
};

export default Home;
