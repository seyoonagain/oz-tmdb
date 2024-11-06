import React from 'react';
import { useNavigate } from 'react-router-dom';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({
  movie: { backdrop_path: poster, title, vote_average: rating, id },
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <article className='border border-zinc-300'>
      <div className='w-60 sm:w-56 md:w-48 aspect-[3/4] overflow-hidden'>
        <img
          src={`${IMG_BASE_URL}${poster}`}
          className='object-cover w-full h-full cursor-pointer'
          onClick={handleClick}
        />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <p onClick={handleClick} className='font-bold cursor-pointer'>
          {title}
        </p>
        <p className='text-sm'>평점: {Math.round(rating * 10) / 10}</p>
      </div>
    </article>
  );
};

export default MovieCard;
