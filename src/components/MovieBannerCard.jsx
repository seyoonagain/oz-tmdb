import React from 'react';
import { useNavigate } from 'react-router-dom';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieBannerCard = ({
  movie: { backdrop_path, poster_path, title, vote_average: rating, id },
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${id}`);
  };
  return (
    <article className='relative w-full mx-auto bg-zinc-950 text-zinc-200'>
      <div className='flex justify-center'>
        <img
          src={`${IMG_BASE_URL}${backdrop_path}`}
          className='object-cover cursor-pointer saturate-0'
          onClick={handleClick}
        />
      </div>
      <div className='w-full text-center'>
        <p className='text-[12px] bg-zinc-950 font-bold cursor-pointer font-dePixel tracking-tight line-clamp-1'>
          {title}
        </p>
      </div>
    </article>
  );
};

export default MovieBannerCard;
