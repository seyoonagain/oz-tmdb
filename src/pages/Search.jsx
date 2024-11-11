import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TmdbApi from '../api/TmdbApi';
import InfiniteScrollMovies from '../components/InfiniteScrollMovies';

const Search = () => {
  const { keyword } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState();
  useEffect(() => {
    TmdbApi.searchMovies(keyword, 1).then((res) => {
      const results = res.results.reduce((acc, curr) => {
        if (acc.every((movie) => movie.id !== curr.id)) {
          acc.push(curr);
        }
        return acc;
      }, []);
      setSearchResults(results);
      setPage(1);
      setLastPage(res.total_pages);
    });
  }, [keyword]);

  useEffect(() => {
    TmdbApi.searchMovies(keyword, page).then((res) => {
      setSearchResults((prev) => {
        const newMovies = res.results.filter(
          (newMovie) => !prev.some((movie) => movie.id === newMovie.id)
        );
        return [...prev, ...newMovies];
      });
    });
  }, [page]);
  return (
    <>
      <InfiniteScrollMovies
        setPage={setPage}
        lastPage={lastPage}
        movieList={searchResults}
      />
    </>
  );
};

export default Search;
