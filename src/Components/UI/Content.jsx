import React from 'react'
import { Link } from 'react-router-dom'
import imgNotFound from "@i/not-found.jpg";
function Content({ type, data }) {
    console.log(type);
    return (
        <div className='content container'>
            <h2 className="content__title">Все фильмы</h2>
            <div className="content__wrapper">
                {
                    data.map((movie,index) => {
                        return <Link key={index} to={`/watch/${!type && movie.title ? 'movie' : movie.name ? 'tv' : type}/${movie.id}`} className='content__item'>
                            <img src={movie.poster_path ? import.meta.env.VITE_IMG + movie.poster_path : imgNotFound} alt="" className="content__img" />
                        </Link>
                    })
                }

            </div>
        </div>
    )
}

export default Content