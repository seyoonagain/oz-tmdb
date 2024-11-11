import React, { useEffect, useState } from 'react';
import MovieBanner from '../components/MovieBanner';
import InfiniteScrollMovies from '../components/InfiniteScrollMovies';
import TmdbApi from '../api/TmdbApi';

const Home = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    TmdbApi.getTopRatedMovieList(page).then((res) => {
      if (topRatedMovies.length === 0) setTopRatedMovies(res.results);
      else setTopRatedMovies((prev) => [...prev, ...res.results]);
      setLastPage(res.total_pages);
    });
  }, [page]);
  return (
    <section className='flex flex-col items-center gap-10 overflow-auto'>
      <MovieBanner />
      <div className='px-7'>
        <p className='font-dePixel font-bold w-full mb-3'>Top Rated Movies</p>
        <InfiniteScrollMovies
          setPage={setPage}
          lastPage={lastPage}
          movieList={topRatedMovies}
        />
      </div>
    </section>
  );
};

export default Home;
