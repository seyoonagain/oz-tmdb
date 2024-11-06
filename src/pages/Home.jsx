import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import movieListData from '../../data/movieListData.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    setMovieList(movieListData.results);
  }, []);
  return (
    <div className='mx-auto container'>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        // centeredSlides={true}
        navigation
        modules={[Navigation, Autoplay, A11y, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
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
