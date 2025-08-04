import React, { useState } from 'react'
import logoImg from "@i/logo.png";
import { router } from '../router';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import closeIcon from "@i/close.svg";
function Header() {
  const { routes } = router
  const [menu, setmenu] = useState(false)
  return (
    <header className='header'>
      <div className="container">
        <nav className="header__nav">
          <Link to={'/'} className="logo"><img src={logoImg} alt="" /></Link>
          <button className="menu-btn" onClick={() => setmenu(true)}>Menu</button>
          <ul className={clsx('header__list', { 'active': menu })}>
            <li><button className="header__close" onClick={()=>setmenu(false)}><img src={closeIcon} alt="" /></button></li>
            {
              routes.map((route, index) => <li key={index}><NavLink to={route.path} className="header__link">{route.name}</NavLink></li>)
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header