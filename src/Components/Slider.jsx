import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import useApi from '../hook/useApi';
import arrowIcon from "@i/arrow.svg";
import notFoundImg from "@i/not-found.jpg";
import Infoblock from './Infoblock';
import usePopular from '../store/popularStore';
function Slider({ type }) {
    const { getData, data, loading } = useApi()
    const [infoblock, setinfoblock] = useState(false)
    const [movieId, setmovieId] = useState(null)
    const {getPopular} = usePopular()
    const breakpoints = {
        320: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        920: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView:4,
        },
        1600: {
            slidesPerView: 5,
        },
    }
    useEffect(() => {
        getData(`${type}/popular`)
    }, [])
    useEffect(()=>{
       getPopular(data,type) 
    },[data])
    return (
        <div className='slider'>
            <h2 className="title">{type === 'movie' ? 'Фильмы' : 'Сереалы'} <img src={arrowIcon} alt="" /></h2>
            <Swiper breakpoints={breakpoints} spaceBetween={30} navigation={true} modules={[Navigation]} className="mySwiper slider__swiper">
                {
                    data.map((movie, index) => {
                        return <SwiperSlide onClick={()=>{
                            setmovieId(movie.id)
                            setinfoblock(true)}
                            } key={index} className='slider__item'>
                            <img src={movie.poster_path ? (import.meta.env.VITE_IMG + movie.poster_path) : notFoundImg} alt="" className="slider__img" />
                        </SwiperSlide>
                    })
                }

            </Swiper>
            <Infoblock type={type} movieId={movieId} infoblock={infoblock} setinfoblock={setinfoblock}/>
        </div>
    )
}

export default Slider

