import React, { useState } from 'react'
import './Header.scss'

function Header() {
  const [isLanguagePopupOpen, setLanguagePopupOpen] = useState(false)

  const toggleLanguagePopup = () => {
    setLanguagePopupOpen(!isLanguagePopupOpen)
  }

  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="logo">
            <img width={93} height={94} src="./img/mini-logo.png" alt="logo" />
          </div>
          <nav className="header__menu">
            <ul>
              <li>Головне меню</li>
              <li>Події</li>
              <li>Новини</li>
              <li>Наш нетворк</li>
              <li>Блог менеджерів</li>
              <li>Команда</li>
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
    </header>
  )
}

export default Header
