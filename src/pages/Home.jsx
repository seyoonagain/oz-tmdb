import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import movieListData from '../../data/movieListData.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation } from 'swiper/modules';

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    setMovieList(movieListData.results);
  }, []);
  return (
    <div className='mx-auto container'>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1280: { slidesPerView: 5 },
        }}
      >
        {movieList &&
          movieList.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Home;
