import React, { useState } from 'react'
import './SliderGallery.scss'

const SliderGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const photos = [
    {
      url: './img/photos/photo_1.png',
      alt: 'Photo 1',
    },
    {
      url: './img/photos/photo_2.png',
      alt: 'Photo 2',
    },
    {
      url: './img/photos/photo_3.png',
      alt: 'Photo 3',
    },
    {
      url: './img/photos/photo_4.png',
      alt: 'Photo 4',
    },
    {
      url: './img/photos/photo_5.png',
      alt: 'Photo 5',
    },
    {
      url: './img/photos/photo_6.png',
      alt: 'Photo 6',
    },
  ]

  const nextSlide = () => {
    setCurrentIndex(currentIndex === photos.length - 1 ? 0 : currentIndex + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? photos.length - 1 : currentIndex - 1)
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
        {photos.map((photo, index) => (
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

export default SliderGallery
