import React, { useEffect, useState } from 'react';
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
        slidesPerView={1}
        spaceBetween={0}
        navigation
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1248: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
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
