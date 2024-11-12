import React from 'react';
import { useNavigate } from 'react-router-dom';
import error from '../assets/error.png';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie: { backdrop_path, poster_path, id } }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${id}`);
  };
  return (
    <article
      onClick={handleClick}
      className={`max-w-xs w-full h-full content-center mx-auto border border-zinc-900 bg-zinc-200 text-zinc-200`}
    >
      <div className='relative'>
        <img
          src={`${poster_path ? IMG_BASE_URL + poster_path : error}`}
          className='aspect-[2/3] object-cover cursor-pointer saturate-0 mx-auto'
        />
      </div>
    </article>
  );
};

export default MovieCard;
