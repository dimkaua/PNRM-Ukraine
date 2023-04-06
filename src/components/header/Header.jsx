import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React, { useState } from 'react'
import MainMenu from '../../pages/main/MainMenu'
import Eventing from '../../pages/eventing/Eventing'
import News from '../../pages/news/News'
import Network from '../../pages/network/Network'
import Blog from '../../pages/blog/Blog'
import Team from '../../pages/team/Team'
import './Header.scss'

function Header() {
  const [isLanguagePopupOpen, setLanguagePopupOpen] = useState(false)

  const toggleLanguagePopup = () => {
    setLanguagePopupOpen(!isLanguagePopupOpen)
  }

  return (
    <Router>
      <header>
        <div className="container">
          <div className="header">
            <div className="logo">
              <img
                width={93}
                height={94}
                src="./img/mini-logo.png"
                alt="logo"
              />
            </div>
            <nav className="header__menu">
              <ul>
                <li>
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    Головне меню
                  </Link>
                </li>
                <li>
                  <Link to="/eventing" style={{ textDecoration: 'none' }}>
                    Події
                  </Link>
                </li>
                <li>
                  <Link to="/news" style={{ textDecoration: 'none' }}>
                    Новини
                  </Link>
                </li>
                <li>
                  <Link to="/network" style={{ textDecoration: 'none' }}>
                    Наш нетворк
                  </Link>
                </li>
                <li>
                  <Link to="/blog" style={{ textDecoration: 'none' }}>
                    Блог менеджерів
                  </Link>
                </li>
                <li>
                  <Link to="/team" style={{ textDecoration: 'none' }}>
                    Команда
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="language-switcher">
              <button onClick={toggleLanguagePopup}>
                <img
                  width={80}
                  height={50}
                  src="./img/ua-language.png"
                  alt="language"
                />
                <img
                  width={40}
                  height={40}
                  src="./img/ua-arrow.png"
                  alt="language-arrow"
                />
              </button>
              {isLanguagePopupOpen && (
                <div className="language-popup">
                  <ul>
                    <li>Українська</li>
                    <li>English</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<MainMenu />} />
          <Route path="/eventing" element={<Eventing />} />
          <Route path="/news" element={<News />} />
          <Route path="/network" element={<Network />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </header>
    </Router>
  )
}

export default Header
