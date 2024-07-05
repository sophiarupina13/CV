import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { RiArrowLeftSLine } from "react-icons/ri";

export default function Header({ handleScrollToProjects, handleScrollToAboutMe, handleScrollToContacts }) {
  let [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className='wrapper'>
      <nav className='menu'>
        <div className='logo' onClick={handleScrollToAboutMe}>
          <img className='me' alt='me' src='./img/me.jpg'></img>
          <h1>Арюпина София</h1>
        </div>
        <ul className='nav'>
          <li onClick={handleScrollToAboutMe}>Обо мне</li>
          <li onClick={handleScrollToProjects}>Мои проекты</li>
          <li onClick={handleScrollToContacts}>Контакты</li>
        </ul>
        <div onClick={() => setMenuOpen(menuOpen = !menuOpen)} className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
          <IoIosMenu />
        </div>
      </nav>
      {menuOpen && (
        <div className={`overlay ${menuOpen ? 'open' : ''}`}>
          <div className={`mobile-menu-list ${menuOpen ? 'open' : ''}`}>
            <RiArrowLeftSLine className='close' onClick={() => setMenuOpen(menuOpen = !menuOpen)}/>
            <ul className='mobile-nav'>
              <li onClick={handleScrollToAboutMe}>Обо мне</li>
              <li onClick={handleScrollToProjects}>Мои проекты</li>
              <li onClick={handleScrollToContacts}>Контакты</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
