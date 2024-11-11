import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import TmdbApi from '../api/TmdbApi';
import MovieBannerCard from './MovieBannerCard';

const MovieBanner = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    TmdbApi.getPopularMovieList().then(setMovieList);
  }, []);
  return (
    <div className='mx-auto w-full'>
      <Swiper
        slidesPerView={2}
        spaceBetween={-1}
        navigation
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
      >
        {movieList &&
          movieList.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieBannerCard movie={movie} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieBanner;
