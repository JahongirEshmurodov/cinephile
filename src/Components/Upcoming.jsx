import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import headerImg from "@i/header.jpg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import useApi from '../hook/useApi';
import Loader from './Loader';

function Upcoming() {
  const { getData, data, loading } = useApi()
  const [nextSlide, setnextSlide] = useState(1)
  const line = useRef(null)
  const onAutoplayTimeLeft = (s, time, progress) => {
    let width = (1 - progress) * 100;
    line.current.style.width = width + '%'
  };
  let windowScreen = window.innerWidth
  function activeSlideIndex(swiper) {
    if (nextSlide == 19) {
      setnextSlide(0)
    } else {
      setnextSlide(nextSlide + 1)
    }
  }
  useEffect(() => {
    getData('movie/upcoming')
  }, [])
  if (loading) return <Loader />
  return (
    <div className='upcoming'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        onSlideNextTransitionStart={activeSlideIndex}
        navigation={{
          nextEl: '.upcoming__next'
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        allowSlidePrev={false}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper upcoming__swiper"
      >
        {
          data.map((movie, index) => {
            return <SwiperSlide key={index} className='upcoming__slide'>
              <img src={windowScreen > 620 ? import.meta.env.VITE_IMG_FULL + movie.backdrop_path : import.meta.env.VITE_IMG_FULL + movie.poster_path} alt="" className="upcoming__slide-img" />
              <h1 className="upcoming__slide-title">{movie.title}</h1>
              <p className="upcoming__slide-text">{movie.overview}</p>
              <Link to={`/watch/movie/${movie.id}`} className='header__btn btn'><img src="" alt="" />Подробнее</Link>
            </SwiperSlide>
          })
        }

        <div className="autoplay-progress" slot="container-end">
          <div className="upcoming__next">
            <span className="upcoming__next-text">Следующий</span>
            <h3 className="upcoming__next-title">{data[nextSlide].title}</h3>
            <img src={import.meta.env.VITE_IMG + data[nextSlide].backdrop_path} alt="" className="upcoming__next-img" />
            <div className="upcoming__next-line" ref={line}>
              <span></span>
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Upcoming