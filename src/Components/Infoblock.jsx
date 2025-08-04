import React, { useEffect } from 'react'
import closeIcon from "@i/close.svg";
import Cast from './UI/Cast';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import useApi from '../hook/useApi';
import { getRuntime, getYear } from '../helper';
function Infoblock({ infoblock, setinfoblock, movieId,type }) {
  const { getData, data, loading } = useApi()
  useEffect(() => {
    if (movieId) {
      getData(`${type}/${movieId}?append_to_response=credits`)
    }
  }, [movieId])
  return (
    <div className={clsx('infoblock', { active: infoblock })}>
      <button className="infoblock__close" onClick={() => setinfoblock(false)}><img src={closeIcon} alt="" /></button>
      {
        !loading && <>
        <div className="infoblock__content">
          <h2 className="infoblock__title">{data.title || data.name}</h2>
          <p className="infoblock__text">{data.overview || 'Izox topilmadi!'}</p>
          <ul className="infoblock__list">
            <li><a href="" className="infoblock__link">{getYear(data.release_date || data.first_air_date)}</a></li>
            {
              data.genres.map((genre,index)=>{
                return <li key={index}><a href="" className="infoblock__link">{genre.name}</a></li>
              })
            }
            <li><a href="" className="infoblock__link">{getRuntime(data.runtime || data.episode_run_time)}</a></li>
          </ul>
          <ul className="infoblock__cast">
            {
              data.credits.cast.filter((cast,index)=>index < 4).map((cast,index)=>{
                return <Cast key={index} cast={cast}/>
              })
            }
            
          </ul>
          <Link to={`/watch/${type}/${data.id}`} className='infoblock__btn btn'><img src="" alt="" />Подробнее</Link>
        </div>
          <img src={import.meta.env.VITE_IMG_FULL + data.backdrop_path} alt="" className="infoblock__img" />
          </>
      }
    </div>
  )
}

export default Infoblock