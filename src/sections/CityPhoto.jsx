import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext'
import { heart } from '../contains';

const CityPhoto = () => {
    const {images} = useContext(GlobalContext);
  return (
      <section className='photoSection item'>
        <h2>
            <img src={heart} />
            Activities in your area
            </h2>
        <div className='cityPhotos'>
        {images[0] && images[0].results.slice(0,4).map((image) => {
            return <img src={image.urls.thumb} />
        })}
        </div>
    </section>
  )
}

export default CityPhoto