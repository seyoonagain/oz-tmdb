import React from 'react';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({
  movie: { backdrop_path: src, title, vote_average: rating },
}) => {
  return (
    <>
      <img src={`${IMG_BASE_URL}${src}`} />
      <p>{title}</p>
      <p>{rating}</p>
    </>
  );
};

export default MovieCard;
