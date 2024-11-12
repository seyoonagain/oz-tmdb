import React, { useEffect, useState } from 'react';
import TmdbApi from '../api/TmdbApi';
import { useParams } from 'react-router-dom';
import BookmarkIcon from '../components/BookmarkIcon';
import Alert from '../components/Alert';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Detail = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);
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
        release_date,
        runtime,
      } = res;
      setMovieDetail({
        backdrop,
        poster,
        title,
        rating,
        genres,
        overview,
        release_date,
        runtime,
      });
    });
  }, []);
  return (
    <div className='flex flex-col items-center justify-center min-h-full p-5 font-chicago'>
      {errorMessage && (
        <Alert errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
      )}
      <article className='grid grid-cols-1 lg:grid-cols-2 place-items-center max-w-[768px] gap-7 lg:gap-3'>
        <div className='relative'>
          <BookmarkIcon
            movie={{ movieId, poster: movieDetail.poster }}
            setErrorMessage={setErrorMessage}
          />
          <img
            src={`${IMG_BASE_URL}${movieDetail.poster}`}
            className='object-cover border border-zinc-950 saturate-0 hover:saturate-100'
          />
        </div>
        <section className='flex flex-col lg:justify-center p-3 gap-10 max-w-md'>
          <div>
            <p className='font-bold font-dePixel text-lg mb-2'>
              {movieDetail.title}
            </p>
            <div className='flex gap-5 justify-end'>
              <p>★ {Math.round(movieDetail.rating * 10) / 10}</p>
              <p>{movieDetail.release_date?.slice(0, 4)}</p>
              <p>
                {Math.trunc(movieDetail.runtime / 60)}h{' '}
                {movieDetail.runtime % 60}m
              </p>
            </div>
          </div>
          <ul className='flex list-none gap-3 justify-center'>
            {movieDetail.genres &&
              movieDetail.genres.map((genre) => (
                <li
                  className='border border-zinc-500 rounded-xl px-2 bg-zinc-100 text-zinc-950 flex text-center items-center tracking-tight'
                  key={genre.id}
                >
                  {genre.name}
                </li>
              ))}
          </ul>
          <p className='leading-8 text-lg text-justify'>
            {movieDetail.overview ?? 'No overview provided'}
          </p>
        </section>
      </article>
    </div>
  );
};

export default Detail;
