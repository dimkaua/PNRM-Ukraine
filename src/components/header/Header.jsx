import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import MainMenu from '../../pages/main/MainMenu'
import Eventing from '../../pages/eventing/Eventing'
import News from '../../pages/news/News'
import Network from '../../pages/network/Network'
import Blog from '../../pages/blog/Blog'
import Team from '../../pages/team/Team'
import './Header.scss'

function Header() {
  const [isLanguagePopupOpen, setLanguagePopupOpen] = useState(false)
  const sortRef = useRef()

  const toggleLanguagePopup = () => {
    setLanguagePopupOpen(!isLanguagePopupOpen)
  }

  const handleOutsideClick = useCallback(
    (e) => {
      if (!sortRef.current.contains(e.target)) {
        setLanguagePopupOpen(false)
      }
    },
    [sortRef]
  )

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!sortRef.current.contains(e.target)) {
        setLanguagePopupOpen(false)
      }
    }

    document.body.addEventListener('click', handleOutsideClick)

    return () => {
      document.body.removeEventListener('click', handleOutsideClick)
    }
  }, [handleOutsideClick, sortRef])

  const pages = [
    { name: 'Головне меню', path: '/' },
    { name: 'Події', path: '/eventing' },
    { name: 'Новини', path: '/news' },
    { name: 'Наш нетворк', path: '/network' },
    { name: 'Блог менеджерів', path: '/blog' },
    { name: 'Команда', path: '/team' },
  ]

  // const [activeMenu, setActiveMenu] = useState(0)

  // const onSelectMenu = (index) => {
  //   setActiveMenu(index)
  // }

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
                {pages.map((page, index) => (
                  <li
                    key={index}
                    // onClick={() => onSelectMenu(index)}
                    // className={activeMenu === index ? 'active' : ''}
                  >
                    <Link to={page.path}>{page.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div ref={sortRef} className="language-switcher">
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
