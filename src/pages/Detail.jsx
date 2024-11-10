import React, { useEffect, useState } from 'react';
import TmdbApi from '../api/TmdbApi';
import { useParams } from 'react-router-dom';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Detail = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    TmdbApi.getMovieDetail(movieId).then((res) => {
      const {
        backdrop_path: backdrop,
        poster_path: poster,
        title,
        vote_average: rating,
        genres,
        overview,
      } = res;
      setMovieDetail({ backdrop, poster, title, rating, genres, overview });
    });
  }, []);
  return (
    <div className='h-full w-full flex items-center justify-center relative mt-20 md:mt-0'>
      <section className='fixed top-0 left-0 w-full h-full -z-1 bg-zinc-950'>
        <img
          src={`${IMG_BASE_URL}${movieDetail.backdrop}`}
          className='w-full brightness-50 blur-xl object-cover'
        />
      </section>
      <article className='z-10 grid grid-cols-1 md:grid-cols-2 place-items-center max-w-[768px] gap-7 md:gap-3'>
        <img
          src={`${IMG_BASE_URL}${movieDetail.poster}`}
          className='object-cover border border-zinc-950 rounded-2xl'
        />
        <section className='flex flex-col md:justify-center p-3 gap-10 text-zinc-100'>
          <div className='flex justify-between items-center'>
            <p className='font-bold text-3xl'>{movieDetail.title}</p>
            <p className='text-sm font-semibold shrink-0'>
              평점: {Math.round(movieDetail.rating * 10) / 10}
            </p>
          </div>
          <ul className='flex list-none gap-3 justify-center'>
            {movieDetail.genres &&
              movieDetail.genres.map((genre) => (
                <li
                  className='border border-zinc-300 rounded-xl px-2 text-xs'
                  key={genre.id}
                >
                  {genre.name}
                </li>
              ))}
          </ul>
          <p className='leading-8 text-sm text-justify'>
            {movieDetail.overview}
          </p>
        </section>
      </article>
    </div>
  );
};

export default Detail;
