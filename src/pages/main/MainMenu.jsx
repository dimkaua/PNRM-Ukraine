import './MainMenu.scss'

function MainMenu() {
  return (
    <div className="container">
      <div className="banner-main">
        <img
          width={1200}
          height={600}
          src="./img/banner_ukr.png"
          alt="banner_ukr"
        />
      </div>
      <div className="mission">
        <div className="mission__title">
          <h2>Наша місія</h2>
        </div>
        <p>
          об'єднати менеджерів вищої освіти та науки з різних регіонів України з
          метою ефективної співпраці, реалізації освітнього та наукового
          потенціалу, налагодження взаємодії національних і міжнародних мереж.
        </p>
      </div>

      <div className="direction">
        <div className="direction__title">
          <h2>Наші напрямки</h2>
        </div>
        <div className="direction__items">
          <div className="direction__item">
            <div className="direction__icon">
              <img
                width={326}
                height={220}
                src="./img/categories_mini/Development of Manager.png"
                alt="#"
              />
              <span>
                Розвиток особистих
                <br />
                компетенцій менеджера
              </span>
            </div>
          </div>
          <div className="direction__item">
            <div className="direction__icon">
              <img
                width={240}
                height={219}
                src="./img/categories_mini/Grant Activities.png"
                alt="#"
              />
              <span>
                Грантова діяльність та
                <br />
                міжнародна мережа
              </span>
            </div>
          </div>
          <div className="direction__item">
            <div className="direction__icon">
              <img
                width={243}
                height={219}
                src="./img/categories_mini/Higher Education.png"
                alt="#"
              />
              <span>Вища освіта та дослідження</span>
            </div>
          </div>
          <div className="direction__item">
            <div className="direction__icon">
              <img
                width={283}
                height={219}
                src="./img/categories_mini/Innovation and Transfer.png"
                alt="#"
              />
              <span>
                Інновації та трансфер
                <br />
                технологій
              </span>
            </div>
          </div>
          <div className="direction__item">
            <div className="direction__icon">
              <img
                width={323}
                height={218}
                src="./img/categories_mini/Science Communication.png"
                alt="#"
              />
              <span>Наукова комунікація</span>
            </div>
          </div>
          <div className="direction__item">
            <div className="direction__icon">
              <img
                width={318}
                height={218}
                src="./img/categories_mini/Management of displacement.png"
                alt="#"
              />
              <span>
                Менеджмент переміщених
                <br />
                університетів
              </span>
            </div>
          </div>
          <div className="direction__subtitle">
            <p>
              <b>Запрошуємо долучитися</b> до команди освітян та науковців
              (незалежно від досвіду та посади):
              <br />
              які мають власні ідеї щодо розвитку сфери освіти та науки;
              <br /> бажання працювати задля зміцнення та реалізації
              освітньо-наукового потенціалу
              <br /> системи вищої освіти та науки України.
            </p>
          </div>
        </div>
      </div>
      <div className="social-media">
        <h2>PNRM у соціальних мережах</h2>
        <div className="social-media__icon">
          <img
            width={120}
            height={120}
            src="./img/social media/twitter.png"
            alt="#"
          />
          <img
            width={120}
            height={120}
            src="./img/social media/linkedin.png"
            alt="#"
          />
          <img
            width={120}
            height={120}
            src="./img/social media/e-mail.png"
            alt="#"
          />
        </div>
      </div>
      <div className="photogallery">
        <h2 className="photogallery__title">Фотогалерея</h2>
        <div className="photogallery__container">
          <div className="photogallery__image">
            <img
              className="photogallery__img"
              width={543}
              height={312}
              src="./img/photos/photo_1.png"
              alt="#"
            />
          </div>
          <div className="photogallery__image">
            <img
              className="photogallery__img"
              width={640}
              height={445}
              src="./img/photos/photo_2.png"
              alt="#"
            />
          </div>
          <div className="photogallery__image">
            <img
              className="photogallery__img"
              width={527}
              height={414}
              src="./img/photos/photo_3.png"
              alt="#"
            />
          </div>
          <div className="photogallery__image">
            <img
              className="photogallery__img"
              width={635}
              height={306}
              src="./img/photos/photo_4.png"
              alt="#"
            />
          </div>
          <div className="photogallery__image">
            <img
              className="photogallery__img"
              width={532}
              height={444}
              src="./img/photos/photo_5.png"
              alt="#"
            />
          </div>
          <div className="photogallery__image">
            <img
              className="photogallery__img"
              width={638}
              height={446}
              src="./img/photos/photo_6.png"
              alt="#"
            />
          </div>
        </div>
      </div>

      {/* <div className="photogallery">
        <h2>Фотогалерея</h2>
        <div className="photogallery__image">
          <img
            width={543}
            height={312}
            src="./img/photos/photo_1.png"
            alt="#"
          />
        </div>
        <div className="photogallery__image">
          <img
            width={640}
            height={445}
            src="./img/photos/photo_2.png"
            alt="#"
          />
        </div>
        <div className="photogallery__image">
          <img
            width={527}
            height={414}
            src="./img/photos/photo_3.png"
            alt="#"
          />
        </div>
        <div className="photogallery__image">
          <img
            width={635}
            height={306}
            src="./img/photos/photo_4.png"
            alt="#"
          />
        </div>
        <div className="photogallery__image">
          <img
            width={532}
            height={444}
            src="./img/photos/photo_5.png"
            alt="#"
          />
        </div>
        <div className="photogallery__image">
          <img
            width={638}
            height={446}
            src="./img/photos/photo_6.png"
            alt="#"
          />
        </div>
      </div> */}
    </div>
  )
}

export default MainMenu
