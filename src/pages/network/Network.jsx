import './Network.scss'
import SliderNetwork from '../../components/slider/SliderNetwork'

function Network() {
  return (
    <div className="container">
      <div className="dialog-boxes-container">
        {/* Перший блок */}
        <div className="dialog-box dialog-box-1">
          <p className="text">
            До Мережі PNRM доєдналося понад 60 менеджерів із закладів вищої
            освіти та наукових установ, які представляють майже всі регіони
            України.
          </p>
        </div>

        {/* Другий блок */}
        <div className="dialog-box dialog-box-2">
          <p className="text">
            Щоб стати членом спільноти ознайомтесь із Статутом та заповніть
            форму
          </p>
        </div>

        {/* Третій блок */}
        <div className="dialog-box dialog-box-3">
          <p className="text">
            Після підтвердження член Мережі отримує підтвердження у вигляді
            сертифіката.{' '}
          </p>
        </div>
      </div>
      <div className="network__container">
        <SliderNetwork />
      </div>
    </div>
  )
}

export default Network
