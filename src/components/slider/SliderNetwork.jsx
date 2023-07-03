import React, { useState } from 'react'
import './SliderNetwork.scss'

const SliderNetwork = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const networkPhotos = [
    {
      url: './img/network/01.jpg',
      alt: '01',
    },
    {
      url: './img/network/02.jpg',
      alt: '02',
    },
    {
      url: './img/network/03.jpg',
      alt: '03',
    },
    {
      url: './img/network/04.jpg',
      alt: '04',
    },
    {
      url: './img/network/05.jpg',
      alt: '05',
    },
    {
      url: './img/network/06.jpg',
      alt: '06',
    },
    {
      url: './img/network/07.jpg',
      alt: '07',
    },
    {
      url: './img/network/08.jpg',
      alt: '08',
    },
    {
      url: './img/network/09.jpg',
      alt: '09',
    },
    {
      url: './img/network/10.jpg',
      alt: '10',
    },
    {
      url: './img/network/11.jpg',
      alt: '11',
    },
    {
      url: './img/network/12.jpg',
      alt: '12',
    },
    {
      url: './img/network/13.jpg',
      alt: '13',
    },
    {
      url: './img/network/14.jpg',
      alt: '14',
    },
    {
      url: './img/network/15.jpg',
      alt: '15',
    },
    {
      url: './img/network/16.jpg',
      alt: '16',
    },
    {
      url: './img/network/17.jpg',
      alt: '17',
    },
    {
      url: './img/network/18.jpg',
      alt: '18',
    },
    {
      url: './img/network/19.jpg',
      alt: '19',
    },
    {
      url: './img/network/20.jpg',
      alt: '20',
    },
    {
      url: './img/network/21.jpg',
      alt: '21',
    },
    {
      url: './img/network/22.jpg',
      alt: '22',
    },
    {
      url: './img/network/23.jpg',
      alt: '23',
    },
    {
      url: './img/network/24.jpg',
      alt: '24',
    },
    {
      url: './img/network/25.jpg',
      alt: '25',
    },
    {
      url: './img/network/26.jpg',
      alt: '26',
    },
    {
      url: './img/network/27.jpg',
      alt: '27',
    },
    {
      url: './img/network/28.jpg',
      alt: '28',
    },
  ]

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === networkPhotos.length - 1 ? 0 : currentIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? networkPhotos.length - 1 : currentIndex - 1
    )
  }

  const openPhoto = (photoUrl) => {
    window.open(photoUrl, '_blank', 'width=800,height=600')
  }

  return (
    <div className="slider">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {networkPhotos.map((photo, index) => (
          <div key={index} className="slide">
            <img
              src={photo.url}
              alt={photo.alt}
              onClick={() => openPhoto(photo.url)}
            />
          </div>
        ))}
      </div>
      <button className="slider-prev" onClick={prevSlide}>
        <img
          width={100}
          height={100}
          src="./img/network/arrow_left.png"
          alt="#"
        />
      </button>
      <button className="slider-next" onClick={nextSlide}>
        <img
          width={100}
          height={100}
          src="./img/network/arrow_right.png"
          alt="#"
        />
      </button>
    </div>
  )
}

export default SliderNetwork
