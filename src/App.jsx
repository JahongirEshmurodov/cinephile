import React from 'react'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Tv from './pages/Tv'
import Search from './pages/Search'
import { router } from './router'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        
        {
          router.routes.map((route,index)=> <Route key={index} path={route.path} element={route.element}/>)
        }
      </Routes>
    </div>
  )
}

export default App