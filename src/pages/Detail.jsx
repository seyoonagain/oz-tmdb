import React, { useEffect, useState } from 'react';
import movieDetailData from '../../data/movieDetailData.json';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Detail = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const {
    backdrop_path: poster,
    title,
    vote_average: rating,
    genres,
    overview,
  } = movieDetail && movieDetail;
  useEffect(() => {
    setMovieDetail(movieDetailData);
  }, []);
  return (
    <article className='grid grid-cols-1 md:grid-cols-2 max-w-[768px] min-h-[500px] place-items-center gap-7'>
      <section className='h-full'>
        <img src={`${IMG_BASE_URL}${poster}`} className='h-full object-cover' />
      </section>
      <section className='flex flex-col justify-between h-full p-2'>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-4xl'>{title}</p>
          <p className='text-sm font-semibold'>
            평점: {Math.round(rating * 10) / 10}
          </p>
        </div>
        <ul className='flex list-none gap-3 justify-center'>
          {genres &&
            genres.map((genre) => (
              <li
                className='border border-zinc-300 rounded-xl px-2'
                key={genre.id}
              >
                {genre.name}
              </li>
            ))}
        </ul>
        <p className='leading-8'>{overview}</p>
      </section>
    </article>
  );
};

export default Detail;
