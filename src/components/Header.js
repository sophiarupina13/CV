import React from 'react'

export default function Header({ handleScrollToProjects, handleScrollToAboutMe, handleScrollToContacts }) {
  return (
    <header className='wrapper'>
      <nav>
        <div className='logo' onClick={handleScrollToAboutMe}>
          <img className='me' alt='me' src='./img/me.jpg'></img>
          <h1>Арюпина София</h1>
        </div>
        <ul className='nav'>
          <li onClick={handleScrollToAboutMe}>Обо мне</li>
          <li onClick={handleScrollToProjects}>Мои проекты</li>
          <li onClick={handleScrollToContacts}>Контакты</li>
        </ul>
      </nav>
    </header>
  )
}
