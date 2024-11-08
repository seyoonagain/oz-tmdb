import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import TmdbApi from '../api/TmdbApi';

const MovieBanner = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    TmdbApi.getPopularMovieList().then(setMovieList);
  }, []);
  return (
    <div className='mx-auto w-full'>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
      >
        {movieList &&
          movieList.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} banner={true} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieBanner;
