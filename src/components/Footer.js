import React from 'react'

export default function Footer({ handleButtonClickGitHub, handleButtonClickTelegram, handleButtonClickWhatsApp, handleButtonClickHH }) {
  return (
    <footer className='footer-wrapper' id='contacts'>
      <div className='contacts'>
        <h4>Арюпина София</h4>
        <div className='socials'>
          <h4>Контакты</h4>
          <ul>
            <li onClick={handleButtonClickGitHub}>
              <img src='./img/github.png' alt='GitHub'></img>
            </li>
            <li onClick={handleButtonClickTelegram}>
              <img src='./img/telegram.png' alt='Telegram'></img>
            </li>
            <li onClick={handleButtonClickWhatsApp}>
              <img src='./img/whatsapp.png' alt='WhatsApp'></img>
            </li>
            <li onClick={handleButtonClickHH}>
              <img src='./img/hh.png' alt='HH.ru'></img>
            </li>
          </ul>
        </div>
      </div>
      <div className='border'></div>
      <p>© Copyright 2024</p>
    </footer>
  )
}
