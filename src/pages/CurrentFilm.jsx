import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useApi from "../hook/useApi";
import { useEffect } from "react";
import { getRuntime, getYear } from "../helper";
import Loader from "../Components/Loader";
import Cast from "../Components/UI/Cast";
import Modal from "../Components/Modal";

function CurrentFilm() {
  const { type, id } = useParams();
  const { getData, data, loading } = useApi();
  const { videos } = data;
  const [modal, setmodal] = useState(false);
  const recommendations = data.recommendations?.results;
  useEffect(() => {
    getData(`${type}/${id}?append_to_response=credits,recommendations,videos`);
  }, [id]);
  if (loading) return <Loader />;
  return (
    <div className="current">
      <div className="current__top">
        <div className="current__top-content">
          <div className="current__top-descr">
            <h1 className="current__top-title">{data.title || data.name}</h1>
            <p className="current__top-text">
              {data.overview || "Izox topilmadi!"}
            </p>
            <ul className="current__top-genres">
              <li>
                <Link to={"/"}>
                  {getYear(data.release_date || data.first_air_date)}
                </Link>
              </li>
              {data.genres?.map((genre, index) => (
                <li key={index}>
                  <Link to={"/"}>{genre.name}</Link>
                </li>
              ))}
              <li>
                <Link to={""}>
                  {getRuntime(data.runtime || data.episode_run_time)}
                </Link>
              </li>
            </ul>
            <button onClick={() => setmodal(true)} className="btn">
              Смотерть трейлер
            </button>
          </div>
          <div className="current__top-img">
            <img src={import.meta.env.VITE_IMG + data.poster_path} alt="" />
          </div>
        </div>
        <img
          src={import.meta.env.VITE_IMG_FULL + data.backdrop_path}
          alt=""
          className="current__top-banner"
        />
        <div className="current__top-cast">
          <h2 className="current__top-names">В главных ролях</h2>
          <ul className="current__top-list">
            {data.credits.cast
              ?.filter((item, index) => index < 6)
              .map((cast, index) => (
                <li key={index}>
                  <Link to={"/"}>
                    <Cast cast={cast} />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <ul className="current__info">
        <li className="current__info-item">
          <h4>Бюджет</h4>
          <span>
            {new Intl.NumberFormat("en-Us", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            }).format(data.budget)}
          </span>
        </li>
        <li className="current__info-item">
          <h4>Сборы</h4>
          <span>
            {new Intl.NumberFormat("en-Us", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            }).format(data.revenue)}
          </span>
        </li>
        <li className="current__info-item">
          <h4>Статус</h4>
          <span>{data.status}</span>
        </li>
        <li className="current__info-item">
          <h4>Исходное название</h4>
          <span>{data.original_title}</span>
        </li>
      </ul>
      <div className="recommendations container">
        <h2 className="title">Рекомендации</h2>
        <div className="recommendations__content">
          {recommendations
            .filter((item, index) => index < 4)
            .map((movie, index) => (
              <Link
                key={index}
                to={`/watch/${type}/${movie.id}`}
                className="recommendations__item"
              >
                <img
                  src={import.meta.env.VITE_IMG + movie.poster_path}
                  className="recommendations__item-img"
                  alt=""
                />
              </Link>
            ))}
        </div>
      </div>
      {modal && <Modal videos={videos} setmodal={setmodal} />}
    </div>
  );
}

export default CurrentFilm;
