import React from 'react';
import { useNavigate } from 'react-router-dom';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({
  movie: { backdrop_path, poster_path, title, vote_average: rating, id },
  banner = false,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${id}`);
  };
  return (
    <article
      className={`${
        banner ? 'relative' : 'max-w-xs'
      } w-full mx-auto border border-zinc-900 bg-zinc-900 text-zinc-200`}
    >
      <div className='relative'>
        <img
          src={`${IMG_BASE_URL}${banner ? backdrop_path : poster_path}`}
          className='aspect-[2/3] object-cover cursor-pointer saturate-0'
          onClick={handleClick}
        />
      </div>
      <div
        className={`${
          banner
            ? 'absolute bottom-20 left-0 pl-7'
            : 'hidden justify-center p-3'
        } flex flex-col gap-2 `}
      >
        <p
          onClick={handleClick}
          className={`${
            banner ? 'text-4xl md:text-6xl' : 'text-xl'
          } font-bold cursor-pointer line-clamp-1`}
        >
          {title}
        </p>
      </div>
    </article>
  );
};

export default MovieCard;
