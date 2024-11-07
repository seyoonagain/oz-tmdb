import React, { useEffect, useState } from 'react';
import movieDetailData from '../../data/movieDetailData.json';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Detail = () => {
  const [movieDetail, setMovieDetail] = useState({});
  useEffect(() => {
    const {
      poster_path: poster,
      title,
      vote_average: rating,
      genres,
      overview,
    } = movieDetailData;
    setMovieDetail({ poster, title, rating, genres, overview });
  }, []);
  return (
    <article className='grid grid-cols-1 md:grid-cols-2 max-w-[768px] gap-7 md:gap-3'>
      <img
        src={`${IMG_BASE_URL}${movieDetail.poster}`}
        className='object-cover h-full w-full border border-zinc-500'
      />
      <section className='flex flex-col md:justify-between p-3 gap-10'>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-4xl'>{movieDetail.title}</p>
          <p className='text-sm font-semibold'>
            평점: {Math.round(movieDetail.rating * 10) / 10}
          </p>
        </div>
        <ul className='flex list-none gap-3 justify-center'>
          {movieDetail.genres &&
            movieDetail.genres.map((genre) => (
              <li
                className='border border-zinc-300 rounded-xl px-2'
                key={genre.id}
              >
                {genre.name}
              </li>
            ))}
        </ul>
        <p className='leading-8'>{movieDetail.overview}</p>
      </section>
    </article>
  );
};

export default Detail;
