import React from 'react'

export default function Body({ handleScrollToProjects, handleButtonClickKOMPAS, handleButtonClickSQL, handleButtonClickShop, handleButtonClickCustomView, handleButtonClickTimeZones }) {
  return (
    <main>
      <div className='intro intro-wrapper'>
        <h1>Меня зовут Арюпина София</h1>
        <h2>Я начинающий Fullstack-разработчик, ознакомьтесь с моими проектами</h2>
        <button onClick={handleScrollToProjects}>Проекты</button>
        <div className="mouse">
          <div className="mouse-wheel"></div>
        </div>
        <div className='scroll'>
        </div>
      </div>
      <div className='about-me' id='about-me'>
        <h1>Обо мне</h1>
        <div className='border'></div>
        <div className='info'>
          <div className='path'>
            <h3>Мой путь</h3>
            <p>
              <div className='paragraph'>Меня зовут <b>Арюпина София</b>, я начинающий <b>Web-разработчик</b>.</div>
              <div className='paragraph'>Живу в Москве, учусь на 3-ем курсе в <b>Московском Политехническом Университете </b> 
              по специальности <b>"Интеграция и программирование в САПР"</b> ("Информатика и вычислительная техника").</div>
              <div className='paragraph'>По мере изучения разработки я пробовала себя во многом - <b>Android-разработка</b> по курсу от "Android Developers", 
              <b> Java-разработка</b> по курсу от "PRODUCTSTAR", <b>C++- и Fullstack-разработка</b> в целях обучения в университете.</div>
              <div className='paragraph'>На данный момент я дополнительно изучаю NRX.</div>
            </p>
          </div>
          <div className='skills'>
            <h3>Мои скиллы</h3>
            <ul>
              <button>Java</button>
              <button>C++</button>
              <button>HTML</button>
              <button>CSS</button>
              <button>JavaScript</button>
              <button>express.js</button>
              <button>React</button>
              <button>Android-development</button>
              <button>MySQL</button>
              <button>PostgreSQL</button>
              <button>SQLite</button>
              <button>Git</button>
              <button>JSON</button>
              <button>XML</button>
              <button>Figma</button>
              <button>Node.js</button>
              <button>API</button>
              <button>Английский B2</button>
            </ul>
          </div>
        </div>
      </div>
      <div className='projects' id='projects'>
        <h1>Проекты</h1>
        <div className='border'></div>
        <ul>
          <li className='project-card'>
            <div className='laptop'>
              <img src='./img/laptop.png' alt='laptop'></img>
              <div className="video-container">
                <iframe src="./vid/kompasAPI.mp4" frameBorder="0" allowFullScreen title='kompas'></iframe>
              </div>
            </div>
            <div className='description'>
              <h3>API КОМПАС-3D</h3>
              <p>
                <div className='paragraph'>MFC SDI-приложение с реализацией построения параметрической сборки. Программа постепенно строит составные детали, после чего добавляет их в сборку 
                и соединяет их друг с другом с помощью различных привязок.</div>
                <div className='paragraph'>Стек: <b>C++, Visual Studio, API КОМПАС-3D.</b></div>
              </p>
              <button onClick={handleButtonClickKOMPAS}>Перейти в Git</button>
            </div>
          </li>
          <li className='project-card'>
            <div className='laptop'>
              <img src='./img/laptop.png' alt='laptop'></img>
              <div className="video-container">
                <iframe src="./vid/auth.mp4" frameBorder="0" allowFullScreen title='kompas'></iframe>
              </div>
            </div>
            <div className='description'>
              <h3>SQLite</h3>
              <p>
                <div className='paragraph'>Разработка несложного интерфейса для работы с БД, в моем случае SQLite. Авторизованные пользователи могут добавлять новые строки в базу данных, для 
                  неавторизованных доступен только просмотр, остальные функции пока в разработке.</div>
                <div className='paragraph'>Стек: <b>express.js, SQLite, JS, JSON, HTML, CSS.</b></div>
              </p>
              <button onClick={handleButtonClickSQL}>Перейти в Git</button>
            </div>
          </li>
          <li className='project-card'>
            <div className='laptop'>
              <img src='./img/laptop.png' alt='laptop'></img>
              <div className="video-container">
                <iframe src="./vid/shop.mp4" frameBorder="0" allowFullScreen title='shop'></iframe>
              </div>
            </div>
            <div className='description'>
              <h3>ReactJS Интернет-магазин</h3>
              <p>
                <div className='paragraph'>Pet-проект с реализацией интернет-магазина, который отображает карточки товаров мебели. Можно посмотреть описание товара, добавить
                или удалить из корзины.</div>
                <div className='paragraph'>Стек: <b>express.js, SQLite, React.</b></div>
              </p>
              <button onClick={handleButtonClickShop}>Перейти в Git</button>
            </div>
          </li>
          <li className='project-card'>
            <div className='laptop'>
              <img src='./img/laptop.png' alt='laptop'></img>
              <div className="video-container">
                <iframe src="./vid/timeView.mp4" frameBorder="0" allowFullScreen title='shop'></iframe>
              </div>
            </div>
            <div className='description'>
              <h3>Custom View</h3>
              <p>
                <div className='paragraph'>Кастомный вид в Android Studio, который отображает текущее время (GMT+3).</div>
                <div className='paragraph'>Стек: <b>Kotlin, Android Studio.</b></div>
              </p>
              <button onClick={handleButtonClickCustomView}>Перейти в Git</button>
            </div>
          </li>
          <li className='project-card'>
            <div className='laptop'>
              <img src='./img/laptop.png' alt='laptop'></img>
              <div className="video-container">
                <iframe src="./vid/timeZones.mp4" frameBorder="0" allowFullScreen title='shop'></iframe>
              </div>
            </div>
            <div className='description'>
              <h3>Android-application</h3>
              <p>
                <div className='paragraph'>Android-приложение/игра на тестирование памяти.</div>
                <div className='paragraph'>Стек: <b>Kotlin, Android Studio.</b></div>
              </p>
              <button onClick={handleButtonClickTimeZones}>Перейти в Git</button>
            </div>
          </li>
        </ul>
      </div>
    </main>
  )
}
