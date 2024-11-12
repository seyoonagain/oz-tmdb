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
    <div className='flex items-center justify-center min-h-full p-5'>
      <article className='grid grid-cols-1 lg:grid-cols-2 place-items-center max-w-[768px] gap-7 lg:gap-3'>
        <div className='relative'>
          <img
            src={`${IMG_BASE_URL}${movieDetail.poster}`}
            className='object-cover border border-zinc-950 rounded-2xl saturate-0'
          />
        </div>

        <section className='flex flex-col lg:justify-center p-3 gap-10 max-w-md'>
          <div className='flex justify-between items-center'>
            <p className='font-bold font-dePixel text-lg'>
              {movieDetail.title}
            </p>
            <p className='font-semibold shrink-0 font-chicago'>
              ★ {Math.round(movieDetail.rating * 10) / 10}
            </p>
          </div>
          <ul className='flex list-none gap-3 justify-center'>
            {movieDetail.genres &&
              movieDetail.genres.map((genre) => (
                <li
                  className='border border-zinc-500 rounded-xl px-2 font-chicago text-sm bg-zinc-100 text-zinc-950'
                  key={genre.id}
                >
                  {genre.name}
                </li>
              ))}
          </ul>
          <p className='leading-8 text-lg text-justify font-chicago'>
            {movieDetail.overview}
          </p>
        </section>
      </article>
    </div>
  );
};

export default Detail;
