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
      <img
        src={`${IMG_BASE_URL}${poster}`}
        className='object-cover cursor-pointer sm:aspect-[3/4] w-full'
        onClick={handleClick}
      />
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
