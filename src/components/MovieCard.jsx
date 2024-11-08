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
        banner ? 'w-screen relative' : 'w-full max-w-xs'
      } mx-auto border border-zinc-900 bg-zinc-900 text-zinc-200`}
    >
      <img
        src={`${IMG_BASE_URL}${banner ? backdrop_path : poster_path}`}
        className={`${
          banner ? 'aspect-[16/9] w-full' : 'aspect-[3/5]'
        } object-cover cursor-pointer `}
        onClick={handleClick}
      />
      <div
        className={`${
          banner ? 'absolute bottom-10 left-0 pl-7' : 'justify-center p-3'
        } flex flex-col gap-2 `}
      >
        <p
          onClick={handleClick}
          className={`${
            banner ? 'text-4xl' : 'text-xl'
          } font-bold cursor-pointer line-clamp-1`}
        >
          {title}
        </p>
        <p className={`${banner ? 'hidden' : 'text-sm'}`}>
          평점: {Math.round(rating * 10) / 10}
        </p>
      </div>
    </article>
  );
};

export default MovieCard;
