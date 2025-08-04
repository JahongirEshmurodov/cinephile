import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Tv from "../pages/Tv";
import Search from "../pages/Search";
import searchImg from "@i/search.svg";
import CurrentFilm from "../pages/CurrentFilm";
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        name:'Главная'
    },
    {
        path:'/movie',
        element:<Movie/>,
        name:'Фильмы'
    },
    {
        path:'/tv',
        element:<Tv/>,
        name:'Сериалы'
    },
    {
        path:'/watch/:type/:id',
        element:<CurrentFilm/>,
    },
    {
        path:'/search',
        element:<Search/>,
        name: <img src={searchImg} alt="" />
    },
   
])